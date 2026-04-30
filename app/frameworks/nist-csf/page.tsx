import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, AlertTriangle, Shield, Activity, Lock, Eye, Server, Users, FileCheck, RefreshCw } from "lucide-react"

const nistFunctions = [
  {
    id: "identify",
    title: "Identify",
    description: "Develop organizational understanding to manage cybersecurity risk to systems, assets, data, and capabilities.",
    icon: Activity,
    color: "bg-blue-100 text-blue-700",
    categories: [
      "Asset Management",
      "Business Environment",
      "Governance",
      "Risk Assessment",
      "Risk Management Strategy",
      "Supply Chain Risk Management",
    ],
    maturityLevels: [
      { level: 1, name: "Partial", description: "Processes are not formalized. Cybersecurity risk is managed in an ad hoc, reactive manner." },
      { level: 2, name: "Risk Informed", description: "Processes are approved by management but may not be established as organizational-wide policy." },
      { level: 3, name: "Repeatable", description: "Processes are formally approved and expressed as policy. Regular reviews ensure compliance." },
      { level: 4, name: "Adaptive", description: "Organization adapts its cybersecurity practices based on lessons learned and predictive indicators." },
    ],
  },
  {
    id: "protect",
    title: "Protect",
    description: "Develop and implement appropriate safeguards to ensure delivery of critical services.",
    icon: Shield,
    color: "bg-green-100 text-green-700",
    categories: [
      "Identity Management and Access Control",
      "Awareness and Training",
      "Data Security",
      "Information Protection Processes",
      "Maintenance",
      "Protective Technology",
    ],
    maturityLevels: [
      { level: 1, name: "Partial", description: "Limited security controls. Not consistently applied across systems." },
      { level: 2, name: "Risk Informed", description: "Security controls are in place but may vary in coverage and consistency." },
      { level: 3, name: "Repeatable", description: "Controls are formally approved, documented, and consistently implemented organization-wide." },
      { level: 4, name: "Adaptive", description: "Active monitoring and automated responses. Controls evolve with threats." },
    ],
  },
  {
    id: "detect",
    title: "Detect",
    description: "Develop and implement appropriate activities to identify the occurrence of a cybersecurity event.",
    icon: Eye,
    color: "bg-yellow-100 text-yellow-700",
    categories: [
      "Anomalies and Events",
      "Security Continuous Monitoring",
      "Detection Processes",
    ],
    maturityLevels: [
      { level: 1, name: "Partial", description: "Limited detection capability. Often discovered after damage is done." },
      { level: 2, name: "Risk Informed", description: "Some monitoring in place. Alerts may require manual investigation." },
      { level: 3, name: "Repeatable", description: "Continuous monitoring with defined detection processes and automated alerts." },
      { level: 4, name: "Adaptive", description: "AI-assisted detection. Automated threat identification and initial response." },
    ],
  },
  {
    id: "respond",
    title: "Respond",
    description: "Develop and implement appropriate activities to take action regarding a detected cybersecurity incident.",
    icon: RefreshCw,
    color: "bg-orange-100 text-orange-700",
    categories: [
      "Response Planning",
      "Communications",
      "Analysis",
      "Mitigation",
      "Improvements",
    ],
    maturityLevels: [
      { level: 1, name: "Partial", description: "Ad hoc responses. No formal incident response plan." },
      { level: 2, name: "Risk Informed", description: "Documented response procedures exist but may not be regularly practiced." },
      { level: 3, name: "Repeatable", description: "Formal response plan with regular drills and clearly defined roles." },
      { level: 4, name: "Adaptive", description: "Automated containment. Post-incident analysis feeds continuous improvement." },
    ],
  },
  {
    id: "recover",
    title: "Recover",
    description: "Develop and implement appropriate activities to restore capabilities or services that were impaired.",
    icon: FileCheck,
    color: "bg-purple-100 text-purple-700",
    categories: [
      "Recovery Planning",
      "Improvements",
      "Communications",
    ],
    maturityLevels: [
      { level: 1, name: "Partial", description: "Limited recovery capability. Restoration is chaotic and inconsistent." },
      { level: 2, name: "Risk Informed", description: "Basic recovery plans exist but untested. May not cover all scenarios." },
      { level: 3, name: "Repeatable", description: "Tested recovery procedures with defined priorities and resource requirements." },
      { level: 4, name: "Adaptive", description: "Automated restoration. Lessons from incidents feed resilience improvements." },
    ],
  },
]

