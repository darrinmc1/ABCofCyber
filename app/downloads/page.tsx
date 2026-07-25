import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const downloads = [
  {
    id: "security-policy",
    title: "Security Policy Template",
    description:
      "A comprehensive company-wide information security policy covering access control, data handling, incident reporting, password policy, and remote work. Ready for your CISO to review and adopt.",
    filename: "security-policy-template.pdf",
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
      "An asset-based risk register with threat, vulnerability, likelihood, and impact scoring. Includes existing controls mapping and recommended remediation with ownership tracking.",
    filename: "risk-assessment-template.pdf",
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
      "A structured incident response playbook covering all six IR phases: Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned. Includes team roles and escalation tree.",
    filename: "incident-response-plan-template.pdf",
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
      "A CVSS-based vulnerability remediation tracker to log, prioritise, and track security findings from discovery through remediation with full status lifecycle.",
    filename: "vulnerability-tracker-template.pdf",
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
      "A control-area compliance checklist aligned with NIST CSF and ISO 27001 frameworks. Track compliant, non-compliant, and N/A items with evidence and ownership.",
    filename: "compliance-checklist-template.pdf",
    icon: "✅",
    features: [
      "Control area categorisation",
      "Compliant / Non-Compliant / N/A status",
      "Evidence & notes fields",
      "Owner & review date tracking",
      "Compliance summary with % scores",
    ],
  },
]

const fileSizes: Record<string, string> = {
  "security-policy-template.pdf": "4.4 KB",
  "risk-assessment-template.pdf": "3.4 KB",
  "incident-response-plan-template.pdf": "4.7 KB",
  "vulnerability-tracker-template.pdf": "3.6 KB",
  "compliance-checklist-template.pdf": "4.0 KB",
}

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950">
      {/* Hero */}
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
              Professional cybersecurity templates built from real-world frameworks.
              No fluff, no gatekeeping — just instruments that work.
            </p>
          </div>
        </div>
      </section>

      {/* Download Cards */}
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto max-w-5xl space-y-8 px-4 md:px-6">
          {downloads.map((item) => (
            <Card
              key={item.id}
              className="border-indigo-900/40 bg-slate-900/60 text-white shadow-lg shadow-indigo-950/20 backdrop-blur-sm transition-all hover:border-indigo-700/60 hover:shadow-indigo-800/30"
            >
              <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
                <span className="mt-1 text-3xl">{item.icon}</span>
                <div>
                  <CardTitle className="text-xl text-white md:text-2xl">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="mt-1 text-indigo-300/80">
                    {fileSizes[item.filename]} &middot; PDF
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
                  asChild
                  className="bg-violet-600 text-white hover:bg-violet-700"
                >
                  <Link href={`/downloads/${item.filename}`} download>
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download PDF
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full border-t border-indigo-900/50 bg-slate-950 py-12">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold text-white">
            Need custom templates?
          </h2>
          <p className="mx-auto mt-2 max-w-[600px] text-indigo-300/70">
            We build bespoke cybersecurity documentation tailored to your
            compliance requirements and industry standards.
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-6 border-violet-700 text-violet-300 hover:bg-violet-950 hover:text-violet-200"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
