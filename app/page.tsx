import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Wrench, BarChart2, Bell, Users, CheckCircle, Zap, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FeatureSection from "@/components/feature-section"
import FrameworksSection from "@/components/frameworks-section"
import EmailCapture from "@/components/email-capture"

const features = [
  {
    icon: BookOpen,
    title: "Structured Learning Paths",
    description: "Step-by-step modules covering phishing, password security, network defense, and more — designed for real teams, not just security pros.",
  },
  {
    icon: Wrench,
    title: "Practical Security Tools",
    description: "Hands-on tools that help you assess risk, simulate scenarios, and build defenses without needing a dedicated security team.",
  },
  {
    icon: BarChart2,
    title: "Framework Guidance",
    description: "Plain-language walkthroughs of NIST CSF, ISO 27001, CIS Controls, and more — so you can adopt the right framework for your context.",
  },
  {
    icon: Bell,
    title: "Threat Awareness Updates",
    description: "Stay current with emerging attack patterns and phishing trends without drowning in vendor noise or fear-driven marketing.",
  },
  {
    icon: Users,
    title: "Team-Ready Content",
    description: "Resources built for sharing across your whole organisation — not just the one person who attended the last compliance seminar.",
  },
  {
    icon: Lock,
    title: "Incident Response Playbooks",
    description: "Ready-to-use IR templates and checklists so your team knows exactly what to do when something goes wrong — before it does.",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">ABC of Cyber</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Cybersecurity that makes sense for your team
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            Practical guides, frameworks, and tools to help you build a security program that actually works — without the jargon, the theater, or the six-figure consultants.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Link href="/learn">Start Learning <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/frameworks">Explore Frameworks</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">Platform Features</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Everything you need to build real security
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              ABC of Cyber gives your team the knowledge, tools, and frameworks to move from reactive firefighting to a proactive security posture.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    <feature.icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <CardTitle className="text-base font-semibold text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/get-started">See how it works <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Section Component */}
      <FeatureSection />

      {/* Frameworks Section Component */}
      <FrameworksSection />

      {/* Email Capture */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <EmailCapture />
        </div>
      </section>
    </main>
  )
}
