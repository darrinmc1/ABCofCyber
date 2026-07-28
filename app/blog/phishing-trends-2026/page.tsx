/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50"><div className="mx-auto max-w-3xl px-4 md:px-6 py-8">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 mb-4"><ArrowLeft className="h-4 w-4" /> Back to Blog</Link>
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3"><span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> July 26, 2026</span><span>7 min</span></div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-3">Phishing Trends Every Team Should Know in 2026</h1>
        <p className="text-lg text-slate-600">The latest phishing tactics and how to train your team to spot them.</p>
      </div></div>
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-10">
        <div className="prose prose-slate max-w-none">
          <p className="lead text-lg text-slate-600 mb-8">Phishing isn't what it used to be. The days of clumsy emails from a fake Nigerian prince are long gone. In 2026, phishing attacks are sophisticated, personalized, and increasingly hard to distinguish from legitimate communications. For security teams and everyday users alike, understanding the current threat landscape is the first line of defense.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">The State of Phishing in 2026</h2>
          <p>According to the latest industry reports, phishing attacks have surged by over 40% compared to 2024, with businesses losing an estimated $12 billion annually to these schemes. What's driving this growth? Three factors: the widespread availability of generative AI, the proliferation of SaaS platforms that create new attack surfaces, and the simple reality that phishing works.</p>
          <p>Attackers have moved from spray-and-pray tactics to surgical precision. Instead of sending millions of generic emails hoping for a handful of bites, modern phishing campaigns target specific individuals with meticulously researched lures. A single well-crafted spear-phishing email to the right person can yield more value than a million spam messages.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">AI-Powered Phishing: The Game Changer</h2>
          <p>Generative AI has put powerful tools in the hands of attackers. Here's what that looks like in practice:</p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Perfect Grammar and Tone</h3>
          <p>One of the traditional telltales of phishing was poor grammar and awkward phrasing. AI eliminates that advantage. Modern phishing emails read naturally, match the tone of the organization they impersonate, and include contextually appropriate language. Even non-native speakers can generate flawless English messages with the help of large language models.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Deepfake Voice and Video</h3>
          <p>Voice phishing (vishing) has evolved dramatically. Attackers now use AI voice cloning to impersonate executives with just a few seconds of audio scraped from YouTube or earnings calls. In one high-profile 2025 incident, a finance employee at a UK energy firm transferred $25 million after receiving a phone call that sounded exactly like their CEO, complete with mannerisms and verbal tics. Video deepfakes are following close behind, though they remain slightly less common due to the higher production cost.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Automated Reconnaissance</h3>
          <p>AI agents can now scrape LinkedIn, company websites, press releases, and social media to build detailed profiles of potential targets. An attacker can learn your role, your projects, who you report to, and even where you're traveling — then craft a perfectly timed message referencing that information. This level of personalization dramatically increases the likelihood of a successful attack.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Emerging Phishing Vectors in 2026</h2>
          <p>Beyond email, phishers are exploiting new channels:</p>
          <h3 className="text-xl font-semibold mt-6 mb-2">SaaS-to-SaaS Phishing</h3>
          <p>Attackers compromise one SaaS application, then use its legitimate notification system to phish users of connected apps. Imagine receiving what appears to be a Slack notification in your email, prompting you to "review a document" on Google Drive. The attacker compromised a third-party integration, not Slack or Google directly, but the chain of trust makes the message feel legitimate.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2">QR Code (Quishing) Attacks</h3>
          <p>QR codes have become ubiquitous in restaurants, parking garages, and offices. Attackers are placing malicious QR codes in physical locations and sending them via email as images. Since security scanners analyze text and links, not embedded image QR codes, these often bypass traditional filters. When scanned, the code redirects to a credential harvesting page that looks identical to the target service.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2">SMS and Messaging App Phishing (Smishing)</h3>
          <p>With people spending more time on messaging platforms, smishing attacks via SMS, WhatsApp, and Telegram have doubled. These messages are shorter, feel more urgent, and exploit the familiarity of the medium. A text that reads "Your package is held at customs — confirm your address here" feels natural in a world where we all receive delivery notifications.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Real-World Examples</h2>
          <p>Let's look at three incidents that illustrate the current landscape:</p>
          <p><strong>Case 1: The Supplier Impersonation Attack</strong> — A mid-size manufacturing company lost $2.3 million when attackers impersonated a long-standing supplier. They cloned the supplier's email domain, used AI to mirror their writing style, and sent a "change of bank account" request that sailed through the company's existing verification process. The attack was discovered only when the real supplier followed up on an unpaid invoice.</p>
          <p><strong>Case 2: The IT Help Desk Breach</strong> — Attackers called a healthcare organization's IT help desk, using voice deepfake technology to impersonate the CEO. They convinced the help desk to reset the CEO's credentials and provide the new temporary password. This gave them access to the CEO's email, where they found credentials for a financial system. Total time from first call to financial access: 47 minutes.</p>
          <p><strong>Case 3: The Multi-Stage SaaS Attack</strong> — An attacker compromised a project management tool used by a marketing agency. Using the tool's native notification system, they sent messages that appeared to come from the platform itself, asking users to "upgrade their account." The messages included a link that led to a convincing clone of the platform's login page. Over 30% of the agency's employees entered their credentials.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Tools and Techniques for Defense</h2>
          <p>So what can you do about it? A layered defense is essential:</p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Advanced Email Security Gateways</h3>
          <p>Modern email security platforms use machine learning to analyze not just the content of emails but the behavioral patterns of senders. Tools like Abnormal Security, Area 1 Security (now Cloudflare), and IRONSCALES can detect anomalies in sender behavior, routing, and authentication that traditional filters miss. These platforms also integrate with APIs to analyze the risk of embedded links and attachments in real time.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2">DMARC, DKIM, and SPF Done Right</h3>
          <p>Email authentication protocols remain the foundation of anti-phishing. But in 2026, the standard has moved beyond simple implementation. Organizations need strict DMARC policies (p=reject), BIMI for brand indicator visibility, and MTA-STS for secure email transport. An analysis of major breaches shows that over 60% of impersonation attacks could have been prevented with properly configured email authentication.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Security Awareness Training</h3>
          <p>Technology alone isn't enough. Effective training programs use simulated phishing campaigns tailored to your organization's specific risk profile. The best programs go beyond annual compliance training to deliver micro-learnings — short, frequent, context-aware nudges. When a new phishing technique is reported, training content should be updated within days, not months. Platforms like KnowBe4, Proofpoint Security Awareness Training, and PhishLabs enable this kind of adaptive training.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Reporting and Response</h3>
          <p>Make it easy for users to report suspicious messages. A single-click phishing report button integrated into your email client, combined with automated analysis and quick feedback to the reporter, turns your user base into a detection network. Organizations with strong reporting cultures detect phishing campaigns an average of 8 days faster than those without.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Building a Phishing-Resilient Culture</h2>
          <p>The ultimate defense is a culture where skepticism is a virtue. Encourage your team to verify unexpected requests through a secondary channel — if an email asks you to transfer money, pick up the phone and confirm. Foster an environment where reporting a suspicious email is celebrated, not punished. And remember: the goal isn't to prevent every single click (an impossible standard), but to ensure that when someone does click, the damage is contained.</p>
          <p>Phishing will continue to evolve. But with the right combination of technology, training, and culture, organizations can make themselves hard targets. And in cybersecurity, that's usually enough.</p>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 mt-10 mb-6">
            <h2 className="font-bold text-lg mb-2">Ready to apply this?</h2>
            <p className="text-sm text-slate-600 mb-3">ABC of Cyber offers hands-on phishing simulation workshops and security awareness training tailored to your organization. <a href="/contact" className="text-indigo-600 hover:text-indigo-800 underline">Get in touch</a> to learn more.</p>
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
            <h2 className="font-bold text-lg mb-2">Related articles</h2>
            <div className="flex flex-wrap gap-2">
              <Link key="zero-trust-basics" href="/blog/zero-trust-basics" className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-slate-400">Zero Trust Security Basics</Link>
              <Link key="incident-response-plan" href="/blog/incident-response-plan" className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-slate-400">Building an Incident Response Plan</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
