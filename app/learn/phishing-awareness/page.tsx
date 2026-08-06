import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MailWarning, AlertTriangle, CheckCircle, ExternalLink, Search, Shield } from "lucide-react"

export default function PhishingAwarenessLesson() {
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
                <MailWarning className="h-6 w-6 text-red-700" />
              </div>
              <Badge className="bg-green-100 text-green-700">Beginner</Badge>
              <Badge variant="outline">15 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Phishing Awareness
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Phishing is the most common entry point for cyber attacks. Over 90% of data breaches start with a
              phishing email. This lesson will teach you how to spot the red flags, inspect suspicious messages,
              and respond appropriately.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* What is Phishing */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What is Phishing?</h2>
            <p className="text-slate-600 mb-4">
              Phishing is a type of social engineering attack where criminals pose as legitimate organizations
              or individuals to trick you into revealing sensitive information. This usually comes in the form
              of email, but can also arrive via text messages (smishing), phone calls (vishing), or
              fake websites.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-amber-900">Key Statistic</p>
                <p className="text-sm text-amber-800">
                  The average organization receives over 700 social engineering attacks per year, and
                  30% of phishing emails are opened by the intended target.
                </p>
              </div>
            </div>
          </div>

          {/* Common Red Flags */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Phishing Red Flags</h2>
            <p className="text-slate-600 mb-6">
              Training your eye to spot these indicators is your first line of defense. When reviewing an
              email, check for each of these warning signs:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MailWarning className="h-5 w-5 text-red-500" />
                    Suspicious Sender
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Email address doesn&apos;t match the company domain (e.g., <code className="text-xs bg-slate-100 px-1 rounded">support@gmaii.com</code>)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Display name matches a real person but email address is suspicious
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Message comes from a free email service (Gmail, Yahoo) pretending to be a business
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    Urgency &amp; Fear Tactics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      &ldquo;Your account will be suspended in 24 hours&rdquo;
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      &ldquo;Unauthorized login detected - click here to secure your account&rdquo;
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Threatens legal action, fines, or service termination if you don&apos;t act immediately
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Search className="h-5 w-5 text-blue-500" />
                    Suspicious Links &amp; Attachments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Hover over links before clicking - the visible text may say &ldquo;paypal.com&rdquo; but the actual URL goes somewhere else
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Unexpected attachments, especially .zip, .exe, .docm, or .js files
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      URL shorteners (bit.ly, tinyurl) hiding the actual destination
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    Poor Grammar &amp; Generic Greetings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      &ldquo;Dear Customer&rdquo; or &ldquo;Dear User&rdquo; instead of your actual name
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Awkward phrasing, spelling errors, or inconsistent formatting
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Logos that look slightly off or low-resolution
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Anatomy of a Phishing Email */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Anatomy of a Phishing Email</h2>
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 p-2 rounded bg-white">
                    <Badge className="bg-red-100 text-red-700 mt-0.5">1</Badge>
                    <div>
                      <p className="font-medium text-slate-900">Spoofed Sender</p>
                      <p className="text-slate-600">The &ldquo;From&rdquo; name says &ldquo;IT Support&rdquo; but the email address is <code className="bg-red-50 px-1 rounded">it-support@secure-update-g43f.top</code></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded bg-white">
                    <Badge className="bg-red-100 text-red-700 mt-0.5">2</Badge>
                    <div>
                      <p className="font-medium text-slate-900">Urgent Subject Line</p>
                      <p className="text-slate-600">&ldquo;Action Required: Your Email Password Will Expire Today&rdquo; - creates panic to bypass critical thinking.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded bg-white">
                    <Badge className="bg-red-100 text-red-700 mt-0.5">3</Badge>
                    <div>
                      <p className="font-medium text-slate-900">Generic Greeting</p>
                      <p className="text-slate-600">&ldquo;Dear Valued User&rdquo; - legitimate companies know your name.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded bg-white">
                    <Badge className="bg-red-100 text-red-700 mt-0.5">4</Badge>
                    <div>
                      <p className="font-medium text-slate-900">Malicious Link</p>
                      <p className="text-slate-600">A button that says &ldquo;Reset Password Now&rdquo; but links to <code className="bg-red-50 px-1 rounded">http://fake-login-page.xyz/</code></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded bg-white">
                    <Badge className="bg-red-100 text-red-700 mt-0.5">5</Badge>
                    <div>
                      <p className="font-medium text-slate-900">Consequences</p>
                      <p className="text-slate-600">&ldquo;Failure to update within 24 hours will result in account termination.&rdquo; - pure pressure tactic.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What to Do */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Do When You Suspect a Phish</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-700">DO</Badge>
                    Report it immediately
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Most organizations have a &ldquo;Report Phishing&rdquo; button in their email client or
                    a designated security inbox (e.g., <code className="bg-slate-100 px-1 rounded">security@company.com</code>).
                    Reporting helps protect everyone and lets the security team investigate.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-700">DO</Badge>
                    Verify through a different channel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    If an email claims to be from your bank, IT department, or a vendor, contact them
                    using a phone number or website you know is legitimate - not the contact info in
                    the suspicious email.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Badge className="bg-red-100 text-red-700">DON&apos;T</Badge>
                    Click links or download attachments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Even if the email looks convincing, do not click anything. Hover your mouse over
                    links to preview the actual URL. When in doubt, navigate to the website directly
                    by typing the address into your browser.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Badge className="bg-red-100 text-red-700">DON&apos;T</Badge>
                    Reply, forward, or engage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Replying confirms your email address is active, which makes you a bigger target.
                    Do not call phone numbers listed in suspicious emails or respond to text messages
                    from unknown senders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Types of Phishing */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Types of Phishing Attacks</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Email Phishing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Mass emails sent to many targets, hoping someone takes the bait. Usually impersonates
                    well-known brands like PayPal, Microsoft, or Amazon.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Spear Phishing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Targeted attacks aimed at specific individuals or organizations. The attacker researches
                    their target and personalizes the message to increase credibility.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Whaling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Spear phishing aimed at senior executives or high-value targets. The stakes are higher
                    and the messages are carefully crafted to exploit authority and urgency.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Smishing &amp; Vishing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Phishing via SMS (smishing) or voice calls (vishing). Attackers may spoof caller IDs
                    or send texts claiming to be from your bank or delivery service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Knowledge Check */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Quick Knowledge Check</h3>
            <p className="text-slate-600 mb-4">
              Next time you receive an unexpected email, run through these five questions:
            </p>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-700">1.</span>
                Do I know the sender? Is the email address legitimate?
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-700">2.</span>
                Was I expecting this message? Does it match the context of our relationship?
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-700">3.</span>
                Is there a sense of urgency designed to make me act without thinking?
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-700">4.</span>
                Does the email ask me to click a link, open an attachment, or provide sensitive info?
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-700">5.</span>
                Does anything feel &ldquo;off&rdquo; - grammar, tone, branding, or request?
              </li>
            </ol>
            <p className="text-sm text-slate-600 mt-4">
              If the answer to any of these raises a red flag, report it before clicking anything.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Next Steps</h2>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/learn/password-security">
                  Next Lesson: Password Security Basics
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
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
