import type { Metadata } from "next"
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import { FeedbackWidget } from "@/components/feedback-widget"
import { WaitlistPopup } from "@/components/waitlist-popup"

export const metadata: Metadata = {
  title: "ABC of Cyber | Security Without the Scare Tactics",
  description: "A cyber-security platform with serious controls, sensible dashboards, and copy that does not read like it was approved by a committee of fax machines.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClerkProvider>
          <header className="flex justify-end items-center gap-3 px-4 py-2 border-b bg-slate-50 text-sm">
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          <Navbar />
          {children}
          <footer className="border-t border-slate-200 bg-slate-50 mt-16">
            <div className="mx-auto max-w-6xl px-4 py-8 text-center text-xs text-slate-500">
              <p className="font-semibold text-slate-700 mb-2">Empire-HQ Portfolio</p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-3">
                <a href="https://freelancepro.com" className="hover:text-blue-600">FreelancePro</a>
                <a href="https://moneymastery.com" className="hover:text-blue-600">Money Mastery</a>
                <a href="https://aiforsmb.com" className="hover:text-blue-600">AI for SMB</a>
                <a href="https://devops101.com" className="hover:text-blue-600">DevOps 101</a>
                <a href="https://landscapedesign.com" className="hover:text-blue-600">Landscape Design</a>
                <a href="https://pilatesflow.com" className="hover:text-blue-600">PilatesFlow</a>
                <a href="https://abcsofcyber.com" className="hover:text-blue-600">ABC of Cyber</a>
                <a href="https://osint101.com" className="hover:text-blue-600">OSINT 101</a>
                <a href="https://peelboss.com" className="hover:text-blue-600">Peel Boss</a>
                <a href="https://ticu.tv" className="hover:text-blue-600">TICU.TV</a>
                <a href="https://theintelanalystacademy.com" className="hover:text-blue-600">Intel Academy</a>
              </div>
              <p>&copy; {new Date().getFullYear()} ABC of Cyber</p>
            </div>
          </footer>
          <Toaster />
          <FeedbackWidget />
          <WaitlistPopup />
        </ClerkProvider>
      </body>
    </html>
  )
}
