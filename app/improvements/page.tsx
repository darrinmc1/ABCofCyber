import type { Metadata } from "next"
import Link from "next/link"
import { pageMeta } from "@/lib/seo"
import { ArrowLeft } from "lucide-react"
import { ComingSoonList } from "@/components/coming-soon-list"

export const metadata: Metadata = pageMeta({
  title: "Waitlist",
  description: "Coming soon. Join the list.",
  path: "/improvements",
})

export default function ImprovementsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="border-b bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <ComingSoonList source="improvements-waitlist" />
          <div className="mt-8 flex justify-center">
            <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
