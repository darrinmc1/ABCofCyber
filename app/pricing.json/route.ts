import { NextResponse } from "next/server"
import { SITE_URL } from "@/lib/site"

export function GET() {
  return NextResponse.json(
    {
      product: "ABC of Cyber",
      status: "coming-soon",
      signup: `${SITE_URL}/pricing`,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    },
  )
}
