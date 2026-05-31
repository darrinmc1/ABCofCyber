import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Network, Shield, Wifi, Server, Lock, CheckCircle, AlertTriangle, HardDrive } from "lucide-react"

export default function NetworkSecurityLesson() {
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
              <div className="p-2 rounded-lg bg-purple-100">
                <Network className="h-6 w-6 text-purple-700" />
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">Intermediate</Badge>
              <Badge variant="outline">20 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Network Security Fundamentals
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Your network is the backbone of your organization. If it&apos;s not secure, nothing else
              matters. This lesson covers firewalls, segmentation, patching, and the basics of keeping
              your network from behaving like an open door.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Defense in Depth */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Defense in Depth</h2>
            <p className="text-slate-600 mb-4">
              No single security control is perfect. Defense in depth is the strategy of layering multiple
              security controls so that if one fails, another catches the threat. Think of it as a castle
              with a moat, walls, gates, guards, and internal checkpoints — not just a locked front door.
            </p>
            <div className="grid md:grid-cols-4 gap-3">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-blue-900">Perimeter</p>
                  <p className="text-xs text-blue-700">Firewalls &amp; gateways</p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4 text-center">
                  <Server className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-green-900">Network</p>
                  <p className="text-xs text-green-700">Segmentation &amp; VLANs</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-4 text-center">
                  <Lock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-purple-900">Endpoint</p>
                  <p className="text-xs text-purple-700">Antivirus &amp; patching</p>
                </CardContent>
              </Card>
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-4 text-center">
                  <HardDrive className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-amber-900">Data</p>
                  <p className="text-xs text-amber-700">Encryption &amp; backups</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Firewalls */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Firewalls: Your First Line of Defense</h2>
            <p className="text-slate-600 mb-4">
              A firewall monitors and controls incoming and outgoing network traffic based on security rules.
              Think of it as a security guard who checks IDs at every entry point and stops anything suspicious.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What Firewalls Do</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Block unauthorized access from external networks
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Prevent malicious traffic from entering your network
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Log and alert on suspicious connection attempts
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Enforce policy by blocking specific applications or services
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      Default-deny policy: block everything, allow only what&apos;s needed
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      Regularly review and prune firewall rules
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      Segment networks with internal firewalls
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      Keep firewall firmware and software updated
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Network Segmentation */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Network Segmentation</h2>
            <p className="text-slate-600 mb-4">
              Segmentation divides your network into smaller, isolated sections. If an attacker compromises
              one segment, they cannot easily move laterally to others. This is why your office printer
              should not be on the same network as your financial servers.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3 mb-6">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-amber-900">Real-World Example</p>
                <p className="text-sm text-amber-800">
                  In the 2013 Target breach, attackers gained access through an HVAC vendor&apos;s network segment
                  that was not properly isolated. They then moved laterally to the POS system and stole 40 million
                  credit card numbers. Proper segmentation would have stopped this.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Guest Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Visitors and contractors get internet-only access, completely isolated from internal
                    resources. Separate SSID, separate VLAN, no internal routing.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">IoT &amp; Devices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Printers, cameras, smart thermostats, and other IoT devices should be on their own
                    segment. These devices are notoriously insecure and should never touch production.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Critical Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Financial systems, HR databases, and production servers operate in their own segments
                    with strict access controls. Only specific users and services can reach them.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Patch Management */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Patch Management</h2>
            <p className="text-slate-600 mb-4">
              Software vulnerabilities are discovered constantly. Patches are the fixes released by vendors
              to close these security holes. Unpatched systems are the #1 target for attackers because
              exploits for known vulnerabilities are widely available.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Good Patching Practices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>✓ Apply critical security patches within 48 hours</li>
                    <li>✓ Test patches in a staging environment first</li>
                    <li>✓ Maintain an inventory of all software and versions</li>
                    <li>✓ Automate patching where possible</li>
                    <li>✓ Have a rollback plan for failed patches</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    Common Pitfalls
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>✗ &ldquo;If it&apos;s not broken, don&apos;t fix it&rdquo; — this is how WannaCry happened</li>
                    <li>✗ Ignoring end-of-life software that no longer receives updates</li>
                    <li>✗ Patching only servers but ignoring endpoints and IoT devices</li>
                    <li>✗ Not having an inventory — you can&apos;t patch what you don&apos;t know about</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Wi-Fi Security */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Wi-Fi Security</h2>
            <p className="text-slate-600 mb-4">
              Wireless networks are inherently more vulnerable than wired ones because the signal travels
              through walls and parking lots. Simple precautions make a massive difference.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-green-600" />
                    Secure Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Use WPA3 encryption (or WPA2 if WPA3 is unavailable)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Disable WPS (Wi-Fi Protected Setup) — it&apos;s a security hole
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Change default SSID and admin credentials on access points
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Use a strong, unique passphrase (see Password Security lesson)
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-yellow-600" />
                    Public Wi-Fi Risks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      Public Wi-Fi is open to eavesdropping (man-in-the-middle attacks)
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      Always use a VPN when connecting to public or untrusted networks
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      Enable HTTPS-only mode in your browser
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      Turn off automatic Wi-Fi connectivity and file sharing
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Monitoring & Detection */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Monitoring &amp; Detection</h2>
            <p className="text-slate-600 mb-4">
              Security controls are useless if you don&apos;t know when they&apos;re being tested. Monitoring
              gives you visibility into what&apos;s happening on your network.
            </p>
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Log Management</h4>
                    <p className="text-sm text-slate-600">
                      Collect and centralize logs from firewalls, servers, and endpoints. Use a SIEM
                      (Security Information and Event Management) system to correlate events.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Intrusion Detection</h4>
                    <p className="text-sm text-slate-600">
                      IDS/IPS systems monitor network traffic for suspicious patterns and known attack
                      signatures. They can alert or automatically block malicious activity.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Vulnerability Scanning</h4>
                    <p className="text-sm text-slate-600">
                      Regular automated scans identify open ports, outdated software, and misconfigurations.
                      Scan at least monthly, or weekly for critical systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checklist */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Network Security Checklist</h3>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span>Firewall configured with default-deny policy and reviewed within the last 90 days</span>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span>Network segmentation in place — guest, IoT, and production on separate VLANs</span>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span>Patch management process documented — critical patches applied within 48 hours</span>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span>Wi-Fi uses WPA3 (or WPA2) with a strong passphrase; WPS disabled</span>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span>Logging enabled and logs centralized to a SIEM or log management platform</span>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span>Vulnerability scans scheduled and reviewed at least monthly</span>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span>VPN required for remote access and public Wi-Fi usage</span>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span>Inventory of all network devices maintained and kept current</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Next Steps</h2>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/learn/social-engineering">
                  Next Lesson: Social Engineering Defense
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
