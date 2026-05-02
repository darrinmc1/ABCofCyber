import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, AlertTriangle, Shield, Clock, Users, FileCheck, Server, Bell, CheckCircle } from "lucide-react"

const incidentLifecycle = [
  {
    phase: "Detection",
    description: "Finding out something happened",
    duration: "Minutes to days",
    activities: [
      "Monitoring alerts from SIEM, EDR, or IDS",
      "User reports of suspicious activity",
      "Automated anomaly detection",
      "Third-party notifications",
      "Threat intelligence feeds",
    ],
    keyQuestions: [
      "What triggered the alert?",
      "Who reported it and when?",
      "What systems are potentially affected?",
    ],
  },
  {
    phase: "Containment",
    description: "Limiting the damage",
    duration: "Minutes to hours",
    activities: [
      "Isolating affected systems",
      "Blocking malicious IPs or accounts",
      "Changing compromised credentials",
      "Enabling additional logging",
      "Activating backup procedures",
    ],
    keyQuestions: [
      "What is the blast radius?",
      "What can we do right now to stop spread?",
      "What do we need to preserve for investigation?",
    ],
  },
  {
    phase: "Eradication",
    description: "Removing the threat",
    duration: "Hours to days",
    activities: [
      "Identifying root cause",
      "Removing malware and backdoors",
      "Patching exploited vulnerabilities",
      "Resetting compromised accounts",
      "Verifying system integrity",
    ],
    keyQuestions: [
      "How did the attacker get in?",
      "What did they leave behind?",
      "What needs to be rebuilt versus cleaned?",
    ],
  },
  {
    phase: "Recovery",
    description: "Getting back to normal",
    duration: "Days to weeks",
    activities: [
      "Restoring from clean backups",
      "Rebuilding compromised systems",
      "Verifying security controls",
      "Resuming normal operations",
      "Monitoring for recurrence",
    ],
    keyQuestions: [
      "Is the environment clean?",
      "Have we addressed the root cause?",
      "What monitoring do we need long-term?",
    ],
  },
  {
    phase: "Lessons Learned",
    description: "Improving for next time",
    duration: "Within 2 weeks",
    activities: [
      "Documenting the timeline",
      "Identifying what worked and what did not",
      "Updating procedures",
      "Training the team",
      "Implementing improvements",
    ],
    keyQuestions: [
      "What controls failed?",
      "What would we do differently?",
      "How do we prevent recurrence?",
    ],
  },
]

const commonIncidents = [
  {
    type: "Phishing Attack",
    indicators: ["Suspicious emails to multiple users", "Users reporting credential prompts", "External emails bypassing filters"],
    response: [
      "Isolate affected workstations",
      "Reset compromised credentials",
      "Review email logs for scope",
      "Block sender and domain",
      "Notify potentially affected users",
    ],
    prevention: ["Email filtering", "User training", "Multi-factor authentication", "URL sandboxing"],
  },
  {
    type: "Ransomware",
    indicators: ["Encrypted files", "Ransom notes", "Widespread file access issues", "Suspicious executables"],
    response: [
      "Isolate affected systems immediately",
      "Do NOT pay ransom without leadership approval",
      "Identify ransomware variant",
      "Check for backups and determine restoration path",
      "Engage law enforcement and cyber insurance",
    ],
    prevention: ["Offline backups", "Network segmentation", "Endpoint protection", "Least privilege access"],
  },
  {
    type: "Insider Threat",
    indicators: ["Unauthorized data access", "Large data transfers", "Access to systems outside normal role", "Policy violations"],
    response: [
      "Verify the alert is not false positive",
      "Engage HR and legal",
      "Preserve evidence without alerting",
      "Document access patterns",
      "Plan response with legal counsel",
    ],
    prevention: ["Data loss prevention", "Access monitoring", "Least privilege", "Employee awareness"],
  },
  {
    type: "Data Breach",
    indicators: ["Unauthorized access to sensitive data", "Data appearing elsewhere", "Credential misuse", "Anomalous database queries"],
    response: [
      "Contain the breach",
      "Identify what data was accessed",
      "Determine scope and affected individuals",
      "Notify legal and compliance",
      "Notify affected individuals per regulatory requirements",
    ],
    prevention: ["Encryption", "Access controls", "Monitoring", "Data classification"],
  },
  {
    type: "Denial of Service",
    indicators: ["Services unavailable", "Traffic spikes", "Server resource exhaustion", "Network latency"],
    response: [
      "Verify it is not legitimate traffic spike",
      "Enable DDoS mitigation if available",
      "Block malicious IPs at firewall",
      "Scale infrastructure if possible",
      "Engage ISP or CDN for upstream filtering",
    ],
    prevention: ["DDoS protection services", "Traffic monitoring", "Auto-scaling", "Content delivery networks"],
  },
]

