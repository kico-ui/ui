"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

// add menu icon
import { Icons } from "@/components/icons/icons"

// shadcn ui components
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

const MainNav = () => {
  const pathname = usePathname()
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="#">Logo</Link>
      <nav className="flex items-center gap-6 text-sm ml-8">
        <Link
          href="#"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/home")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Home
        </Link>

        <Link
          href="#"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          About
        </Link>

        <Link
          href="#"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contact")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}

const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Icons.menus className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="pr-0 h-full">
        <Link href="#">Logo</Link>

        <ScrollArea className="my-4 h-[200px] pb-10 pl-6">
          <div className="flex flex-col space-y-4">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

const NavbarDemo = () => {
  const pathname = usePathname()
  return (
    <header className="w-full supports-[backdrop-filter]:bg-background/60 border-b backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between relative">
        <>
          <MainNav />
          <MobileNav />
        </>

        <div className="flex items-center space-x-2">
          <Link href="#">
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

          <Link href="#">
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

          {/* add another buttons... */}
        </div>
      </div>
    </header>
  )
}

export default NavbarDemo
