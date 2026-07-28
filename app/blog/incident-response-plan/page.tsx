import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50"><div className="mx-auto max-w-3xl px-4 md:px-6 py-8">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 mb-4"><ArrowLeft className="h-4 w-4" /> Back to Blog</Link>
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3"><span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> July 26, 2026</span><span>8 min</span></div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-3">Building an Incident Response Plan</h1>
        <p className="text-lg text-slate-600">Stop scrambling when things go wrong. Step-by-step IR plan.</p>
      </div></div>
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-10">
        <div className="prose prose-slate max-w-none">
          <p className="lead text-lg text-slate-600 mb-8">When a security incident hits, the difference between a controlled response and total chaos comes down to one thing: preparation. An Incident Response Plan (IRP) is your organization's playbook for exactly those moments. If you don't have one, you're not just risking data loss — you're risking your business's reputation, regulatory standing, and bottom line.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">What Is an Incident Response Plan?</h2>
          <p>An Incident Response Plan is a documented, structured approach for handling cybersecurity incidents. It defines who does what, when, and how, from the moment an anomaly is detected through full recovery and lessons learned. Think of it as a fire drill for your digital assets — practiced, rehearsed, and ready to execute under pressure.</p>
          <p>The plan isn't just for the security team. It involves executives, legal counsel, communications, HR, and sometimes external partners like law enforcement and incident response firms. Everyone needs to know their role before the alarm sounds.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">The Six Phases of the Incident Response Lifecycle</h2>
          <p>Most effective IRPs follow the NIST framework, which organizes response into six phases. Let's walk through each one.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Phase 1: Preparation</h3>
          <p>This is the most important phase — and the one most organizations neglect. Preparation means having the right tools, people, and processes in place before an incident occurs. Key activities include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Establishing an Incident Response Team (IRT) with clearly defined roles and backup personnel for each role.</li>
            <li>Deploying detection tools: SIEM systems, EDR agents, network monitoring, and log aggregation.</li>
            <li>Creating communication trees and escalation paths. Who calls the CISO at 3 AM? Who notifies legal? Who communicates with customers?</li>
            <li>Acquiring forensic tools and ensuring they are maintained and tested. A forensic imaging tool that only runs on Windows 7 isn't going to help when the incident involves a macOS environment.</li>
            <li>Conducting tabletop exercises — dry runs where the team walks through an incident scenario step by step. These uncover gaps in the plan before a real incident does.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Phase 2: Detection and Analysis</h3>
          <p>Detection is about separating genuine incidents from false alarms. Your monitoring tools should feed into a centralized system where analysts can correlate events, identify patterns, and determine whether malicious activity is occurring. Key questions to answer during this phase:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>What happened? What systems, data, or users are involved?</li>
            <li>When did it start? When was it first detected?</li>
            <li>Who or what is the source? Is it internal or external?</li>
            <li>What is the scope? How many systems are affected? Is data exfiltration occurring?</li>
            <li>What is the impact? Is it a low-severity worm or a full ransomware deployment?</li>
          </ul>
          <p>Document every finding in a centralized incident log. This documentation will be critical for containment, eradication, recovery, and any subsequent legal or regulatory proceedings.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Phase 3: Containment</h3>
          <p>Once you've confirmed an incident, containment is the priority. The goal is to stop the attack from spreading while preserving evidence for investigation and potential legal action. Containment strategies include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Short-term containment:</strong> Isolate affected systems by disconnecting them from the network, disabling compromised accounts, and blocking malicious IP addresses at the firewall.</li>
            <li><strong>Long-term containment:</strong> Apply temporary security patches, create system images for forensic analysis, and implement workarounds that allow business operations to continue safely.</li>
          </ul>
          <p>The containment phase requires judgment calls: isolating a critical production server might stop the attack but also halt business operations. The IRP should provide decision-making frameworks for these trade-offs, not rigid rules.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Phase 4: Eradication</h3>
          <p>With the threat contained, eradication focuses on removing the attacker's foothold from your environment. This means:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Removing malware, backdoors, and persistence mechanisms from affected systems.</li>
            <li>Patching vulnerabilities that enabled the initial compromise.</li>
            <li>Resetting credentials for all affected and potentially affected accounts.</li>
            <li>Rebuilding compromised systems from known-good backups or fresh images.</li>
            <li>Verifying that eradication is complete before moving to recovery. Rushing this step is a common mistake that leads to recurrent incidents.</li>
          </ul>
          <p>This is also the time to bring in specialized expertise if you haven't already — a digital forensics firm, a threat intelligence provider, or law enforcement if the incident warrants it.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Phase 5: Recovery</h3>
          <p>Recovery means restoring normal operations. Systems are brought back online, data is restored from clean backups, and monitoring is intensified to watch for signs of the attacker returning. Key steps:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Restore systems from validated, pre-compromise backups.</li>
            <li>Implement enhanced monitoring on restored systems for a defined period (typically 30-90 days).</li>
            <li>Communicate restoration timelines to stakeholders and customers.</li>
            <li>Conduct post-restoration testing to ensure systems are functioning correctly.</li>
            <li>Update the IRP based on lessons learned during this incident.</li>
          </ul>
          <p>Don't rush recovery. It's better to extend downtime by a day than to bring a compromised system back into production.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Phase 6: Lessons Learned</h3>
          <p>Every incident is a learning opportunity. Within two weeks of recovery, convene a post-incident review meeting with all stakeholders. Discuss:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>What went well? What should we keep doing?</li>
            <li>What went wrong? What processes, tools, or training failed?</li>
            <li>What would we do differently next time?</li>
            <li>What specific improvements should we make to the IRP?</li>
          </ul>
          <p>Document these findings in a formal incident report and update your IRP accordingly. This feedback loop is how incident response matures from reactive scrambling to disciplined, repeatable process.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Building Your IRP: Step by Step</h2>
          <p>Ready to build your plan? Here's the high-level process:</p>
          <p><strong>Step 1: Get executive buy-in.</strong> An IRP requires resources — tools, training, and personnel time. You need leadership to understand that incident response is not optional. Frame it in business terms: faster response means less downtime, lower costs, and reduced legal liability.</p>
          <p><strong>Step 2: Assemble your team.</strong> Identify who fills each role on the IRT. Common roles include Incident Response Lead, Communications Lead (internal and external), Legal Counsel, Technical Analysts, and an Executive Sponsor. For each role, identify a primary and a backup.</p>
          <p><strong>Step 3: Define severity levels.</strong> Not every incident requires the same response. Define severity levels (e.g., Low, Medium, High, Critical) based on factors like data sensitivity, number of affected systems, regulatory impact, and potential business disruption. Each level should trigger a specific escalation path.</p>
          <p><strong>Step 4: Document procedures.</strong> Write step-by-step procedures for each phase of the IR lifecycle. Include runbooks for common scenarios: ransomware, data breach, phishing campaign, DDoS attack, insider threat, and third-party compromise.</p>
          <p><strong>Step 5: Test and refine.</strong> Run tabletop exercises quarterly. Conduct full-scale drills annually. After each test, update your IRP based on what you learned. A plan that sits in a drawer gathering dust is worse than no plan at all — it creates a false sense of security.</p>
          <p><strong>Step 6: Integrate with other plans.</strong> Your IRP shouldn't exist in isolation. Connect it with your business continuity plan, disaster recovery plan, and crisis communication plan. A ransomware attack that takes down your billing system isn't just a security incident — it's a business continuity event.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Tools of the Trade</h2>
          <p>Your IRP is only as good as the tools that support it. Consider investing in:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>SIEM platform:</strong> Splunk, Elastic Security, or Microsoft Sentinel for centralized log analysis and alerting.</li>
            <li><strong>EDR/XDR:</strong> CrowdStrike, SentinelOne, or Defender for Endpoint for endpoint visibility and automated response.</li>
            <li><strong>SOAR:</strong> Splunk SOAR, Palo Alto XSOAR, or Torq for automating repetitive response tasks.</li>
            <li><strong>Forensic analysis:</strong> FTK Imager, Autopsy, Volatility, and Wireshark for deep investigations.</li>
            <li><strong>Incident tracking:</strong> A ticketing system integrated with your SIEM to track every incident from detection to closure.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Final Thoughts</h2>
          <p>Building an Incident Response Plan is one of the highest-leverage investments your organization can make in cybersecurity. The time to write the playbook is not when the stadium is on fire. Start today. Even a simple plan with basic procedures and contact lists puts you miles ahead of organizations with nothing. And as your capabilities grow, your IRP will evolve from a simple checklist into a sophisticated, battle-tested operational framework.</p>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 mt-10 mb-6">
            <h2 className="font-bold text-lg mb-2">Download our IRP template</h2>
            <p className="text-sm text-slate-600 mb-3">ABC of Cyber provides a free Incident Response Plan template to help you get started. <a href="/downloads#incident-response-plan-template-pdf" className="text-indigo-600 hover:text-indigo-800 underline">Download the template</a> and build your plan today.</p>
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
            <h2 className="font-bold text-lg mb-2">Related articles</h2>
            <div className="flex flex-wrap gap-2">
              <Link key="phishing-trends-2026" href="/blog/phishing-trends-2026" className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-slate-400">Phishing Trends Every Team Should Know in 2026</Link>
              <Link key="zero-trust-basics" href="/blog/zero-trust-basics" className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-slate-400">Zero Trust Security Basics</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
