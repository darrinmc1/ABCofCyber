import { CookiesPage } from "@/components/legal/cookies-content"
import { getSupportEmail } from "@/lib/support-email"

export default function Page() {
  return (
    <CookiesPage
      siteName="ABC of Cyber"
      domain="abcsofcyber.com"
      supportEmail={getSupportEmail() ?? undefined}
    />
  )
}
