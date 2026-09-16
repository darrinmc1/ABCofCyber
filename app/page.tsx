import Link from "next/link"
import { Button } from "@/components/ui/button"
import { EmailCapture } from "@/components/email-capture"
import FeatureSection from "@/components/feature-section"
import FrameworksSection from "@/components/frameworks-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsNew from "@/components/whats-new"
import { JsonLd } from "@/components/json-ld"
import { CheckCircle } from "lucide-react"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ABC of Cyber",
  url: "https://abcofcyber.com",
  description:
    "Cybersecurity training and platform for teams — practical controls, compliance mapping across NIST, ISO 27001, and CIS, and security awareness training without the scare tactics.",
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ABC of Cyber",
  url: "https://abcofcyber.com",
}

const reassurancePoints = [
  {
    title: "No fake urgency",
    description: "If something is critical, we say so. If it can wait, we say that too.",
  },
  {
    title: "Less jargon, more decisions",
    description: "Clear priorities, practical controls and explanations your team can actually use.",
  },
  {
    title: "Built for real teams",
    description: "Designed around the messy reality of small security teams, compliance work and legacy systems.",
  },
]

const earlyAccess = [
  "Cybersecurity lessons and practical walkthroughs",
  "Framework mapping across NIST, ISO 27001 and CIS",
  "What's the play scenario walkthrough",
  "Interactive tools and downloadable guidance",
  "Paid access only after checkout is live and tested",
]

const faqs = [
  {
    question: "Do you help with compliance?",
    answer: "Yes. The site explains how controls map across NIST, ISO 27001 and CIS and how to document the work. It is educational guidance, not legal or certification advice.",
  },
  {
    question: "Can smaller teams use this?",
    answer: "Yes. The lessons and tools are designed to be useful even when security is only part of someone&apos;s job.",
  },
  {
    question: "Is What's the play a separate product?",
    answer: "No. It is part of ABC of Cyber: paste a suspicious scenario and get a walkthrough grounded in existing lessons. Education only, not incident-response advice.",
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />

      <section className="relative w-full overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 py-12 text-white md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('/images/hero-abcsofcyber.jpg')] bg-cover bg-center opacity-25" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Practical cybersecurity training</p>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Know what to do next when cyber gets messy.</h1>
              <p className="mx-auto max-w-[760px] text-blue-100 md:text-xl">Learn the controls, frameworks and response thinking that help teams make better security decisions without drowning in jargon.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-blue-100"><Link href="/learn">Start learning</Link></Button>
              <Button asChild variant="outline" size="lg" className="border-blue-200 bg-transparent text-white hover:bg-white/10"><Link href="/whats-the-play">Try What&apos;s the play</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection />

      <section className="w-full border-y bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto flex flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">One job, not a chatbot</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What&apos;s the play</h2>
            <p className="text-slate-600">Paste a suspicious scenario and get a plain-English walkthrough using the ABC method, cited from lessons already on the site.</p>
          </div>
          <Button asChild size="lg"><Link href="/whats-the-play">Open the walkthrough</Link></Button>
        </div>
      </section>

      <WhatsNew />

      <section className="w-full bg-white py-12 md:py-20">
        <div className="container mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-3">
          {reassurancePoints.map((point) => (
            <Card key={point.title} className="border-slate-200">
              <CardHeader><CardTitle className="text-xl">{point.title}</CardTitle></CardHeader>
              <CardContent><p className="text-sm leading-6 text-slate-600">{point.description}</p></CardContent>
            </Card>
          ))}
        </div>
      </section>

      <FrameworksSection />

      <section id="pricing" className="w-full bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Early access</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Use the training now. Paid pricing comes later.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">Checkout is not live, so ABC of Cyber is not publishing paid plan prices yet. Explore the lessons and tools now and join the list if you want to know when expanded access is ready.</p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-blue-200 bg-white p-7">
            <ul className="space-y-3">
              {earlyAccess.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />{item}</li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild><Link href="/learn">Browse free lessons</Link></Button>
              <Button asChild variant="outline"><Link href="/pricing">Join early access</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 max-w-2xl space-y-3"><h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently asked questions</h2><p className="text-slate-600">The practical questions teams usually ask before they start.</p></div>
          <div className="grid gap-6 lg:grid-cols-3">
            {faqs.map((faq) => (
              <Card key={faq.question}><CardHeader><CardTitle className="text-xl">{faq.question}</CardTitle></CardHeader><CardContent><p className="text-sm leading-6 text-slate-600">{faq.answer}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-950 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <EmailCapture variant="hero" theme="cyber" heading="Get new cyber training as it is published" subheading="New lessons, practical framework guides and early access to tools. No fake urgency or invented results." source="homepage-cta" showName />
        </div>
      </section>
    </div>
  )
}
