import { REFUND_POLICY } from "@/lib/refund-policy"
import { cn } from "@/lib/utils"

export function RefundPolicyNote({ className }: { className?: string }) {
  return <p className={cn("text-xs leading-5 text-slate-500", className)}>{REFUND_POLICY}</p>
}
