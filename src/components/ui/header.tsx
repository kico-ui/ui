import { cn } from "@/lib/utils"

type HeaderProps = {
  className?: string
} & React.HtmlHTMLAttributes<HTMLHeadElement>

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <h1
      className={cn(
        "w-full flex items-center justify-center text-2xl md:text-4xl",
        className
      )}
      {...props}
    />
  )
}
Header.displayName = "Header"