const implementationTiers = [
  {
    tier: "Tier 1",
    name: "Partial",
    description: "Organization does not have formal cybersecurity risk management practices. Processes are ad hoc.",
    suitable: "Small teams with minimal regulatory pressure, or as a starting point before maturing.",
  },
  {
    tier: "Tier 2",
    name: "Risk Informed",
    description: "Risk management practices are approved by management but not organization-wide. Prioritization is based on threats but not formally analyzed.",
    suitable: "Growing businesses with some compliance requirements, or teams with limited resources.",
  },
  {
    tier: "Tier 3",
    name: "Repeatable",
    description: "Formal policies and processes are established, documented, and consistently followed. Regular review and testing occurs.",
    suitable: "Organizations with regulatory compliance needs, or those handling sensitive data.",
  },
  {
    tier: "Tier 4",
    name: "Adaptive",
    description: "Organization actively improves based on lessons learned and predictive indicators. Advanced technologies and processes in place.",
    suitable: "Mature organizations, critical infrastructure, or high-risk environments.",
  },
]

export default function NISTCSFFramework() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/frameworks"
            className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Frameworks
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100">
                <Shield className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-blue-100 text-blue-700">NIST CSF</Badge>
              <Badge variant="outline">National Institute of Standards and Technology</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              NIST Cybersecurity Framework
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              A voluntary framework for managing cybersecurity risk, organized around five core functions: Identify, Protect, Detect,
              Respond, and Recover. Originally designed for critical infrastructure, now used broadly because it is actually useful.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/get-started">Start Assessment</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/dashboard">View Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Five Core Functions</h2>
          <p className="text-slate-600 mb-8">
            NIST CSF organizes cybersecurity into five functions that represent the complete cybersecurity lifecycle. Every
            organization, regardless of size or maturity, should be able to place their current activities into these five
            categories.
          </p>

          <div className="space-y-8">
            {nistFunctions.map((func) => (
              <Card key={func.id} className="overflow-hidden">
                <CardHeader className="bg-slate-50">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${func.color}`}>
                      <func.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{func.title}</CardTitle>
                        <span className="text-sm text-slate-500">Function</span>
                      </div>
                      <CardDescription className="text-base">{func.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Categories</h4>
                      <ul className="space-y-2">
                        {func.categories.map((cat) => (
                          <li key={cat} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            {cat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Maturity Levels</h4>
                      <div className="space-y-3">
                        {func.maturityLevels.map((maturity) => (
                          <div key={maturity.level} className="flex gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-medium text-slate-700">
                              {maturity.level}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-slate-900">{maturity.name}</p>
                              <p className="text-xs text-slate-500">{maturity.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Implementation Tiers</h2>
            <p className="text-slate-600 mb-8">
              Tiers describe how much cybersecurity risk management is embedded in organizational behavior. They are not maturity
              levels, but rather how systematically you approach cybersecurity.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {implementationTiers.map((tier) => (
                <Card key={tier.tier}>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-slate-500">{tier.tier}</span>
                      <CardTitle className="text-lg">{tier.name}</CardTitle>
                    </div>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-green-900">Best suited for:</p>
                        <p className="text-sm text-green-700">{tier.suitable}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Implementation Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  Resource Constraints
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Small teams cannot implement everything at once. NIST CSF explicitly supports partial implementation.
                  Start with the functions that address your highest risks, then expand.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Cultural Adoption
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Policies that nobody follows are worse than no policies. Involve end users in developing
                  awareness training. Make security expectations realistic and achievable.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Server className="h-5 w-5 text-purple-600" />
                  Legacy Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Older systems may not support modern controls. Document compensating controls and plan
                  for eventual replacement. Not every gap can be fixed immediately.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lock className="h-5 w-5 text-red-600" />
                  Third-Party Risk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Supply chain risks are difficult to control. Focus on what you can verify: security
                  questionnaires, certifications, contractual requirements, and monitoring.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to assess your NIST CSF posture?</h3>
              <p className="text-blue-200">
                CyberShield maps your current controls to the framework and identifies gaps worth addressing first.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                <Link href="/get-started">Start Assessment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Talk to Analyst</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
