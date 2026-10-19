import type { Metadata } from "next"
import { TermsPage } from "@/components/legal/terms-content"
import { pageMeta } from "@/lib/seo"
import { getSupportEmail } from "@/lib/support-email"

export const metadata: Metadata = pageMeta({
  title: "Terms of Service",
  description: "The rules for using ABC of Cyber, written in sentences a person can finish.",
  path: "/terms",
})

export default function Page() {
  return (
    <TermsPage
      siteName="ABC of Cyber"
      domain="abcofcyber.com"
      companyName="TTPN Pty Ltd"
      supportEmail={getSupportEmail() ?? undefined}
    />
  )
}
