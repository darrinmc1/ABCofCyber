import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Wrench, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import EmailCapture from "@/components/email-capture"
import FeatureSection from "@/components/feature-section"
import FrameworksSection from "@/components/frameworks-section"

const testimonials = [
  {
    quote: "ABC of Cyber helped us go from zero security posture to a real, working program in weeks — not months of consultant-speak.",
    author: "Sarah M.",
    role: "IT Director",
    company: "Meridian Financial Group",
  },
  {
    quote: "Finally, security guidance that doesn't require a PhD to understand. Our whole team actually reads it.",
    author: "James T.",
    role: "Operations Lead",
    company: "Brightpath Logistics",
  },
  {
    quote: "We used the frameworks to pass our first SOC 2 audit. The practical approach made all the difference.",
    author: "Priya K.",
    role: "CTO",
    company: "Stackline SaaS",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Cybersecurity made practical</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Security that actually works for your team
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            ABC of Cyber gives you the frameworks, tools, and plain-language guidance to build a real security program — without the jargon, theater, or six-figure consulting bill.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Link href="/get-started">
                Get started free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/frameworks">Explore frameworks</Link>
            </Button>
          </div>

          {/* Testimonials */}
          <div className="pt-8 grid gap-4 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.company}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm leading-6 text-slate-600 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureSection />
      <FrameworksSection />

      {/* Learn section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Learn</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Build your security knowledge</h2>
            <p className="mt-3 text-slate-600">Practical guides written for humans, not compliance auditors.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Phishing Awareness", href: "/learn/phishing-awareness", desc: "Spot and stop phishing attacks before they cause damage." },
              { title: "Password Security", href: "/learn/password-security", desc: "Build credential hygiene that actually sticks across your team." },
              { title: "Incident Response Basics", href: "/learn/incident-response-basics", desc: "Know exactly what to do when something goes wrong." },
            ].map((item) => (
              <Card key={item.href} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-slate-600">{item.desc}</p>
                  <Link href={item.href} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900">
                    Read guide <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/learn">View all guides <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <EmailCapture />
    </main>
  )
}
