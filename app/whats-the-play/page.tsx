import Link from "next/link"
import { ArrowRight, Shield, AlertTriangle, Users, Lock, Globe, Briefcase, Code, HeartPulse, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const useCases = [
  {
    icon: Briefcase,
    role: "Small Business Owner",
    scenario: "You run a 12-person accounting firm. A client emails asking why you sent them a strange invoice link — you didn't. Someone is impersonating your domain.",
    play: "Lock down your email with SPF, DKIM, and DMARC records today. Enable MFA on every account that touches client data. Run a phishing simulation with your team so they recognize spoofed senders before the next attempt lands.",
    tags: ["Email Security", "MFA", "Phishing"],
  },
  {
    icon: Code,
    role: "Software Development Team",
    scenario: "Your CI/CD pipeline uses a popular open-source library. A critical CVE drops on a Friday afternoon and your release is scheduled for Monday morning.",
    play: "Integrate a software composition analysis (SCA) tool into your pipeline so vulnerabilities surface before merge, not after deploy. Establish a patch SLA policy — critical CVEs get a 24-hour response window, not a backlog ticket.",
    tags: ["Supply Chain", "DevSecOps", "Patch Management"],
  },
  {
    icon: HeartPulse,
    role: "Healthcare Practice Manager",
    scenario: "Your clinic stores patient records in a cloud EHR. A staff member clicks a malicious attachment and ransomware begins encrypting files. HIPAA breach notification clocks are ticking.",
    play: "Segment your network so clinical systems are isolated from general office machines. Maintain tested offline backups of all PHI. Have your incident response contacts — legal, IT, and your HIPAA privacy officer — documented and reachable before an incident, not during one.",
    tags: ["HIPAA", "Ransomware", "Incident Response"],
  },
  {
    icon: Building2,
    role: "IT Manager at a Mid-Size Company",
    scenario: "Leadership wants a security audit before a Series B close. You have 60 days, a mixed cloud and on-prem environment, and no formal asset inventory.",
    play: "Start with an asset discovery scan to build your inventory — you cannot protect what you cannot see. Map your environment against CIS Controls Level 1 as a baseline. Prioritize findings by exploitability and business impact so you can show investors a credible risk register, not just a list of open ports.",
    tags: ["CIS Controls", "Asset Management", "Risk Register"],
  },
  {
    icon: Users,
    role: "HR & People Operations Team",
    scenario: "An employee is offboarded on a Friday. By Monday, their credentials are still active in three SaaS tools, including your payroll platform.",
    play: "Build a formal offboarding checklist that triggers automatic deprovisioning through your identity provider. Audit third-party SaaS access quarterly — most breaches involving former employees exploit accounts that were simply never closed.",
    tags: ["Identity Management", "Access Control", "Offboarding"],
  },
]

export default function WhatsThePlayPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">What&apos;s the Play</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Real scenarios. Concrete next steps.
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            Security advice is only useful when it maps to your actual situation. Browse the scenarios below to find your role, understand the risk, and walk away with a clear action plan — no jargon, no vendor pitch.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-8 md:px-6">
        <div className="max-w-3xl">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 flex gap-4 items-start">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
            <p className="text-sm text-amber-800 leading-relaxed">
              <span className="font-semibold">How to use this page:</span> Find the scenario closest to your situation. The &ldquo;The Play&rdquo; section gives you the highest-leverage actions to take first. Start there, then explore the linked frameworks for deeper guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:px-6">
        <div className="max-w-3xl space-y-8">
          {useCases.map((uc, i) => (
            <Card key={i} className="border border-slate-200 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-1">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                    <uc.icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">{uc.role}</CardTitle>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {uc.tags.map((tag) => (
                    <span key={tag} className="inline-block rounded-full bg-slate-100 px-3 py-0.5 text-xs font-medium text-slate-600">{tag}</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">The Scenario</p>
                  <p className="text-slate-700 leading-relaxed">{uc.scenario}</p>
                </div>
                <div className="rounded-lg bg-blue-50 border border-blue-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-1">The Play</p>
                  <p className="text-slate-800 leading-relaxed text-sm">{uc.play}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="max-w-3xl rounded-2xl bg-slate-900 px-8 py-12 text-center space-y-5">
          <Shield className="mx-auto h-10 w-10 text-blue-400" />
          <h2 className="text-2xl font-bold text-white">Don&apos;t see your scenario?</h2>
          <p className="text-slate-300 leading-relaxed">
            Every organization&apos;s risk profile is different. Explore our frameworks library for structured guidance, or use the AI advisor to get a tailored starting point for your specific environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/frameworks">Browse Frameworks <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white">
              <Link href="/tools">Try the AI Advisor</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
