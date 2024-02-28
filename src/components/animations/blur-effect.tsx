import { cn } from "@/lib/utils"

export const BlurEffect = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "absolute md:top-[30%] md:left-[30%] dark:bg-blue-600 bg-white size-[300px] blur-[150px]",
        className
      )}
      {...props}
    />
  )
}
BlurEffect.displayName = "BlurEffect"
