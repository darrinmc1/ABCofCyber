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
      "ABC of Cyber helped us go from zero security documentation to a fully operational incident response plan in weeks. The frameworks are practical and our team actually uses them.",
    name: "Sarah M.",
    role: "IT Director, Regional Healthcare Group",
    initials: "SM",
  },
  {
    quote:
      "Finally, security guidance that doesn't require a PhD to understand. We cut our phishing click rate by 60% after working through the awareness modules with our staff.",
    name: "James T.",
    role: "Operations Manager, Financial Services Firm",
    initials: "JT",
  },
  {
    quote:
      "The tools and frameworks gave our small team the confidence to have real security conversations with our board. Worth every minute we invested.",
    name: "Priya K.",
    role: "CTO, SaaS Startup (Series A)",
    initials: "PK",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Cybersecurity made practical
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Stop treating luck as your security strategy
            </h1>
            <p className="mb-8 text-lg leading-8 text-slate-600">
              ABC of Cyber gives your team the frameworks, tools, and knowledge to build a real security program —
              without the jargon, theater, or six-figure consulting bills.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                <Link href="/get-started">
                  Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/frameworks">Explore Frameworks</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Trusted by teams</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Real results from real security programs
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-7 text-slate-600">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
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
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Where do you want to start?</h2>
            <p className="mt-3 text-slate-600">Pick the area that matters most to your team right now.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-700 mb-2" />
                <CardTitle className="text-lg">Security Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  NIST, ISO 27001, CIS Controls — mapped to your actual risk, not a generic checklist.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/frameworks">
                    Explore Frameworks <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-700 mb-2" />
                <CardTitle className="text-lg">Learn Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Phishing, passwords, social engineering — practical modules your whole team can use.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/learn">
                    Start Learning <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <Wrench className="h-8 w-8 text-blue-700 mb-2" />
                <CardTitle className="text-lg">Security Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Free tools to assess, plan, and improve your security posture without the enterprise price tag.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/tools">
                    View Tools <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Email capture */}
      <EmailCapture />
    </main>
  )
}
