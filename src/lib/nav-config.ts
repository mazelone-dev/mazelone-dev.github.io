/** IA-driven nav targets; paths for future routing (same-origin). */

export const CONTACT_MAIL = "ask@mazelone.com" as const

/** Global Research hub — single page, no dropdown. */
export const researchHref = "/research" as const

/** About → `/company/about` (top of page). Page still exposes `#about-us` | `#history` for deep links. No `#career` here. Career: `/company/career`. */
export const companyNav = [
  { label: "About", href: "/company/about" },
  { label: "Career", href: "/company/career" },
] as const

export const productNav = [
  { label: "MZO Data Platform", href: "/products/data-platform" },
  { label: "MZO RAG Platform", href: "/products/rag-platform" },
  { label: "MZO Chat Platform", href: "/products/chat-platform" },
  { label: "MZO Email Agent", href: "/products/email-agent" },
  { label: "MZO AI Translator", href: "/products/ai-translator" },
  { label: "MZO Document Generator", href: "/products/docu-generator" },
] as const

export const solutionNav = [
  { label: "Enterprise", href: "/solutions/enterprise" },
  { label: "Public", href: "/solutions/public" },
  { label: "Education", href: "/solutions/education" },
  // Hidden from nav for now; `/solutions/healthcare` still works via App route.
  // { label: "Healthcare", href: "/solutions/healthcare" },
  { label: "Manufacturing", href: "/solutions/manufacturing" },
  // { label: "Commerce", href: "/solutions/commerce" },
] as const

export const footerContact = {
  tel: "(+82) 2-555-0272",
  phones: [
    { n: "(+82) 10-5260-4172", role: "Business" },
    { n: "(+82) 10-6797-5376", role: "Tech" },
  ],
  email: CONTACT_MAIL,
  headquarters:
    "No.302, 3F., 165, Yangsu-ro, Yangseo-myeon, Yangpyeong-gun, Gyeonggi-do, Republic of Korea",
  seoulOffice:
    "Taeho Business Center, 311, Hakdong-ro, Gangnam-gu, Seoul, Republic of Korea",
} as const
