import BlurAnimation from "@/components/animations/blur-animation"
import LineAnimation from "@/components/animations/line-animation"
import { cn } from "@/lib/utils"

type FeatureCardProps = {
  Icon: JSX.Element
  title: string
  description: string
  color: string
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

const FeatureCard = ({
  Icon,
  title,
  description,
  color,
  className,
  ...props
}: FeatureCardProps) => {
  return (
    <div
      className={cn("rounded-lg relative border", `border-${color}`, className)}
      {...props}
    >
      <BlurAnimation
        className={cn("size-[150px] top-[50%] left-[50%]", `bg-${color}`)}
      />
      <LineAnimation
        lines={["bottom", "top", "left", "right"]}
        linePosition={30}
        className={`bg-${color}`}
      />

      <div
        className={cn(
          "z-10 size-12 mt-[7px] ml-[30px] rounded-full flex items-center justify-center relative shadow-md border",
          `border-${color}`
        )}
      >
        <BlurAnimation className="bg-white size-[60px] blur-[50px]" />
        {/* <Icon className={cn("size-10", `text-${color}`)} /> */}
        {Icon}
      </div>

      <div className="py-5  ">
        <h1 className="text-xl font-bold px-7">{title}</h1>
      </div>

      <div className="pb-7">
        <p className={cn("px-8", `text-${color}`)}>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
