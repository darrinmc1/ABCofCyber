import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Siren, CheckCircle, AlertTriangle, Clock, Phone } from "lucide-react"

export default function RansomwareFirstHourLesson() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/learn"
            className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lessons
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-100">
                <Siren className="h-6 w-6 text-red-700" />
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">Intermediate</Badge>
              <Badge variant="outline">12 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Ransomware: The First Hour
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              The first hour is not for philosophy. It is for stopping the spread, preserving what
              you will need later, and telling the people who actually own the process. Education
              only — this is not incident response for hire.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">If files are encrypting, you are already late</h2>
            <p className="text-slate-600 mb-4">
              Ransomware is malware that locks files and offers them back for a fee, often with a
              side of &ldquo;we also copied everything.&rdquo; The note on the screen is not a
              negotiation opening. It is a receipt.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-sm text-amber-900">
                Briefing note: do not start deleting things to &ldquo;clean it up.&rdquo; You will
                delete the evidence and, with any luck, the last clean copy as well.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The first 60 minutes</h2>
            <div className="space-y-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-red-600" />
                    0–10 minutes — isolate
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 space-y-2">
                  <p>Unplug the network cable or turn off Wi-Fi on affected machines. Do not shut down if policy says keep them powered for memory — if you have no policy, isolate first and write the time.</p>
                  <p>Disconnect shared drives. One mapped S: drive is how a single laptop becomes a department outage.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    10–30 minutes — tell the right people
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 space-y-2">
                  <p>Call IT or the person named on your incident sheet. Use a phone you already trust, not a callback number in the ransom note.</p>
                  <p>Leadership gets facts: what is down, since when, what you isolated. Not a theory about nation-states.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Siren className="h-5 w-5 text-slate-700" />
                    30–60 minutes — contain and record
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 space-y-2">
                  <p>Disable the affected accounts. Reset those passwords from a clean device. Leave the ransom files where they are.</p>
                  <p>Write times, hostnames, who touched what. Photographs of the screen beat memory after lunch.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What not to do in hour one</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                Do not pay from the lobby while &ldquo;just checking.&rdquo; Payment is a legal and
                insurance decision, not a first-hour task. Paying also does not guarantee a key.
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                Do not run random &ldquo;decryptor&rdquo; tools from a forum. That is how you add a
                second problem.
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                Do not restore over the smoking wreck until someone has confirmed the backup is clean
                and the malware is not still sitting on the same share.
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Keep on one page, before you need it</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                Who to call (IT, owner, insurer, counsel) with numbers that work at 2 a.m.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                How to isolate a laptop and a server without a meeting.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                Where the last tested backup lives. See Backups That Actually Restore.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Next Steps</h2>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/learn/email-m365-hygiene">
                  Next Lesson: Email and Microsoft 365 Hygiene
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/learn/incident-response-basics">Related: Incident Response Basics</Link>
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
