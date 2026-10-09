import type { Metadata } from "next"
import { SITE_NAME, SITE_URL } from "@/lib/site"

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`
  const fullTitle = `${title} | ${SITE_NAME}`
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: SITE_NAME,
  }

  return {
    // The root page shares a segment with the root layout, so the title
    // template is not applied there. Set it absolutely.
    title: path === "/" ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  }
}
