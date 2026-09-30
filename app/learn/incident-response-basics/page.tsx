import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, LifeBuoy, CheckCircle, Shield, ClipboardList, Users, RefreshCw } from "lucide-react"
import HumorBreak from "@/components/humor-break"

export default function IncidentResponseBasicsLesson() {
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
                <LifeBuoy className="h-6 w-6 text-red-700" />
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">Intermediate</Badge>
              <Badge variant="outline">20 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Incident Response Basics
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Security incidents are not a matter of if, but when. The difference between a bad afternoon
              and a catastrophic quarter is preparation. This lesson covers the incident response lifecycle
              and practical steps to survive and learn from security events.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* What is IR */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What is Incident Response?</h2>
            <p className="text-slate-600 mb-4">
              Incident Response (IR) is the organized approach to handling security breaches and cyber attacks.
              It&apos;s not about panicking — it&apos;s about having a clear, practiced plan that reduces damage,
              recovery time, and costs when something goes wrong.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-red-700">$4.88M</p>
                  <p className="text-sm text-red-600 mt-1">Average cost of a data breach (IBM 2024)</p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-green-700">-55%</p>
                  <p className="text-sm text-green-600 mt-1">Cost reduction with a tested IR plan</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-blue-700">277 days</p>
                  <p className="text-sm text-blue-600 mt-1">Average time to identify and contain a breach</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* The IR Lifecycle */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Incident Response Lifecycle</h2>
            <p className="text-slate-600 mb-6">
              The NIST framework defines four phases of incident response. Think of these as the lifecycle
              of handling a security event, from preparation through lessons learned.
            </p>

            <div className="space-y-6">
              {/* Phase 1 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="font-bold text-blue-700">1</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Preparation</CardTitle>
                      <CardDescription>Before anything happens — the most important phase</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    Preparation is what separates organizations that survive incidents from those that
                    crumble. You cannot build a response plan during a crisis.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Key Activities</p>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li className="flex items-start gap-2">• Develop and document an IR policy</li>
                        <li className="flex items-start gap-2">• Define roles and communication channels</li>
                        <li className="flex items-start gap-2">• Create a call tree and escalation path</li>
                        <li className="flex items-start gap-2">• Set up monitoring and logging tools</li>
                        <li className="flex items-start gap-2">• Conduct regular tabletop exercises</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-xs font-medium text-green-600 uppercase tracking-wide mb-2">Success Metric</p>
                      <p className="text-sm text-green-700">
                        Your team can execute the response plan without looking at documentation
                        because they&apos;ve practiced it enough.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 2 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <span className="font-bold text-yellow-700">2</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Detection &amp; Analysis</CardTitle>
                      <CardDescription>Finding the fire before it becomes a wildfire</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    Detection is about identifying anomalies and confirming whether they represent a security
                    incident. Speed matters — the faster you detect, the less damage an attacker can do.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Detection Methods</p>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li className="flex items-start gap-2">• SIEM alerts and correlation rules</li>
                        <li className="flex items-start gap-2">• Endpoint detection and response (EDR)</li>
                        <li className="flex items-start gap-2">• Network traffic anomalies</li>
                        <li className="flex items-start gap-2">• User-reported suspicious activity</li>
                        <li className="flex items-start gap-2">• Third-party breach notifications</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3">
                      <p className="text-xs font-medium text-amber-600 uppercase tracking-wide mb-2">Triage Questions</p>
                      <ul className="space-y-1 text-sm text-amber-700">
                        <li>What systems are affected?</li>
                        <li>What type of incident is it?</li>
                        <li>Is it ongoing or contained?</li>
                        <li>What is the potential impact?</li>
                        <li>Who needs to be notified?</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 3 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="font-bold text-red-700">3</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Containment, Eradication &amp; Recovery</CardTitle>
                      <CardDescription>Stop the bleeding, remove the threat, get back to normal</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    Once an incident is confirmed, the priority shifts to stopping the damage and restoring
                    operations. Containment comes before eradication — you stop the spread first, then clean up.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Containment</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li className="flex items-start gap-2">• Isolate affected systems from the network</li>
                        <li className="flex items-start gap-2">• Disable compromised accounts</li>
                        <li className="flex items-start gap-2">• Block malicious IPs and domains</li>
                        <li className="flex items-start gap-2">• Preserve evidence (forensic images)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Eradication</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li className="flex items-start gap-2">• Remove malware from affected systems</li>
                        <li className="flex items-start gap-2">• Patch vulnerabilities that were exploited</li>
                        <li className="flex items-start gap-2">• Reset all affected credentials</li>
                        <li className="flex items-start gap-2">• Validate no persistence mechanisms remain</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Recovery</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li className="flex items-start gap-2">• Restore from clean backups</li>
                        <li className="flex items-start gap-2">• Bring systems back online gradually</li>
                        <li className="flex items-start gap-2">• Monitor for signs of recurrence</li>
                        <li className="flex items-start gap-2">• Communicate restoration status</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 4 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="font-bold text-purple-700">4</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Post-Incident Activity</CardTitle>
                      <CardDescription>Learn from the incident so it doesn&apos;t happen again</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    The incident is over, but the most valuable work is just beginning. Post-incident reviews
                    turn experience into improvement.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Post-Mortem Process</p>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li className="flex items-start gap-2">• Schedule the review within one week</li>
                        <li className="flex items-start gap-2">• Include all stakeholders involved</li>
                        <li className="flex items-start gap-2">• Focus on process, not blame</li>
                        <li className="flex items-start gap-2">• Document root cause and timeline</li>
                        <li className="flex items-start gap-2">• Create an action plan with owners and deadlines</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-xs font-medium text-green-600 uppercase tracking-wide mb-2">Questions to Answer</p>
                      <ul className="space-y-1 text-sm text-green-700">
                        <li>What happened? (exact timeline)</li>
                        <li>What worked well in the response?</li>
                        <li>What could have been done faster?</li>
                        <li>What controls failed or were missing?</li>
                        <li>What would we change for next time?</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Incident Response Team */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Building Your Incident Response Team</h2>
            <p className="text-slate-600 mb-4">
              Even small teams can have an effective IR capability. The key is knowing who does what
              before an incident occurs.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Incident Commander
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    The single person who makes decisions and coordinates the response. They delegate
                    technical work and focus on strategy, communication, and prioritization.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ClipboardList className="h-5 w-5 text-green-600" />
                    Scribe / Documenter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Documents everything: timeline, actions taken, decisions made, evidence collected.
                    This documentation is critical for post-incident analysis and legal/regulatory needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    Communications Lead
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Manages internal and external communications: executives, employees, customers,
                    regulators, press, and law enforcement. One voice, one message.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 text-orange-600" />
                    Technical Lead
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Leads the technical investigation and remediation. Analyzes logs, performs forensics,
                    contains threats, and coordinates with system owners for recovery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <HumorBreak tag="incident response" />

          {/* Quick Reference */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Incident Response Quick Reference</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-3 p-2 rounded bg-white">
                <Badge className="bg-red-100 text-red-700 mt-0.5">1</Badge>
                <div>
                  <p className="font-medium text-slate-900">Detect</p>
                  <p className="text-slate-600">Identify anomalies via monitoring, alerts, or user reports. Confirm it&apos;s a real incident.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-2 rounded bg-white">
                <Badge className="bg-yellow-100 text-yellow-700 mt-0.5">2</Badge>
                <div>
                  <p className="font-medium text-slate-900">Assess</p>
                  <p className="text-slate-600">Determine scope, severity, and impact. Alert the appropriate team members.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-2 rounded bg-white">
                <Badge className="bg-orange-100 text-orange-700 mt-0.5">3</Badge>
                <div>
                  <p className="font-medium text-slate-900">Contain</p>
                  <p className="text-slate-600">Isolate affected systems, block threats, preserve evidence. Stop the spread.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-2 rounded bg-white">
                <Badge className="bg-green-100 text-green-700 mt-0.5">4</Badge>
                <div>
                  <p className="font-medium text-slate-900">Eradicate</p>
                  <p className="text-slate-600">Remove the root cause — malware, backdoors, compromised accounts.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-2 rounded bg-white">
                <Badge className="bg-blue-100 text-blue-700 mt-0.5">5</Badge>
                <div>
                  <p className="font-medium text-slate-900">Recover</p>
                  <p className="text-slate-600">Restore systems from clean backups, monitor for recurrence, return to normal.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-2 rounded bg-white">
                <Badge className="bg-purple-100 text-purple-700 mt-0.5">6</Badge>
                <div>
                  <p className="font-medium text-slate-900">Review</p>
                  <p className="text-slate-600">Conduct post-mortem, document lessons learned, update plans and controls.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Key Takeaways</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Preparation is the most important phase — you cannot build a plan during a crisis
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Fast detection and containment dramatically reduce damage and cost
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Not every alert is a crisis — triage and prioritization are critical skills
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Preserve evidence throughout the response for forensics and compliance
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Post-incident reviews are not blame sessions — they are improvement opportunities
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Practice your plan through tabletop exercises before you need it for real
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Next Steps</h2>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline">
                <Link href="/learn/phishing-awareness">Review: Phishing Awareness</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/learn">Back to All Lessons</Link>
              </Button>
              <Button asChild>
                <Link href="/frameworks/incident-response">
                  Explore Incident Response Framework
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
