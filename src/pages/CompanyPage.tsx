import * as React from "react"
import { useLocation } from "react-router-dom"

import { BackToHome } from "@/components/back-to-home"

/**
 * About page — `/company/about` only: #about-us, #history. Career is `/company/career` (separate route; no #career).
 */
export function CompanyPage() {
  const { hash, pathname } = useLocation()

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
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-sans text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Company
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Mazelone — mission and history.
      </p>

      <section
        id="about-us"
        aria-labelledby="about-us-heading"
        className="scroll-mt-24 border-t border-border pt-12"
      >
        <h2
          id="about-us-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          About us
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          Mission, vision, organization, and culture — content coming soon.
        </p>
      </section>

      <section
        id="history"
        aria-labelledby="history-heading"
        className="scroll-mt-24 border-t border-border pt-12"
      >
        <h2
          id="history-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          History
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          Company timeline — content coming soon.
        </p>
      </section>

      <BackToHome />
    </main>
  )
}
