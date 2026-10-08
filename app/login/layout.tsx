import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = pageMeta({
  title: "Sign in",
  description: "Sign in to ABC of Cyber. MFA is encouraged. Sticky notes are not a control.",
  path: "/login",
})

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children
}
