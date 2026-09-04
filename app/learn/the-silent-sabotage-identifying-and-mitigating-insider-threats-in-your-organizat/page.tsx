import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, UserX, UserMinus, KeyRound, ClipboardList } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export default function TheSilentSabotageIdentifyingAndMitigatingInsiderThreatsInYourOrganizatLesson() {
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
                <Shield className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">Intermediate</Badge>
              <Badge variant="outline">18 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              The Silent Sabotage: Identifying and Mitigating Insider Threats in Your Organization
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              The person who can hurt you most already has a badge, a login, and a reason to finish the
              spreadsheet before lunch. This lesson is about detection, least privilege, and offboarding —
              not a hunt for villains in the break room.
            </p>
            <div className="flex flex-wrap gap-2">
              {["insider threats", "least privilege", "offboarding", "data handling", "security awareness"].map((t) => (
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Start with the boring truth</h2>
            <p className="text-slate-600 mb-4">
              External attackers get the movie budget. Insiders get the keys. An insider is anyone with
              legitimate access: employees, contractors, vendors, interns, the MSP who can RDP in, the
              former colleague whose account is still in the shared mailbox. Most damage is not sabotage.
              It is sloppiness that looks like sabotage after the fact.
            </p>
            <p className="text-slate-600 mb-4">
              Treat this as a control problem, not a personality contest. You cannot interview your way
              out of a shared admin password. You can revoke access on the last day, stop payroll from
              living in everyone&apos;s Downloads folder, and notice when a quiet account suddenly
              exports the CRM at 11 p.m.
            </p>
            <LessonAside>
              If your insider-threat program is a poster that says &ldquo;see something, say something&rdquo;
              and a shared Dropbox called CLIENTS-FINAL, you have a slogan and a leak. Pick one to keep.
            </LessonAside>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Three kinds of insider — only one wears a cape</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100">
                      <AlertTriangle className="h-5 w-5 text-amber-700" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Negligent</CardTitle>
                      <CardDescription>No malice. Plenty of blast radius.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    The most common type. Someone forwards a client list to a personal inbox so they can
                    work from the kitchen. Someone leaves a laptop in a rideshare. Someone grants
                    &ldquo;anyone with the link&rdquo; because the vendor asked nicely in Slack.
                    Training and friction help here. Witch hunts do not.
                  </p>
                  <div className="bg-amber-50 rounded-lg p-3 text-sm text-amber-900">
                    Tell: the person is trying to get work done. The path they chose is the problem,
                    not their loyalty.
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <KeyRound className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Compromised</CardTitle>
                      <CardDescription>The badge is real. The hands on the keyboard are not.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    Phishing, malware, or a reused password hands an outsider an insider session.
                    From the logs, it looks like Priya in Accounting. Priya is at lunch. The session
                    is in another country, or it is downloading three years of invoices for the first time.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3 text-sm text-blue-900">
                    Tell: the account behaves unlike the human. New device, odd hours, bulk export,
                    MFA fatigue, or a password reset the person does not remember requesting.
                    Pair this with the Phishing Awareness and Password Security lessons.
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100">
                      <UserX className="h-5 w-5 text-red-700" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Malicious</CardTitle>
                      <CardDescription>Intentional misuse. Rare. Expensive when it is real.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    Someone uses authorized access to steal, sabotage, or sell. Motives are usually
                    money, revenge, or a side hustle that thinks your customer list is their seed
                    round. You do not diagnose this from vibes. You diagnose it from access that
                    does not match the job, data leaving on a schedule, and a refusal to use the
                    approved path.
                  </p>
                  <div className="bg-red-50 rounded-lg p-3 text-sm text-red-900">
                    Tell: targeted collection, after-hours copies, access to systems they do not
                    need, or a departing employee who suddenly &ldquo;needs one more export.&rdquo;
                    HR and legal own the people part. Security owns the evidence and the lockout.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <HumorBreak tag="insider" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What actually reduces the damage</h2>
            <p className="text-slate-600 mb-4">
              You do not need a Hollywood UEBA suite on day one. You need fewer people who can
              touch the crown jewels, a record of who did, and a last-day ritual that is faster
              than a farewell Slack thread.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Least privilege, on a calendar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Role-based access. No shared &ldquo;admin&rdquo; account that four people know.
                    Review quarterly: if they have not used a system in 90 days, they probably do
                    not need it. Temporary access for projects should expire without a meeting.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Watch the exits, not just the doors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Data loss prevention can be a product. It can also be &ldquo;client files do not
                    go to personal email&rdquo; enforced in the mail gateway, USB storage disabled
                    on work laptops, and cloud sharing set to specific people — not the internet.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <UserMinus className="h-5 w-5 text-purple-600" />
                    Offboarding that happens the same day
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Identity, email, VPN, SaaS, badges, shared passwords, and the contractor
                    account in the billing tool. Collect devices. Do not wait for IT to &ldquo;get
                    to it Monday.&rdquo; Monday is when the mailbox forwards to a Gmail you will
                    find in October.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ClipboardList className="h-5 w-5 text-blue-600" />
                    Logs you will actually read
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Admin actions, bulk exports, new forwarding rules, after-hours logins from
                    new countries. If you have a SIEM, use it for these. If you do not, the
                    Microsoft 365 or Google Workspace audit log plus a weekly 20-minute review
                    beats a dashboard nobody opens.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">A scenario that is not a thriller</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
              <p>
                <strong>What happened:</strong> Alex in Operations emails a CSV of customer contacts
                to a personal address &ldquo;so I can build the mail-merge at home.&rdquo; The laptop
                is slow. The deadline is real. Alex is not selling the list.
              </p>
              <p>
                <strong>Why it still counts:</strong> That file is now on a device you do not
                manage, in an inbox you cannot wipe, possibly synced to a phone that will be
                lost at a restaurant. Negligent insider. Same data as a breach. Worse story
                because you will have to say &ldquo;we emailed it to ourselves.&rdquo;
              </p>
              <p>
                <strong>The play:</strong> Do not humiliate Alex in the all-hands. Close the
                personal-forward path. Give Alex an approved way to work remotely. Check whether
                the file was forwarded again. If customers are in the file, follow your incident
                process — see Incident Response Basics. Shame is not a control. A blocked
                outbound rule is.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">When something already left the building</h2>
            <p className="text-slate-600 mb-4">
              Contain first. Isolate the account, revoke sessions, pull the forwarding rule,
              disable the token. Preserve logs. Then decide if this is a people issue, a
              phishing issue, or both. Do not start deleting evidence because you are embarrassed.
              Pair with the Incident Response lesson for the lifecycle; this page is the
              &ldquo;it was one of ours&rdquo; chapter.
            </p>
            <LessonAside>
              The worst briefing is &ldquo;we think it was an insider&rdquo; with no timeline.
              Write times. Name systems. Leave the novel for the post-mortem.
            </LessonAside>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Insider hygiene checklist</h3>
            <div className="space-y-2 text-sm text-slate-700">
              {[
                "No shared admin passwords. Use a password manager and named accounts.",
                "Joiner / mover / leaver list: access granted and revoked the same day as the role change.",
                "Crown-jewel systems (payroll, banking, customer export) have a short access list and MFA.",
                "Personal email and unsanctioned cloud drives cannot receive the client folder.",
                "Audit log reviewed for exports, forwarding rules, and new admin roles — at least weekly.",
                "Departing people: identity, SaaS, VPN, badge, devices, and mailbox forwarding — one checklist.",
                "Reporting path that does not require accusing a colleague in Slack. Security inbox is enough.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Key takeaways</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Most insider harm is negligence or a stolen session, not a mastermind.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Least privilege and same-day offboarding beat a poster about loyalty.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Watch bulk exports, new forwarding rules, and access that outlived the job.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                If data already left, contain and write a timeline. Then use the IR lesson.
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
                <Link href="/learn/zero-trust-architecture-for-small-businesses">
                  Next: Zero Trust for Small Businesses
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/learn/incident-response-basics">Incident Response Basics</Link>
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
