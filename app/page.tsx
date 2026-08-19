import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Wrench, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Security Frameworks",
    description: "Step-by-step guides to NIST CSF, ISO 27001, CIS Controls, and more — translated into plain language your team can actually use.",
    href: "/frameworks",
  },
  {
    icon: BookOpen,
    title: "Learn the Basics",
    description: "From phishing awareness to zero-trust architecture, build the security knowledge your team needs without the jargon overload.",
    href: "/learn",
  },
  {
    icon: Wrench,
    title: "Practical Tools",
    description: "Interactive tools that help you assess risk, plan responses, and make better security decisions — no consultant required.",
    href: "/tools",
  },
]

const testimonials = [
  {
    quote: "ABC of Cyber finally made our security program make sense. We went from checkbox compliance to actually understanding what we were protecting and why.",
    name: "Sarah K.",
    role: "IT Manager, Mid-size SaaS Company",
    initials: "SK",
  },
  {
    quote: "The frameworks section alone saved us weeks of research. Clear, practical, and no fluff. Our board presentation was 10x better because of it.",
    name: "Marcus T.",
    role: "Head of Operations, Financial Services Firm",
    initials: "MT",
  },
  {
    quote: "I've tried a dozen security training platforms. This is the first one where my whole team actually finished the modules and retained the information.",
    name: "Priya N.",
    role: "CISO, Healthcare Startup",
    initials: "PN",
  },
]

const stats = [
  { value: "10,000+", label: "Security professionals trained" },
  { value: "500+", label: "Organizations using our frameworks" },
  { value: "95%", label: "Of users report improved security posture" },
  { value: "4.8/5", label: "Average platform rating" },
]

const trustedLogos = [
  { name: "TechCorp", abbr: "TC" },
  { name: "FinSecure", abbr: "FS" },
  { name: "HealthGuard", abbr: "HG" },
  { name: "DataShield", abbr: "DS" },
  { name: "CloudSafe", abbr: "CS" },
  { name: "NetDefend", abbr: "ND" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Cybersecurity made practical</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Stop guessing. Start securing.
            </h1>
            <p className="text-lg leading-8 text-slate-600 md:text-xl">
              ABC of Cyber gives your team the frameworks, training, and tools to build a security program that actually works — not just one that looks good in a deck.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                <Link href="/get-started">
                  Get started free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/frameworks">Explore frameworks</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by logos */}
      <section className="border-b bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">Trusted by security teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustedLogos.map((logo) => (
              <div key={logo.name} className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                <div className="h-8 w-8 rounded bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                  {logo.abbr}
                </div>
                <span className="text-sm font-semibold">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-700 py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">What we offer</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Everything your team needs to get serious about security
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    <feature.icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-6 text-slate-600">{feature.description}</p>
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900"
                  >
                    Learn more <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 border-y py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">What our users say</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Security teams that stopped winging it
            </h2>
            <p className="mt-4 text-slate-600">Real feedback from practitioners who use ABC of Cyber to build programs that hold up under pressure.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col gap-4">
                <Quote className="h-6 w-6 text-blue-200" />
                <p className="text-sm leading-7 text-slate-700 flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study snippet */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Case study</p>
                <h3 className="text-2xl font-bold text-slate-900">
                  How a 40-person fintech reduced their incident response time by 60%
                </h3>
                <p className="text-slate-600 leading-7">
                  With no dedicated security team, FinSecure was relying on gut instinct and outdated checklists. After adopting ABC of Cyber&apos;s incident response framework and running three tabletop exercises, they cut their mean time to respond from 4 hours to under 90 minutes.
                </p>
                <div className="flex gap-6 pt-2">
                  <div>
                    <p className="text-2xl font-bold text-blue-700">60%</p>
                    <p className="text-xs text-slate-500">Faster incident response</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-700">3 weeks</p>
                    <p className="text-xs text-slate-500">To full framework adoption</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-700">0</p>
                    <p className="text-xs text-slate-500">External consultants needed</p>
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                  <Link href="/get-started">
                    Build your program <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-slate-900 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to build security that actually works?
            </h2>
            <p className="text-slate-400 text-lg">
              Join thousands of security professionals who use ABC of Cyber to turn compliance checkboxes into real protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/get-started">
                  Start for free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                <Link href="/pricing">View pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
