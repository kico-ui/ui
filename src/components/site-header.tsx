"use client"

import MainNav from "@/components/main-nav"
import MobileNav from "@/components/mobile-nav"
import ModeToggle from "@/components/mode-toggle"

function SiteHeader() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div>
          <MainNav />
          <MobileNav />
        </div>
        <div className="flex items-center space-x-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
