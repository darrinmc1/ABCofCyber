import type { Metadata } from "next"
import { CookiesPage } from "@/components/legal/cookies-content"
import { pageMeta } from "@/lib/seo"
import { getSupportEmail } from "@/lib/support-email"

export const metadata: Metadata = pageMeta({
  title: "Cookie Policy",
  description: "Which cookies ABC of Cyber uses, and how to tell your browser to refuse them.",
  path: "/cookies",
})

export default function Page() {
  return (
    <CookiesPage
      siteName="ABC of Cyber"
      domain="abcofcyber.com"
      supportEmail={getSupportEmail() ?? undefined}
    />
  )
}
