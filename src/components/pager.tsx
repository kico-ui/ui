import Link from "next/link"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { NavItem, NavItemWithChildren } from "@/types/nav"

import shadcnComponentConfig from "@/config/shadcn-config"
import tailwindcssComponentConfig from "@/config/tailwindcss-config"
import { buttonVariants } from "@/components/ui/button"
import { ShadcnComponent, TailwindcssComponent } from "contentlayer/generated"
import { cn } from "@/lib/utils"

const ComponentConfig = {
  ShadcnComponent: shadcnComponentConfig,
  TailwindcssComponent: tailwindcssComponentConfig,
}

interface DocsPagerProps {
  doc: ShadcnComponent | TailwindcssComponent
}

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc({ doc })

  if (!pager) {
    return null
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev?.href && (
        <Link
          href={pager.prev.href}
          className={buttonVariants({ variant: "outline" })}
        >
          <ChevronLeftIcon className="mr-2 size-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "outline" }), "ml-auto")}
        >
          {pager.next.title}
          <ChevronRightIcon className="ml-2 size-4" />
        </Link>
      )}
    </div>
  )
}

export function getPagerForDoc({ doc }: DocsPagerProps) {
  const flattenedLinks = [
    null,
    ...flatten(ComponentConfig[doc.type].sidebarNav),
    null,
  ]
  const activeIndex = flattenedLinks.findIndex(
    (link) => `/components/${doc.slug}` === link?.href
  )
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null
  return {
    prev,
    next,
  }
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return flat.concat(link.items?.length ? flatten(link.items) : link)
    }, [])
    .filter((link) => !link?.disabled)
}
