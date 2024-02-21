"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

type LinePosition = "top" | "right" | "bottom" | "left"

type LineAnimationProps = {
  className?: string
  lines: LinePosition[]
  linePosition?: number
}

const LineAnimation = ({
  className,
  lines,
  linePosition,
  ...props
}: LineAnimationProps) => {
  return lines.map((position, index) => {
    return (
      <motion.div
        initial={{
          opacity: 0.5,
          ...(position === "top" || position === "bottom"
            ? { width: 0 }
            : { height: 0 }),
        }}
        animate={{
          opacity: 0.1,
          ...(position === "top" || position === "bottom"
            ? { width: "100%" }
            : { height: "100%" }),
        }}
        transition={{ duration: 1 }}
        style={{ [position]: linePosition }}
        className={cn(
          "absolute opacity-10 bg-foreground",
          position === "top" || position === "bottom"
            ? "w-full h-[1px]"
            : "h-full w-[1px]",
          className
        )}
        key={index}
        {...props}
      />
    )
  })
}

export default LineAnimation

// export default function LineAnimation1({
//   linePosition = 10,
// }: LineAnimationProps) {
//   return (
//     <>
//       <motion.div className="absolute opacity-10 w-full h-[1px] bg-foreground" />

//       {/* <motion.div
//         initial={{ width: 0, opacity: 0.5 }}
//         animate={{ width: "100%", opacity: 0.1 }}
//         transition={{ duration: 1 }}
//         style={{ bottom: linePosition }}
//         className="absolute opacity-10 w-full h-[1px] bg-foreground"
//       />

//       <motion.div
//         initial={{ height: 0, opacity: 0.5 }}
//         animate={{ height: "100%", opacity: 0.1 }}
//         transition={{ duration: 1 }}
//         style={{ left: linePosition }}
//         className="absolute opacity-10 h-full w-[1px] bg-foreground"
//       />

//       <motion.div
//         initial={{ height: 0, opacity: 0.5 }}
//         animate={{ height: "100%", opacity: 0.1 }}
//         transition={{ duration: 1 }}
//         style={{ right: linePosition }}
//         className="absolute opacity-10 h-full w-[1px] bg-foreground"
//       /> */}
//     </>
//   )
// }
