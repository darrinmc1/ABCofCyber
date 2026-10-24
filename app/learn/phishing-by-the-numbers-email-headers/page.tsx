import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { pageMeta } from "@/lib/seo"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MailWarning, ShieldCheck, Route, Reply } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export const metadata: Metadata = pageMeta({
  title: "Reading email headers",
  description: "How to open a raw email header and read SPF, DKIM, DMARC, and the Received path before you click.",
  path: "/learn/phishing-by-the-numbers-email-headers",
})

export default function PhishingByTheNumbersEmailHeadersLesson() {
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
                <MailWarning className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">Intermediate</Badge>
              <Badge variant="outline">14 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Phishing by the Numbers: Dissecting Real Email Headers to Catch the Fakes
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              The message you can see is the costume. The header is the postmark. This lesson
              is how to open it, and what SPF, DKIM, and DMARC actually promise.
            </p>
            <div className="flex flex-wrap gap-2">
              {["phishing", "email security", "spf", "dkim", "dmarc", "header analysis"].map((t) => (
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Pass does not mean Payroll</h2>
            <p className="text-slate-600 mb-4">
              Every message carries a header: a block of lines added by mail servers on the
              way in. It names the envelope, the signature checks, and the hops. Attackers
              still write a friendly display name. The header is where that story gets a
              chance to fall apart.
            </p>
            <p className="text-slate-600 mb-4">
              A pass on SPF, DKIM, or DMARC means a check succeeded for a domain. It does
              not mean the request is legitimate, and it does not mean you should click.
              A real mailbox that has already been stolen will pass every check the domain
              publishes. Headers are one look. The out-of-band callback is the other.
            </p>
            <LessonAside>
              If the email made you feel efficient, slow down on purpose. Urgency is a
              costume too. The header will still be there in two minutes.
            </LessonAside>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Open the raw header</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Gmail</CardTitle>
                  <CardDescription>Open the message, then the three-dot menu next to Reply.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">Choose Show original. Authentication results sit near the top.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Outlook on the web</CardTitle>
                  <CardDescription>Open the message, then the three-dot menu.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">View, then View message details or View message source.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Outlook desktop</CardTitle>
                  <CardDescription>Open the message in its own window.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">File, then Properties. The Internet headers box is the raw block. It is not a separate tab.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Apple Mail</CardTitle>
                  <CardDescription>View, then Message.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">Raw Source is the full header, including authentication results. All Headers is the shorter view.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <HumorBreak tag="headers" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Three stamps, then the route</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-blue-700" />
                    <div>
                      <CardTitle className="text-lg">SPF, DKIM, DMARC</CardTitle>
                      <CardDescription>Look for Authentication-Results. Read the words next to the equals signs.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-600">
                  <p>
                    <strong className="text-slate-800">SPF</strong> asks whether the sending server
                    was on the domain&apos;s published list. <code>spf=pass</code> means it was.
                    <code> spf=fail</code> means it was not. A fail on a message that claims to be
                    your bank is a stop.
                  </p>
                  <p>
                    <strong className="text-slate-800">DKIM</strong> is a signature over parts of
                    the message. <code>dkim=pass</code> means the signed parts still match a key
                    the domain published. It does not bless the display name.
                  </p>
                  <p>
                    <strong className="text-slate-800">DMARC</strong> checks that the visible From
                    domain lines up with the SPF or DKIM domain. <code>dmarc=fail</code> means
                    the costume and the stamp disagree. That is the check that catches a lot of
                    lookalike display names.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Route className="h-5 w-5 text-green-700" />
                    <div>
                      <CardTitle className="text-lg">Received lines</CardTitle>
                      <CardDescription>Each hop adds one. Read from the top, which is the last server to touch it.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    You are looking for a ridiculous origin. A message that claims to be
                    internal mail, but whose first hop is a random shared host, is not
                    internal mail. You do not need to decode every IP. You need the story
                    to be boring.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Reply className="h-5 w-5 text-amber-700" />
                    <div>
                      <CardTitle className="text-lg">From, Reply-To, Return-Path</CardTitle>
                      <CardDescription>Three different addresses. Attackers hope you only read one.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    From is what the inbox shows, and it is easy to costume. Reply-To is
                    where a reply actually goes. Return-Path is where bounces go. If Reply-To
                    is a mailbox you have never heard of, do not reply, and do not click.
                    Compare the domain, not the bold name in front of it.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">One worked example</h2>
            <p className="text-slate-600 mb-4">
              HR asks you to update payroll details on a link. Before the link:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600">
              <li>Open the raw header. Find Authentication-Results.</li>
              <li>If DMARC failed, stop. Tell the real HR channel, not the reply button.</li>
              <li>If everything passed, read the From domain anyway. A stolen real mailbox passes.</li>
              <li>Payroll changes get a second channel: a number or chat you already had, not one from the email.</li>
            </ol>
            <p className="text-slate-600 mt-4">
              Phishing Awareness covers the visible red flags. This lesson is the layer
              under them. Use both. Then close the message.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
