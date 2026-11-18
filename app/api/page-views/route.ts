import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { recordPageView } from "@/lib/page-views"

export async function POST(request: Request) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: "Please sign in" }, { status: 401 })
  }

  const body = await request.json().catch(() => ({}))
  const path = typeof body.path === "string" ? body.path.trim() : ""
  if (!path.startsWith("/") || path.startsWith("//") || path.length > 300 || path.includes("?")) {
    return NextResponse.json({ error: "That path is not one we record" }, { status: 400 })
  }

  await recordPageView(userId, path)
  return NextResponse.json({ ok: true })
}
