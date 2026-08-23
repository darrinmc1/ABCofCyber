import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Wrench, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import EmailCapture from "@/components/email-capture"
import FeatureSection from "@/components/feature-section"
import FrameworksSection from "@/components/frameworks-section"

const testimonials = [
  {
    quote:
      "ABC of Cyber helped us go from zero security documentation to a working program in weeks. The frameworks are practical and our whole team actually understands them.",
    name: "Sarah M.",
    title: "Operations Director",
    company: "Fintech Startup, 45 employees",
  },
  {
    quote:
      "We passed our SOC 2 audit on the first attempt. The incident response templates and risk management guides saved us months of work and thousands in consulting fees.",
    name: "James T.",
    title: "CTO",
    company: "SaaS Platform, 120 employees",
  },
  {
    quote:
      "Finally, security guidance that doesn't require a PhD to understand. Our non-technical staff completed the phishing awareness training and actually retained it.",
    name: "Priya K.",
    title: "IT Manager",
    company: "Healthcare Services, 200 employees",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Cybersecurity made practical
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Stop guessing. Start securing.
          </h1>
          <p className="text-xl leading-8 text-slate-600">
            ABC of Cyber gives your team the frameworks, tools, and plain-language guidance to build a real security
            program — without the jargon, the theater, or the six-figure consulting bill.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Link href="/get-started">
                Get started free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/frameworks">Browse frameworks</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-2">Trusted by teams</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Security programs that actually work
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl mx-auto">
              Real teams use ABC of Cyber to build security programs their people understand and follow.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border border-slate-200 bg-white shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 leading-relaxed text-sm">&ldquo;{t.quote}&rdquo;</p>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.title}</p>
                    <p className="text-xs text-blue-700 font-medium mt-0.5">{t.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <FeatureSection />

      {/* Frameworks */}
      <FrameworksSection />

      {/* Quick links */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-2">Explore</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Everything you need</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader>
              <Shield className="h-8 w-8 text-blue-700 mb-2" />
              <CardTitle>Security Frameworks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-600">
                NIST CSF, ISO 27001, CIS Controls, and more — mapped to your actual risk, not a generic checklist.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/frameworks">
                  View frameworks <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-blue-700 mb-2" />
              <CardTitle>Learning Library</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-600">
                Plain-language guides on phishing, passwords, network security, and zero trust — for every skill level.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/learn">
                  Start learning <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader>
              <Wrench className="h-8 w-8 text-blue-700 mb-2" />
              <CardTitle>Security Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-600">
                Practical tools to assess your posture, generate policies, and get actionable recommendations fast.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/tools">
                  Explore tools <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Email capture */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <EmailCapture />
        </div>
      </section>
    </main>
  )
}
