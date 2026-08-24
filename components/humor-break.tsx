import { HUMOR_ENABLED, getHumorEnabled, humorEnabled } from "@/lib/humor"

export { HUMOR_ENABLED, getHumorEnabled, humorEnabled }

/** No-op: humor cannot be turned on. */
export function setHumorEnabled(_enabled: boolean) {
  return
}

/** Always false. Humor is hard-off for compliance. */
export function useHumorEnabled(): boolean {
  return getHumorEnabled()
}

/** Renders nothing. Humor inserts are disabled site-wide. */
export default function HumorBreak(_props: { tag?: string }) {
  return null
}
