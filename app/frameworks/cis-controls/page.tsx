import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Shield, Lock, Server, Database, Globe, Users, AlertTriangle, FileCheck, Monitor } from "lucide-react"

const cisControls = [
  {
    number: 1,
    title: "Inventory of Enterprise Assets",
    description: "Actively manage all enterprise assets connected to the infrastructure, including operating systems, applications, data, and cloud/virtualized assets.",
    category: "Basic",
    icon: Server,
    safeguards: 3,
    whatIt_means: "You cannot protect what you do not know about. This control requires maintaining a current, accurate inventory of every device, server, cloud workload, and software that connects to your network.",
    common_gaps: [
      " Forgotten test servers still on the network",
      " Personal devices connected to corporate WiFi",
      " Cloud instances launched for projects and never documented",
      " Legacy systems kept running 'temporarily' for five years",
    ],
  },
  {
    number: 2,
    title: "Inventory of Software Assets",
    description: "Actively manage all software on the network so only authorized software is installed and executed.",
    category: "Basic",
    icon: Database,
    safeguards: 2,
    what_it_means: "Know what software is running on every asset. This includes operating systems, applications, drivers, and scripts. Unauthorized or unpatched software is a primary attack vector.",
    common_gaps: [
      " Employees installing unapproved productivity tools",
      " Old versions of software with known vulnerabilities",
      " Browser plugins and extensions not tracked",
      " Software installed for one project and forgotten",
    ],
  },
  {
    number: 3,
    title: "Data Protection",
    description: "Develop processes and technical controls to identify, classify, handle, retain, and dispose of data.",
    category: "Basic",
    icon: FileCheck,
    safeguards: 9,
    what_it_means: "Identify sensitive data, understand where it lives, and protect it through its entire lifecycle. This includes encryption, access controls, and proper disposal.",
    common_gaps: [
      " Sensitive data in unprotected S3 buckets",
      " PII in spreadsheets with broad sharing permissions",
      " No data classification policy",
      " Former employees with persistent access",
    ],
  },
  {
    number: 4,
    title: "Secure Configuration of Enterprise Assets",
    description: "Establish and maintain secure configuration of enterprise assets and software.",
    category: "Basic",
    icon: Shield,
    safeguards: 5,
    what_it_means: "Harden systems by removing unnecessary services, protocols, and accounts. Default configurations are rarely secure. Change them before deployment.",
    common_gaps: [
      " Default passwords on network equipment",
      " Unnecessary services running (Telnet, FTP, RDP exposed)",
      " Firewall rules that allow too much traffic",
      " No baseline configuration for new systems",
    ],
  },
  {
    number: 5,
    title: "Account Management",
    description: "Use processes and tools to assign and manage authorization to enterprise assets to legitimate users.",
    category: "Basic",
    icon: Users,
    safeguards: 6,
    what_it_means: "Control who has access to what. This means managing accounts, privileges, and access rights throughout the employee lifecycle, from onboarding to departure.",
    common_gaps: [
      " Shared accounts with no audit trail",
      " Excessive privileges granted during projects and not revoked",
      " No formal account review process",
      " Service accounts with admin privileges",
    ],
  },
  {
    number: 6,
    title: "Access Control Management",
    description: "Use processes and tools to create, assign, manage, and revoke access credentials and privileges.",
    category: "Basic",
    icon: Lock,
    safeguards: 5,
    what_it_means: "Implement the principle of least privilege. Users should have only the access needed to do their job, nothing more. Review access rights regularly.",
    common_gaps: [
      " Standing admin privileges instead of just-in-time access",
      " No privileged access management system",
      " Shared admin passwords across systems",
      " Inadequate monitoring of privileged account usage",
    ],
  },
  {
    number: 7,
    title: "Continuous Vulnerability Management",
    description: "Develop a plan to continuously assess and track vulnerabilities on all enterprise assets.",
    category: "Foundational",
    icon: AlertTriangle,
    safeguards: 4,
    what_it_means: "Find weaknesses before attackers do. Regular vulnerability scanning and penetration testing help identify patches and configurations that need attention.",
    common_gaps: [
      " Vulnerability scans run quarterly instead of continuously",
      " Critical vulnerabilities not patched within 72 hours",
      " No risk-based prioritization of findings",
      " Remediation tracked in spreadsheets instead of a system",
    ],
  },
  {
    number: 8,
    title: "Audit Log Management",
    description: "Collect, alert, review, and retain audit logs of events that could help detect or recover from attack.",
    category: "Foundational",
    icon: Monitor,
    safeguards: 6,
    what_it_means: "Log collection and monitoring enables detection of anomalies and provides evidence for investigations. Logs should cover authentication, privileged actions, and critical system events.",
    common_gaps: [
      " Logs retained for only 30 days",
      " Critical systems not generating logs",
      " No alerting on suspicious patterns",
      " Logs not protected from tampering",
    ],
  },
  {
    number: 9,
    title: "Email and Web Browser Protections",
    description: "Improve the protection and detection of attacks from email and web vectors.",
    category: "Foundational",
    icon: Globe,
    safeguards: 6,
    what_it_means: "Email and web browsing are primary attack vectors. Implement filters, sandboxing, and protections to reduce the risk of phishing and drive-by downloads.",
    common_gaps: [
      " No email filtering for malware",
      " Outdated web browser on endpoints",
      " No protection against malicious links",
      " Users not trained to spot phishing",
    ],
  },
  {
    number: 10,
    title: "Malware Defenses",
    description: "Prevent or control the installation, spread, and execution of malicious code.",
    category: "Foundational",
    icon: Shield,
    safeguards: 5,
    what_it_means: "Endpoint protection goes beyond traditional antivirus. Modern malware defenses include endpoint detection and response, application control, and regular signature updates.",
    common_gaps: [
      " Signatures not updated regularly",
      " No behavior-based detection",
      " Endpoints not instrumented for EDR",
      " Isolated malware found years later in backup",
    ],
  },
]

