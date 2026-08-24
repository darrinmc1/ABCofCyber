import Link from "next/link"
import { Construction, ArrowLeft } from "lucide-react"
import { EmailCapture } from "@/components/email-capture"

export default function ImprovementsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="border-b bg-white py-16 text-center">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-blue-100 p-4">
              <Construction className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-3">We&apos;re Building Something Better</h1>
          <p className="text-slate-600 max-w-lg mx-auto mb-8 text-lg">
            Checkout is not live. The training price map is Free, Early Adopter{" "}
            <strong className="text-blue-600">$5/month locked forever</strong>, and Pro $10/month.
            Join the waitlist and we will email you when billing launches.
          </p>
          <div className="mx-auto mb-8 max-w-xl text-left">
            <EmailCapture
              variant="inline"
              theme="dark"
              heading="Join the waitlist"
              subheading="Same planned SKUs as /pricing. No new packages, and no checkout until billing is live."
              source="improvements-waitlist"
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              See the price map
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
