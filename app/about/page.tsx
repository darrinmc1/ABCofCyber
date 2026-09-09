import Link from "next/link"
import { ArrowRight, Shield, Users, Globe, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Script from "next/script"

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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ABC of Cyber",
  "url": "https://abcofcyber.com",
  "logo": "https://abcofcyber.com/logo.png",
  "description": "ABC of Cyber helps teams build practical cybersecurity programs with frameworks, tools, and best practices. We were built by practitioners who got tired of seeing security programs that looked impressive in decks and collapsed under real-world pressure.",
  "foundingDate": "2023",
  "knowsAbout": [
    "Cybersecurity",
    "Information Security",
    "Security Frameworks",
    "Incident Response",
    "Risk Management",
    "Zero Trust Architecture",
    "NIST CSF",
    "ISO 27001",
    "CIS Controls"
  ],
  "sameAs": [
    "https://twitter.com/abcofcyber",
    "https://linkedin.com/company/abcofcyber"
  ]
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Script
        id="schema-about-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">About</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            We help teams stop calling luck a security strategy
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            ABC of Cyber was built by practitioners who got tired of seeing security programs that looked impressive in
            decks and collapsed under real-world pressure. We believe security should be understandable, actionable, and
            actually used by the people it is meant to protect.
          </p>
          <p className="text-lg leading-8 text-slate-600">
            Our tools, frameworks, and learning resources are designed for teams that do not have a dedicated security
            department, a six-figure consulting budget, or the luxury of learning on the job after a breach.
          </p>
        </div>
      </section>

      <section className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="max-w-3xl space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">What we believe</h2>
            <p className="text-lg text-slate-600">
              These are not values we put on a poster. They are the principles that shape every tool, lesson, and
              recommendation we publish.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} className="border-slate-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <value.icon className="h-5 w-5 text-blue-700" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="max-w-3xl space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">How we work</h2>
            <p className="text-lg text-slate-600">
              Every piece of content and every tool we ship follows these principles. If something does not meet this
              bar, it does not ship.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {teamPrinciples.map((principle) => (
              <div key={principle.name} className="space-y-2">
                <h3 className="font-semibold text-slate-900">{principle.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Ready to build something that actually works?</h2>
            <p className="text-lg text-slate-600">
              Start with our free tools and learning modules. No sales call required.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/get-started">
                  Get started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                <Link href="/contact">Talk to us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
