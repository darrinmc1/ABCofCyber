import type { Metadata } from "next"
import Link from "next/link"
import { pageMeta } from "@/lib/seo"
import { ArrowLeft } from "lucide-react"
import { FREE_ACCOUNT_CTA, INTRO_PRICE_NOTE } from "@/lib/pricing"

export const metadata: Metadata = pageMeta({
  title: "Pricing note",
  description: "The ABC of Cyber price map. A$9/month inc GST, A$5 first month, collections about A$9–19.",
  path: "/improvements",
})

export default function ImprovementsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="border-b bg-white py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h1 className="mb-3 text-3xl font-bold tracking-tight">Same price as the pricing page</h1>
          <p className="mx-auto mb-4 max-w-lg text-lg text-slate-600">
            The plan is A$9/month inc GST. The first month is A$5 when you create a free account with your email.
            Collections are about A$9–19, once.
          </p>
          <p className="mx-auto mb-8 max-w-lg text-slate-600">{INTRO_PRICE_NOTE} There is no checkout on this page.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <Link href={FREE_ACCOUNT_CTA.href} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              {FREE_ACCOUNT_CTA.label}
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              See the price map
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
