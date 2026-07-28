import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50"><div className="mx-auto max-w-3xl px-4 md:px-6 py-8">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 mb-4"><ArrowLeft className="h-4 w-4" /> Back to Blog</Link>
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3"><span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> July 26, 2026</span><span>9 min</span></div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-3">Zero Trust Security Basics</h1>
        <p className="text-lg text-slate-600">Trust nothing, verify everything - a practical guide to zero trust.</p>
      </div></div>
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-10">
        <div className="prose prose-slate max-w-none">
          <p className="lead text-lg text-slate-600 mb-8">"Trust nothing, verify everything." It sounds like a cybersecurity cliché — until you realize it's the single most important architectural principle of the modern era. Zero Trust isn't a product you can buy or a checkbox you tick. It's a security model that fundamentally changes how you think about access, identity, and risk in your organization.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Why the Perimeter Is Dead</h2>
          <p>For decades, network security was built on the castle-and-moat model. Strong walls at the perimeter (firewalls, VPNs, network segmentation), and once you were inside, you were trusted. The problem? That model assumed threats came from outside. In reality, threats are equally likely to originate from inside — whether through a compromised account, a malicious insider, or an attacker who has already breached the perimeter.</p>
          <p>The COVID-era shift to remote work accelerated the perimeter's demise. When employees work from coffee shops, home offices, and co-working spaces, the concept of a "corporate network" becomes meaningless. Cloud applications, SaaS tools, and mobile devices mean that corporate data lives everywhere. The old model of "inside good, outside bad" simply doesn't apply anymore.</p>
          <p>Zero Trust was designed for exactly this world. It assumes breach, verifies every request as though it originates from an open network, and grants the minimum access necessary — no more.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Core Principles of Zero Trust</h2>
          <p>The National Institute of Standards and Technology (NIST) published Special Publication 800-207, which defines the foundational principles of Zero Trust Architecture. Here are the key tenets every implementer needs to understand:</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">1. Continuous Verification</h3>
          <p>Trust is never assumed. Every access request — whether from the CEO's laptop or a third-party vendor — must be authenticated, authorized, and encrypted before access is granted. And it doesn't stop there. Zero Trust requires continuous monitoring of sessions for anomalous behavior. If a user suddenly downloads 10,000 files at 3 AM, the system should revoke access immediately, even if they authenticated successfully 10 minutes ago.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">2. Least Privilege Access</h3>
          <p>Every user, device, and service gets only the permissions required to do their job — nothing more. This sounds obvious, but in practice, most organizations massively overprovision. A marketing intern who needs access to the company's social media accounts doesn't need access to the financial database. Least privilege requires understanding exactly what each role needs and enforcing those boundaries with technical controls, not just policy documents.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">3. Assume Breach</h3>
          <p>Design your systems as if they are already compromised. Segment your network so that a breach in one area doesn't automatically grant access to everything. Encrypt data at rest and in transit. Monitor aggressively for signs of compromise. The goal isn't to prevent every attack — it's to limit the blast radius when one inevitably succeeds.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">The Three Pillars of Zero Trust Implementation</h2>
          <p>Translating these principles into practice involves three major workstreams:</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Identity and Access Management (IAM)</h3>
          <p>Identity is the new perimeter. In a Zero Trust model, who you are matters far more than where you're connecting from. Strong authentication — ideally passwordless methods like FIDO2 security keys, biometrics, or device-bound certificates — is the foundation. Multi-factor authentication (MFA) is non-negotiable. Every single account should require MFA, including service accounts and non-human identities.</p>
          <p>Beyond authentication, you need robust identity governance. This means automated provisioning and deprovisioning, regular access reviews, and the ability to revoke access instantly. If an employee leaves the company, their access should be terminated within minutes, not weeks.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Microsegmentation</h3>
          <p>Instead of protecting the network perimeter, microsegmentation divides your network into small, isolated zones. Each zone has its own security controls and access policies. A workload in one segment cannot communicate with a workload in another segment unless explicitly allowed. This means that even if an attacker compromises a web server, they cannot use it to pivot to the database server or the Active Directory domain controller.</p>
          <p>Modern microsegmentation is implemented at the workload level, using technologies like distributed firewalls, Kubernetes network policies, and software-defined networking. Tools from vendors like Illumio, Guardicore (now Akamai), and VMware NSX can help operationalize this at scale.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Device Trust and Endpoint Security</h3>
          <p>Zero Trust extends beyond users to the devices they use. Every device accessing your resources must meet a minimum security baseline: up-to-date patches, enabled encryption, running antivirus or EDR, and compliance with corporate policy. Devices that fail these checks should be quarantined or granted only limited access through a browser-based remote access solution.</p>
          <p>Endpoint detection and response (EDR) tools like CrowdStrike, SentinelOne, and Microsoft Defender for Endpoint provide the continuous monitoring needed to detect compromised devices before they cause damage.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">A Practical Implementation Roadmap</h2>
          <p>Implementing Zero Trust doesn't happen overnight. Here's a phased approach that works for most organizations:</p>
          <p><strong>Phase 1: Visibility and Assessment</strong> — Map every user, device, application, and data flow in your environment. You can't protect what you can't see. Tools like network discovery scanners, Cloud Access Security Brokers (CASBs), and identity governance platforms can help build this inventory.</p>
          <p><strong>Phase 2: Identity Hardening</strong> — Mandate MFA for all users. Implement single sign-on (SSO) with modern protocols (SAML, OIDC). Review and clean up service accounts and privileged access. This phase alone eliminates the majority of common attack vectors.</p>
          <p><strong>Phase 3: Device Trust</strong> — Deploy endpoint compliance checks. Enforce device health requirements before granting access to corporate resources. Implement mobile device management (MDM) for company and BYOD devices.</p>
          <p><strong>Phase 4: Microsegmentation</strong> — Start with critical workloads: your crown jewels. Define and enforce east-west traffic policies between your most sensitive systems, then expand outward.</p>
          <p><strong>Phase 5: Continuous Monitoring and Automation</strong> — Implement real-time monitoring, automated threat response, and continuous policy adjustment. The goal is a system that can detect and respond to threats faster than human operators can.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Common Pitfalls to Avoid</h2>
          <p>Zero Trust implementations often stumble on the same obstacles. Here's what to watch for:</p>
          <p><strong>Treating it as a project with an end date.</strong> Zero Trust is an ongoing operational model, not a one-time initiative. Budget and staff accordingly.</p>
          <p><strong>Boiling the ocean.</strong> Don't try to implement everything at once. Target your highest-risk areas first and build momentum. A failed big-bang implementation sets back the entire effort by years.</p>
          <p><strong>Neglecting user experience.</strong> If your Zero Trust controls make it harder for people to do their jobs, they will find workarounds. Invest in user-friendly authentication methods and minimize unnecessary friction.</p>
          <p><strong>Forgetting about non-human identities.</strong> Service accounts, API keys, and automated processes are often the weakest link in a Zero Trust architecture. Apply the same rigorous controls to them as you do to human users.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">The Bottom Line</h2>
          <p>Zero Trust is no longer optional. Regulatory frameworks like Biden's Executive Order 14028, CISA's Zero Trust Maturity Model, and cybersecurity insurance requirements are pushing organizations toward this model. But the most compelling reason to adopt Zero Trust is simple: it works. Organizations that implement Zero Trust principles consistently detect breaches faster, contain damage more effectively, and recover more quickly. In a world where breaches are inevitable, that's the difference between a crisis and a minor incident.</p>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 mt-10 mb-6">
            <h2 className="font-bold text-lg mb-2">Need help getting started?</h2>
            <p className="text-sm text-slate-600 mb-3">ABC of Cyber offers Zero Trust architecture consulting, from readiness assessments to full implementation support. <a href="/contact" className="text-indigo-600 hover:text-indigo-800 underline">Contact us</a> to schedule a discovery session.</p>
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
            <h2 className="font-bold text-lg mb-2">Related articles</h2>
            <div className="flex flex-wrap gap-2">
              <Link key="phishing-trends-2026" href="/blog/phishing-trends-2026" className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-slate-400">Phishing Trends Every Team Should Know in 2026</Link>
              <Link key="incident-response-plan" href="/blog/incident-response-plan" className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-slate-400">Building an Incident Response Plan</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
