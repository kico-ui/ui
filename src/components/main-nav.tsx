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
      <nav className="flex items-center gap-6 text-sm font-light">
        <Link
          href="/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/components"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>

        <Link
          href="/components/shadcn"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/components/shadcn")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Shadcn
        </Link>

        <Link
          href="/components/tailwindcss"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/components/tailwindcss")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Tailwindcss
        </Link>
      </nav>
    </div>
  )
}

export default MainNav
