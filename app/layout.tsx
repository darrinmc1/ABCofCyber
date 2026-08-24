import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "next-themes"
import Link from "next/link"
import StickyCTABar from "@/components/StickyCTABar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ABC of Cyber – Practical Cybersecurity for Real Teams",
  description:
    "Cybersecurity frameworks, tools, and training for security professionals and teams.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <StickyCTABar />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
