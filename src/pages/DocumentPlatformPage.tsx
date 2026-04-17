import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BackToHome } from "@/components/back-to-home"
import { DocumentPlatformArchitectureFigure } from "@/components/document-platform-architecture-figure"
import { CONTACT_MAIL } from "@/lib/nav-config"

/**
 * MZO Document Platform — `/products/document-platform`
 * @see `.dev/md/20260417_1616_products-document-platform-planning.md`
 */
export function DocumentPlatformPage() {
  return (
    <main className="flex w-full flex-1 flex-col">
      {/* Hero */}
      <section className="w-full border-b border-border px-4 pb-14 pt-8 text-center sm:px-6 sm:pb-16 sm:pt-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Products
          </p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            MZO Document Platform
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground sm:text-xl">
            Parse anything. Extract structure. Move faster.
          </p>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-left text-sm leading-7 text-muted-foreground sm:text-center">
            <p>
              Turn Word, Excel, PowerPoint, HWP, HTML, images, PDFs, and more
              into structured content you can use for search, automation, and AI
              — without treating every file like a flat image.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href={`mailto:${CONTACT_MAIL}`}>Contact us</a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-foreground">
              <a href="#supported-formats">See supported formats</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main figure — SVG from `.dev/code/20260417_1647_Document_Platform/src/app/App.tsx` */}
      <section
        aria-labelledby="parse-anything-heading"
        className="w-full border-b border-border bg-muted/20 px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="parse-anything-heading" className="sr-only">
            MZO Document Platform — processing architecture diagram
          </h2>
          <figure className="mt-8 overflow-hidden rounded-lg border border-border shadow-sm">
            <DocumentPlatformArchitectureFigure />
          </figure>
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl flex-1 px-4 py-14 sm:px-6 lg:px-8">
        {/* Differentiators */}
        <section aria-labelledby="beyond-ocr-heading">
          <h2
            id="beyond-ocr-heading"
            className="text-2xl font-semibold tracking-tight text-foreground"
          >
            Built to go beyond OCR
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
            Many systems treat every file like a picture. We don&apos;t. For
            Word, PowerPoint, Excel, HWP, HTML, and similar formats, we read
            internal structure directly. PDFs and image-heavy documents use OCR
            only when needed — OCR is not the default for everything.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Faster by design",
                body: "Direct parsing removes unnecessary OCR overhead and speeds up processing.",
              },
              {
                title: "More accurate extraction",
                body: "Native structure preserves text, tables, and layout more reliably.",
              },
              {
                title: "Built for real AI systems",
                body: "Structured output improves search quality, grounding, and downstream automation.",
              },
            ].map((c) => (
              <Card key={c.title} className="flex flex-col border-border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">{c.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {c.body}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mt-16 border-t border-border pt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            From file to usable intelligence
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "Ingest",
                desc: "Collect documents from storage, APIs, or enterprise systems",
              },
              {
                step: "Parse",
                desc: "Read native file formats directly whenever possible",
              },
              {
                step: "Normalize",
                desc: "Convert diverse formats into a consistent structured schema",
              },
              {
                step: "Deliver",
                desc: "Power search, RAG pipelines, analytics, and automation workflows",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-lg border border-border p-4">
                <p className="text-sm font-semibold text-foreground">{s.step}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Supported formats */}
        <section
          id="supported-formats"
          className="scroll-mt-24 mt-16 border-t border-border pt-16"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Supports the formats enterprises actually use
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
            Cover the file types you see in real environments — office suites,
            web, Korean documents, PDFs, and images. Native formats are parsed
            directly where possible; selective OCR applies to scans and
            image-heavy content.
          </p>
          <ul className="mt-8 space-y-3 text-sm leading-7 text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Office:</span> Word
              (DOC, DOCX), PowerPoint (PPT, PPTX), Excel (XLS, XLSX)
            </li>
            <li>
              <span className="font-medium text-foreground">Web:</span> HTML /
              web pages
            </li>
            <li>
              <span className="font-medium text-foreground">Korean:</span> HWP /
              HWPX
            </li>
            <li>
              <span className="font-medium text-foreground">Documents:</span>{" "}
              PDF, RTF
            </li>
            <li>
              <span className="font-medium text-foreground">Images:</span> JPEG,
              PNG
            </li>
          </ul>
        </section>

        {/* Quote block */}
        <section className="mt-16 rounded-xl border border-border bg-muted/30 p-8 sm:p-10">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Native parsing, not OCR-first
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            We avoid running OCR on content that can be read at the file
            structure level. That preserves meaning, reduces noise, and improves
            trust for search, AI, and automation downstream.
          </p>
        </section>

        {/* Use cases */}
        <section className="mt-16 border-t border-border pt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Designed for real-world workflows
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Enterprise Search",
                body: "Turn messy document libraries into searchable, consistent representations.",
              },
              {
                title: "RAG & AI Systems",
                body: "Feed LLMs structured context for more accurate, grounded responses.",
              },
              {
                title: "Compliance & Audit",
                body: "Extract traceable information from large, complex document sets.",
              },
              {
                title: "Workflow Automation",
                body: "Produce machine-readable inputs for business processes and integrations.",
              },
            ].map((u) => (
              <Card key={u.title} className="border-border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">{u.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {u.body}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mt-16 border-t border-border pt-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Need to parse documents at scale?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            Move from complex files to structured, usable data with a platform
            built for real document environments — not slide-deck demos.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full px-8">
            <a href={`mailto:${CONTACT_MAIL}`}>Contact us</a>
          </Button>
        </section>

        <BackToHome className="mt-14" />
      </div>
    </main>
  )
}
