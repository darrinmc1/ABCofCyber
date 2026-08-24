/**
 * Humor is hard-off site-wide (compliance). Do not re-enable.
 * getHumorEnabled() / humorEnabled() must always return false.
 */
export const HUMOR_ENABLED = false as const

export function getHumorEnabled(): boolean {
  return HUMOR_ENABLED
}

export function humorEnabled(): boolean {
  return HUMOR_ENABLED
}

export interface HumorItem {
  setup: string
  punchline?: string
}

export interface HumorTheme {
  container?: string
  border?: string[]
  borderOpacity?: string
  borderSize?: string
  borderLine?: string
  dark?: boolean
  cardBorder: string
  cardBg: string
  eyebrowColor: string
  label?: string
  punchColor: string
  buttonBg: string
  footerNote?: string
  shuffleLabel?: string
}

export const humorTheme: HumorTheme = {
  container: "my-10",
  border: [],
  borderOpacity: "opacity-30",
  borderSize: "text-xl",
  borderLine: "bg-slate-200",
  cardBorder: "border-slate-200",
  cardBg: "bg-slate-50",
  eyebrowColor: "text-slate-700",
  label: "",
  punchColor: "text-slate-800",
  buttonBg: "bg-slate-600",
  footerNote: "",
  shuffleLabel: "",
}

/** Joke bank is empty while humor is hard-off. */
export const humorBank: Record<string, HumorItem[]> = {}
