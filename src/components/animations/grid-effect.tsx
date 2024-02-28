import { cn } from "@/lib/utils"

export const GridEffect = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <div
      className={cn(
        "absolute inset-0  size-full bg-[linear-gradient(to_right,#5050500a_1px,transparent_1px),linear-gradient(to_bottom,#5050500a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]",
        className
      )}
      {...props}
    />
  )
}
GridEffect.displayName = "GridEffect"
