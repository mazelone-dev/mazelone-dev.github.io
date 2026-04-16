import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm tracking-[0.2em] text-muted-foreground uppercase">
          Coming Soon
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Mazelone
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
          We are building something new. Our official website will be launching
          soon.
        </p>

        <Card className="mt-8 w-full max-w-md">
          <CardContent className="flex flex-col items-center gap-4 p-6">
            <p className="text-sm text-muted-foreground">Contact us</p>
            <a
              href="mailto:ask@mazelone.com"
              className="text-sm font-medium underline underline-offset-4"
            >
              ask@mazelone.com
            </a>
            <Button asChild>
              <a href="mailto:ask@mazelone.com">Get in touch</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
