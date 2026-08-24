import Link from "next/link"
import { ArrowRight, Shield, Lock, Zap, Users, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EmailCapture } from "@/components/email-capture"
import { FeatureSection } from "@/components/feature-section"
import { FrameworksSection } from "@/components/frameworks-section"
import { HumorBreak } from "@/components/humor-break"

const faqs = [
  {
    question: "Does ABC of Cyber help with compliance requirements like SOC 2, ISO 27001, or HIPAA?",
    answer:
      "Yes. Our frameworks and guidance are mapped to major compliance standards including SOC 2, ISO 27001, NIST CSF, and HIPAA. We help you build security programs that satisfy auditors without drowning your team in paperwork.",
  },
  {
    question: "How does ABC of Cyber handle our data and privacy?",
    answer:
      "We take data privacy seriously — it would be embarrassing if we didn't. We collect only what is necessary to deliver the service, never sell your data to third parties, and follow industry-standard encryption and access controls. Full details are in our Privacy Policy.",
  },
  {
    question: "How long does it take to get up and running?",
    answer:
      "Most teams complete their initial security assessment and have a prioritised action plan within a single working day. There is no lengthy onboarding, no professional-services engagement required, and no six-month implementation project — just clear next steps you can act on immediately.",
  },
  {
    question: "What kind of support is available if we get stuck?",
    answer:
      "Every plan includes access to our documentation, guided walkthroughs, and the ability to submit questions through the platform. Pro and Team plans include priority email support with guaranteed response times. We also publish regular blog content and framework guides so your team can self-serve answers fast.",
  },
  {
    question: "Do we need a dedicated security team to use this?",
    answer:
      "No. ABC of Cyber is specifically designed for organisations that do not have a full-time security team. Whether you are a founder wearing many hats or an IT generalist responsible for security, the platform guides you through what matters without assuming deep specialist knowledge.",
  },
  {
    question: "Can we cancel or change our plan at any time?",
    answer:
      "Yes. There are no long-term contracts or lock-in periods. You can upgrade, downgrade, or cancel your plan at any time from your account settings. If you cancel, you retain access until the end of your current billing period.",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Cybersecurity made practical</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Stop treating luck as your security strategy
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            ABC of Cyber gives your team the frameworks, tools, and plain-English guidance to build a security program
            that actually works — without the jargon, the fear-mongering, or the six-figure consulting bill.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Link href="/get-started">
                Get started free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/frameworks">Explore frameworks</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature section */}
      <FeatureSection />

      {/* Frameworks */}
      <FrameworksSection />

      {/* Humor break */}
      <HumorBreak />

      {/* Email capture */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <EmailCapture />
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">FAQ</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl mb-4">
            Questions we actually get asked
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Compliance, privacy, implementation time, support — answered honestly, without the sales spin.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-slate-200 bg-white px-6 py-5 open:shadow-sm transition-all"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 marker:hidden">
                  <span>{faq.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-slate-600 leading-7">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-10 text-sm text-slate-500">
            Still have questions?{" "}
            <Link href="/contact" className="font-semibold text-blue-700 hover:underline">
              Contact us
            </Link>{" "}
            and we will get back to you within one business day.
          </p>
        </div>
      </section>
    </main>
  )
}
