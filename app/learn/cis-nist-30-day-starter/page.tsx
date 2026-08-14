import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ClipboardList, CheckCircle } from "lucide-react"

const weeks = [
  {
    week: "Week 1",
    nist: "Identify + Protect",
    cis: "CIS 1, 5, 6",
    title: "Know the accounts. Lock the obvious ones.",
    items: [
      "Write down devices, cloud apps, and who can administer them. A spreadsheet is allowed.",
      "Turn MFA on for email, SSO, and every admin. Prefer authenticator or passkey.",
      "Separate admin accounts from daily mail. Global Admin is not a lifestyle.",
      "Disable or delete accounts for people who left. Shared logins count as people who left.",
    ],
  },
  {
    week: "Week 2",
    nist: "Protect",
    cis: "CIS 10, 14",
    title: "Mail and malware's favorite doors.",
    items: [
      "Review mailbox forwarding and inbox rules. Kill unexplained external forwards.",
      "Turn off legacy authentication if it is still on.",
      "Patch the browsers and the OS that face the internet. 'We'll do it Friday' is a date. Put it on a calendar.",
      "Block macros from the internet if you still open office files from strangers. You should not.",
    ],
  },
  {
    week: "Week 3",
    nist: "Protect + Recover",
    cis: "CIS 11",
    title: "Copies that survive a bad Tuesday.",
    items: [
      "Confirm 3-2-1 for payroll, invoicing, and email. One off-reach copy.",
      "Restore one real file to a scratch folder. Keep the time and the owner.",
      "Write the restore deputy on the same page as the backup product name.",
      "If cloud sync is your only 'backup,' it is not. Fix that this week, not after encryption.",
    ],
  },
  {
    week: "Week 4",
    nist: "Detect + Respond",
    cis: "CIS 8, 17",
    title: "Notice, then have a next move.",
    items: [
      "Turn on the audit log you already pay for (M365 unified audit, Google admin logs). Look at it once.",
      "Name who gets the first call and how to isolate a laptop. One page. See Ransomware: The First Hour.",
      "Run a 30-minute tabletop: 'finance got a wire-change email.' No slides required.",
      "Pick one leftover from weeks 1–3 and finish it. Unfinished lists are décor.",
    ],
  },
]

export default function CisNist30DayStarterLesson() {
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
                <ClipboardList className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-green-100 text-green-700">Beginner</Badge>
              <Badge variant="outline">10 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              This Month&apos;s CIS/NIST Starter
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Thirty days. A control list you can finish before the next meeting invents a new
              adjective. This is not a framework essay, not a maturity model, and not a consulting
              engagement. CIS and NIST labels are there so you can point at a standard if someone asks.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <p className="text-sm text-slate-700">
              Briefing note: you do not need all 18 CIS Controls or a 40-page CSF workbook to stop
              the usual week. You need accounts locked, mail less sloppy, a backup that restores,
              and a phone list. The rest can wait until you have those.
            </p>
          </div>

          {weeks.map((block) => (
            <Card key={block.week}>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge className="bg-blue-100 text-blue-800">{block.week}</Badge>
                  <Badge variant="outline">{block.nist}</Badge>
                  <Badge variant="outline">{block.cis}</Badge>
                </div>
                <CardTitle className="text-xl">{block.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Done looks like this</h3>
            <p className="text-sm text-slate-600 mb-3">
              At day 30 you can answer four questions without a hunt through Slack:
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                Who has admin, and do they use MFA that is not SMS?
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                What forwards mail out of the tenant, and did we mean that?
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                When did we last restore a real file, and who can do it again?
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                If ransomware starts, who do we call in the first ten minutes?
              </li>
            </ul>
            <p className="text-sm text-slate-500 mt-4">
              For the longer maps, the framework pages still exist. Read them after the list, not instead of it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Next Steps</h2>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/frameworks/cis-controls">
                  CIS Controls (the map, not the month)
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/frameworks/nist-csf">NIST CSF</Link>
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
