import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Wrench, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Security Frameworks",
    description: "Practical guides to NIST, ISO 27001, CIS Controls, and more — explained without the consultant markup.",
    href: "/frameworks",
  },
  {
    icon: BookOpen,
    title: "Learn the Basics",
    description: "From phishing awareness to zero-trust architecture, build real security knowledge your team will actually use.",
    href: "/learn",
  },
  {
    icon: Wrench,
    title: "Practical Tools",
    description: "Assessments, walkthroughs, and decision tools that help you figure out what to do next — not just what sounds scary.",
    href: "/tools",
  },
]

const testimonials = [
  {
    quote: "ABC of Cyber helped us go from zero documentation to a working incident response plan in under two weeks. The frameworks are actually readable by humans.",
    name: "Sarah K.",
    role: "IT Manager, Regional Healthcare Group",
    rating: 5,
  },
  {
    quote: "We used the NIST CSF walkthrough to prep for our first security audit. Our auditor was genuinely impressed. I can't say that about most free resources.",
    name: "Marcus T.",
    role: "CTO, SaaS Startup",
    rating: 5,
  },
  {
    quote: "Finally, security content that doesn't assume I have a 10-person security team or a six-figure budget. Practical, clear, and actually useful.",
    name: "Priya N.",
    role: "Operations Lead, E-commerce Brand",
    rating: 5,
  },
]

const trustedBy = [
  "Healthcare Clinics",
  "SaaS Startups",
  "Law Firms",
  "Nonprofits",
  "E-commerce Brands",
  "Financial Advisors",
]

const stats = [
  { value: "10,000+", label: "Security assessments completed" },
  { value: "500+", label: "Teams using our frameworks" },
  { value: "4.9/5", label: "Average user satisfaction" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-20 md:px-6">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Cybersecurity made practical</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Stop guessing. Start securing.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              ABC of Cyber gives small and mid-sized teams the frameworks, tools, and plain-language guidance to build
              security programs that actually work — without the enterprise price tag or the consultant jargon.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
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
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b bg-blue-700">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Everything you need to build real security</h2>
          <p className="mt-3 text-slate-600">Practical resources built for teams without a dedicated security department.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="group border-slate-200 transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  <feature.icon className="h-5 w-5 text-blue-700" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm leading-6 text-slate-600">{feature.description}</p>
                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  Explore <ChevronRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-y bg-slate-50">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Trusted by teams across industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {trustedBy.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">What people are saying</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Real teams. Real security improvements.
          </h2>
          <p className="mt-3 text-slate-600">
            We measure success by whether your security posture actually improves — not by how many PDFs you download.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-slate-200 bg-slate-50">
              <CardContent className="pt-6">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="mb-2 h-5 w-5 text-blue-200" />
                <p className="mb-4 text-sm leading-6 text-slate-700">{t.quote}</p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-slate-900">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Ready to build security that actually works?</h2>
            <p className="mt-4 text-slate-400">
              Join thousands of teams using ABC of Cyber to move from reactive to proactive security — without the
              enterprise overhead.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/get-started">
                  Start for free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                <Link href="/pricing">View pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
