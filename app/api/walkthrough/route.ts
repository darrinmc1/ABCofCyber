import { NextRequest, NextResponse } from "next/server"
import {
  archiveContextBlock,
  buildArchiveWalkthrough,
  mergeModelWalkthrough,
  normalizeScenario,
  type WalkthroughResult,
} from "@/lib/archive"

const GEMINI_API_KEY = process.env.GOOGLE_API_KEY
const N8N_WEBHOOK = process.env.N8N_AI_WEBHOOK_URL
const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

const SYSTEM_PROMPT = `You are the ABC of Cyber walkthrough writer. One job: take a pasted "is this phishing / what's the play" scenario and write a calm, plain-English walkthrough using the ABC method (Assess the ask, Break down the play, Choose the next move).

Rules:
- Education only. Not legal advice, not a verdict, not scare tactics.
- Do not claim the user is "hacked," "compromised," or that a crime occurred.
- Do not invent lessons, URLs, or frameworks. Cite only the provided archive ids.
- Do not help write phishing, malware, exploits, or social-engineering lures. If the user asked for that, say so in "play" and keep choose/doNot educational.
- Voice: dry, specific, slightly unhinged in the ABC of Cyber way. No "military-grade," no fake urgency.
- Return JSON only, no markdown fences.

JSON shape:
{
  "play": "short name of the tactic",
  "assess": "A — Assess the ask",
  "breakDown": "B — Break down the play",
  "choose": ["C — next moves"],
  "redFlags": ["..."],
  "doNot": ["..."],
  "doInstead": ["..."],
  "citationIds": ["phishing-awareness"]
}`

function extractJson(text: string): Record<string, unknown> | null {
  const trimmed = text.trim()
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/)
  const raw = fenced?.[1] ?? trimmed
  const start = raw.indexOf("{")
  const end = raw.lastIndexOf("}")
  if (start === -1 || end === -1) return null
  try {
    return JSON.parse(raw.slice(start, end + 1)) as Record<string, unknown>
  } catch {
    return null
  }
}

async function draftWithModel(scenario: string, archive: WalkthroughResult): Promise<WalkthroughResult | null> {
  const prompt = `${SYSTEM_PROMPT}

${archiveContextBlock(archive)}

Scenario:
${scenario}

Write the walkthrough JSON now.`

  if (N8N_WEBHOOK) {
    const res = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "free",
        docName: "whats-the-play",
        prompt,
        answers: { scenario },
      }),
    })
    if (!res.ok) return null
    const data = await res.json()
    const text = typeof data?.draft === "string" ? data.draft : typeof data?.content === "string" ? data.content : ""
    const parsed = text ? extractJson(text) : null
    return parsed ? mergeModelWalkthrough(archive, parsed) : null
  }

  if (!GEMINI_API_KEY) return null

  const geminiResponse = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.35,
        maxOutputTokens: 2048,
        topP: 0.9,
        responseMimeType: "application/json",
      },
    }),
  })

  if (!geminiResponse.ok) return null
  const geminiData = await geminiResponse.json()
  const generatedText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text
  if (typeof generatedText !== "string") return null
  const parsed = extractJson(generatedText)
  return parsed ? mergeModelWalkthrough(archive, parsed) : null
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null)
    const normalized = normalizeScenario(body?.scenario)
    if (!normalized.ok) {
      return NextResponse.json({ error: normalized.error }, { status: normalized.status })
    }

    const archive = buildArchiveWalkthrough(normalized.text)
    const aiAvailable = Boolean(N8N_WEBHOOK || GEMINI_API_KEY)

    if (!aiAvailable) {
      return NextResponse.json({
        ...archive,
        source: "archive",
        aiAvailable: false,
        notice:
          "Walkthrough from the lesson archive. No model key is configured, so the prose is the canned ABC method — citations are still the real lessons.",
      })
    }

    try {
      const drafted = await draftWithModel(normalized.text, archive)
      if (drafted) {
        return NextResponse.json({ ...drafted, aiAvailable: true })
      }
    } catch (error) {
      console.error("Walkthrough model error:", error)
    }

    return NextResponse.json({
      ...archive,
      source: "archive",
      aiAvailable: true,
      notice:
        "The model did not return a usable draft, so you are seeing the archive walkthrough. The citations are still from live lessons.",
    })
  } catch (error) {
    console.error("Walkthrough API error:", error)
    return NextResponse.json({ error: "Could not build a walkthrough. Try again with less noise in the paste." }, { status: 500 })
  }
}
