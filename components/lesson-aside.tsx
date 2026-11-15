import type { ReactNode } from "react"

/** In-lesson dry aside. */
export function LessonAside({ children }: { children: ReactNode }) {
  return (
    <aside className="my-6 border-l-2 border-blue-300 bg-blue-50/80 px-4 py-3 text-sm italic leading-6 text-slate-700">
      {children}
    </aside>
  )
}
