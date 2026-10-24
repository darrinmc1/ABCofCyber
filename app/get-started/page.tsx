import type { Metadata } from "next"
import Link from "next/link"
import { pageMeta } from "@/lib/seo"
import { ArrowRight, BookOpen, Library, MailWarning, ScrollText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = pageMeta({
  title: "Get Started",
  description: "Start with a lesson, a framework note, a template, or the What's the play walkthrough.",
  path: "/get-started",
})

const steps = [
  {
    title: "Read a lesson",
    description: "The catalogue covers phishing, email headers, encryption, identity, and incident thinking.",
    href: "/learn",
    label: "Open lessons",
    icon: BookOpen,
  },
  {
    title: "Read the framework notes",
    description: "NIST CSF, ISO 27001, CIS, risk, monitoring, and incident response, written as notes.",
    href: "/frameworks",
    label: "Open frameworks",
    icon: Library,
  },
  {
    title: "Download a template",
    description: "Policy, risk, incident, and other PDFs. Fill them in yourself.",
    href: "/downloads",
    label: "Open templates",
    icon: ScrollText,
  },
  {
    title: "Paste a scenario",
    description: "What's the play returns a walkthrough cited from lessons. It is not a chatbot and not advice.",
    href: "/whats-the-play",
    label: "Open the walkthrough",
    icon: MailWarning,
  },
]

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Get Started</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Start with a page that already exists
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Pick a lesson, a framework note, a template, or the scenario walkthrough. There is no assessment
              and no dashboard waiting behind this page.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/learn">
                  Start with lessons
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle>If you want a draft document</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-slate-700">
              <p>Sign in, then open Tools.</p>
              <p>You can draft a security policy, a risk assessment, or an incident plan from your own answers.</p>
              <p>
                The result is markdown. It is a draft, not a finished policy and not a certification pack.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/tools">Open tools</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-2">
          {steps.map(({ title, description, href, label, icon: Icon }) => (
            <Card key={title}>
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-6 text-slate-600">{description}</p>
                <Button asChild variant="outline" size="sm">
                  <Link href={href}>{label}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white">
        <div className="container mx-auto flex flex-col gap-4 px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tight">A question that is not answered on a lesson page</h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            Use the contact form. It posts the message. It does not book a call.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
