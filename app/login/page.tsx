"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setStatus("loading")
    const form = e.currentTarget
    const password = (form.elements.namedItem("password") as HTMLInputElement).value
    window.setTimeout(() => {
      // Demo-only: pretend the auth backend disagrees.
      if (password.toLowerCase() === "password123") {
        setStatus("error")
        setError("That's not right. Neither was using \"password123\" — please tell us you were testing us.")
      } else {
        setStatus("error")
        setError("Credentials didn't match. Better than them matching for someone else.")
      }
    }, 700)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Sign in to your account</CardTitle>
            <CardDescription>
              Access your security dashboard, track compliance, and manage your team&apos;s risk posture. MFA strongly
              encouraged. Sticky notes strongly discouraged.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="analyst@company.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Forgot it?
                  </Link>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              {status === "error" && (
                <p className="text-sm font-medium text-red-600">{error}</p>
              )}
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-70"
              >
                {status === "loading" ? "Authenticating..." : "Sign in"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-600">
              <p className="mb-2">Do not have an account?</p>
              <Button asChild variant="outline">
                <Link href="/signup">Create an account</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-xs text-slate-500">
          By signing in, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-slate-700">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-slate-700">
            Privacy Policy
          </Link>
          . Your data is handled with the same care we recommend for your own.
        </p>
      </div>
    </main>
  )
}
