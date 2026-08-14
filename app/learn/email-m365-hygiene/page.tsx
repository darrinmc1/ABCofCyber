import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Inbox, CheckCircle, AlertTriangle, Forward, Users } from "lucide-react"

export default function EmailM365HygieneLesson() {
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
              <div className="p-2 rounded-lg bg-blue-100">
                <Inbox className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-green-100 text-green-700">Beginner</Badge>
              <Badge variant="outline">12 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Email and Microsoft 365 Hygiene for Small Teams
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Most small-team breaches do not start with a zero-day. They start with a shared mailbox,
              a forwarding rule nobody remembers, and an admin who still uses SMS. This is tenant
              hygiene you can do this week — training, not a managed mailbox service.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The quiet failures</h2>
            <p className="text-slate-600 mb-4">
              Microsoft 365 (and Google Workspace, if that is your house) is where mail, files, and
              identity live in the same building. Attackers who get one mailbox often get the
              forwarding rule, the SharePoint link, and the invoice folder.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-700">
                Briefing note: shared mailboxes are where good intentions become incident reports.
                &ldquo;info@&rdquo; with four people and one reused password is not a helpdesk. It is
                a group project.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Five settings that earn their keep</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">MFA on every human, especially admins</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Global admin without MFA is a courtesy to strangers. Prefer authenticator or
                    passkey. See MFA Beyond Passwords.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Forward className="h-5 w-5 text-blue-600" />
                    Audit inbox rules and forwarding
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    After a phish, attackers add a silent forward to an external address. Review
                    mailbox rules monthly. Unexpected &ldquo;if subject contains invoice, forward&rdquo;
                    is not a productivity hack.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Kill legacy authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Old protocols skip modern MFA. If a dusty mail app still needs them, replace the
                    app. Do not keep the barn door for one calendar sync.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    External sharing with an expiration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    &ldquo;Anyone with the link&rdquo; is convenient until the link is the contract
                    folder. Prefer specific people, set an expiry, and stop sharing the whole site
                    when you meant one file.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Mailbox habits that are not settings</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                Do not grant Global Admin for a printer issue. Use a separate admin account and
                ordinary mail for ordinary work.
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                External auto-forward should be off unless a named person approved a named exception.
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                Consent to unknown apps (&ldquo;this tool wants to read your mail&rdquo;) is how
                tokens leave the building. Admin consent only.
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">This week&apos;s walk-through</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                List every Global Admin. If it is more than two people plus a break-glass account, ask why.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                Export mailbox forwarding and inbox rules. Delete the ones nobody can explain.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                Turn on MFA for remaining holdouts. Disable legacy auth.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                Review SharePoint / OneDrive links older than 90 days. Expire or lock them.
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
                <Link href="/learn/cis-nist-30-day-starter">
                  Next Lesson: This Month&apos;s CIS/NIST Starter
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/learn/phishing-awareness">Related: Phishing Awareness</Link>
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
