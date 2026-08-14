import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, HardDrive, CheckCircle, AlertTriangle, RefreshCw, Shield } from "lucide-react"

export default function BackupsThatActuallyRestoreLesson() {
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
                <HardDrive className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-green-100 text-green-700">Beginner</Badge>
              <Badge variant="outline">10 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Backups That Actually Restore
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              A backup you have never restored is a rumor about a backup. This lesson is the minimum
              a small team needs: copies that survive ransomware, a restore you have watched succeed,
              and one person who knows which button is not &ldquo;format drive.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The 3-2-1 rule, without the poster</h2>
            <p className="text-slate-600 mb-4">
              Three copies of anything you cannot afford to retype. Two different kinds of storage.
              One copy the ransomware cannot reach — offline, immutable, or in an account the daily
              admin does not use.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">3 copies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Production plus two backups. One laptop and a USB in the same bag is one
                    accident, not a plan.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">2 media</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Disk and cloud, or NAS and an offline drive. Same vendor, same login, same
                    outage is not diversity.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">1 off-reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Immutable object lock, a disconnected drive, or a separate cloud tenant.
                    If the attacker has your daily admin, they will delete the friendly backup first.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Restore is the test. Backup is the homework.</h2>
            <p className="text-slate-600 mb-4">
              Pick one file, one mailbox, and one system. Restore them on a calendar, not after the
              invoice folder has already been encrypted. Time it. Write down who can do it when the
              usual person is on a plane.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-start gap-3">
              <RefreshCw className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-700">
                Briefing note: &ldquo;The backup job is green&rdquo; means a job ran. It does not mean
                last Tuesday&apos;s contracts come back. Those are different sentences.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What usually goes wrong</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                Backing up the same share the malware already mapped. Encrypted in, encrypted out.
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                Cloud sync treated as backup. Ransomware syncs beautifully.
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                No one has the restore credentials except a contractor who left in March.
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                Testing once in 2019 and calling it a program.
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Do this month</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                List the systems that would stop payroll, invoicing, or email. Those get the off-reach copy first.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                Restore one real file to a scratch location. Keep the screenshot and the elapsed time.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                Write the restore owner and a deputy on one page. Not in a 40-slide deck.
              </li>
              <li className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                This is training on how to run backups. It is not a hosted backup service.
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
                <Link href="/learn/ransomware-first-hour">
                  Next Lesson: Ransomware — The First Hour
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
