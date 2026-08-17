import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/json-ld"
import WhatsThePlayTool from "@/components/tools/whats-the-play"
import { ABC_METHOD, WALKTHROUGH_DISCLAIMER } from "@/lib/disclaimer"
import { WHATS_THE_PLAY_OFFER } from "@/lib/pricing"
import { SITE_NAME, SITE_URL } from "@/lib/site"

const PAGE_DESCRIPTION =
  "Paste an 'is this phishing' scenario. Get a plain-English ABC method walkthrough cited from ABC of Cyber lessons. Education only — not legal advice."

export const metadata: Metadata = {
  title: "What's the play | ABC of Cyber",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/whats-the-play` },
}

const faqs = [
  {
    question: "Is this legal advice or a verdict?",
    answer:
      "No. Education only. The tool names a likely play and the next move. It will not tell you a message is a crime or that you are compromised.",
  },
  {
    question: "Is this a chatbot for the whole site?",
    answer:
      "No. One job: paste a scenario, get a walkthrough. It is a layer on the existing lesson archive, not a new brand.",
  },
  {
    question: "Where do the citations come from?",
    answer:
      "Live ABC of Cyber lessons and frameworks — phishing, passwords, MFA, backups, ransomware first hour, M365 hygiene, incident response, NIST/CIS, and the 2026 phishing note.",
  },
  {
    question: "What does it cost?",
    answer:
      "One free walkthrough. Unlimited on the $29/month training membership when checkout is live. Not sold separately. No x402.",
  },
  {
    question: "What if I already clicked?",
    answer:
      "Say so in the paste. The walkthrough switches to containment: stop, rotate credentials from a known-good path, tell IT. Then read Incident Response Basics.",
  },
  {
    question: "What if the AI key is missing?",
    answer:
      "You still get the archive walkthrough from real lessons. The page does not die with a 500.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "What's the play",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      url: `${SITE_URL}/whats-the-play`,
      isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
      description: PAGE_DESCRIPTION,
      offers: {
        "@type": "Offer",
        price: "29.00",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        url: `${SITE_URL}/pricing`,
        description: WHATS_THE_PLAY_OFFER.notes,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "HowTo",
      name: "Use the ABC method on a suspicious message",
      step: ABC_METHOD.steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: `${step.letter} — ${step.title}`,
        text: step.summary,
      })),
    },
  ],
}

export default function WhatsThePlayPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <JsonLd data={jsonLd} />
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            A layer on {SITE_NAME} — not a new brand
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            What&apos;s the play
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Paste an &ldquo;is this phishing?&rdquo; scenario. Get a plain-English walkthrough using the ABC
            method, cited from the lessons you can already read. One job. No chat. No sirens.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
            {ABC_METHOD.steps.map((step) => (
              <span key={step.letter} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                <strong>{step.letter}</strong> {step.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-3xl px-4 py-12 md:px-6">
        <WhatsThePlayTool />
      </section>

      <section className="border-t bg-white py-12">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Frequently asked, without the panic</h2>
          <dl className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-slate-900">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-sm text-slate-500">
            Parseable pricing lives at{" "}
            <Link href="/pricing.json" className="text-blue-700 hover:underline">
              /pricing.json
            </Link>
            . Machines can also read{" "}
            <Link href="/llm.txt" className="text-blue-700 hover:underline">
              /llm.txt
            </Link>
            .
          </p>
          <p className="mt-4 text-xs leading-6 text-slate-500">{WALKTHROUGH_DISCLAIMER}</p>
        </div>
      </section>
    </main>
  )
}
