import { cn } from "@/lib/utils"

const BlurAnimation = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "absolute size-[300px]  bg-foreground/40 blur-[150px]",
        className
      )}
      {...props}
    />
  )
}
BlurAnimation.displayName = "BlurAnimation"

export default BlurAnimation
