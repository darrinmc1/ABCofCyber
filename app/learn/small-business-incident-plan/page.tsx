import type { Metadata } from "next"
import Link from "next/link"
import { pageMeta } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, LifeBuoy, AlertTriangle, Phone } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export const metadata: Metadata = pageMeta({
  title: "Small-Business Incident Plan",
  description:
    "A one-page incident plan: PICERL in plain language, who to call, when Australian data-breach notification may apply, and a blameless review.",
  path: "/learn/small-business-incident-plan",
})

const topics = ["Incident response", "PICERL", "Containment", "Notifiable data breaches"]

export default function SmallBusinessIncidentPlanLesson() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <Link href="/learn" className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lessons
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-100">
                <LifeBuoy className="h-6 w-6 text-red-700" />
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">Intermediate</Badge>
              <Badge variant="outline">16 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              When It Goes Wrong: A One-Page Incident Plan
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              When something goes wrong, people freeze or start deleting things. Both make it worse. An incident plan is a page that tells you what to do while you are stressed.
            </p>
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Panic is not a phase</h2>
            <p className="text-slate-600 mb-4">
              The classic model is the SANS <strong>PICERL</strong> cycle: Preparation, Identification, Containment, Eradication, Recovery, Lessons learned. NIST&apos;s updated SP 800-61 Rev. 3 aligns incident response with the NIST CSF 2.0 functions (Govern, Identify, Protect, Detect, Respond, Recover). Same idea, different labels. This lesson uses the six PICERL steps because they are easy to remember.
            </p>
            <p className="text-slate-600">
              The longer walk-through lives in{" "}
              <Link href="/learn/incident-response-basics" className="text-blue-700 underline">Incident Response Basics</Link>
              {" "}and the{" "}
              <Link href="/frameworks/incident-response" className="text-blue-700 underline">incident response framework</Link>
              . This page is the one you can print.
            </p>
            <LessonAside>
              A plan saved on the laptop that just got encrypted is a souvenir. Print the page. The nephew is not 1300 CYBER1.
            </LessonAside>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Preparation: before anything happens</h2>
            <p className="text-slate-600 mb-4">This is the part you do now, on a quiet Tuesday. Your one-page plan needs:</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><strong>Who is in charge.</strong> One name, plus a backup.</li>
              <li><strong>IT contact.</strong> Your MSP, your IT person, or your nephew (be honest with yourself about that last one).</li>
              <li><strong>Bank fraud line.</strong> The real number, written down.</li>
              <li><strong>Cyber insurer</strong> and policy number, if you have one. Many policies require you to call them <em>first</em> and use their response team.</li>
              <li><strong>ACSC:</strong> cyber.gov.au / ReportCyber, and the 24/7 hotline 1300 CYBER1 (1300 292 371).</li>
              <li><strong>IDCARE</strong> for identity theft support (free, Australia/NZ).</li>
              <li><strong>Where backups are and how to restore them.</strong></li>
              <li><strong>Admin logins</strong> for email, domain, website and accounting, stored in a password manager the backup person can also get into.</li>
            </ul>
            <p className="text-slate-600 mt-4">Print it. If ransomware has encrypted your laptop, a plan saved on that laptop will not help.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Identification: is this actually an incident?</h2>
            <p className="text-slate-600 mb-4">Not every odd thing is an attack. Ask:</p>
            <ul className="space-y-2 text-sm text-slate-700 mb-4">
              <li>What did we see, and when? (Write down times. Future-you will thank you.)</li>
              <li>What systems or accounts are affected?</li>
              <li>Is data or money involved?</li>
            </ul>
            <p className="text-slate-600">Start a simple log: time, what happened, who did what. That log will be needed for insurance, police and any regulator.</p>
          </div>

          <HumorBreak tag="incident response" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Containment: stop the bleeding</h2>
            <p className="text-slate-600 mb-4">Contain first, clean up later.</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><strong>Hacked mailbox:</strong> reset the password, sign out all sessions, turn on MFA, remove strange forwarding rules.</li>
              <li><strong>Ransomware or malware on a device:</strong> disconnect it from the network (unplug the cable, turn off Wi-Fi). <strong>Do not turn it off</strong> if you can avoid it, because memory can hold useful evidence. Ask your IT contact.</li>
              <li><strong>Money sent:</strong> call the bank immediately.</li>
              <li><strong>Do not</strong> wipe things or reinstall yet. You will destroy the evidence of how they got in, and they will come back the same way.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Eradication: remove the cause</h2>
            <p className="text-slate-600">
              Work out how they got in (a phished password? an unpatched server? a reused password?) and close it. Remove malware, delete attacker-created accounts, and patch the hole. This is usually where your IT contact or insurer&apos;s team does most of the work.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Recovery: back to business</h2>
            <p className="text-slate-600">
              Restore from clean backups, check they really are clean, and watch closely for a few weeks. Reset passwords for anything that might have been exposed. Tell staff what changed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Do I have to tell anyone?</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-950">
                This section is education about the rules as written, not legal advice. If you are unsure, get advice.
              </p>
            </div>
            <p className="text-slate-600 mb-4">
              Possibly, yes. Under the <strong>Notifiable Data Breaches scheme</strong>, organisations covered by the Privacy Act must notify the OAIC and affected people if a breach is likely to cause serious harm. Many small businesses under A$3 million turnover are exempt, but not all: health service providers, for example, are covered regardless. The small-business exemption still stands for now (the August 2026 reform exposure draft keeps it), but from 1 July 2026 businesses covered by AML/CTF rules, such as accountants, lawyers, real estate agents and conveyancers, are covered at any turnover. If you are unsure, get advice. &ldquo;We did not think it counted&rdquo; is not a strong position.
            </p>
            <p className="text-slate-600 mb-2">Also tell, by phone:</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Customers or suppliers whose details were used.
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Your insurer (often required within a set time).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Lessons learned: no blame</h2>
            <p className="text-slate-600 mb-4">
              Within two weeks, get the people involved together for 30–60 minutes. The rule is <strong>blameless</strong>: you are fixing the process, not punishing Sharon from accounts for clicking. If people get punished, the next incident gets hidden.
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700">
              <li>What happened, in what order? (Use the log.)</li>
              <li>What went well?</li>
              <li>What slowed us down?</li>
              <li>What one to three changes would have stopped it, or caught it sooner?</li>
              <li>Who owns each change, and by when?</li>
            </ol>
            <p className="text-slate-600 mt-4">Then update the one-page plan. A plan that never changes after a real incident is decoration.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Common pitfalls</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader><CardTitle className="text-lg">No plan at all</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">The first time you think about it is during the incident.</CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Plan stored only on the infected computer</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">You cannot read it when you need it.</CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Wiping everything immediately</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">You lose the evidence and you will get hit again.</CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Paying a ransom before calling anyone</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">Talk to your insurer and the ACSC first. Payment does not guarantee recovery.</CardContent>
              </Card>
            </div>
            <p className="text-slate-600 mt-4 text-sm">Skipping lessons learned because &ldquo;we are back up now&rdquo; is the last one. The next incident will not be impressed.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Template: your one-page plan</h2>
            <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100 whitespace-pre-wrap">{`INCIDENT LEAD: ________  BACKUP: ________
