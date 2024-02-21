"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import LogoLink from "@/components/logo-link"
import { cn } from "@/lib/utils"

const MainNav = () => {
  const pathname = usePathname()
  return (
    <div className="mr-4 hidden md:flex">
      <LogoLink />
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/components/sign-up"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
      </nav>
    </div>
  )
}

export default MainNav
