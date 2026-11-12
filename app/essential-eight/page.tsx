import type { Metadata } from "next"
import Link from "next/link"
import { pageMeta } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { JsonLd } from "@/components/json-ld"
import { ArrowRight, ShieldCheck } from "lucide-react"

export const metadata: Metadata = pageMeta({
  title: "Essential Eight starter path",
  description:
    "Walk the ACSC Essential Eight in order, one practical lesson at a time — built for the person who owns security as part of a bigger job, not a dedicated security team.",
  path: "/essential-eight",
})

type Step = {
  number: number
  strategy: string
  summary: string
  lessonHref: string
  lessonTitle: string
  note?: string
}

// Each step maps to real, existing lesson/framework content — no new claims
// invented for this page. harden-your-laptop already covers 7 of the 8
// Essential Eight strategies in detail; this path sequences those plus
// password-security, mfa-fatigue and the incident plan into one flagship
// starter route, and is upfront that application control is the one item
// that typically needs business IT or a vendor, not a solo laptop setting.
const steps: Step[] = [
  {
    number: 1,
    strategy: "Patch applications",
    summary:
      "Most attacks use a known bug that already has a fix. Turn on automatic updates for your browser, office apps, and anything else that asks.",
    lessonHref: "/learn/harden-your-laptop",
    lessonTitle: "Harden Your Laptop (Without Becoming a Sysadmin)",
  },
  {
    number: 2,
    strategy: "Patch operating systems",
    summary: "Same idea, one level down: automatic OS updates, and actually restarting when it asks.",
    lessonHref: "/learn/harden-your-laptop",
    lessonTitle: "Harden Your Laptop (Without Becoming a Sysadmin)",
  },
  {
    number: 3,
    strategy: "Configure Microsoft Office macro settings",
    summary: "Block macros from the internet. Newer Office versions default to this — the step is checking, not assuming.",
    lessonHref: "/learn/harden-your-laptop",
    lessonTitle: "Harden Your Laptop (Without Becoming a Sysadmin)",
  },
  {
    number: 4,
    strategy: "User application hardening",
    summary: "Tighten browser and app settings so the common attack paths — malicious ads, risky downloads, exposed plugins — have less to work with.",
    lessonHref: "/learn/harden-your-laptop",
    lessonTitle: "Harden Your Laptop (Without Becoming a Sysadmin)",
  },
  {
    number: 5,
    strategy: "Restrict administrative privileges",
    summary: "Use a standard account for daily work and keep admin rights for installing software. Malware running as a standard user can do far less damage.",
    lessonHref: "/learn/harden-your-laptop",
    lessonTitle: "Harden Your Laptop (Without Becoming a Sysadmin)",
  },
  {
    number: 6,
    strategy: "Multi-factor authentication",
    summary: "Turn on MFA everywhere it's offered, then learn the one push-notification trick attackers use to get past it anyway.",
    lessonHref: "/learn/password-security",
    lessonTitle: "Password Security Basics",
    note: "Pair this with MFA Fatigue Attacks once MFA is on — knowing the attack that targets MFA itself is the next real step.",
  },
  {
    number: 7,
    strategy: "Regular backups",
    summary:
      "Automatic backups, with at least one copy that isn't permanently connected, so ransomware can't reach it — and a habit of actually restoring a file to prove it works.",
    lessonHref: "/learn/harden-your-laptop",
    lessonTitle: "Harden Your Laptop (Without Becoming a Sysadmin)",
    note: "If a backup ever needs to double as your recovery plan, the one-page incident plan lesson covers what happens next.",
  },
  {
    number: 8,
    strategy: "Application control",
    summary:
      "Only letting approved programs run. This is the one Essential Eight strategy that's usually a job for business IT or a managed endpoint tool, not a personal laptop setting — but it's worth knowing what it is and asking your IT provider whether it's in place.",
    lessonHref: "/frameworks/cis-controls",
    lessonTitle: "CIS Controls — endpoint & malware defenses",
  },
]

const starterPathSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Essential Eight starter path",
  description:
    "An ordered, lesson-by-lesson path through the ACSC Essential Eight mitigation strategies.",
  step: steps.map((step) => ({
    "@type": "HowToStep",
    position: step.number,
    name: step.strategy,
    text: step.summary,
  })),
}

export default function EssentialEightPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={starterPathSchema} />

      <section className="relative w-full overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 py-12 text-white md:py-20">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-5 text-center">
            <Badge className="bg-blue-500/20 text-blue-100 hover:bg-blue-500/20">Flagship starter path</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Essential Eight, one lesson at a time
            </h1>
            <p className="mx-auto max-w-[700px] text-blue-100 md:text-lg">
              The ACSC Essential Eight is eight mitigation strategies, not a 900-page framework. This is the order to
              do them in when security is part of your job, not all of it — each step links to the real lesson that
              covers it.
            </p>
            <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-blue-100">
              <Link href="#step-1">
                Start with step 1 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <ol className="space-y-6">
            {steps.map((step) => (
              <li key={step.number} id={`step-${step.number}`}>
                <Card className="border-slate-200">
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      {step.number}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{step.strategy}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-6 text-slate-600">{step.summary}</p>
                    {step.note ? <p className="text-sm leading-6 text-slate-500 italic">{step.note}</p> : null}
                    <Button asChild variant="outline" size="sm">
                      <Link href={step.lessonHref}>Read: {step.lessonTitle}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>

          <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">
            <ShieldCheck className="h-8 w-8 text-blue-700" />
            <p className="text-sm text-slate-700">
              That&apos;s all eight. No maturity-level scoring tool here — the ACSC maturity levels measure how
              thoroughly each strategy is done, not a ninth thing to buy.
            </p>
            <Button asChild>
              <Link href="/learn">Browse all lessons</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
