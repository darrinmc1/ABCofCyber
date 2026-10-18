import { TermsPage } from "@/components/legal/terms-content"
import { getSupportEmail } from "@/lib/support-email"

export default function Page() {
  return (
    <TermsPage
      siteName="ABC of Cyber"
      domain="abcsofcyber.com"
      companyName="TTPN Pty Ltd"
      supportEmail={getSupportEmail() ?? undefined}
    />
  )
}
