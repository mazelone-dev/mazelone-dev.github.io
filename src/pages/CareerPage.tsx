import { BackToHome } from "@/components/back-to-home"

/**
 * Career — `/company/career` (not an anchor on `/company/about`).
 */
export function CareerPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-sans text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Career
      </h1>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">
        Open roles, benefits, and how to apply — content coming soon.
      </p>
      <BackToHome />
    </main>
  )
}
