import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, FileText, Shield, Lock, Users, AlertTriangle, Eye, Server, Database } from "lucide-react"

const isoDomains = [
  {
    id: "A5",
    title: "Information Security Policies",
    description: "Management direction and support for information security, documented and reviewed regularly.",
    controls: 2,
    icon: FileText,
    color: "bg-blue-100 text-blue-700",
    keyControls: [
      "Policies for information security must be documented and approved by management",
      "Policies must be reviewed at planned intervals or when significant changes occur",
    ],
  },
  {
    id: "A6",
    title: "Organization of Information Security",
    description: "Internal organization and responsibilities for information security.",
    controls: 7,
    icon: Users,
    color: "bg-green-100 text-green-700",
    keyControls: [
      "Information security responsibilities must be defined and allocated",
      " segregation of duties must be implemented where applicable",
      "Contact with relevant authorities and special interest groups must be maintained",
    ],
  },
  {
    id: "A7",
    title: "Human Resource Security",
    description: "Security responsibilities for employees, contractors, and third parties.",
    controls: 3,
    icon: Users,
    color: "bg-purple-100 text-purple-700",
    keyControls: [
      "Background verification checks on all candidates for employment",
      "Employees and contractors must acknowledge their information security responsibilities",
      "Termination or change of employment procedures must be followed",
    ],
  },
  {
    id: "A8",
    title: "Asset Management",
    description: "Identification, ownership, and acceptable use of information assets.",
    controls: 10,
    icon: Database,
    color: "bg-orange-100 text-orange-700",
    keyControls: [
      "Assets associated with information systems must be identified and documented",
      "Information must be classified and labeled according to sensitivity",
      "Appropriate procedures for information handling must be implemented",
    ],
  },
  {
    id: "A9",
    title: "Access Control",
    description: "Limiting access to information and information systems to authorized users only.",
    controls: 14,
    icon: Lock,
    color: "bg-red-100 text-red-700",
    keyControls: [
      "Access control policy must be documented and implemented",
      "User access must be provisioned through a formal process",
      "Password management must be strong and enforced",
      "Access rights must be reviewed at regular intervals",
    ],
  },
  {
    id: "A10",
    title: "Cryptography",
    description: "Proper use of cryptographic controls to protect information confidentiality, authenticity, and integrity.",
    controls: 2,
    icon: Shield,
    color: "bg-cyan-100 text-cyan-700",
    keyControls: [
      "Cryptographic controls must be used according to legal requirements and contracts",
      "Keys must be managed properly throughout their lifecycle",
    ],
  },
  {
    id: "A11",
    title: "Physical and Environmental Security",
    description: "Preventing unauthorized physical access, damage, and interference to information and processing facilities.",
    controls: 15,
    icon: Server,
    color: "bg-yellow-100 text-yellow-700",
    keyControls: [
      "Security perimeters must be defined and used to protect facilities",
      "Equipment must be protected from power supply issues and environmental threats",
      "Secure disposal of equipment and media must be ensured",
    ],
  },
  {
    id: "A12",
    title: "Operations Security",
    description: "Correct and secure operations of information processing facilities.",
    controls: 14,
    icon: Eye,
    color: "bg-indigo-100 text-indigo-700",
    keyControls: [
      "Operating procedures must be documented and communicated to all relevant parties",
      "Change management processes must be followed",
      "Capacity must be monitored and projections made for future requirements",
      "Logs must be reviewed regularly",
    ],
  },
  {
    id: "A13",
    title: "Communications Security",
    description: "Security of information in networks and supporting infrastructure.",
    controls: 7,
    icon: Server,
    color: "bg-pink-100 text-pink-700",
    keyControls: [
      "Network security management must be implemented",
      "Security of network services must be agreed and documented",
      "Transfer of information must be authorized and monitored",
    ],
  },
  {
    id: "A14",
    title: "System Acquisition, Development, and Maintenance",
    description: "Security requirements for information systems throughout their lifecycle.",
    controls: 13,
    icon: Database,
    color: "bg-teal-100 text-teal-700",
    keyControls: [
      "Security requirements must be included in development life cycles",
      "Changes to systems must follow change management procedures",
      "Test data must be carefully selected and protected",
    ],
  },
  {
    id: "A15",
    title: "Supplier Relationships",
    description: "Protecting organizational assets that are accessible by suppliers.",
    controls: 5,
    icon: Users,
    color: "bg-lime-100 text-lime-700",
    keyControls: [
      "Security requirements must be agreed with each supplier",
      "Supplier agreements must address relevant security requirements",
      "Supplier services must be monitored and reviewed regularly",
    ],
  },
  {
    id: "A16",
    title: "Information Security Incident Management",
    description: "Ensuring effective and appropriate response to information security incidents.",
    controls: 7,
    icon: AlertTriangle,
    color: "bg-rose-100 text-rose-700",
    keyControls: [
      "Management responsibilities and procedures must be established",
      "Incidents must be reported through appropriate channels",
      "Evidence must be preserved during incident response",
    ],
  },
  {
    id: "A17",
    title: "Business Continuity Management",
    description: "Protecting, maintaining, and recovering business-critical processes.",
    controls: 4,
    icon: FileText,
    color: "bg-amber-100 text-amber-700",
    keyControls: [
      "Business continuity management process must be implemented",
      "Business continuity plans must be documented and tested",
      "Recovery priorities and timelines must be defined",
    ],
  },
  {
    id: "A18",
    title: "Compliance",
    description: "Avoiding breaches of legal, statutory, regulatory, or contractual obligations.",
    controls: 8,
    icon: CheckCircle,
    color: "bg-emerald-100 text-emerald-700",
    keyControls: [
      "All applicable legal and contractual requirements must be identified",
      "Intellectual property rights must be protected",
      "Privacy and personally identifiable information must be protected",
    ],
  },
]

