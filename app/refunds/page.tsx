import type { Metadata } from "next"
import Link from "next/link"
import { pageMeta } from "@/lib/seo"
import { REFUND_POLICY } from "@/lib/refund-policy"
import { INTRO_PRICE_NOTE } from "@/lib/pricing"
import { getSupportEmail } from "@/lib/support-email"

export const metadata: Metadata = pageMeta({
  title: "Refunds",
  description: "How refunds and cancellation work for ABC of Cyber.",
  path: "/refunds",
})

export default function RefundsPage() {
  const email = getSupportEmail()

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Legal</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Refunds</h1>
          <p className="text-lg text-slate-600">Operated by TTPN Pty Ltd.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <p className="text-lg leading-8 text-slate-700">{REFUND_POLICY}</p>
        <p className="mt-6 text-slate-700">
          The plan is A$9/month inc GST. {INTRO_PRICE_NOTE} There is no lifetime price.
        </p>
        <p className="mt-6 text-slate-700">
          To ask about a refund, email{" "}
          <a href={`mailto:${email}`} className="text-blue-600 underline">
            {email}
          </a>{" "}
          or use the <Link href="/contact" className="text-blue-600 underline">contact form</Link>.
          The full terms are on the <Link href="/terms" className="text-blue-600 underline">terms page</Link>.
        </p>
      </div>
    </div>
  )
}
