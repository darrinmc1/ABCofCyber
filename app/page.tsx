import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Wrench, CheckCircle, Lock, Award, FileCheck, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FeatureSection from "@/components/feature-section"
import FrameworksSection from "@/components/frameworks-section"
import EmailCapture from "@/components/email-capture"

const trustBadges = [
  {
    icon: Award,
    label: "NIST CSF Aligned",
    description: "Built on NIST Cybersecurity Framework guidelines",
  },
  {
    icon: FileCheck,
    label: "ISO 27001 Ready",
    description: "Content maps to ISO 27001 control objectives",
  },
  {
    icon: Shield,
    label: "SOC 2 Informed",
    description: "Covers SOC 2 Trust Service Criteria",
  },
  {
    icon: Lock,
    label: "CIS Controls",
    description: "Aligned with CIS Critical Security Controls v8",
  },
  {
    icon: Globe,
    label: "GDPR & CCPA",
    description: "Privacy regulation guidance included",
  },
  {
    icon: CheckCircle,
    label: "Zero Trust Ready",
    description: "Zero Trust Architecture principles throughout",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Cybersecurity Made Practical</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Security programs that actually work
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            ABC of Cyber gives your team the frameworks, tools, and plain-language guidance to build a real security
            program — not just a compliance checkbox.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Link href="/get-started">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/learn">Browse Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges & Certifications */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Standards & Compliance</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Aligned with industry-leading security standards
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Our content and frameworks are built on the same standards that auditors, regulators, and enterprise
              security teams rely on — so your program is credible from day one.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <badge.icon className="h-6 w-6 text-blue-700" />
                </div>
                <p className="text-sm font-bold text-slate-900">{badge.label}</p>
                <p className="mt-1 text-xs leading-snug text-slate-500">{badge.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-slate-400">
            ABC of Cyber is an independent educational platform. References to standards are for alignment purposes and do not constitute official certification.
          </p>
        </div>
      </section>

      <FeatureSection />
      <FrameworksSection />

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Explore</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Where do you want to start?</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                <BookOpen className="h-5 w-5 text-blue-700" />
              </div>
              <CardTitle className="text-lg">Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-slate-600">
                Practical guides on phishing, passwords, network security, and more — written for real humans.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/learn">
                  Browse Lessons <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                <Shield className="h-5 w-5 text-blue-700" />
              </div>
              <CardTitle className="text-lg">Frameworks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-slate-600">
                NIST, ISO 27001, CIS Controls, and more — explained without the consultant markup.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/frameworks">
                  View Frameworks <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                <Wrench className="h-5 w-5 text-blue-700" />
              </div>
              <CardTitle className="text-lg">Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-slate-600">
                Interactive tools to assess your security posture and get actionable next steps.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/tools">
                  Try the Tools <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <EmailCapture />
    </main>
  )
}