export default function CISControlsFramework() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/frameworks"
            className="inline-flex items-center text-sm text-svelte-600 hover:text-slate-900 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Frameworks
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-slate-100">
                <Shield className="h-6 w-6 text-slate-700" />
              </div>
              <Badge className="bg-slate-100 text-slate-700">CIS Controls</Badge>
              <Badge variant="outline">Center for Internet Security</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              CIS Controls v8
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              A prioritized set of 18 critical security controls that actually work. Unlike some frameworks that live in
              documentation, CIS Controls are designed to be implemented, measured, and maintained. They represent the most
              common attack patterns and the most effective defenses.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/get-started">Start Controls Assessment</Link>
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Control Categories</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-xl font-bold text-blue-700">1-6</span>
                </div>
                <CardTitle>Basic Controls</CardTitle>
                <CardDescription>Essential controls every organization should implement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Inventory, software management, data protection, secure configurations, account management, and access
                  control. These six controls address the most common attack vectors.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <span className="text-xl font-bold text-green-700">7-16</span>
                </div>
                <CardTitle>Foundational Controls</CardTitle>
                <CardDescription>Technical controls that improve security posture</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Vulnerability management, audit logs, email and web protections, malware defenses, network
                  defenses, and data loss prevention. These build on the basics.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <span className="text-xl font-bold text-purple-700">17-18</span>
                </div>
                <CardTitle>Organizational Controls</CardTitle>
                <CardDescription>Processes and people-focused controls</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Security awareness training, application security testing, incident response management, and penetration
                  testing. These require organizational commitment.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Controls (Implementation Group 1)</h2>
          <p className="text-slate-600 mb-8">
            Implementation Group 1 represents the essential minimum for every organization. These 43 safeguards address the most
            widespread and dangerous cyber threats with controls that are achievable for organizations with limited resources.
          </p>

          <div className="space-y-6">
            {cisControls.map((control) => (
              <Card key={control.number} className="overflow-hidden">
                <CardHeader className="bg-slate-50">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xl font-bold">
                      {control.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle>{control.title}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {control.category}
                        </Badge>
                      </div>
                      <CardDescription>{control.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        What It Means in Practice
                      </h4>
                      <p className="text-sm text-slate-600">{control.what_it_means}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        Common Gaps We See
                      </h4>
                      <ul className="space-y-1">
                        {control.common_gaps.map((gap, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-slate-400">-</span>
                            {gap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-slate-500">
                      <strong>{control.safeguards} safeguards</strong> in this control
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to assess your CIS Controls implementation?</h3>
              <p className="text-slate-300">
                ABC of Cyber maps your current controls to the CIS framework and identifies the gaps most likely to hurt you.
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
