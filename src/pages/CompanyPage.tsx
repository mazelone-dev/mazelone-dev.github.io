import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { useLocation } from "react-router-dom"

import { BackToHome } from "@/components/back-to-home"

const ease = [0.16, 1, 0.3, 1] as const

/** Milestones 2012–2025 (newest first). 2012–2022·2015·2017–2021 from `.dev/txt/20260417_1406.txt` + edits; 2023–2025 per latest copy. */
const HISTORY_BY_YEAR = [
  {
    year: "2025",
    items: [
      "Korea Institute of Industrial Technology, AOAI-based Small Business Support Service",
      "Korea Institute of Industrial Technology, AOAI-based Data Analysis Service",
      "Korean Register, DocuAnalyzer Delivery",
      "Patent Office, RAG-based Specialized Search System (PoC)",
      "Gangbuk-gu Office, Data Analysis AOAI Service",
      "Kangwon National University, Data Analysis Service",
    ],
  },
  {
    year: "2024",
    items: [
      "Korea Telecom, GPT-based AICC Development",
      "LG Electronics, Customer Voice LLM Development",
      "Korean Register, Generative AI Portal implementation",
      "Microsoft Azure OpenAI-based AI Services Development",
    ],
  },
  {
    year: "2023",
    items: [
      "Orchestrator for Generative AI",
      "Microsoft Azure OpenAI ChatGPT Orchestrator Development",
      "Multiple Generative AI Proof-of-Concept Projects",
    ],
  },
  {
    year: "2022",
    items: [
      "Korea Food for the Hungry International, FMS (Field Management Systems)",
      "Korea Food for the Hungry International, Billing Automation System",
    ],
  },
  {
    year: "2021",
    items: [
      "Kia EV Service Platform",
      "Ananti, Vendor Portal Service",
      "Wonkwang University, Upgrade Rehabilitation",
      "NC Dinos, Smart Baseball Park with Microsoft",
      "TYM, Vendor Portal Service with MS Dynamics 365 ERP",
    ],
  },
  {
    year: "2020",
    items: [
      "Korea Food for the Hungry International, Datawarehouse (SSIS, Power BI)",
      "Korea Food for the Hungry International, Donation Platform",
      "Lotte Groupware MOIN, Mobile Groupware",
      "Reverse Commerce RTMed",
      "Workplace RTMed",
      'Yonsei Severance, College of Nursing "Self Management for Parkinson"',
      'Yonsei Severance, College of Nursing "Self Management for HIV"',
    ],
  },
  {
    year: "2019",
    items: [
      "Ananti Microsoft Dynamics 365 for Procurement, Sales, and Inventory",
      "Yonsei Severance, Haptic LaSor",
      "Wonkwang University, Upgrade Rehabilitation",
    ],
  },
  {
    year: "2018",
    items: [
      'Yonsei Severance, College of Nursing "Self Management for Moya Moya Disease"',
      "Wonkwang University, Rehabilitation",
    ],
  },
  {
    year: "2017",
    items: [
      "Konyang University, PHR (Personal Health Record)",
      "Whinny World of Korea Horse Racing Association, Customer Portal",
    ],
  },
  {
    year: "2015",
    items: [
      "National Administration and Safety, SEMS (Smart Emergency Medical Services)",
      "NIA (National Information Society Agency), Global Healthcare Verification for Wearable Device",
      "NIPA (National IT Industry Promotion Agency), NFC Smart-Tag Emergency Response Medical Safety Network (HL7)",
    ],
  },
  {
    year: "2012",
    items: [
      "Saudi Aramco CRM / Bayer Crop Science (MS Dynamics CRM), Sales Consulting",
      "Samsung Electronics Promotion System (CRM, Point Management System Consulting)",
    ],
  },
] as const

const HERO_HEADLINE =
  "Building Real-World AI for the Future of Work" as const
const HERO_SUB =
  "We turn advanced AI into practical systems that help people and organizations work smarter." as const

/**
 * About page — `/company/about`: Hero + #about-us, #history. Career is `/company/career` (separate route; no #career).
 */
