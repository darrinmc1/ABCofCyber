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
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 py-12">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-slate-900">Create a free account</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Email is enough. No card. The A$5 first month is for this account, then the plan renews at A$9/month if you take it. Cancel anytime.
        </p>
      </div>
      <SignUp />
    </div>
  )
}
