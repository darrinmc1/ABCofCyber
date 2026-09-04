import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const downloads = [
  {
    id: "security-policy",
    title: "Security Policy Template",
    description:
      "Planned: a company-wide information security policy covering access control, data handling, incident reporting, password policy, and remote work.",
    icon: "🛡️",
    features: [
      "Purpose & scope definition",
      "Access control & least privilege",
      "Data classification & handling",
      "Incident reporting procedures",
      "Password & remote work policies",
    ],
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment Template",
    description:
      "Planned: an asset-based risk register with threat, vulnerability, likelihood, and impact scoring.",
    icon: "⚠️",
    features: [
      "Asset inventory & threat identification",
      "Likelihood & impact scoring (1-5)",
      "Risk level calculation (5x5 matrix)",
      "Existing & recommended controls",
      "Owner assignment per risk",
    ],
  },
  {
    id: "incident-response",
    title: "Incident Response Plan Template",
    description:
      "Planned: a structured incident response playbook covering preparation through lessons learned.",
    icon: "🚨",
    features: [
      "Six-phase IR playbook",
      "Team roles & responsibilities",
      "Escalation tree (4 levels)",
      "Key contacts directory",
      "Post-incident review workflow",
    ],
  },
  {
    id: "vulnerability-tracker",
    title: "Vulnerability Tracker Template",
    description:
      "Planned: a CVSS-based tracker to log findings from discovery through remediation.",
    icon: "🔍",
    features: [
      "CVSS severity scoring (0-10)",
      "Remediation status tracking",
      "Discovered & remediation dates",
      "Affected system mapping",
      "Status legend & SLAs",
    ],
  },
  {
    id: "compliance-checklist",
    title: "Compliance Checklist Template",
    description:
      "Planned: a control-area checklist aligned with NIST CSF and ISO 27001 language.",
    icon: "✅",
    features: [
      "Control area categorisation",
      "Compliant / Non-Compliant / N/A status",
      "Evidence & notes fields",
      "Owner & review date tracking",
      "Compliance summary with % scores",
    ],
  },
  {
    id: "password-policy",
    title: "Password Policy Template",
    description:
      "Planned: length, MFA, lockout, and shared-account rules you can actually adopt.",
    icon: "🔐",
    features: [
      "Length & complexity requirements",
      "Expiry & password history rules",
      "MFA enforcement requirements",
      "Account lockout threshold policy",
      "Shared account & compliance controls",
    ],
  },
  {
    id: "security-awareness-log",
    title: "Security Awareness Training Log",
    description:
      "Planned: a completion log for awareness modules — dates, scores, next due.",
    icon: "📋",
    features: [
      "Date & employee name tracking",
      "Module & score recording",
      "Certificate issuance status",
      "Next due date scheduling",
      "Pass rate & compliance summary",
    ],
  },
  {
    id: "access-control-matrix",
    title: "Access Control Matrix",
    description:
      "Planned: a role-based rights matrix with a quarterly review sign-off.",
    icon: "🔑",
    features: [
      "Multi-system access mapping",
      "Role-based permission columns",
      "R/W/A/N permission legend",
      "Quarterly review sign-off",
      "Exception policy reference",
    ],
  },
  {
    id: "vendor-security-assessment",
    title: "Vendor Security Assessment",
    description:
      "Planned: a third-party risk sheet — service, data access, certifications, rating.",
    icon: "🤝",
    features: [
      "Vendor & service profiling",
      "Data access level classification",
      "Certification & risk rating",
      "Assessment date & approval",
      "Remediation recommendations",
    ],
  },
  {
    id: "business-continuity-plan",
    title: "Business Continuity Plan",
    description:
      "Planned: a short BCP covering critical functions, RTO/RPO, and a drill cadence.",
    icon: "🔄",
    features: [
      "Purpose, scope & critical functions",
      "RTO & RPO targets per function",
      "Backup frequency & encryption",
      "Communication tree with contacts",
      "Quarterly review & drill schedule",
    ],
  },
]

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950">
      <section className="w-full border-b border-indigo-900/50 bg-gradient-to-r from-indigo-950 via-violet-950 to-slate-950 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
              Free Resources
            </p>
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Downloadable Templates
            </h1>
            <p className="max-w-[680px] text-indigo-200 md:text-lg">
              Ten templates are on the board. The PDF files are not published yet — every
              previous download link 404&apos;d. Until they ship, this page is a catalog,
              not a file cabinet.
            </p>
            <Badge className="bg-amber-200 text-amber-950 hover:bg-amber-200">
              Coming Soon — no files to download
            </Badge>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto max-w-5xl space-y-8 px-4 md:px-6">
          {downloads.map((item) => (
            <Card
              key={item.id}
              className="border-indigo-900/40 bg-slate-900/60 text-white shadow-lg shadow-indigo-950/20 backdrop-blur-sm"
            >
              <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
                <span className="mt-1 text-3xl">{item.icon}</span>
                <div>
                  <CardTitle className="text-xl text-white md:text-2xl">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="mt-1 text-indigo-300/80">
                    Coming Soon · PDF not published
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-indigo-900/30 pt-4">
                <Button
                  disabled
                  className="bg-slate-700 text-slate-200 cursor-not-allowed opacity-80"
                >
                  Coming Soon
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full border-t border-indigo-900/50 bg-slate-950 py-12">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold text-white">
            Lessons are live. Templates are not.
          </h2>
          <p className="mx-auto mt-2 max-w-[600px] text-indigo-300/70">
            Written lessons on /learn are the product you can use today. These
            templates will appear here when the files exist — no Stripe, no
            invented downloads.
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-6 border-violet-700 text-violet-300 hover:bg-violet-950 hover:text-violet-200"
          >
            <Link href="/learn">Browse lessons</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
