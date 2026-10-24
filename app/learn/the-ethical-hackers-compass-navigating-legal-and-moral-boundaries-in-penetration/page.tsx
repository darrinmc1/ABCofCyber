import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { pageMeta } from "@/lib/seo"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, FileCheck, Scale, AlertTriangle } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export const metadata: Metadata = pageMeta({
  title: "The rules of a legal test",
  description: "Penetration testing is legal when the owner said yes in writing. A certificate is not that yes.",
  path: "/learn/the-ethical-hackers-compass-navigating-legal-and-moral-boundaries-in-penetration",
})

export default function EthicalHackersCompassLesson() {
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
              <div className="p-2 rounded-lg bg-blue-100">
                <Shield className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">Intermediate</Badge>
              <Badge variant="outline">14 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              The Ethical Hacker&apos;s Compass: Navigating Legal and Moral Boundaries in Penetration Testing
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              The skill and the crime can look identical from the outside. The difference
              is permission, scope, and what you do when you find something ugly.
            </p>
            <div className="flex flex-wrap gap-2">
              {["ethical hacking", "permission", "scope", "rules of engagement"].map((t) => (
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The yes comes first</h2>
            <p className="text-slate-600 mb-4">
              A penetration test is an authorised attempt to find weaknesses before
              someone else does. Authorised means a person who can bind the owner said
              yes, in writing, before you touch a system. Good intent does not replace
              that sentence.
            </p>
            <p className="text-slate-600">
              Unauthorised access is a crime in the places this work usually lands:
              Australia&apos;s Criminal Code computer offences, the US Computer Fraud and
              Abuse Act, and the UK Computer Misuse Act. Other countries have their own.
              If the system sits in another jurisdiction, that law applies too. This
              lesson is a map of the questions. It is not legal advice, and a blog post
              is a bad lawyer.
            </p>
            <LessonAside>
              &ldquo;We were only looking&rdquo; is not a defence you want to test.
              Looking inside a system you were not given is still the act.
            </LessonAside>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What the piece of paper has to name</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileCheck className="h-5 w-5 text-blue-700" />
                    <CardTitle className="text-lg">Scope</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Hosts, apps, and accounts that are in. Everything else is out, including
                  the interesting neighbour you noticed. Methods that are allowed. Methods
                  that are banned, especially denial of service and anything that changes
                  live data.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Scale className="h-5 w-5 text-green-700" />
                    <CardTitle className="text-lg">Window and witness</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Start time, stop time, and a named person who will answer the phone if
                  you hit production. A test that runs past the window because it was
                  &ldquo;going well&rdquo; is a test outside the agreement.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Data you did not mean to see</CardTitle>
                  <CardDescription>Stop. Do not collect a souvenir.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  If you land on customer records, payroll, or health data, you have proved
                  the point. Note how you got there, leave the records, and call the
                  contact. Copying a database &ldquo;so they believe you&rdquo; is how a
                  test becomes an incident you caused.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-700" />
                    <CardTitle className="text-lg">The report</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Findings, how you reproduced them, and what to fix. Evidence stays with
                  the client under the agreement. A write-up on a personal blog, even with
                  the name removed, can still identify the system. Ask before you publish.
                </CardContent>
              </Card>
            </div>
          </div>

          <HumorBreak tag="ethics" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What does not grant permission</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>A certification (OSCP, CEH, CISSP, or the next one). Those test skill. They do not sign a scope.</li>
              <li>A bug-bounty page you have not read. The policy is the scope. Outside it, you are uninvited.</li>
              <li>A friend who &ldquo;works there&rdquo; and said it would be fine. They may not be allowed to say yes.</li>
              <li>An NDA on its own. Confidentiality is not authorisation to break in.</li>
            </ul>
            <p className="text-slate-600 mt-4">
              The moral rule under the legal one is smaller: do not make the client&apos;s
              week worse to make your findings louder. Identify the hole. Do not live in it.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
