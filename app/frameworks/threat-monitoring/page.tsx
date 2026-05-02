import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Radar, AlertTriangle, Shield, Monitor, Bell, Eye, Server, FileSearch, Activity } from "lucide-react"

const monitoringLayers = [
  {
    title: "Network Monitoring",
    description: "Visibility into traffic patterns, anomalies, and potential threats traversing your network.",
    icon: Server,
    components: [
      "Flow data collection and analysis",
      "Network traffic baselines",
      "DPI for protocol identification",
      "Encrypted traffic analysis",
      "DNS monitoring for C2 traffic",
    ],
    whatToWatch: [
      "Unusual outbound traffic volumes",
      "Connections to known malicious IPs",
      "Protocol anomalies (HTTP to port 443 behaving unexpectedly)",
      "Lateral movement patterns",
      "Data exfiltration signatures",
    ],
  },
  {
    title: "Endpoint Monitoring",
    description: "Behavioral analysis on workstations, servers, and devices to detect malicious activity.",
    icon: Monitor,
    components: [
      "Endpoint detection and response (EDR)",
      "Process monitoring and lineage",
      "File system activity monitoring",
      "Registry modification tracking",
      "Memory analysis",
    ],
    whatToWatch: [
      "Processes spawning unusual child processes",
      "PowerShell executed with suspicious parameters",
      "Credential dumping tool execution",
      "Unauthorized software installation",
      "Unusual registry modifications",
    ],
  },
  {
    title: "Identity Monitoring",
    description: "Tracking authentication patterns, privilege usage, and identity-based threats.",
    icon: Shield,
    components: [
      "Authentication log aggregation",
      "Privileged account activity",
      "Account creation and modification",
      "Failed login patterns",
      "Identity-based anomaly detection",
    ],
    whatToWatch: [
      "Impossible travel (logins from distant locations in short time)",
      "Authentication to multiple systems in short succession",
      "Service accounts behaving like users",
      "New privileged accounts without change tickets",
      "Authentication outside business hours",
    ],
  },
  {
    title: "Application Monitoring",
    description: "Observing application behavior, errors, and access patterns for anomalies.",
    icon: Eye,
    components: [
      "Application logs aggregation",
      "Error rate monitoring",
      "Access control validation",
      "API call pattern analysis",
      "Business logic abuse detection",
    ],
    whatToWatch: [
      "Spikes in error rates",
      "Authorization failures from authenticated users",
      "Unusual API call volumes",
      "Data export activities",
      "Failed payment or transaction patterns",
    ],
  },
  {
    title: "Email and Collaboration Monitoring",
    description: "Detecting phishing, business email compromise, and threats delivered through communication tools.",
    icon: Bell,
    components: [
      "Email filtering and analysis",
      "Malicious link and attachment detection",
      "External email tagging",
      "Collaboration tool anomaly detection",
      "Impersonation attempt identification",
    ],
    whatToWatch: [
      "Executive impersonation emails",
      "Links to credential harvesting pages",
      "Unusual forwarding rules",
      "External sender spoofing internal users",
      "Attachment analysis alerts",
    ],
  },
]

const threatIntelligenceSources = [
  { source: "Commercial Threat Feeds", description: "Curated intelligence from vendors like Recorded Future, Mandiant, or CrowdStrike", benefit: "High fidelity, actionable indicators" },
  { source: "OSINT Feeds", description: "Open source threat intelligence from AbuseIPDB, URLhaus, AlienVault OTX", benefit: "Free, broad coverage" },
  { source: "Industry Sharing Groups", description: "ISACs and ISMGs for sector-specific intelligence sharing", benefit: "Relevant to your industry" },
  { source: "Government Sources", description: "CISA, FBI IC3, NSA Cybersecurity Advisories", benefit: "Authoritative, nation-state intelligence" },
  { source: "Dark Web Monitoring", description: "Monitoring for leaked credentials, discussion of your organization", benefit: "Early warning of breaches" },
]

const alertTriageProcess = [
  { step: 1, title: "Initial Correlation", description: "Multiple signals are correlated to confirm an alert is not a false positive" },
  { step: 2, title: "Context Enrichment", description: "Add context: who is the user, what is the asset, what else has happened recently" },
  { step: 3, title: "Impact Assessment", description: "Determine the potential scope and severity of the threat" },
  { step: 4, title: "Containment Decision", description: "Decide whether immediate containment is needed before full investigation" },
  { step: 5, title: "Investigation", description: "Deep dive into logs, timeline, and related activity to understand what happened" },
  { step: 6, title: "Eradication and Recovery", description: "Remove the threat, restore normal operations, verify clean state" },
]

export default function ThreatMonitoringPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/frameworks"
            className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Frameworks
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-100">
                <Radar className="h-6 w-6 text-red-700" />
              </div>
              <Badge className="bg-red-100 text-red-700">Threat Monitoring</Badge>
              <Badge variant="outline">Detection and Response</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Threat Monitoring and Detection
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              You cannot prevent everything. Assume breach, watch the logs, and notice the attacker before payroll
              does. Good monitoring means detecting threats that slipped past preventive controls fast enough to limit
              the damage — and fast enough to spare you a 2 a.m. phone call.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/get-started">Design Your Monitoring Strategy</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/dashboard">View Security Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Five Monitoring Layers</h2>
          <p className="text-slate-600 mb-8">
            Comprehensive threat monitoring requires visibility across network, endpoints, identity, applications, and
            communication channels. Gaps in any layer become blind spots that attackers exploit.
          </p>

          <div className="grid gap-6">
            {monitoringLayers.map((layer, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-slate-100">
                      <layer.icon className="h-6 w-6 text-slate-700" />
                    </div>
                    <div className="flex-1">
                      <CardTitle>{layer.title}</CardTitle>
                      <CardDescription className="mt-1">{layer.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Components</h4>
                      <ul className="space-y-2">
                        {layer.components.map((comp, cidx) => (
                          <li key={cidx} className="flex items-start gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                            {comp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">What to Watch For</h4>
                      <ul className="space-y-2">
                        {layer.whatToWatch.map((item, tidx) => (
                          <li key={tidx} className="flex items-start gap-2 text-sm text-slate-600">
                            <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            {item}
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
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Threat Intelligence Sources</h2>
            <p className="text-slate-600 mb-8">
              Effective monitoring benefits from context. Threat intelligence helps you prioritize alerts, understand attacker
              patterns, and focus monitoring on relevant threats to your industry and environment.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {threatIntelligenceSources.map((source) => (
                <Card key={source.source}>
                  <CardHeader>
                    <CardTitle className="text-base">{source.source}</CardTitle>
                    <CardDescription className="text-sm">{source.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                      <Activity className="h-4 w-4 text-green-600 mt-0.5" />
                      <p className="text-sm text-green-800">{source.benefit}</p>
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Alert Triage Process</h2>
          <p className="text-slate-600 mb-8">
            When an alert fires, a structured approach prevents both overreaction and underreaction. Not every alert is an
            incident, but every potential incident starts with a structured response.
          </p>
          <div className="space-y-4">
            {alertTriageProcess.map((step) => (
              <Card key={step.step}>
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to improve your threat monitoring?</h3>
              <p className="text-red-200">
                ABC of Cyber helps you design monitoring coverage, triage alerts, and build detection rules that catch the threats
                that matter.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg" className="bg-white text-red-900 hover:bg-red-100">
                <Link href="/get-started">Start Assessment</Link>
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
