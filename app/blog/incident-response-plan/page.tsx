import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50"><div className="mx-auto max-w-3xl px-4 md:px-6 py-8">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 mb-4"><ArrowLeft className="h-4 w-4" /> Back to Blog</Link>
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3"><span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> July 26, 2026</span><span>8 min</span></div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-3">Building an Incident Response Plan</h1>
        <p className="text-lg text-slate-600">Stop scrambling when things go wrong. Step-by-step IR plan.</p>
      </div></div>
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-10">
        <p className="text-base text-slate-700 leading-relaxed mb-6">This article is part of our ongoing series for ABC of Cyber. Full content coming soon.</p>
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
          <h2 className="font-bold text-lg mb-2">Related articles</h2>
          <div className="flex flex-wrap gap-2">
            <Link key="phishing-trends-2026" href="/blog/phishing-trends-2026" className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-slate-400">Phishing Trends Every Team Should Know in 2026</Link>
            <Link key="zero-trust-basics" href="/blog/zero-trust-basics" className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-slate-400">Zero Trust Security Basics</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
