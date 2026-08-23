import Link from "next/link"
import { ArrowRight, Shield, Users, Globe, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    quote: "ABC of Cyber turned our compliance checkbox into an actual security program. Our team finally understands why we do what we do.",
    name: "Sarah M.",
    role: "Head of IT, Brightfield Logistics",
  },
  {
    quote: "We went from zero incident response plan to a tested playbook in weeks. Clear, practical, no fluff.",
    name: "James T.",
    role: "CTO, Vantara Health",
  },
  {
    quote: "Finally, security guidance that doesn't require a PhD to understand. Our whole team is on board now.",
    name: "Priya K.",
    role: "Operations Director, Nexlane Financial",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Cybersecurity Made Practical</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Stop calling luck a security strategy
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            ABC of Cyber helps teams build real security programs — ones that work in practice, not just in the deck you show the board.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/get-started">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/learn">
              <Button size="lg" variant="outline">
                Explore Resources
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <p className="text-slate-700 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