IT CONTACT: ________  ph ________
BANK FRAUD: ________  INSURER: ________ policy # ________
ACSC: cyber.gov.au / 1300 CYBER1   IDCARE: idcare.org
BACKUPS: where ________ how to restore ________
FIRST MOVES: 1) start a log 2) contain (disconnect / reset / call bank)
             3) call IT + insurer 4) don't wipe 5) report`}</pre>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Check yourself</h3>
            <ol className="space-y-2 text-sm text-slate-700">
              <li><span className="font-bold text-blue-700">1.</span> Put these in order: Recovery, Containment, Preparation, Lessons learned, Identification, Eradication.</li>
              <li><span className="font-bold text-blue-700">2.</span> A laptop shows a ransom note. What is your first containment step?</li>
              <li><span className="font-bold text-blue-700">3.</span> Why should lessons learned be blameless?</li>
            </ol>
            <details className="mt-4 text-sm text-slate-700">
              <summary className="cursor-pointer font-medium text-slate-900">Answers</summary>
              <p className="mt-2">
                1 — Preparation, Identification, Containment, Eradication, Recovery, Lessons learned. 2 — disconnect it from the network, keep it powered on, and call IT. 3 — so people report incidents instead of hiding them.
              </p>
            </details>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Wrap</h2>
            <p className="text-slate-600">
              You cannot prevent every incident. You can decide in advance who you will call and what you will do first. One printed page, updated after every scare, puts you well ahead of most businesses your size.
            </p>
          </div>

          <p className="text-sm text-slate-500 border-t border-slate-200 pt-6">
            Adapted from Apache-2.0 licensed source material (mukul975/Anthropic-Cybersecurity-Skills).
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Next Steps</h2>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/learn/incident-response-basics">
                  Incident Response Basics
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/frameworks/incident-response">Incident response framework</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/learn">Back to All Lessons</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
