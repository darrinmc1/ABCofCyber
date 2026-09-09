import Link from "next/link"
import { ArrowRight, Shield, CheckCircle, Lock, Award, FileCheck, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import EmailCapture from "@/components/email-capture"
import FeatureSection from "@/components/feature-section"
import FrameworksSection from "@/components/frameworks-section"
import HumorBreak from "@/components/humor-break"

const complianceBadges = [
  {
    icon: ShieldCheck,
    label: "SOC 2 Type II",
    description: "Audited controls for security, availability, and confidentiality",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    iconColor: "text-blue-600",
  },
  {
    icon: Award,
    label: "ISO 27001 Aligned",
    description: "Information security management best practices",
    color: "bg-green-50 border-green-200 text-green-700",
    iconColor: "text-green-600",
  },
  {
    icon: FileCheck,
    label: "NIST CSF",
    description: "Built on the NIST Cybersecurity Framework",
    color: "bg-purple-50 border-purple-200 text-purple-700",
    iconColor: "text-purple-600",
  },
  {
    icon: Lock,
    label: "GDPR Ready",
    description: "Data handling practices aligned with GDPR requirements",
    color: "bg-orange-50 border-orange-200 text-orange-700",
    iconColor: "text-orange-600",
  },
  {
    icon: Shield,
    label: "CIS Controls",
    description: "Mapped to CIS Critical Security Controls v8",
    color: "bg-red-50 border-red-200 text-red-700",
    iconColor: "text-red-600",
  },
  {
    icon: CheckCircle,
    label: "HIPAA Compliant",
    description: "Supports healthcare data protection requirements",
    color: "bg-teal-50 border-teal-200 text-teal-700",
    iconColor: "text-teal-600",
  },
]

const securityCommitments = [
  "End-to-end encryption for all data in transit and at rest",
  "Annual third-party penetration testing",
  "99.9% uptime SLA with transparent status page",
  "Zero data selling — your data is never shared with third parties",
  "Role-based access controls and audit logging",
  "Vulnerability disclosure program with responsible reporting",
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Cybersecurity made practical</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Stop guessing. Start securing.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              ABC of Cyber gives your team the frameworks, tools, and plain-English guidance to build a security program
              that actually works — not just one that looks good in a board deck.
            </p>
            <div className="flex flex-wrap gap-4">
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

      {/* Feature Section */}
      <FeatureSection />

      {/* Frameworks Section */}
      <FrameworksSection />

      {/* Security & Compliance Section */}
      <section className="border-t bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">Security &amp; Compliance</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl mb-4">
              Built to meet the standards your business depends on
            </h2>
            <p className="text-lg text-slate-600">
              We hold ourselves to the same standards we help you achieve. Our platform is designed, audited, and
              maintained against the frameworks that matter most to security-conscious teams.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {complianceBadges.map((badge) => (
              <div
                key={badge.label}
                className={`flex items-start gap-4 rounded-xl border-2 p-5 ${badge.color}`}
              >
                <div className="mt-0.5 shrink-0">
                  <badge.icon className={`h-7 w-7 ${badge.iconColor}`} />
                </div>
                <div>
                  <p className="font-bold text-base mb-1">{badge.label}</p>
                  <p className="text-sm opacity-80">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-slate-900 text-lg">
                  <Lock className="h-5 w-5 text-blue-700" />
                  Our security commitments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {securityCommitments.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-500">
                    Questions about our security posture?{" "}
                    <Link href="/contact" className="text-blue-700 hover:underline font-medium">
                      Request our security documentation
                    </Link>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Humor Break */}
      <HumorBreak />

      {/* Email Capture */}
      <section className="border-t py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <EmailCapture />
        </div>
      </section>
    </main>
  )
}
