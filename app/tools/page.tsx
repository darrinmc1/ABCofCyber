import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, ShieldAlert, Siren, Sparkles, MessageSquareWarning } from "lucide-react"

const tools = [
  {
    slug: "whats-the-play",
    href: "/whats-the-play",
    name: "What's the play",
    description:
      "Paste an “is this phishing?” scenario. Get a plain-English ABC method walkthrough cited from existing lessons. Education only — not a chatbot, not legal advice.",
    icon: MailWarning,
    color: "text-slate-800",
    bgColor: "bg-slate-100",
    badge: "One job",
  },
  {
    slug: "security-policy",
    href: "/tools/security-policy",
    name: "Security Policy Generator",
    description:
      "Create a comprehensive security policy document tailored to your organization. Answer a few questions and get a professional, ready-to-use policy.",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    badge: "Popular",
  },
  {
    slug: "risk-assessment",
    href: "/tools/risk-assessment",
    name: "Risk Assessment",
    description:
      "Generate a structured risk evaluation report with asset inventory, threat identification, vulnerability assessment, and risk scoring.",
    icon: ShieldAlert,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    badge: null,
  },
  {
    slug: "incident-response",
    href: "/tools/incident-response",
    name: "Incident Response Plan",
    description:
      "Build a complete incident response plan framework with preparation, detection, containment, recovery, and post-incident phases.",
    icon: Siren,
    color: "text-red-600",
    bgColor: "bg-red-100",
    badge: null,
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
            <Sparkles className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            AI Security Tools
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Document generators plus What&apos;s the play — a layer on the lesson
            archive, not a new brand. Paste a scenario or answer a few questions.
          </p>
          <Badge variant="secondary" className="mt-4">
            Free tier: 1 report — Unlimited with Pro
          </Badge>
        </div>

        {/* Tools Grid */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <Card
                key={tool.slug}
                className="flex flex-col border-slate-200 transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div
                    className={`mb-3 inline-flex rounded-lg p-3 ${tool.bgColor}`}
                  >
                    <Icon className={`h-6 w-6 ${tool.color}`} />
                  </div>
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  {tool.badge && (
                    <Badge
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                    >
                      {tool.badge}
                    </Badge>
                  )}
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-500">
                    {tool.slug === "whats-the-play" ? (
                      <>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          Paste a scenario, get a walkthrough
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          Cited from live lessons
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          Education only — disclaimer included
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          Quick question-based wizard
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          Powered by Gemini Flash
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          Export as markdown
                        </li>
                      </>
                    )}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={tool.href}>
                      Get Started
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Info Section */}
        <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold">
            How It Works
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                1
              </div>
              <h3 className="mt-3 font-medium">Answer Questions</h3>
              <p className="mt-1 text-sm text-slate-500">
                Fill in a short questionnaire about your organization.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                2
              </div>
              <h3 className="mt-3 font-medium">AI Generates Document</h3>
              <p className="mt-1 text-sm text-slate-500">
                Gemini Flash creates a tailored document from your inputs.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                3
              </div>
              <h3 className="mt-3 font-medium">Copy or Download</h3>
              <p className="mt-1 text-sm text-slate-500">
                Get your document as markdown to use immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