export function CompanyPage() {
  const { hash, pathname } = useLocation()
  const reduce = useReducedMotion() ?? false

  const inView = {
    initial: reduce ? false : ({ opacity: 0, y: 18 } as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: reduce ? 0 : 0.65, ease },
  } as const

  React.useLayoutEffect(() => {
    const id = hash.replace(/^#/, "")
    if (!id) {
      return
    }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [hash, pathname])

  return (
    <main className="flex w-full flex-1 flex-col">
      <section
        aria-labelledby="company-hero-heading"
        className="w-full border-b border-border px-4 pb-16 pt-8 text-center sm:px-6 sm:pb-20 sm:pt-12 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <motion.h1
            id="company-hero-heading"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 0.85,
              delay: reduce ? 0 : 0.12,
              ease,
            }}
            className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            {HERO_HEADLINE}
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 0.7,
              delay: reduce ? 0 : 0.28,
              ease,
            }}
            className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl"
          >
            {HERO_SUB}
          </motion.p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <motion.section
        id="about-us"
        aria-labelledby="about-us-heading"
        className="scroll-mt-24 pt-12"
        {...inView}
      >
        <h2
          id="about-us-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          About us
        </h2>
        <div className="mt-6 space-y-6 text-sm leading-7 text-muted-foreground">
          <p>
            Mazelone is an AI company that turns complex, messy, real-world
            data into systems people can actually use.
          </p>
          <p>
            We build practical AI solutions that help organizations work with
            documents, language, images, and knowledge more intelligently. From
            multimodal understanding to agent-based retrieval and
            domain-specific AI systems, our focus is not on technology for its
            own sake, but on making AI useful in production.
          </p>
          <p>
            We believe the future of work will be shaped by AI that understands
            how people really work — across documents, conversations, images,
            regulations, and operational knowledge. Our role is to make that
            intelligence reliable, usable, and deployable in the environments
            where it matters most.
          </p>

          <div>
            <h3 className="text-base font-semibold text-foreground">
              Our mission
            </h3>
            <p className="mt-3">
              At Mazelone, our mission is to bridge advanced AI research and real
              business execution.
            </p>
            <p className="mt-4">
              We design AI systems that go beyond demos: systems that can
              understand complex enterprise data, retrieve the right information,
              support better decisions, and fit into real workflows. By combining
              strong research capability with product-minded engineering, we
              help companies adopt AI in ways that are grounded, scalable, and
              impactful.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-foreground">
              What we do
            </h3>
            <p className="mt-3">
              Our work centers on building AI for real operational environments.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>
                Multimodal AI systems that understand text, documents, and
                images together
              </li>
              <li>
                Agent-based RAG and knowledge systems for complex enterprise use
                cases
              </li>
              <li>
                Document intelligence pipelines that transform unstructured data
                into usable knowledge
              </li>
              <li>
                Domain-specific AI services designed for security, accuracy, and
                operational fit
              </li>
              <li>
                Production-ready AI architectures that organizations can actually
                deploy and maintain
              </li>
            </ul>
            <p className="mt-4">
              We are especially interested in problems where data is large,
              messy, multimodal, and difficult to operationalize — because that is
              where useful AI creates the most value.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-foreground">
              How we work
            </h3>
            <p className="mt-3">
              At Mazelone, we care about more than model quality. We care about
              whether AI works in practice.
            </p>
            <p className="mt-4">
              We work with a strong sense of ownership, technical depth, and
              execution. We value clarity over hype, real impact over demos, and
              collaboration over silos. Our goal is to build systems that are
              not only intelligent, but trustworthy, maintainable, and aligned
              with the realities of users and businesses.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-foreground">
              Our belief
            </h3>
            <p className="mt-3">
              AI should not stay in research papers or isolated prototypes.
            </p>
            <p className="mt-4">
              It should help people do meaningful work better — with less
              friction, more accuracy, and greater confidence. Mazelone exists to
              build that kind of AI: practical, reliable, and ready for the real
              world.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="history"
        aria-labelledby="history-heading"
        className="scroll-mt-24 pt-16"
        {...inView}
      >
        <h2
          id="history-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          History
        </h2>
        <div className="mt-6 space-y-10">
          {HISTORY_BY_YEAR.map(({ year, items }, idx) => (
            <motion.div
              key={year}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduce ? 0 : 0.5,
                delay: reduce ? 0 : idx * 0.06,
                ease,
              }}
            >
              <h3 className="text-base font-semibold text-foreground">{year}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
                {items.map((text, i) => (
                  <li key={`${year}-${i}`}>{text}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div {...inView}>
        <BackToHome />
      </motion.div>
      </div>
    </main>
  )
}
