import { PrivacyPage } from "@/components/legal/privacy-content"
import { getSupportEmail } from "@/lib/support-email"

export default function Page() {
  return (
    <PrivacyPage
      siteName="ABC of Cyber"
      domain="abcsofcyber.com"
      companyName="TTPN Pty Ltd"
      supportEmail={getSupportEmail() ?? undefined}
    />
  )
}
