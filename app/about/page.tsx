import Link from "next/link"
import { ArrowRight, Shield, Users, Globe, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const values = [
  {
    icon: Shield,
    title: "Security without theater",
    description: "We build security programs that work in practice, not just in the demo environment where everything behaves perfectly.",
  },
  {
    icon: Users,
    title: "Team-first approach",
    description: "Security succeeds when the whole team understands it, not just the person who stayed at the last boring compliance seminar.",
  },
  {
    icon: Globe,
    title: "Practical over perfect",
    description: "A good security program that exists beats a perfect one that lives in a planning document forever.",
  },
  {
    icon: Lightbulb,
    title: "Honest assessment",
    description: "We tell you what is actually risky, not what sounds impressive in a board meeting or scares you into buying more services.",
  },
]

const teamPrinciples = [
  {
    name: "Clarity over jargon",
    description: "Good security communication explains what matters in language people can use, not acronyms that sound impressive at conferences.",
  },
  {
    name: "Evidence over assumptions",
    description: "Recommendations are grounded in assessment data, not generic checklists or whatever was trending on security Twitter this month.",
  },
  {
    name: "Progress over perfection",
    description: "We celebrate concrete security improvements, not performative compliance theater that nobody actually understands.",
  },
  {
    name: "Sustainability",
    description: "Security programs should not require heroics. Built properly, they run on process and habit, not individual brilliance.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">About</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            We help teams stop calling luck a security strategy
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            CyberShield was built by practitioners who got tired of seeing security programs that looked impressive in
            decks and collapsed in practice. We focus on the controls, assessment, and habits that actually reduce risk
            without requiring a cult-like devotion to process.
          </p>
          <p className="text-lg leading-8 text-slate-600">
            The platform is designed for security leads, compliance teams, and the one exhausted admin who keeps
            everything from catching fire while attending meetings about fire prevention.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-slate-900">What we believe</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <value.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-slate-900">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Card className="border-slate-200 bg-slate-900 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">The actual problem we solve</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p>
                  Most organizations have security risks they can name and security risks they cannot. The dangerous ones are
                  usually in the second category.
                </p>
                <p>
                  CyberShield helps teams move from vague anxiety about risk to structured assessment, practical controls,
                  and reporting that helps decision-makers actually decide.
                </p>
                <p>
                  We are not here to sell you a dashboard and disappear. We are here to help you build something that
                  works when nobody is watching.
                </p>
                <div className="pt-4">
                  <Link href="/get-started">
                    <Button className="bg-white text-slate-900 hover:bg-blue-100">
                      Work with us <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4 md:px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-slate-900">How we work</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamPrinciples.map((principle) => (
            <Card key={principle.name}>
              <CardHeader>
                <CardTitle className="text-lg">{principle.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Still reading? You might be our kind of team.
            </h2>
            <p className="mb-8 text-lg text-slate-300">
              We work with organizations that want to actually improve their security posture, not just collect badges
              and hope for the best.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/get-started">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-100">
                  Start the conversation
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Ask a question
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
