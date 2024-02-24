import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import { allTailwindcssComponents } from "contentlayer/generated"
import { notFound } from "next/navigation"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { getTableOfContents } from "@/lib/toc"

import Mdx from "@/components/mdx"
import { DashboardTableOfContents } from "@/components/toc"
import { DocsPager } from "@/components/pager"
import { badgeVariants } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

type TailwindcssComponentParams = {
  params: {
    slug: string
  }
}

const getComponetFromParams = async ({
  params,
}: TailwindcssComponentParams) => {
  const component = allTailwindcssComponents.find(
    (component) => component.slug === `tailwindcss/${params?.slug}`
  )
  return component ? component : null
}

const TailwindcssComponent = async ({ params }: TailwindcssComponentParams) => {
  const component = await getComponetFromParams({ params })
  if (!component) return notFound()
  const toc = await getTableOfContents(component.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="truncate">components</div>
          <ChevronRightIcon className="size-4" />
          <div className="truncate">tailwindcss</div>
          <ChevronRightIcon className="size-4" />
          <div className="font-medium text-foreground">
            {component.breadcrumb}
          </div>
        </div>
        <div className="space-y-2">
          <h1
            className={cn(
              "scroll-m-20 text-xl md:text-3xl lg:text-4xl font-bold tracking-tight"
            )}
          >
            {component.title}
          </h1>
          {component.description && (
            <p className="text-sm mt-2 text-muted-foreground">
              {component.description}
            </p>
          )}
        </div>

        {component.links ? (
          <div className="flex items-center space-x-2 pt-4">
            {component.links?.doc && (
              <Link
                href={component.links.doc}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                Docs
                <ExternalLinkIcon className="size-3" />
              </Link>
            )}
            {component.links?.api && (
              <Link
                href={component.links.api}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                API Reference
                <ExternalLinkIcon className="size-3" />
              </Link>
            )}
          </div>
        ) : null}

        <div className="pb-12 pt-8">
          <Mdx code={component.body.code} />{" "}
        </div>
        <DocsPager doc={component} componentType="tailwindcss" />
      </div>
      {component.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                <DashboardTableOfContents toc={toc} />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  )
}

export default TailwindcssComponent
