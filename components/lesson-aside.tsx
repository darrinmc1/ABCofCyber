import type { ReactNode } from "react"
import { getHumorEnabled } from "@/lib/humor"

/** In-lesson dry aside. Hidden when site humor is off. */
export function LessonAside({ children }: { children: ReactNode }) {
  if (!getHumorEnabled()) return null
  return (
    <aside className="my-6 border-l-2 border-blue-300 bg-blue-50/80 px-4 py-3 text-sm italic leading-6 text-slate-700">
      {children}
    </aside>
  )
}
