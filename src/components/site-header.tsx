"use client"

import Link from "next/link"
import MainNav from "@/components/main-nav"
import MobileNav from "@/components/mobile-nav"
import ModeToggle from "@/components/mode-toggle"
import { siteConfig } from "@/config/site-config"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons/icons"
import { cn } from "@/lib/utils"

function SiteHeader() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-screen border-b backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div>
          <MainNav />
          <MobileNav />
        </div>
        <div className="flex items-center space-x-2">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.gitHub className="size-4" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
