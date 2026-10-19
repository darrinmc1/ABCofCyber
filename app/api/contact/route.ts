import { NextRequest, NextResponse } from "next/server"
import { sendHqContact } from "@/lib/hq-contact"

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const rateLimit = new Map<string, { count: number; reset: number }>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5

function rateLimited(ip: string) {
  const now = Date.now()
  const entry = rateLimit.get(ip)
  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > MAX_PER_WINDOW
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Slow down. One message at a time is plenty." },
      { status: 429 },
    )
  }

  const body = await req.json().catch(() => ({}))
  const { name, email, message, website } = body as {
    name?: string
    email?: string
    message?: string
    website?: string
  }

  if (website && website !== "") {
    return NextResponse.json({ ok: true })
  }

  const cleanName = (name ?? "").trim()
  const cleanEmail = (email ?? "").trim()
  const cleanMessage = (message ?? "").trim()

  if (!cleanName || cleanName.length > 120 || !emailRe.test(cleanEmail) || !cleanMessage || cleanMessage.length > 5000) {
    return NextResponse.json(
      { error: "Name, a real email, and a message. All three. Still fewer fields than a vendor questionnaire." },
      { status: 400 },
    )
  }

  const sent = await sendHqContact({
    name: cleanName,
    email: cleanEmail,
    message: cleanMessage,
  })

  if (!sent) {
    return NextResponse.json(
      { error: "That did not go through. Try again in a minute." },
      { status: 502 },
    )
  }

  return NextResponse.json({
    ok: true,
    message: "Got it. A person will read this.",
  })
}