export default function IncidentResponsePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <Link href="/frameworks" className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Frameworks
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-100">
                <AlertTriangle className="h-6 w-6 text-red-700" />
              </div>
              <Badge className="bg-red-100 text-red-700">Incident Response</Badge>
              <Badge variant="outline">Preparation and Response</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Incident Response
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              When something goes wrong, the difference between a survivable incident and a catastrophic one is
              preparation. The runbook should not be written at 3 a.m. while the SIEM is on fire. This guide covers
              building response capability, handling incidents effectively, and the learning afterward.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/get-started">Build Response Capability</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/dashboard">View Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Incident Response Lifecycle</h2>
          <p className="text-slate-600 mb-8">
            Incident response is not a single action. It is a cycle that moves from detecting something is wrong through
            containment, eradication, recovery, and finally learning.
          </p>

          <div className="space-y-6">
            {incidentLifecycle.map((phase, idx) => (
              <Card key={phase.phase}>
                <CardHeader className="bg-slate-50">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <CardTitle>{phase.phase}</CardTitle>
                      <CardDescription>{phase.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{phase.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Activities</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity) => (
                          <li key={activity} className="flex items-start gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Key Questions</h4>
                      <ul className="space-y-2">
                        {phase.keyQuestions.map((question) => (
                          <li key={question} className="flex items-start gap-2 text-sm text-slate-600">
                            <Bell className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            {question}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Incident Types</h2>
            <p className="text-slate-600 mb-8">
              Different incidents require different responses. Understanding the patterns helps your team respond faster and
              more effectively.
            </p>

            <div className="space-y-6">
              {commonIncidents.map((incident) => (
                <Card key={incident.type}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      {incident.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Bell className="h-4 w-4 text-yellow-600" />
                          Indicators
                        </h4>
                        <ul className="space-y-2">
                          {incident.indicators.map((indicator) => (
                            <li key={indicator} className="text-sm text-slate-600 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2" />
                              {indicator}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Response Steps
                        </h4>
                        <ul className="space-y-2">
                          {incident.response.map((step) => (
                            <li key={step} className="text-sm text-slate-600 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <h4 className="font-semibold text-slate-900 mb-3">Prevention Measures</h4>
                      <div className="flex flex-wrap gap-2">
                        {incident.prevention.map((measure) => (
                          <Badge key={measure} variant="outline">
                            {measure}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Building Response Capability</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-blue-600" />
                  Incident Response Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Document your response procedures before incidents happen. When you are in crisis mode is not the time to
                  discover gaps in your plan.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Escalation paths and contact information
                  </li>
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Decision authority and approval processes
                  </li>
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Communication templates and notification sequences
                  </li>
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Legal and regulatory notification requirements
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  Response Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Define roles before incidents happen. Chaos multiplies when nobody knows who does what.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Incident Commander: Leads response
                  </li>
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Technical Lead: Fixes things technically
                  </li>
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Communications Lead: Manages notifications
                  </li>
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Scribe: Documents timeline and decisions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Server className="h-5 w-5 text-purple-600" />
                  Tools and Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Pre-position tools and access so response is not delayed by technical hurdles during incidents.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Isolated analysis environments
                  </li>
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Out-of-band communication channels
                  </li>
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Forensics tooling and evidence preservation
                  </li>
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Emergency contact and escalation lists
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  Practice and Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Plans that are not practiced are assumptions. Test your response capability regularly.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Tabletop exercises quarterly
                  </li>
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Full simulation exercises annually
                  </li>
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Lessons learned reviews after incidents
                  </li>
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                    Procedure updates based on learnings
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-red-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Do you have an incident response plan?</h3>
              <p className="text-red-200">
                If your answer is "we will figure it out when something happens," that is not a plan. That is optimism.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg" className="bg-white text-red-900 hover:bg-red-100">
                <Link href="/get-started">Build Your Plan</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Talk to Analyst</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
