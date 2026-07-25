"use client"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
  Loader2,
  Sparkles,
  FileText,
  ShieldAlert,
  Siren,
  Lock,
  ArrowLeft,
  Copy,
  Check,
  Download,
} from "lucide-react"
import Link from "next/link"

export interface WizardQuestion {
  id: string
  label: string
  placeholder: string
  type: "text" | "textarea"
}

export interface ToolConfig {
  slug: string
  name: string
  description: string
  icon: "security-policy" | "risk-assessment" | "incident-response"
  questions: WizardQuestion[]
}

const TOOL_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "security-policy": FileText,
  "risk-assessment": ShieldAlert,
  "incident-response": Siren,
}

const TOOL_CONFIGS: Record<string, ToolConfig> = {
  "security-policy": {
    slug: "security-policy",
    name: "Security Policy Generator",
    description:
      "Create a comprehensive security policy document tailored to your organization.",
    icon: "security-policy",
    questions: [
      {
        id: "organization",
        label: "Organization Name",
        placeholder: "e.g. Acme Corp",
        type: "text",
      },
      {
        id: "industry",
        label: "Industry",
        placeholder: "e.g. Healthcare, Finance, Technology",
        type: "text",
      },
      {
        id: "employees",
        label: "Approximate Number of Employees",
        placeholder: "e.g. 50-200",
        type: "text",
      },
      {
        id: "concerns",
        label: "Key Security Concerns",
        placeholder:
          "Describe your main security concerns (e.g. data breaches, insider threats, ransomware)",
        type: "textarea",
      },
      {
        id: "compliance",
        label: "Compliance Requirements",
        placeholder:
          "e.g. NIST CSF, ISO 27001, SOC 2, HIPAA, GDPR (list all that apply)",
        type: "text",
      },
      {
        id: "current",
        label: "Current Security Measures",
        placeholder:
          "Briefly describe any existing security measures or tools in place",
        type: "textarea",
      },
    ],
  },
  "risk-assessment": {
    slug: "risk-assessment",
    name: "Risk Assessment",
    description:
      "Generate a structured risk evaluation report with threat identification and scoring.",
    icon: "risk-assessment",
    questions: [
      {
        id: "organization",
        label: "Organization / Department Name",
        placeholder: "e.g. Acme Corp - IT Department",
        type: "text",
      },
      {
        id: "assets",
        label: "Critical Assets to Protect",
        placeholder:
          "e.g. Customer database, financial systems, intellectual property, employee data",
        type: "textarea",
      },
      {
        id: "threats",
        label: "Primary Threat Concerns",
        placeholder:
          "e.g. Phishing, ransomware, insider threats, supply chain attacks, DDoS",
        type: "textarea",
      },
      {
        id: "controls",
        label: "Existing Controls in Place",
        placeholder:
          "e.g. MFA, endpoint protection, SIEM, access controls, security awareness training",
        type: "textarea",
      },
      {
        id: "appetite",
        label: "Risk Appetite Level",
        placeholder: "e.g. Low (avoid most risks), Moderate (accept some), High (aggressive growth)",
        type: "text",
      },
      {
        id: "compliance",
        label: "Applicable Regulations / Standards",
        placeholder:
          "e.g. NIST, ISO 27001, SOC 2, HIPAA, PCI-DSS, GDPR",
        type: "text",
      },
    ],
  },
  "incident-response": {
    slug: "incident-response",
    name: "Incident Response Plan",
    description:
      "Build a complete incident response plan framework with actionable phases.",
    icon: "incident-response",
    questions: [
      {
        id: "organization",
        label: "Organization Name",
        placeholder: "e.g. Acme Corp",
        type: "text",
      },
      {
        id: "team",
        label: "Number of IT / Security Staff",
        placeholder: "e.g. 3-5 (or 'outsourced/SOC-as-a-service')",
        type: "text",
      },
      {
        id: "systems",
        label: "Types of Systems / Tech Stack",
        placeholder:
          "e.g. Cloud (AWS/Azure), on-prem servers, SaaS apps, endpoints (Windows/Mac/Linux)",
        type: "textarea",
      },
      {
        id: "communication",
        label: "Communication Channels During Incidents",
        placeholder:
          "e.g. Slack, email, phone tree, dedicated IR channel, pagerduty",
        type: "textarea",
      },
      {
        id: "severity",
        label: "How Would You Define Incident Severity Levels?",
        placeholder:
          "e.g. Low (no data loss), Medium (isolated breach), High (widespread compromise), Critical (ransomware)",
        type: "textarea",
      },
      {
        id: "reporting",
        label: "Compliance / Reporting Requirements",
        placeholder:
          "e.g. 72-hour breach notification (GDPR), law enforcement reporting, board notification",
        type: "textarea",
      },
    ],
  },
}

