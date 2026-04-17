import { Outlet } from "react-router-dom"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  )
}
