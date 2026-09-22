import { MERCHANT_OF_RECORD_DISCLOSURE } from "@/lib/merchant-of-record"
import { cn } from "@/lib/utils"

export function MerchantOfRecordDisclosure({
  className,
}: {
  className?: string
}) {
  return (
    <p className={cn("text-xs leading-5 text-slate-500", className)}>
      {MERCHANT_OF_RECORD_DISCLOSURE}
    </p>
  )
}
