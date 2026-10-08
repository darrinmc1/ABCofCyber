import Link from "next/link"
import { CheckCircle, ShieldCheck } from "lucide-react"
import { EmailCapture } from "@/components/email-capture"
import { MerchantOfRecordDisclosure } from "@/components/merchant-of-record-disclosure"
import { Button } from "@/components/ui/button"

const availableNow = [
  "Cybersecurity lessons and framework explainers",
  "What's the play scenario walkthrough",
  "Practical controls mapped across NIST, ISO 27001 and CIS",
  "Interactive tools and downloadable guidance",
  "No card required",
]

const inDevelopment = [
  "Expanded interactive tools",
  "Additional downloadable template packs",
  "More advanced training paths",
  "Paid access only after billing is live and tested",
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-16 text-center md:px-6">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700"><ShieldCheck className="h-6 w-6" /></div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Early access</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Use ABC of Cyber free while we finish the paid layer.</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">Checkout is not live, so there are no public paid plan prices yet. Explore the training and tools now, then join early access if you want to know when expanded access is ready.</p>
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
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700">In development</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Expanded access</h2>
            <ul className="mt-6 space-y-3">
              {inDevelopment.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />{item}</li>)}
            </ul>
            <Button asChild variant="outline" className="mt-8 w-full"><Link href="/whats-the-play">Try What&apos;s the play</Link></Button>
          </div>
        </div>
      </section>

      <section id="waitlist" className="border-t border-slate-200 bg-slate-50">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:px-6">
          <EmailCapture variant="hero" theme="dark" heading="Join early access" subheading="Leave your email and we will tell you when expanded access and checkout are actually ready." source="pricing-waitlist" showName />
          <MerchantOfRecordDisclosure className="mx-auto mt-6 max-w-xl text-center" />
        </div>
      </section>
    </main>
  )
}
