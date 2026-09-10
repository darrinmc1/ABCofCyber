import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "next-themes"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ABC of Cyber | Practical Cybersecurity for Teams",
  description: "ABC of Cyber helps teams build practical cybersecurity programs without the jargon. Learn frameworks, tools, and best practices that actually work.",
  metadataBase: new URL("https://abcofcyber.com"),
  openGraph: {
    title: "ABC of Cyber | Practical Cybersecurity for Teams",
    description: "ABC of Cyber helps teams build practical cybersecurity programs without the jargon.",
    url: "https://abcofcyber.com",
    siteName: "ABC of Cyber",
    type: "website",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ABC of Cyber",
  "url": "https://abcofcyber.com",
  "logo": "https://abcofcyber.com/logo.png",
  "description": "ABC of Cyber helps teams build practical cybersecurity programs without the jargon. Learn frameworks, tools, and best practices that actually work.",
  "sameAs": [
    "https://twitter.com/abcofcyber",
    "https://linkedin.com/company/abcofcyber"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "url": "https://abcofcyber.com/contact"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Free Plan",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Access core cybersecurity learning resources and tools at no cost."
    },
    {
      "@type": "Offer",
      "name": "Pro Plan",
      "price": "29",
      "priceCurrency": "USD",
      "description": "Full access to all frameworks, tools, walkthroughs, and premium content."
    }
  ]
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
        "text": "ABC of Cyber is a practical cybersecurity platform that helps teams and individuals build real security programs without the jargon. We provide frameworks, tools, lessons, and walkthroughs grounded in evidence and designed for everyday use."
      }
    },
    {
      "@type": "Question",
      "name": "Who is ABC of Cyber for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ABC of Cyber is built for security practitioners, small business owners, IT teams, and anyone who wants to understand and improve their cybersecurity posture without wading through dense compliance documents or expensive consultants."
      }
    },
    {
      "@type": "Question",
      "name": "Is ABC of Cyber free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ABC of Cyber offers a free plan that includes access to core learning resources and tools. A Pro plan is also available for full access to all frameworks, walkthroughs, and premium content."
      }
    },
    {
      "@type": "Question",
      "name": "What cybersecurity frameworks does ABC of Cyber cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ABC of Cyber covers major cybersecurity frameworks including NIST CSF, ISO 27001, CIS Controls, Incident Response, Risk Management, and Threat Monitoring, with practical guidance on implementing each."
      }
    },
    {
      "@type": "Question",
      "name": "How is ABC of Cyber different from other cybersecurity resources?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ABC of Cyber focuses on practical, actionable security over compliance theater. Our content is written by practitioners who prioritize clarity over jargon, evidence over assumptions, and progress over perfection."
      }
    },
    {
      "@type": "Question",
      "name": "Does ABC of Cyber offer tools for security assessments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ABC of Cyber provides a suite of security tools including walkthroughs, scenario-based exercises like What's the Play, and downloadable resources to help teams assess and improve their security posture."
      }
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </head>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
