import { LEGAL_NOTICE } from "@/lib/legal-notice"
import { cn } from "@/lib/utils"

export function LegalNotice({ className }: { className?: string }) {
  return <p className={cn("text-xs leading-5 text-slate-500", className)}>{LEGAL_NOTICE}</p>
}
