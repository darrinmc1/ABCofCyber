import type { Metadata } from "next"
import { SignIn } from "@clerk/nextjs"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = pageMeta({
  title: "Sign in",
  description: "Sign in with your ABC of Cyber account.",
  path: "/sign-in",
})

export default function SignInPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center py-12">
      <SignIn />
    </div>
  )
}
