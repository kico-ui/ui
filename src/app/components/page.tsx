import LineAnimation from "@/components/animations/line-animation"
import { Announcement } from "@/components/announcement"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

const ComponentPage = () => {
  return (
    <div className="container relative z-10">
      <div className="relative">
        <LineAnimation
          linePosition={50}
          lines={["top", "bottom", "left", "right"]}
        />

        <LineAnimation linePosition={179} lines={["left", "right"]} />

        <PageHeader>
          <Announcement />
          <div className="relative w-full mt-4">
            <LineAnimation linePosition={-10} lines={["top", "bottom"]} />
            <PageHeaderHeading>Check out some components</PageHeaderHeading>
          </div>
          <PageHeaderDescription className="mt-6">
            Beautifully designed components that you can copy and paste into
            your apps.Build complex components easy and responsive.
          </PageHeaderDescription>
        </PageHeader>
      </div>
    </div>
  )
}

export default ComponentPage
