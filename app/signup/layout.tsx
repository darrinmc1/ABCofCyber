import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = pageMeta({
  title: "Create an account",
  description: "Create an ABC of Cyber account and start the lessons. The pet-name password can retire.",
  path: "/signup",
})

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children
}
