"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { HoneypotField } from "@/components/HoneypotField"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    setError("")

    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || ""),
          email: String(data.get("email") || ""),
          message: String(data.get("message") || ""),
          website: String(data.get("website") || ""),
        }),
      })
      const body = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setStatus("error")
        setError(body.error || "That did not send. Try again in a minute.")
        return
      }
      form.reset()
      setStatus("success")
    } catch {
      setStatus("error")
      setError("Network handshake failed. The message is still on your side of the screen.")
    }
  }

  if (status === "success") {
    return (
      <p className="text-base leading-7 text-slate-700">
        Got it. A person will read this. No autoresponder, and no jazz flute.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-4">
      <HoneypotField />
      <div className="space-y-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input id="contact-name" name="name" autoComplete="name" required maxLength={120} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input id="contact-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          placeholder="What you need, how urgent it is, and whether a printer is involved."
        />
      </div>
      {status === "error" && <p className="text-sm font-medium text-red-600">{error}</p>}
      <Button type="submit" disabled={status === "loading"} className="bg-slate-900 hover:bg-slate-800">
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>
    </form>
  )
}
