import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    icon: Shield,
    title: "Assess your current posture",
    description: "Use our guided assessment tools to understand where your security program stands today.",
  },
  {
    icon: BookOpen,
    title: "Learn the fundamentals",
    description: "Work through our practical modules covering the security basics every team needs to know.",
  },
  {
    icon: Zap,
    title: "Build your roadmap",
    description: "Get a prioritized action plan tailored to your team's size, industry, and risk profile.",
  },
]

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Get started</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Your security program starts here
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            Three steps to move from reactive to proactive security — no prior expertise required.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card key={step.title} className="border-slate-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-blue-50 p-2">
                      <step.icon className="h-5 w-5 text-blue-700" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Step {index + 1}</span>
                  </div>
                  <CardTitle className="text-base font-semibold text-slate-900 mt-2">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-6">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Ready to get started?</h2>
          <p className="text-slate-600">Create your free account and begin your first assessment in minutes.</p>
          <Button asChild size="lg" className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10">
            <Link href="/sign-up">Create your free account <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <p className="text-sm text-slate-500">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-semibold text-blue-700 hover:text-blue-800">Sign in</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
