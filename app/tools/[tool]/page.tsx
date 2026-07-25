import { notFound } from "next/navigation"
import CyberWizard from "@/components/tools/cyber-wizard"

const VALID_TOOLS = ["security-policy", "risk-assessment", "incident-response"]

interface ToolPageProps {
  params: Promise<{ tool: string }>
}

export async function generateMetadata({ params }: ToolPageProps) {
  const { tool } = await params

  const meta: Record<string, { title: string; description: string }> = {
    "security-policy": {
      title: "Security Policy Generator | ABC of Cyber",
      description:
        "Generate a comprehensive security policy document tailored to your organization with AI.",
    },
    "risk-assessment": {
      title: "Risk Assessment Tool | ABC of Cyber",
      description:
        "Generate a structured risk evaluation report with threat identification and risk scoring.",
    },
    "incident-response": {
      title: "Incident Response Plan Generator | ABC of Cyber",
      description:
        "Build a complete incident response plan framework with AI-powered guidance.",
    },
  }

  const info = meta[tool]
  if (!info) {
    return { title: "Tool Not Found | ABC of Cyber" }
  }

  return {
    title: info.title,
    description: info.description,
  }
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { tool } = await params

  if (!VALID_TOOLS.includes(tool)) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <CyberWizard toolSlug={tool} />
      </div>
    </div>
  )
}
