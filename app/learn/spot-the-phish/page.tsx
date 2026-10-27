import type { Metadata } from "next"
import Link from "next/link"
import { pageMeta } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MailWarning, AlertTriangle, CheckCircle, Search, Shield, QrCode } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export const metadata: Metadata = pageMeta({
  title: "Spot the Phish",
  description:
    "Five phishing tells, how to read a link without clicking, QR-code phishing, and how to report a suspicious message in under a minute.",
  path: "/learn/spot-the-phish",
})

const topics = ["Phishing tells", "Link inspection", "Quishing", "Reporting"]

export default function SpotThePhishLesson() {
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
                <MailWarning className="h-6 w-6 text-red-700" />
              </div>
              <Badge className="bg-green-100 text-green-700">Beginner</Badge>
              <Badge variant="outline">12 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Spot the Phish Before It Spots You
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Most small-business break-ins start with an email, not a hoodie and green text. This lesson is the
              slow-down: five tells, how to read a link, QR codes, and what to do if you already clicked.
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why this still works</h2>
            <p className="text-slate-600 mb-4">
              Somebody clicks, types a password into a fake login page, and the attacker walks in through the front
              door with a valid key. MITRE ATT&amp;CK lists phishing as technique T1566, under Initial Access. In plain
              terms: it is how they get in.
            </p>
            <p className="text-slate-600 mb-4">
              Firewalls and antivirus help, but the email is aimed at a person, so the person is part of the defence.
              That is you. NIST SP 800-50 frames awareness as ongoing, not an annual slideshow.
            </p>
            <LessonAside>
              The ATO does not run a countdown in your inbox. If it did, half of Queensland would have lodged a
              complaint before smoko. The countdown is the tell.
            </LessonAside>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The five tells</h2>
            <p className="text-slate-600 mb-6">
              None of these prove an email is malicious on its own. Two or more together should make you slow down.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    1. Urgency or fear
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 space-y-2">
                  <p>&ldquo;Your account will be suspended in 24 hours.&rdquo; &ldquo;Overdue invoice — final notice.&rdquo;</p>
                  <p>Pressure is the point. It is meant to stop you thinking. Real banks and the ATO do not usually threaten you by email with a countdown.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MailWarning className="h-5 w-5 text-red-600" />
                    2. A sender that is almost right
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 space-y-2">
                  <p>
                    The display name says &ldquo;Microsoft 365&rdquo; but the address is{" "}
                    <code className="text-xs bg-slate-100 px-1 rounded">support@micros0ft-billing.co</code>.
                  </p>
                  <p>Always look at the actual address, not just the name. On mobile, tap the name to see it.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Search className="h-5 w-5 text-blue-600" />
                    3. Links that do not match
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  <p>The text says <code className="text-xs bg-slate-100 px-1 rounded">mybank.com.au</code> but the link goes somewhere else. Checking that is the next section.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-slate-700" />
                    4. Unexpected attachments
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  <p>Invoices you were not expecting, &ldquo;scanned documents&rdquo;, zip files, HTML attachments, or Office files asking you to &ldquo;Enable Content&rdquo;. That last one is a classic. Do not.</p>
                </CardContent>
              </Card>
            </div>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">5. Asking for credentials, payment, or secrecy</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <p>&ldquo;Log in to view this document.&rdquo; &ldquo;Can you buy some gift cards for a client? Keep it quiet.&rdquo; Legitimate requests rarely need your password and almost never need gift cards.</p>
              </CardContent>
            </Card>
          </div>

          <HumorBreak tag="phishing" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Hover, do not click</h2>
            <p className="text-slate-600 mb-4">
              On a computer, rest your mouse over a link (do not click) and look at the bottom-left of the window or the pop-up. That is where it actually goes.
            </p>
            <p className="text-slate-600 mb-4">
              Read the domain from right to left. In{" "}
              <code className="text-xs bg-slate-100 px-1 rounded">login.mybank.com.au.secure-verify.net/account</code>,
              the real domain is <code className="text-xs bg-slate-100 px-1 rounded">secure-verify.net</code>. Everything before it is decoration the attacker chose. Your bank does not live there.
            </p>
            <p className="text-slate-600">
              On a phone, press and hold the link to preview it. If you cannot tell, do not open it. Go to the site yourself by typing the address or using a bookmark you already trust.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Quishing: the QR code in the car park</h2>
            <div className="flex items-start gap-3 mb-4">
              <QrCode className="h-5 w-5 text-slate-700 mt-1 flex-shrink-0" />
              <p className="text-slate-600">
                Attackers have worked out that email filters struggle to read QR codes in images, and that phones have weaker protection than work laptops. So you get an email saying &ldquo;Scan to set up MFA&rdquo;, or a sticker stuck over the real QR code on a parking meter.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                An email asking you to scan a QR code to log in to work systems is suspicious by default.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Check the preview URL your camera shows before you open it.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                In public places, look for stickers placed over the original code. Fake parking-meter QR stickers are a known scam trick. If in doubt, use the official app or pay at the machine.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">You clicked. Now what?</h2>
            <p className="text-slate-600 mb-4">It happens. The worst move is hiding it.</p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700">
              <li>Do not type anything else into the page. Close it.</li>
              <li>If you entered a password, change it straight away from a device you trust, and turn on MFA if it is not already on.</li>
              <li>Tell whoever looks after IT, right now. Minutes count.</li>
              <li>If money or bank details were involved, call your bank.</li>
              <li>Report it to the ACSC at cyber.gov.au (ReportCyber).</li>
            </ol>
            <p className="text-slate-600 mt-4">
              People who report quickly limit the damage. People who wait until Monday give the attacker a long weekend.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How to report it properly</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Use the <strong>Report Phishing</strong> button if your email system has one (Outlook and Gmail both do).
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Otherwise, forward it to your IT contact <strong>as an attachment</strong> if they ask for that, so the headers survive.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Do not forward it to the whole office with &ldquo;is this real??&rdquo;. Now there are 30 copies and somebody will click one.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Delete it once it has been reported.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Common pitfalls</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">&ldquo;It came from someone I know.&rdquo;</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Accounts get hacked. A weird message from a real contact is still weird. Check with them by phone or a separate chat.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">&ldquo;The padlock means it is safe.&rdquo;</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  The padlock means the connection is encrypted. Phishing sites have padlocks too. It tells you nothing about who runs the site.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">&ldquo;I am too small to be a target.&rdquo;</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Most phishing is automated and sent in bulk. You are not being singled out. You are just on the list.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Training once a year</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Short, regular reminders beat an annual slideshow nobody remembers.
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Check yourself</h3>
            <ol className="space-y-2 text-sm text-slate-700">
              <li><span className="font-bold text-blue-700">1.</span> The display name says &ldquo;ANZ Bank&rdquo; and the address is <code className="text-xs bg-white px-1 rounded">alerts@anz-secure-help.com</code>. Phish or fine?</li>
              <li><span className="font-bold text-blue-700">2.</span> You hover over a link and see <code className="text-xs bg-white px-1 rounded">docs.google.com.drive-share.ru</code>. What is the real domain?</li>
              <li><span className="font-bold text-blue-700">3.</span> An email asks you to scan a QR code to &ldquo;keep your MFA active&rdquo;. What do you do?</li>
              <li><span className="font-bold text-blue-700">4.</span> You typed your password into a fake page. List your first three actions.</li>
            </ol>
            <details className="mt-4 text-sm text-slate-700">
              <summary className="cursor-pointer font-medium text-slate-900">Answers</summary>
              <p className="mt-2">
                1 — phish (wrong domain). 2 — drive-share.ru. 3 — do not scan; report it. 4 — close the page, change the password from a trusted device, tell IT.
              </p>
            </details>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Wrap</h2>
            <p className="text-slate-600">
              Phishing beats people by making them hurry, so the counter is to slow down: check the sender, hover over links, be wary of QR codes, and report fast. You will not catch every one. You need to catch most of them and own up quickly about the rest.
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
                <Link href="/learn/business-email-compromise">
                  Next: The Invoice That Wasn&apos;t
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/learn/phishing-awareness">Phishing Awareness</Link>
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
