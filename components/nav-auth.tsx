"use client"

import Link from "next/link"
import { Show, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export function NavAuth({
  onNavigate,
  fullWidth = false,
}: {
  onNavigate?: () => void
  fullWidth?: boolean
}) {
  const width = fullWidth ? "w-full" : undefined

  return (
    <>
      <Show when="signed-out">
        <Button variant="outline" asChild className={width}>
          <Link href="/sign-in" onClick={onNavigate}>
            Login
          </Link>
        </Button>
        <Button asChild className={width}>
          <Link href="/sign-up" onClick={onNavigate}>
            Sign Up
          </Link>
        </Button>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </>
  )
}
