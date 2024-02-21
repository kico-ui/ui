"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import MainNav from "@/components/main-nav"
import MobileNav from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import ModeToggle from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div>
          <MainNav />
          <MobileNav />
        </div>
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Link href="/sign-up">
            <Button
              size="sm"
              variant="outline"
              className={cn(
                "px-3 py-0 text-xs tracking-wider",
                pathname === "/sign-up"
                  ? "bg-accent text-foreground"
                  : "text-foreground/60"
              )}
            >
              Sign Up
            </Button>
          </Link>
          <Link href="/login">
            <Button
              size="sm"
              variant="outline"
              className={cn(
                "px-3 py-0 text-xs tracking-wider",
                pathname === "/login"
                  ? "bg-accent text-foreground"
                  : "text-foreground/60"
              )}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
