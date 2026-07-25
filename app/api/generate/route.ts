import { NextRequest, NextResponse } from "next/server"

const GEMINI_API_KEY = process.env.GOOGLE_API_KEY
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

interface GenerateRequest {
  tool: string
  answers: Record<string, string>
}

const SYSTEM_PROMPTS: Record<string, string> = {
  "security-policy":
    "You are a cybersecurity policy expert. Based on the answers provided, generate a comprehensive, professional security policy document. " +
    "Include sections for: Purpose, Scope, Policy Statements, Enforcement, and Review. Use clear, actionable language. " +
    "Format the output in well-structured markdown with headings, bullet points, and emphasis where appropriate.",

  "risk-assessment":
    "You are a cybersecurity risk assessment specialist. Based on the answers provided, produce a structured risk evaluation report. " +
    "Include: Asset Inventory, Threat Identification, Vulnerability Assessment, Risk Scoring (Likelihood × Impact), " +
    "Recommended Controls, and Residual Risk. Use a professional, analytical tone. " +
    "Format the output in well-structured markdown.",

  "incident-response":
    "You are an incident response planning expert. Based on the answers provided, generate a comprehensive Incident Response Plan framework. " +
    "Include: Preparation, Detection & Analysis, Containment & Eradication, Recovery, and Post-Incident Activity phases. " +
    "Tailor the plan to the organization context provided. " +
    "Format the output in well-structured markdown with clear sections and action items.",
}

export async function POST(request: NextRequest) {
  try {
    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "GOOGLE_API_KEY not configured on the server." },
        { status: 500 },
      )
    }

    const body: GenerateRequest = await request.json()
    const { tool, answers } = body

    if (!tool || !answers) {
      return NextResponse.json(
        { error: "Missing required fields: tool, answers" },
        { status: 400 },
      )
    }

    const systemPrompt =
      SYSTEM_PROMPTS[tool] ||
      "You are a cybersecurity expert. Generate a professional document based on the answers provided."

    const answersFormatted = Object.entries(answers)
      .map(([key, value]) => `**${key}:** ${value}`)
      .join("\n")

    const prompt = `${systemPrompt}\n\nGenerate the document based on these inputs:\n\n${answersFormatted}\n\nProduce the complete document now.`

    const geminiResponse = await fetch(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 8192,
            topP: 0.95,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_ONLY_HIGH",
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_ONLY_HIGH",
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_ONLY_HIGH",
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_ONLY_HIGH",
            },
          ],
        }),
      },
    )

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text()
      console.error("Gemini API error:", geminiResponse.status, errorText)
      return NextResponse.json(
        { error: `Gemini API returned status ${geminiResponse.status}` },
        { status: 502 },
      )
    }

    const geminiData = await geminiResponse.json()

    const generatedText =
      geminiData?.candidates?.[0]?.content?.parts?.[0]?.text

    if (!generatedText) {
      console.error("Unexpected Gemini response:", JSON.stringify(geminiData))
      return NextResponse.json(
        { error: "Gemini returned an empty response." },
        { status: 502 },
      )
    }

    return NextResponse.json({ content: generatedText })
  } catch (error) {
    console.error("Generate API error:", error)
    return NextResponse.json(
      { error: "Internal server error generating document." },
      { status: 500 },
    )
  }
}
