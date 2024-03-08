import * as React from "react"
import { ButtonBorder } from "@/components/icons/button-border"
import { cn } from "@/lib/utils"

type ButtonProps = {
  white?: boolean
  children: React.ReactNode
} & React.HTMLAttributes<HTMLButtonElement>

const KicoFancyButton = ({
  className,
  children,
  white = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "button relative inline-flex font-light tracking-wider items-center justify-center h-11 transition-colors px-7 hover:text-sky-600",
        white ? "text-black" : "text-white",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <ButtonBorder white={white} />
    </button>
  )
}

export { KicoFancyButton }
