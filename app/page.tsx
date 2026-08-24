import Link from "next/link"
import { ArrowRight, Shield, Lock, Eye, Zap, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import JsonLd from "@/components/json-ld"

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ABC of Cyber",
    "url": "https://abcofcyber.com",
    "logo": "https://abcofcyber.com/logo.png",
    "description": "Practical cybersecurity education and tools for teams and individuals. Learn security fundamentals, explore frameworks, and build real security programs.",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://abcofcyber.com/contact"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ABC of Cyber",
    "url": "https://abcofcyber.com",
    "description": "Practical cybersecurity education and tools for teams and individuals.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://abcofcyber.com/learn?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ABC of Cyber?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ABC of Cyber is a practical cybersecurity education platform that helps teams and individuals build real security programs. We offer learning modules, security frameworks, tools, and resources designed for people who need security that works in practice, not just on paper."
        }
      },
      {
        "@type": "Question",
        "name": "Who is ABC of Cyber for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ABC of Cyber is built for teams, small businesses, and individuals who want to understand and implement cybersecurity without the jargon. Whether you are a security professional, a business owner, or someone just getting started, our resources are designed to be practical and actionable."
        }
      },
      {
        "@type": "Question",
        "name": "What cybersecurity frameworks does ABC of Cyber cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ABC of Cyber covers major cybersecurity frameworks including NIST CSF, ISO 27001, CIS Controls, incident response planning, risk management, and threat monitoring. Each framework is explained in practical terms with actionable guidance."
        }
      },
      {
        "@type": "Question",
        "name": "Is ABC of Cyber free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ABC of Cyber offers free learning resources, blog articles, and basic tools. Premium plans are available for teams and organizations that need advanced features, custom assessments, and dedicated support."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started with cybersecurity on ABC of Cyber?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get started by visiting our Learn section for foundational topics like phishing awareness, password security, and network security. Our Get Started guide walks you through building a basic security program step by step."
        }
      }
    ]
  }

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqSchema} />
      <main className="min-h-screen bg-white">
        <section className="container mx-auto px-4 py-20 md:px-6">
          <div className="max-w-4xl space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Cybersecurity Made Practical</p>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
              Security that actually works
            </h1>
            <p className="text-xl leading-8 text-slate-600 max-w-2xl">
              ABC of Cyber helps teams and individuals build real security programs — not compliance theater. Learn the fundamentals, explore frameworks, and use tools that make a difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                <Link href="/get-started">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/learn">Explore Learning</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">What We Offer</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Everything you need to build a real security program</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-slate-200">
                <CardHeader>
                  <Shield className="h-8 w-8 text-blue-700 mb-2" />
                  <CardTitle className="text-lg">Learn Security Fundamentals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">From phishing awareness to zero trust architecture, our learning modules cover what actually matters.</p>
                  <Link href="/learn" className="text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 mt-3">Start Learning <ArrowRight className="h-3 w-3" /></Link>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardHeader>
                  <Lock className="h-8 w-8 text-blue-700 mb-2" />
                  <CardTitle className="text-lg">Explore Frameworks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">NIST CSF, ISO 27001, CIS Controls, and more — explained in plain language with practical guidance.</p>
                  <Link href="/frameworks" className="text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 mt-3">View Frameworks <ArrowRight className="h-3 w-3" /></Link>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardHeader>
                  <Eye className="h-8 w-8 text-blue-700 mb-2" />
                  <CardTitle className="text-lg">Use Security Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">Practical tools to assess your security posture, generate policies, and guide your team through real scenarios.</p>
                  <Link href="/tools" className="text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 mt-3">Try Tools <ArrowRight className="h-3 w-3" /></Link>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardHeader>
                  <Zap className="h-8 w-8 text-blue-700 mb-2" />
                  <CardTitle className="text-lg">Read the Blog</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">Cybersecurity insights, incident response guides, and threat intelligence written for practitioners.</p>
                  <Link href="/blog" className="text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 mt-3">Read Articles <ArrowRight className="h-3 w-3" /></Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Why ABC of Cyber</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Security without the theater</h2>
              <p className="text-lg text-slate-600">Most security programs look great in presentations and fail in practice. We build resources for the real world — where budgets are limited, teams are busy, and threats are constant.</p>
              <div className="grid gap-4 md:grid-cols-3 text-left mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Plain language</p>
                    <p className="text-sm text-slate-600">No jargon, no acronym soup. Just clear guidance you can act on.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Practitioner-built</p>
                    <p className="text-sm text-slate-600">Created by people who have run real security programs, not just written about them.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Progress-focused</p>
                    <p className="text-sm text-slate-600">We celebrate real improvements, not compliance checkboxes that nobody reads.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-700 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to build a security program that works?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Join teams and individuals who are taking a practical approach to cybersecurity.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/get-started">Get Started Free <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
