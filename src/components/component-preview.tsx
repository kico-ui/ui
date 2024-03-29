import React from "react"

import { cn } from "@/lib/utils"
import { ComponentRegistry } from "@/components-registry"
import { Icons } from "@/components/icons/icons"

type ComponentPreviewProps = {
  name: string
  className?: string
  repositoryType: "shadcn" | "tailwindcss"
}

const ComponentPreview = ({
  name,
  repositoryType,
  className,
  ...props
}: ComponentPreviewProps) => {
  const Preview = React.useMemo(() => {
    const Component = ComponentRegistry[repositoryType][name].component
    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      )
    }

    return <Component />
  }, [name, repositoryType])

  return (
    <div
      className={cn(
        "group relative flex flex-col mt-8 border rounded-md",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "preview flex min-h-[350px] w-full justify-center items-center"
        )}
      >
        <React.Suspense
          fallback={
            <div className="flex items-center text-sm text-muted-foreground">
              <Icons.spinner className="mr-2 size-4 animate-spin" />
              Loading...
            </div>
          }
        >
          {Preview}
        </React.Suspense>
      </div>
    </div>
  )
}

export default ComponentPreview
