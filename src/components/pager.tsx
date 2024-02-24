import Link from "next/link"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { ShadcnComponent, TailwindcssComponent } from "contentlayer/generated"
import { NavItem, NavItemWithChildren } from "@/types/nav"

import shadcnConfig from "@/config/shadcn-config"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface DocsPagerProps {
  doc: ShadcnComponent | TailwindcssComponent
  componentType: "tailwindcss" | "shadcn" | "css" | "ant-design"
}

export function DocsPager({ doc, componentType }: DocsPagerProps) {
  const pager = getPagerForDoc({ doc, componentType })

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

export function getPagerForDoc({ doc, componentType }: DocsPagerProps) {
  const flattenedLinks = [null, ...flatten(shadcnConfig.sidebarNav), null]
  const activeIndex = flattenedLinks.findIndex(
    (link) => `/${componentType}/${doc.slug}` === link?.href
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
