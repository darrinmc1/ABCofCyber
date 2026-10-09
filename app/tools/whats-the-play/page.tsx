import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = pageMeta({
  title: "What's the play",
  description: "Real situations and a concrete next step. The suspicious invoice, the Friday CVE, the account that stayed open.",
  path: "/whats-the-play",
})

export default function ToolsWhatsThePlayRedirect() {
  redirect("/whats-the-play")
}
