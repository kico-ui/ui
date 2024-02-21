import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

const LinkedCard = ({
  className,
  ...props
}: React.ComponentProps<typeof Link>) => (
  <Link
    className={cn(
      "flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10",
      className
    )}
    {...props}
  />
)
LinkedCard.displayName = "LinkedCard"

export default LinkedCard
