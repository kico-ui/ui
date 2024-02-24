import BlurAnimation from "@/components/animations/blur-animation"
import LineAnimation from "@/components/animations/line-animation"
import { Announcement } from "@/components/announcement"
import LinkedCards from "@/components/linked-cards"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

const ComponentPage = () => {
  return (
    <>
      <div className="container min-h-screen">
        <PageHeader className="relative">
          <BlurAnimation className="md:top-[30%] md:left-[30%] bg-blue-600" />
          <Announcement />
          <div className="relative w-full">
            <PageHeaderHeading>
              Explore Component Library: Build with Ease
            </PageHeaderHeading>
          </div>
          <PageHeaderDescription>
            Discover a comprehensive collection of pre-designed components for
            your projects. Our library offers everything you need to streamline
            development.
          </PageHeaderDescription>
        </PageHeader>

        <div className="pb-24">
          <div className="flex items-center justify-center w-full mt-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl">
              Crafting Your Framework
            </h2>
          </div>
          <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 sm:gap-6">
            <LinkedCards />
          </div>
        </div>
      </div>
    </>
  )
}

export default ComponentPage
