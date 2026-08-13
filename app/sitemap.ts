import type { MetadataRoute } from "next"

const BASE_URL = "https://abcofcyber.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: `${BASE_URL}/`,                              lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,                         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`,                       lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/pricing`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/pricing.json`,                  lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/llm.txt`,                       lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/whats-the-play`,                lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/tools`,                         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/get-started`,                   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/learn`,                         lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/learn/phishing-awareness`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/learn/social-engineering`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/learn/password-security`,       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/learn/incident-response-basics`,lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/frameworks`,                    lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/frameworks/cis-controls`,       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/frameworks/incident-response`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/frameworks/iso-27001`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/frameworks/nist-csf`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/frameworks/risk-management`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/frameworks/threat-monitoring`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ]
}
