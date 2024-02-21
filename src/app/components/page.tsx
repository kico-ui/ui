import BlurAnimation from "@/components/animations/blur-animation"
import LineAnimation from "@/components/animations/line-animation"
import { Announcement } from "@/components/announcement"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

const ComponentPage = () => {
  return (
    <div className="container relative">
      <BlurAnimation className="md:top-[30%] md:left-[30%]" />
      <PageHeader>
        <Announcement />
        <div className="relative w-full mt-4">
          <PageHeaderHeading>Check out some components</PageHeaderHeading>
        </div>
        <PageHeaderDescription className="mt-6">
          Beautifully designed components that you can copy and paste into your
          apps.Build complex components easy and responsive.
        </PageHeaderDescription>
      </PageHeader>
    </div>
  )
}

export default ComponentPage
