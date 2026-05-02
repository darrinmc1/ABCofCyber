import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, Clock, Target, TrendingDown, TrendingUp, Users, FileCheck } from "lucide-react"

const riskManagementProcess = [
  {
    step: 1,
    title: "Risk Identification",
    description: "Finding and documenting risks that could affect your organization",
    duration: "Ongoing",
    activities: [
      "Asset identification and inventory",
      "Threat modeling and analysis",
      "Vulnerability assessment",
      "Business impact analysis",
      "Risk register maintenance",
    ],
    outputs: [
      "Risk register with identified risks",
      "Asset inventory with owners",
      "Threat landscape documentation",
      "Business criticality assessments",
    ],
  },
  {
    step: 2,
    title: "Risk Analysis",
    description: "Evaluating the likelihood and impact of identified risks",
    duration: "Per risk, as identified",
    activities: [
      "Likelihood assessment based on threat intelligence",
      "Impact assessment in financial and operational terms",
      "Control effectiveness evaluation",
      "Risk scoring using standardized methodology",
      "Risk categorization and prioritization",
    ],
    outputs: [
      "Risk scores (likelihood x impact)",
      "Risk heat maps and visualizations",
      "Control gap analysis",
      "Prioritized risk ranking",
    ],
  },
  {
    step: 3,
    title: "Risk Treatment",
    description: "Deciding how to address each risk",
    duration: "Decision-driven",
    activities: [
      "Evaluate treatment options for each risk",
      "Select appropriate treatment strategy",
      "Develop treatment plans with owners and timelines",
      "Document residual risks",
      "Obtain approval for treatment decisions",
    ],
    outputs: [
      "Risk treatment plans",
      "Documented risk decisions and rationale",
      "Assigned risk owners",
      "Residual risk documentation",
    ],
  },
  {
    step: 4,
    title: "Risk Monitoring",
    description: "Continuously tracking risk posture and treatment effectiveness",
    duration: "Continuous",
    activities: [
      "KPI and risk indicator monitoring",
      "Control effectiveness testing",
      "Treatment plan progress tracking",
      "Risk register updates",
      "Regular risk reporting",
    ],
    outputs: [
      "Risk dashboards and reports",
      "Control testing results",
      "Treatment plan status updates",
      "Updated risk register",
    ],
  },
]

const treatmentOptions = [
  {
    option: "Avoid",
    description: "Eliminate the risk entirely by discontinuing the activity that creates it",
    example: "Stop collecting certain data types to avoid associated breach risks",
    bestFor: "Risks with no viable mitigation and unacceptable impact",
  },
  {
    option: "Reduce",
    description: "Implement controls to reduce likelihood, impact, or both",
    example: "Add multi-factor authentication to reduce account compromise risk",
    bestFor: "Most security risks where controls are feasible and effective",
  },
  {
    option: "Transfer",
    description: "Shift the financial impact to another party",
    example: "Cyber insurance, outsourcing to vendors with better security",
    bestFor: "High-impact, low-likelihood risks where insurance makes sense",
  },
  {
    option: "Accept",
    description: "Accept the risk as-is, usually documented with rationale",
    example: "Accept certain residual risks after implementing controls",
    bestFor: "Risks where mitigation cost exceeds the risk value",
  },
]

const riskCategories = [
  {
    category: "Strategic Risks",
    description: "Risks that affect the organization's ability to achieve its business objectives",
    examples: [
      "Competitiveness in emerging AI landscape",
      "Regulatory changes affecting business model",
      "Key customer concentration",
      "Strategic partnership failures",
    ],
  },
  {
    category: "Operational Risks",
    description: "Risks arising from day-to-day operations, processes, and systems",
    examples: [
      "System outages and availability issues",
      "Process failures and errors",
      "Third-party service provider failures",
      "Data quality and integrity issues",
    ],
  },
  {
    category: "Financial Risks",
    description: "Risks affecting the organization's financial position and reporting",
    examples: [
      "Cyber incident response costs",
      "Regulatory fines and penalties",
      "Fraud and financial crime",
      "Currency and payment processing risks",
    ],
  },
  {
    category: "Technology Risks",
    description: "Risks arising from technology systems, infrastructure, and innovation",
    examples: [
      "Security vulnerabilities in critical systems",
      "Technology obsolescence",
      "AI governance and model risks",
      "Cloud provider concentration",
    ],
  },
]

