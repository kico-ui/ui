import BlurAnimation from "@/components/animations/blur-animation"
import LineAnimation from "@/components/animations/line-animation"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons/icons"

const FeatureCards = () => {
  return (
    <div className="md:container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-20">
      <div className={cn("rounded-lg relative border border-pink-400")}>
        <BlurAnimation
          className={cn("size-[150px] top-[50%] left-[50%] bg-pink-400")}
        />
        <LineAnimation
          lines={["bottom", "top", "left", "right"]}
          linePosition={30}
          className="bg-pink-400"
        />

        <div className="z-10 size-12 mt-[7px] ml-[30px] rounded-full flex items-center justify-center relative shadow-md border border-pink-400">
          <BlurAnimation className="bg-white size-[60px] blur-[50px]" />
          <Icons.like className="size-6 fill-pink-400" />
        </div>

        <div className="py-5  ">
          <h1 className="text-sm sm:text-xl md:text-md lg:text-xl font-bold px-7">
            Fully Responsible Component
          </h1>
        </div>

        <div className="pb-7">
          <p className={cn("text-sm px-8 text-pink-400")}>
            Ensuring your layouts shine on screens of all sizes with a
            user-centric approach
          </p>
        </div>
      </div>

      <div className={cn("rounded-lg relative border border-blue-400")}>
        <BlurAnimation
          className={cn("size-[150px] top-[50%] left-[50%] bg-blue-400")}
        />
        <LineAnimation
          lines={["bottom", "top", "left", "right"]}
          linePosition={30}
          className="bg-blue-400"
        />

        <div className="z-10 size-12 mt-[7px] ml-[30px] rounded-full flex items-center justify-center relative shadow-md border border-blue-400">
          <BlurAnimation className="bg-white size-[60px] blur-[50px]" />
          <Icons.copy className="size-6 fill-blue-600" />
        </div>

        <div className="py-5  ">
          <h1 className="text-sm sm:text-xl md:text-md lg:text-xl font-bold px-7">
            Make Easy Web Development
          </h1>
        </div>

        <div className="pb-7">
          <p className={cn("text-sm px-8 text-blue-400")}>
            Make easy development just copy code and paste in your app. Just
            loogking wow!
          </p>
        </div>
      </div>

      <div className={cn("rounded-lg relative border border-yellow-400")}>
        <BlurAnimation
          className={cn("size-[150px] top-[50%] left-[50%] bg-yellow-400")}
        />
        <LineAnimation
          lines={["bottom", "top", "left", "right"]}
          linePosition={30}
          className="bg-yellow-400"
        />

        <div className="z-10 size-12 mt-[7px] ml-[30px] rounded-full flex items-center justify-center relative shadow-md border border-yellow-400">
          <BlurAnimation className="bg-white size-[60px] blur-[50px]" />
          <Icons.animation className="size-6 fill-yellow-600" />
        </div>

        <div className="py-5  ">
          <h1 className="text-sm sm:text-xl md:text-md lg:text-xl font-bold px-7">
            Code-Powered Animations
          </h1>
        </div>

        <div className="pb-7">
          <p className={cn("text-sm px-8 text-yellow-400")}>
            Bring your designs to life, adding a touch of dynamism to your
            digital crafts
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCards
