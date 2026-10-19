import type { Metadata } from "next"
import { SignUp } from "@clerk/nextjs"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = pageMeta({
  title: "Create an account",
  description: "Create your ABC of Cyber account.",
  path: "/sign-up",
})

export default function SignUpPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center py-12">
      <SignUp />
    </div>
  )
}
