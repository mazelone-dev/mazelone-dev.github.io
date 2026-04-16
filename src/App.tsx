import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "@/components/theme-provider"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="fixed right-4 top-4 z-10 size-9 shrink-0"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </Button>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm tracking-[0.2em] text-muted-foreground uppercase">
          Coming Soon
        </p>

        <h1
          className="font-logo text-5xl leading-none tracking-wide text-foreground sm:text-7xl"
          aria-label="Mazelone"
        >
          MAZELONE
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
