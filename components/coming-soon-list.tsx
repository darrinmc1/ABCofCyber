"use client"

import { EmailCapture } from "@/components/email-capture"

export function ComingSoonList({
  source = "pricing-coming-soon",
  variant = "hero",
}: {
  source?: string
  variant?: "inline" | "hero"
}) {
  return (
    <EmailCapture
      variant={variant}
      theme="dark"
      tone="neutral"
      heading="Coming soon"
      subheading="Join the list."
      source={source}
    />
  )
}
