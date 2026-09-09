import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Zap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import EmailCapture from "@/components/email-capture"
import FeatureSection from "@/components/feature-section"
import FrameworksSection from "@/components/frameworks-section"

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Audited controls for security, availability, and confidentiality",
    icon: "🔒",
    color: "bg-blue-50 border-blue-200 text-blue-800",
    iconBg: "bg-blue-100",
  },
  {
    name: "ISO 27001",
    description: "International standard for information security management",
    icon: "🌐",
    color: "bg-green-50 border-green-200 text-green-800",
    iconBg: "bg-green-100",
  },
  {
    name: "GDPR Compliant",
    description: "EU data protection and privacy regulation adherence",
    icon: "🇪🇺",
    color: "bg-purple-50 border-purple-200 text-purple-800",
    iconBg: "bg-purple-100",
  },
  {
    name: "NIST CSF",
    description: "Aligned with the NIST Cybersecurity Framework",
    icon: "🛡️",
    color: "bg-orange-50 border-orange-200 text-orange-800",
    iconBg: "bg-orange-100",
  },
  {
    name: "CIS Controls",
    description: "Implementing CIS Critical Security Controls v8",
    icon: "✅",
    color: "bg-teal-50 border-teal-200 text-teal-800",
    iconBg: "bg-teal-100",
  },
  {
    name: "CCPA Ready",
    description: "California Consumer Privacy Act compliance standards",
    icon: "📋",
    color: "bg-rose-50 border-rose-200 text-rose-800",
    iconBg: "bg-rose-100",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-20 md:px-6">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Cybersecurity education for real teams
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Security that actually makes sense
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              ABC of Cyber turns complex cybersecurity concepts into practical knowledge your whole team can use.
              No jargon. No fear-mongering. Just clear, actionable security education.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                <Link href="/learn">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/frameworks">Browse Frameworks</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-2">Trust &amp; Compliance</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Built to meet the standards that matter
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Our platform and curriculum are aligned with globally recognized security frameworks and compliance standards,
              so your team learns practices that hold up to real audits.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className={`flex flex-col items-center rounded-xl border p-4 text-center transition-shadow hover:shadow-md ${cert.color}`}
              >
                <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full text-2xl ${cert.iconBg}`}>
                  {cert.icon}
                </div>
                <p className="text-sm font-bold leading-tight mb-1">{cert.name}</p>
                <p className="text-xs leading-snug opacity-75">{cert.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t pt-8">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Annual third-party security audits</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>End-to-end encrypted data handling</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Transparent security documentation</span>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/frameworks">View compliance details <ArrowRight className="ml-1 h-3 w-3" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <FeatureSection />
      <FrameworksSection />

      {/* CTA */}
      <section className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Ready to build a security-aware team?
            </h2>
            <p className="text-lg text-slate-600">
              Join thousands of teams using ABC of Cyber to turn security from a checkbox into a genuine capability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                <Link href="/get-started">
                  Get started free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <EmailCapture />
    </main>
  )
}
