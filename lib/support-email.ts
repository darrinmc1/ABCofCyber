/**
 * Public contact address.
 * Production may set NEXT_PUBLIC_CONTACT_EMAIL or NEXT_PUBLIC_SUPPORT_EMAIL.
 * Unset, blank, or an @example.com placeholder falls back to the role address
 * on this site's mail domain. Do not publish an ABN or a street address.
 */
export const FALLBACK_CONTACT_EMAIL = "admin@abcofcyber.com"

function cleanEmail(value: string | undefined): string | null {
  const email = value?.trim()
  if (!email || !email.includes("@")) return null
  if (email.toLowerCase().endsWith("@example.com")) return null
  return email
}

export function getSupportEmail(): string {
  return (
    cleanEmail(process.env.NEXT_PUBLIC_SUPPORT_EMAIL) ||
    cleanEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL) ||
    FALLBACK_CONTACT_EMAIL
  )
}
