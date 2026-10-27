import type { Metadata } from "next"
import Link from "next/link"
import { pageMeta } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Phone, AlertTriangle, CheckCircle, Forward } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export const metadata: Metadata = pageMeta({
  title: "Business Email Compromise",
  description:
    "How BEC differs from bulk phishing, the call-back rule for payment changes, mailbox-takeover signs, and three cheap controls.",
  path: "/learn/business-email-compromise",
})

const topics = ["Business email compromise", "Call-back rule", "Mailbox takeover", "Payment controls"]

export default function BusinessEmailCompromiseLesson() {
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
                <Users className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-green-100 text-green-700">Beginner</Badge>
              <Badge variant="outline">14 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              The Invoice That Wasn&apos;t: Business Email Compromise
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Bulk phishing is a shotgun. Business email compromise is a sniper: often no malware and no dodgy link, just a polite email asking someone to pay a new account.
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Not your average phish</h2>
            <p className="text-slate-600 mb-4">
              BEC is consistently one of the costliest cybercrime categories in both the FBI IC3 annual report and the ACSC Annual Cyber Threat Report. The FBI&apos;s IC3 2025 report logged 24,768 BEC complaints and about US$3.05 billion in losses. Closer to home, ASD&apos;s 2024–25 Annual Cyber Threat Report found BEC fraud that caused a financial loss made up 15% of cybercrime reports from businesses. The exact figures change each year. The pattern does not: lots of money lost with very little technical effort.
            </p>
            <p className="text-slate-600">
              MITRE ATT&amp;CK covers the mailbox side as T1534 (Internal Spearphishing) and T1114.003 (Email Forwarding Rule). ACSC publishes BEC guidance for the payment side. The control that stops most of the losses is still a phone call.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How it plays out</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">1. The lookalike supplier</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 space-y-2">
                  <p>
                    Your regular supplier is <code className="text-xs bg-slate-100 px-1 rounded">acme-plumbing.com.au</code>. The email comes from <code className="text-xs bg-slate-100 px-1 rounded">acme-plumbinq.com.au</code> (a &ldquo;q&rdquo; instead of a &ldquo;g&rdquo;). Same logo, same signature, same tone.
                  </p>
                  <p>&ldquo;We have changed banks — please update our details before paying this month&apos;s invoice.&rdquo;</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">2. The hijacked real account</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  <p>Worse: the attacker has actually got into your supplier&apos;s mailbox (or yours). They read the threads for weeks, wait for a real invoice, then reply in the same thread with &ldquo;updated&rdquo; bank details. Every check you would normally do says it is genuine, because it technically is the real account.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">3. The boss in a hurry</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  <p>&ldquo;I am in a meeting, can&apos;t talk. Need you to process an urgent transfer to a new client today. Keep this between us.&rdquo; The CEO is supposedly &ldquo;unavailable&rdquo;, which conveniently means you cannot check.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The call-back rule</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3 mb-4">
              <Phone className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-950 font-medium">
                Any request to change bank details, or any unusual urgent payment, gets confirmed by phone using a number you already had — never one from the email.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>Use the number from your accounting system, an old invoice, or the supplier&apos;s website you found yourself.</li>
              <li>Ask a specific question only the real person would know (&ldquo;What was the amount on last month&apos;s invoice?&rdquo;).</li>
              <li>Write the check down: who you called, when, and what they said.</li>
              <li>If they push back with &ldquo;there is no time&rdquo;, that is your answer.</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Bonus control: require two people to approve bank-detail changes. Attackers find it hard to fool two people at once.
            </p>
            <LessonAside>
              New bank details in the same thread are not a relationship. They are a phone call, on a number you already had. &ldquo;There is no time&rdquo; is the whole trick.
            </LessonAside>
          </div>

          <HumorBreak tag="bec" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Signs your own mailbox has been taken over</h2>
            <p className="text-slate-600 mb-4">
              In ATT&amp;CK, attackers who are in a mailbox often set up <strong>forwarding or inbox rules</strong> (T1114.003) so they can read mail quietly and hide replies. Watch for:
            </p>
            <ul className="space-y-3 text-sm text-slate-700 mb-4">
              <li className="flex items-start gap-2">
                <Forward className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Rules you did not create, especially ones that move mail with words like &ldquo;invoice&rdquo;, &ldquo;payment&rdquo; or &ldquo;bank&rdquo; to RSS Feeds, Archive, or Deleted Items.
              </li>
              <li className="flex items-start gap-2">
                <Forward className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Automatic forwarding to an outside address.
              </li>
              <li className="flex items-start gap-2">
                <Forward className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Customers replying to emails you never sent.
              </li>
              <li className="flex items-start gap-2">
                <Forward className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Sign-in alerts from places you have never been (a sign-in from another country at 3am while you were asleep in Toowoomba).
              </li>
              <li className="flex items-start gap-2">
                <Forward className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Sent items you do not recognise, or sent items that have been deleted.
              </li>
            </ul>
            <p className="text-slate-600">
              Check this now: in Outlook, go to Settings → Mail → Rules and Forwarding. In Gmail, go to Settings → Filters and Forwarding. It takes two minutes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">If it has already happened</h2>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700">
              <li><strong>Call your bank straight away.</strong> Speed matters a lot for recovering funds. Ask them to contact the receiving bank.</li>
              <li>Report it at cyber.gov.au (ReportCyber). Scamwatch also takes reports.</li>
              <li>Reset the affected mailbox password, sign out all sessions, turn on MFA, and remove any strange rules.</li>
              <li>Tell the supplier or customer whose name was used, by phone.</li>
              <li>Keep the emails. Do not delete the evidence.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Three controls that cost almost nothing</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">1. MFA on every mailbox</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Most BEC account takeovers start with a stolen password, and MFA blocks most of those.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">2. The call-back rule, in writing</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Put it in the payments process so the newest staff member feels allowed to slow the boss down.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">3. Block outside auto-forwarding</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Turn it off in Microsoft 365 or Google Workspace admin settings.
                </CardContent>
              </Card>
            </div>
            <p className="text-slate-600 mt-4">
              Extra credit: set up DMARC on your domain (see{" "}
              <Link href="/learn/spf-dkim-dmarc-basics" className="text-blue-700 underline">
                SPF, DKIM, and DMARC
              </Link>
              ) so attackers cannot send email that looks like it comes from exactly your address.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Common pitfalls</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    &ldquo;It was in the same email thread, so it was real.&rdquo;
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">Hijacked threads are the whole trick.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Trusting the PDF</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">Editing an invoice PDF is easy. The bank details in it prove nothing.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Embarrassment</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Staff who get fooled often wait, hoping it will sort itself out. Make it clear that reporting fast is what you want and nobody gets in trouble for it.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Thinking it only targets big companies</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Tradies, real estate settlements and small accounting firms are regular targets because they move real money with very little process.
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Check yourself</h3>
            <ol className="space-y-2 text-sm text-slate-700">
              <li><span className="font-bold text-blue-700">1.</span> A supplier emails from their usual address with new bank details. What do you do?</li>
              <li><span className="font-bold text-blue-700">2.</span> Name two signs your mailbox has been compromised.</li>
              <li><span className="font-bold text-blue-700">3.</span> Money went to a scammer&apos;s account an hour ago. What is step one?</li>
            </ol>
            <details className="mt-4 text-sm text-slate-700">
              <summary className="cursor-pointer font-medium text-slate-900">Answers</summary>
              <p className="mt-2">
                1 — call them on a number you already had. 2 — any two of: strange rules, forwarding, unknown sign-ins, unfamiliar sent items. 3 — call your bank.
              </p>
            </details>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Wrap</h2>
            <p className="text-slate-600 mb-4">
              BEC does not hack your computer. It hacks your process. Add one phone call and a second approver, and the most profitable scam around gets a lot less profitable.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                BEC is a payment or bank-detail change, often with no malware.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Confirm on a number you already had. Write down who you called.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                MFA, a written call-back, and blocked external auto-forwarding stop most of the losses.
              </li>
            </ul>
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
                <Link href="/learn/spf-dkim-dmarc-basics">
                  Next: SPF, DKIM, DMARC
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/learn/spot-the-phish">Spot the Phish</Link>
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