const maturityLevels = [
  {
    level: 1,
    name: "Initial",
    description: "Ad hoc, reactive risk management. No standardized process.",
    characteristics: [
      "Risks identified inconsistently",
      "No common risk methodology",
      "No risk reporting structure",
      "Reactive incident response",
    ],
  },
  {
    level: 2,
    name: "Developing",
    description: "Basic risk management process exists but is not fully documented or consistently applied.",
    characteristics: [
      "Basic risk identification process exists",
      "Some documentation of risks",
      "Informal risk ownership",
      "Limited risk reporting",
    ],
  },
  {
    level: 3,
    name: "Defined",
    description: "Standardized risk management process is documented and applied across the organization.",
    characteristics: [
      "Documented risk management framework",
      "Consistent risk assessment methodology",
      "Risk owners assigned for all significant risks",
      "Regular risk reporting to management",
    ],
  },
  {
    level: 4,
    name: "Managed",
    description: "Risk management is quantitative and predictive. Active monitoring of risk indicators.",
    characteristics: [
      "KPIs and risk indicators tracked",
      "Predictive risk analysis",
      "Regular control testing",
      "Risk-aware decision making",
    ],
  },
  {
    level: 5,
    name: "Optimizing",
    description: "Continuously improving risk management with lessons learned systematically incorporated.",
    characteristics: [
      "Real-time risk monitoring",
      "Automated risk analytics",
      "Integrated risk and business planning",
      "Continuous improvement program",
    ],
  },
]

export default function RiskManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <Link href="/frameworks" className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Frameworks
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-slate-100">
                <Shield className="h-6 w-6 text-slate-700" />
              </div>
              <Badge className="bg-slate-100 text-slate-700">Risk Management</Badge>
              <Badge variant="outline">Enterprise Security</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Enterprise Risk Management
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Cybersecurity risk management is not about eliminating all risk. It is about understanding risk in business terms,
              making informed decisions about which risks to reduce, which to accept, and which to transfer. This guide covers the
              process and frameworks for managing cybersecurity risk systematically.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/get-started">Assess Your Risk Posture</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/dashboard">View Risk Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Risk Management Process</h2>
          <p className="text-slate-600 mb-8">
            Risk management is not a one-time activity. It is a continuous cycle of identification, analysis, treatment, and
            monitoring. Effective programs embed this cycle into regular business operations.
          </p>

          <div className="space-y-6">
            {riskManagementProcess.map((phase) => (
              <Card key={phase.step}>
                <CardHeader className="bg-slate-50">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <CardTitle>{phase.title}</CardTitle>
                      <CardDescription>{phase.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{phase.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-blue-600" />
                        Key Activities
                      </h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity) => (
                          <li key={activity} className="flex items-start gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <FileCheck className="h-4 w-4 text-green-600" />
                        Outputs
                      </h4>
                      <ul className="space-y-2">
                        {phase.outputs.map((output) => (
                          <li key={output} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            {output}
                          </li>
                        ))}
                      </ul>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Risk Treatment Options</h2>
            <p className="text-slate-600 mb-8">
              For each identified risk, organizations must decide how to respond. The four treatment options are Avoid, Reduce,
              Transfer, and Accept. The right choice depends on risk characteristics, organizational risk appetite, and the
              cost-effectiveness of controls.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {treatmentOptions.map((treatment) => (
                <Card key={treatment.option}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {treatment.option === "Avoid" && <TrendingDown className="h-5 w-5 text-red-600" />}
                      {treatment.option === "Reduce" && <TrendingDown className="h-5 w-5 text-blue-600" />}
                      {treatment.option === "Transfer" && <Users className="h-5 w-5 text-yellow-600" />}
                      {treatment.option === "Accept" && <CheckCircle className="h-5 w-5 text-green-600" />}
                      {treatment.option}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4">{treatment.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-slate-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-slate-900">Example:</p>
                          <p className="text-xs text-slate-600">{treatment.example}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                        <AlertTriangle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-blue-900">Best for:</p>
                          <p className="text-xs text-blue-700">{treatment.bestFor}</p>
                        </div>
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Risk Categories</h2>
          <p className="text-slate-600 mb-8">
            Cybersecurity risk intersects with multiple business risk categories. Understanding these categories helps frame
            cybersecurity risk in business terms that leadership and boards understand.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {riskCategories.map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-slate-900 mb-3">Examples</h4>
                  <ul className="space-y-2">
                    {category.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Risk Management Maturity</h2>
            <p className="text-slate-600 mb-8">
              Organizations progress through maturity levels as their risk management capability develops. Understanding your current
              maturity helps prioritize improvement efforts.
            </p>

            <div className="space-y-4">
              {maturityLevels.map((maturity) => (
                <Card key={maturity.level}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-lg font-bold text-slate-700">
                        {maturity.level}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-slate-900">{maturity.name}</h3>
                          <span className="text-sm text-slate-500">-</span>
                          <span className="text-sm text-slate-600">{maturity.description}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {maturity.characteristics.map((char) => (
                            <Badge key={char} variant="outline" className="text-xs">
                              {char}
                            </Badge>
                          ))}
                        </div>
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Building a Risk-Aware Culture</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Leadership Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Articulate risk appetite in business terms</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Ensure risk management is resourced adequately</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Review significant risk decisions personally</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Model risk-aware behavior</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Employee Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Understand risks relevant to their role</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Report identified risks through proper channels</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Follow established controls and procedures</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Participate in risk assessments when asked</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to assess your risk management capability?</h3>
              <p className="text-slate-300">
                ABC of Cyber helps organizations assess risk, build frameworks, and continuously monitor their risk posture.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-200">
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
