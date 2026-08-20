import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Zap, CheckCircle, BarChart2, Lock, AlertTriangle, FileCheck, Activity, Eye, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FeatureSection } from "@/components/feature-section"
import { FrameworksSection } from "@/components/frameworks-section"
import { EmailCapture } from "@/components/email-capture"

const securityFeatures = [
  {
    icon: Lock,
    title: "Access Controls",
    description: "Role-based access control with granular permissions, MFA enforcement, and SSO integration to ensure only authorized users access sensitive data.",
    highlights: ["RBAC & ABAC support", "MFA enforcement", "SSO / SAML 2.0"]
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Continuous threat detection with live dashboards, anomaly alerts, and automated incident response workflows that keep your team ahead of threats.",
    highlights: ["Live threat dashboard", "Anomaly detection", "Automated alerts"]
  },
  {
    icon: FileCheck,
    title: "Compliance Frameworks",
    description: "Pre-built controls mapped to SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS so you can demonstrate compliance without starting from scratch.",
    highlights: ["SOC 2 Type II", "ISO 27001", "HIPAA & GDPR"]
  },
  {
    icon: Eye,
    title: "Audit & Reporting",
    description: "Immutable audit logs, one-click compliance reports, and evidence collection tools that make audits faster and less painful for your team.",
    highlights: ["Immutable audit logs", "One-click reports", "Evidence collection"]
  },
  {
    icon: AlertTriangle,
    title: "Risk Management",
    description: "Automated risk scoring, vendor risk assessments, and remediation tracking give you a clear picture of your organization's risk posture at all times.",
    highlights: ["Automated risk scoring", "Vendor assessments", "Remediation tracking"]
  },
  {
    icon: RefreshCw,
    title: "Continuous Compliance",
    description: "Policy-as-code integrations with your CI/CD pipeline ensure compliance checks happen automatically with every deployment, not just at audit time.",
    highlights: ["CI/CD integration", "Policy-as-code", "Drift detection"]
  }
]

const complianceBadges = [
  { label: "SOC 2 Type II", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { label: "ISO 27001", color: "bg-green-50 text-green-700 border-green-200" },
  { label: "HIPAA", color: "bg-purple-50 text-purple-700 border-purple-200" },
  { label: "GDPR", color: "bg-orange-50 text-orange-700 border-orange-200" },
  { label: "PCI-DSS", color: "bg-red-50 text-red-700 border-red-200" },
  { label: "NIST CSF", color: "bg-slate-50 text-slate-700 border-slate-200" },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-sm text-slate-300 mb-8">
            <Shield className="h-4 w-4 text-blue-400" />
            Enterprise-grade security compliance platform
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Security compliance{" "}
            <span className="text-blue-400">without the complexity</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
            Automate your compliance workflows, monitor threats in real time, and pass audits faster with pre-built controls for SOC 2, ISO 27001, HIPAA, and more.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8" asChild>
              <Link href="/get-started">
                Get started free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
              <Link href="/demo">Watch demo</Link>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {complianceBadges.map((badge) => (
              <span
                key={badge.label}
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${badge.color}`}
              >
                <CheckCircle className="mr-1.5 h-3 w-3" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 md:py-28 bg-white" id="security-features">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
              <Shield className="h-4 w-4" />
              Security Controls
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Every control you need,{" "}
              <span className="text-blue-600">built in</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From access management to continuous monitoring, our platform covers the full spectrum of security controls required by leading compliance frameworks.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="group relative overflow-hidden border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4">{feature.description}</p>
                    <ul className="space-y-1.5">
                      {feature.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle className="h-3.5 w-3.5 flex-shrink-0 text-green-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Highlight Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700 mb-6">
                <Activity className="h-4 w-4" />
                Real-Time Dashboard
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Your security posture,{" "}
                <span className="text-green-600">at a glance</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                The unified dashboard surfaces critical risks, compliance gaps, and active threats so your security team can prioritize what matters most.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: BarChart2, text: "Live compliance score across all frameworks" },
                  { icon: AlertTriangle, text: "Prioritized risk register with severity scoring" },
                  { icon: Eye, text: "Real-time threat feed with contextual alerts" },
                  { icon: FileCheck, text: "Audit readiness tracker with evidence status" },
                ].map((item) => {
                  const ItemIcon = item.icon
                  return (
                    <li key={item.text} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                        <ItemIcon className="h-3.5 w-3.5 text-green-600" />
                      </div>
                      <span className="text-slate-700">{item.text}</span>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-8">
                <Button className="bg-green-600 hover:bg-green-500 text-white" asChild>
                  <Link href="/demo">
                    See the dashboard <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">Security Overview</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  Live
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Compliance Score", value: "94%", change: "+2%", positive: true },
                  { label: "Open Risks", value: "7", change: "-3", positive: true },
                  { label: "Controls Passing", value: "142", change: "+8", positive: true },
                  { label: "Audit Readiness", value: "88%", change: "+5%", positive: true },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className={`text-xs font-medium mt-1 ${stat.positive ? "text-green-600" : "text-red-600"}`}>
                      {stat.change} this week
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Framework Status</p>
                {[
                  { name: "SOC 2 Type II", progress: 94, color: "bg-blue-500" },
                  { name: "ISO 27001", progress: 87, color: "bg-green-500" },
                  { name: "HIPAA", progress: 91, color: "bg-purple-500" },
                ].map((fw) => (
                  <div key={fw.name}>
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                      <span>{fw.name}</span>
                      <span className="font-medium">{fw.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div
                        className={`h-2 rounded-full ${fw.color}`}
                        style={{ width: `${fw.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Feature Section */}
      <FeatureSection />

      {/* Frameworks Section */}
      <FrameworksSection />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to simplify compliance?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Join thousands of security teams who use our platform to automate compliance and pass audits faster.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <EmailCapture />
          </div>
        </div>
      </section>
    </div>
  )
}
