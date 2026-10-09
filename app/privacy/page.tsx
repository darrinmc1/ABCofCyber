import type { Metadata } from "next"
import { PrivacyPage } from "@/components/legal/privacy-content"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: "How ABC of Cyber collects, uses, and protects personal information.",
  path: "/privacy",
})

export default function Page() {
  return (
    <PrivacyPage
      siteName="ABC of Cyber"
      domain="abcofcyber.com"
    />
  )
}
