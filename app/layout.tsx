import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "next-themes"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ABC of Cyber | Practical Cybersecurity for Teams",
  description: "ABC of Cyber helps teams build practical cybersecurity programs. Learn frameworks, tools, and best practices to protect your organization.",
  metadataBase: new URL("https://abcofcyber.com"),
  openGraph: {
    title: "ABC of Cyber | Practical Cybersecurity for Teams",
    description: "ABC of Cyber helps teams build practical cybersecurity programs.",
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
  "description": "ABC of Cyber helps teams build practical cybersecurity programs with frameworks, tools, and best practices.",
  "sameAs": [
    "https://twitter.com/abcofcyber",
    "https://linkedin.com/company/abcofcyber"
  ],
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
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://abcofcyber.com/learn?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
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
            id="schema-organization"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <Script
            id="schema-website"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
