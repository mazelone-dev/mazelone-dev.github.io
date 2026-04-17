import { Link } from "react-router-dom"

import { ThemeToggle } from "@/components/theme-toggle"
import {
  companyNav,
  CONTACT_MAIL,
  footerContact,
  productNav,
  solutionNav,
} from "@/lib/nav-config"
import { phoneToTelHref } from "@/lib/utils"

function FooterColumn({
  title,
  items,
}: {
  title: string
  items: readonly { label: string; href: string }[]
}) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold tracking-wide text-foreground">
        {title}
      </h2>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Company" items={companyNav} />
          <FooterColumn title="Products" items={productNav} />
          <FooterColumn title="Solution" items={solutionNav} />

          <div>
            <h2 className="mb-3 text-sm font-semibold tracking-wide text-foreground">
              Contact
            </h2>
            <dl className="space-y-3 text-sm text-muted-foreground">
              <div>
                <dt className="font-medium text-foreground/90">Tel</dt>
                <dd>
                  <a
                    href={phoneToTelHref(footerContact.tel)}
                    className="hover:text-foreground"
                  >
                    {footerContact.tel}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground/90">Phone</dt>
                <dd className="space-y-1">
                  {footerContact.phones.map((p) => (
                    <div key={p.n}>
                      <a
                        href={phoneToTelHref(p.n)}
                        className="hover:text-foreground"
                      >
                        {p.n}
                      </a>{" "}
                      <span className="text-muted-foreground">({p.role})</span>
                    </div>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground/90">Email</dt>
                <dd>
                  <a
                    href={`mailto:${footerContact.email}`}
                    className="hover:text-foreground"
                  >
                    {footerContact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground/90">Headquarters</dt>
                <dd className="leading-relaxed">{footerContact.headquarters}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground/90">Seoul Office</dt>
                <dd className="leading-relaxed">{footerContact.seoulOffice}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-logo text-lg tracking-wide text-foreground">
            MAZELONE
          </p>
          <p className="text-xs text-muted-foreground">
            © {year} Mazelone. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:justify-end">
            <a
              href={`mailto:${CONTACT_MAIL}`}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              {CONTACT_MAIL}
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
