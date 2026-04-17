import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CONTACT_MAIL } from "@/lib/nav-config"

export function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="mb-3 text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
        Coming Soon
      </h1>

      <p className="mt-0 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
        We are building something new. Our official website will be launching
        soon.
      </p>

      <Card className="mt-8 w-full max-w-md">
        <CardContent className="flex flex-col items-center gap-4 p-6">
          <p className="text-sm text-muted-foreground">Contact us</p>
          <a
            href={`mailto:${CONTACT_MAIL}`}
            className="text-sm font-medium underline underline-offset-4"
          >
            {CONTACT_MAIL}
          </a>
          <Button asChild>
            <a href={`mailto:${CONTACT_MAIL}`}>Get in touch</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