const certificationSteps = [
  { step: 1, title: "Gap Analysis", description: "Compare current controls against ISO 27001 requirements to identify gaps." },
  { step: 2, title: "Risk Assessment", description: "Identify and evaluate information security risks according to the standard's methodology." },
  { step: 3, title: "Implement Controls", description: "Address identified gaps and implement controls from the Annex A list." },
  { step: 4, title: "Document Everything", description: "Create and maintain required documentation including policies, procedures, and records." },
  { step: 5, title: "Internal Audit", description: "Conduct an internal audit to verify the ISMS is functioning as designed." },
  { step: 6, title: "Management Review", description: "Have leadership review and approve the ISMS before external certification." },
  { step: 7, title: "Certification Audit", description: "Engage an accredited certification body to conduct the Stage 1 and Stage 2 audits." },
]

export default function ISO27001Framework() {
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
              <div className="p-2 rounded-lg bg-green-100">
                <Shield className="h-6 w-6 text-green-700" />
              </div>
              <Badge className="bg-green-100 text-green-700">ISO 27001</Badge>
              <Badge variant="outline">International Standard for Information Security</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              ISO 27001: Information Security Management
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              The international standard for managing information security. It provides a systematic approach to managing
              sensitive information through policies, procedures, and technical controls. Organizations get certified by
              demonstrating their ISMS meets the standard's requirements.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/get-started">Start Readiness Assessment</Link>
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Two Parts of ISO 27001</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 border-slate-200">
              <CardHeader>
                <CardTitle>Part 1: Clauses 4-10</CardTitle>
                <CardDescription>Mandatory requirements for certification</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Context of the organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Leadership commitment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Planning and risk treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Support and resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Operational planning and control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Performance evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Continual improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-slate-200">
              <CardHeader>
                <CardTitle>Part 2: Annex A Controls</CardTitle>
                <CardDescription>114 possible controls to implement</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Organizational, people, and physical controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Technological controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Not all controls apply to every organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Select controls based on your risk assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Document your decisions in the SoA</span>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-slate-500">
                  SoA = Statement of Applicability. This document lists which Annex A controls you are implementing and why.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">The 14 Control Domains</h2>
            <p className="text-slate-600 mb-8">
              Annex A organizes the 114 controls into 14 domains covering all aspects of information security.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {isoDomains.map((domain) => (
                <Card key={domain.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`p-2 rounded-lg ${domain.color}`}>
                        <domain.icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium text-slate-500">{domain.id}</span>
                    </div>
                    <CardTitle className="text-sm">{domain.title}</CardTitle>
                    <CardDescription className="text-xs">{domain.controls} controls</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-600 line-clamp-3">{domain.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Path to Certification</h2>
          <p className="text-slate-600 mb-8">
            ISO 27001 certification typically takes 6-12 months for smaller organizations and involves these steps.
            The timeline varies based on current maturity and available resources.
          </p>
          <div className="space-y-4">
            {certificationSteps.map((item) => (
              <Card key={item.step}>
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to begin your ISO 27001 journey?</h3>
              <p className="text-green-200">
                CyberShield helps you assess readiness, plan implementation, and track progress toward certification.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg" className="bg-white text-green-900 hover:bg-green-100">
                <Link href="/get-started">Start Readiness Assessment</Link>
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