function SubscribeWall() {
  return (
    <div className="flex items-center justify-center py-12">
      <Card className="w-full max-w-lg border-blue-200 shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <Lock className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl">Unlock Unlimited Access</CardTitle>
          <CardDescription className="text-base mt-2">
            You&apos;ve used your free AI-generated security document. Upgrade
            to continue.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
              <span>
                <strong>Unlimited</strong> AI security document generation
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
              <span>
                <strong>Advanced models</strong> with deeper security analysis
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
              <span>
                <strong>Pro subscription</strong> unlocks compliance-ready
                templates
              </span>
            </li>
          </ul>
          <p className="text-xs text-muted-foreground text-center">
            Free tier included one report with Gemini Flash.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button asChild className="w-full" size="lg">
            <Link href="/pricing">View Pricing Plans</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/tools">Back to Tools</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

interface CyberWizardProps {
  toolSlug: string
}

export default function CyberWizard({ toolSlug }: CyberWizardProps) {
  const config = TOOL_CONFIGS[toolSlug]
  const [step, setStep] = useState<"form" | "generating" | "result" | "wall">(
    "form",
  )
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  // Check free trial on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const used = localStorage.getItem("abccyber_free_uses")
      if (used && parseInt(used, 10) >= 1) {
        setStep("wall")
      }
    }
  }, [])

  const updateAnswer = useCallback(
    (id: string, value: string) => {
      setAnswers((prev) => ({ ...prev, [id]: value }))
    },
    [],
  )

  const nextQuestion = useCallback(() => {
    if (!config) return
    if (currentQuestion < config.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      generateDocument()
    }
  }, [currentQuestion, config])

  const prevQuestion = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }, [currentQuestion])

  const generateDocument = useCallback(async () => {
    if (!config) return
    setStep("generating")
    setError(null)

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tool: toolSlug,
          answers,
        }),
      })

      if (!response.ok) {
        const errData = await response.json().catch(() => null)
        throw new Error(
          errData?.error || `Server returned ${response.status}`,
        )
      }

      const data = await response.json()

      // Mark the free use
      if (typeof window !== "undefined") {
        localStorage.setItem("abccyber_free_uses", "1")
      }

      setResult(data.content)
      setStep("result")
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      )
      setStep("form")
    }
  }, [config, toolSlug, answers])

  const copyResult = useCallback(() => {
    if (!result) return
    navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [result])

  const downloadResult = useCallback(() => {
    if (!result || !config) return
    const blob = new Blob([result], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${config.slug}-${Date.now()}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [result, config])

  const reset = useCallback(() => {
    setStep("form")
    setCurrentQuestion(0)
    setAnswers({})
    setResult(null)
    setError(null)
    setCopied(false)
  }, [])

  if (step === "wall") {
    return <SubscribeWall />
  }

  if (!config) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-bold text-red-600">Tool Not Found</h2>
        <p className="mt-2 text-muted-foreground">
          The tool you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button asChild className="mt-6">
          <Link href="/tools">Browse Tools</Link>
        </Button>
      </div>
    )
  }

  const Icon = TOOL_ICONS[config.icon] || FileText
  const question = config.questions[currentQuestion]
  const progress =
    ((currentQuestion + 1) / config.questions.length) * 100
  const currentAnswer = answers[question?.id] || ""

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/tools"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Tools
        </Link>
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-2.5">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {config.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              {config.description}
            </p>
          </div>
        </div>
        <Badge variant="secondary" className="mt-3">
          Free tier: 1 report
        </Badge>
      </div>

      {/* Generating State */}
      {step === "generating" && (
        <Card className="border-blue-200">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
            <h2 className="mt-6 text-xl font-semibold">
              Generating Your Document
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Analyzing your inputs and creating a tailored{" "}
              {config.name.toLowerCase()} with Gemini...
            </p>
          </CardContent>
        </Card>
      )}

      {/* Form State */}
      {step === "form" && question && (
        <Card className="border-blue-100">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                Question {currentQuestion + 1} of {config.questions.length}
              </span>
            </div>
            <Progress value={progress} className="mt-2 h-2" />
            <CardTitle className="mt-4 text-xl">{question.label}</CardTitle>
          </CardHeader>
          <CardContent>
            {question.type === "textarea" ? (
              <Textarea
                placeholder={question.placeholder}
                value={currentAnswer}
                onChange={(e) => updateAnswer(question.id, e.target.value)}
                rows={4}
                className="resize-y min-h-[100px]"
              />
            ) : (
              <Input
                placeholder={question.placeholder}
                value={currentAnswer}
                onChange={(e) => updateAnswer(question.id, e.target.value)}
                className="w-full"
              />
            )}
            {error && (
              <p className="mt-3 text-sm text-red-500">{error}</p>
            )}
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="outline" onClick={prevQuestion} disabled={currentQuestion === 0}>
              Previous
            </Button>
            <Button
              onClick={nextQuestion}
              disabled={!currentAnswer.trim()}
            >
              {currentQuestion < config.questions.length - 1
                ? "Next"
                : "Generate Document"}
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Result State */}
      {step === "result" && result && (
        <div className="space-y-4">
          <Card className="border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  Document Generated
                </CardTitle>
                <CardDescription>
                  Your {config.name.toLowerCase()} has been created using Gemini
                  Flash.
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={copyResult}>
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="ml-1">{copied ? "Copied" : "Copy"}</span>
                </Button>
                <Button variant="outline" size="sm" onClick={downloadResult}>
                  <Download className="h-4 w-4" />
                  <span className="ml-1">Download</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border bg-muted/30 p-4">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                  {result}
                </pre>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <Button variant="outline" onClick={reset}>
                Generate Another
              </Button>
              <Button asChild>
                <Link href="/tools">Browse More Tools</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}
