import { cn } from "@/lib/utils"

export const DotEffect = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <div
      className={cn(
        "absolute inset-0 size-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:16px_16px]",
        className
      )}
      {...props}
    />
  )
}
DotEffect.displayName = "DotEffect"
