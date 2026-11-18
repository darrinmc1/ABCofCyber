import type { Metadata } from "next"
import Link from "next/link"
import { pageMeta } from "@/lib/seo"
import { CheckCircle, ShieldCheck } from "lucide-react"
import PricingCards from "@/components/pricing-cards"
import { Button } from "@/components/ui/button"
import { FREE_ACCOUNT_CTA } from "@/lib/pricing"

export const metadata: Metadata = pageMeta({
  title: "Pricing",
  description: "Free lessons, the walkthrough, and framework notes. Plan A$9/month inc GST, A$5 first month. Collections about A$9–19 one-off.",
  path: "/pricing",
})

const availableNow = [
  "Cybersecurity lessons and framework explainers",
  "What's the play scenario walkthrough",
  "Practical controls mapped across NIST, ISO 27001 and CIS",
  "Interactive tools. Template packs are listed with the collections",
  "No card required",
]

const inDevelopment = [
  "Expanded interactive tools",
  "Additional downloadable template packs",
  "More advanced training paths",
  "Plan A$9/month inc GST after the A$5 first month",
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-16 text-center md:px-6">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700"><ShieldCheck className="h-6 w-6" /></div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Pricing</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">One price map. No card on this page.</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">The plan is A$9/month inc GST. Create a free account with your email and the first month is A$5. After that it renews at A$9/month. Cancel anytime. Collections are about A$9–19, once.</p>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">Available now</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Free training and practical tools</h2>
            <ul className="mt-6 space-y-3">
              {availableNow.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{item}</li>)}
            </ul>
            <Button asChild className="mt-8 w-full"><Link href="/learn">Browse free lessons</Link></Button>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700">When billing opens</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">The paid layer, at the price map below</h2>
            <ul className="mt-6 space-y-3">
              {inDevelopment.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />{item}</li>)}
            </ul>
            <Button asChild variant="outline" className="mt-8 w-full"><Link href={FREE_ACCOUNT_CTA.href}>{FREE_ACCOUNT_CTA.label}</Link></Button>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6">
          <PricingCards />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="container mx-auto max-w-3xl px-4 py-16 text-center md:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Hold the A$5 first month</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">Create a free account with your email. That is the whole step. There is no checkout button because there is no checkout.</p>
          <Button asChild className="mt-6"><Link href={FREE_ACCOUNT_CTA.href}>{FREE_ACCOUNT_CTA.label}</Link></Button>
        </div>
      </section>
    </main>
  )
}
