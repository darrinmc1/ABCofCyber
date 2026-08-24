import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create your free account</h1>
          <p className="text-slate-600">Start building real security for your team today</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-8 space-y-4">
          <Button asChild size="lg" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold">
            <Link href="/sign-up">Get started free <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <p className="text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-semibold text-blue-700 hover:text-blue-800">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
