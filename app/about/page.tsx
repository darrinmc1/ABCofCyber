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
            ABC of Cyber was built by practitioners who got tired of seeing security programs that looked impressive in
            decks and collapsed under real-world pressure. We focus on what actually reduces risk for teams that do not
            have a dedicated security department on every floor.
          </p>
          <div className="pt-2">
            <Button asChild size="lg" className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8">
              <Link href="/sign-up">Get started free <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">What we believe</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} className="border-slate-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-blue-50 p-2">
                      <value.icon className="h-5 w-5 text-blue-700" />
                    </div>
                    <CardTitle className="text-base font-semibold text-slate-900">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-6">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">How we work</h2>
          <div className="space-y-6">
            {teamPrinciples.map((principle) => (
              <div key={principle.name} className="border-l-2 border-blue-200 pl-6">
                <h3 className="font-semibold text-slate-900 mb-1">{principle.name}</h3>
                <p className="text-sm text-slate-600 leading-6">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to build security that actually works?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Join teams using ABC of Cyber to move from reactive to proactive security.</p>
          <Button asChild size="lg" className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 font-semibold px-10">
            <Link href="/sign-up">Create your free account <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
