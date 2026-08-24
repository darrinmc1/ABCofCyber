import Link from "next/link"
import { ArrowRight, Shield, Users, Globe, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import JsonLd from "@/components/json-ld"

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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ABC of Cyber",
    "url": "https://abcofcyber.com",
    "logo": "https://abcofcyber.com/logo.png",
    "description": "ABC of Cyber was built by practitioners who got tired of seeing security programs that looked impressive in decks and collapsed under real-world pressure. We help teams stop calling luck a security strategy.",
    "foundingDescription": "Built by cybersecurity practitioners to provide practical, no-nonsense security education and tools.",
    "knowsAbout": [
      "Cybersecurity",
      "Information Security",
      "NIST CSF",
      "ISO 27001",
      "CIS Controls",
      "Incident Response",
      "Risk Management",
      "Threat Monitoring"
    ]
  }

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About ABC of Cyber",
    "url": "https://abcofcyber.com/about",
    "description": "Learn about ABC of Cyber's mission, values, and approach to practical cybersecurity education.",
    "publisher": {
      "@type": "Organization",
      "name": "ABC of Cyber",
      "url": "https://abcofcyber.com"
    }
  }

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={aboutPageSchema} />
      <main className="min-h-screen bg-white">
        <section className="container mx-auto px-4 py-16 md:px-6">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">About</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              We help teams stop calling luck a security strategy
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              ABC of Cyber was built by practitioners who got tired of seeing security programs that looked impressive in
              decks and collapsed under real-world pressure. We believe security should be understandable, actionable, and
              built to last — not just impressive in a board presentation.
            </p>
            <p className="text-lg leading-8 text-slate-600">
              Our mission is simple: make practical cybersecurity accessible to every team, regardless of size or budget.
              We cut through the jargon, skip the theater, and focus on what actually reduces risk.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">Our Values</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">What we believe about security</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {values.map((value) => (
                <Card key={value.title} className="border-slate-200">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <value.icon className="h-8 w-8 text-blue-700" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">How We Work</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our operating principles</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {teamPrinciples.map((principle) => (
                <div key={principle.name} className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">{principle.name}</h3>
                  <p className="text-slate-600">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-700 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to build security that actually works?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Start with our learning resources or explore the frameworks that fit your organization.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/get-started">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
                <Link href="/learn">Explore Learning</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
