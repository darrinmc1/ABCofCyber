import type { Metadata } from "next"
import { ComingSoonList } from "@/components/coming-soon-list"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = pageMeta({
  title: "Coming soon",
  description: "Coming soon. Join the list.",
  path: "/pricing",
})

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-3xl px-4 py-16 md:px-6">
        <ComingSoonList source="pricing-coming-soon" />
      </section>
    </main>
  )
}
