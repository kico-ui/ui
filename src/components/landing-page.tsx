import { BlurEffect } from "@/components/animations/blur-effect"
import { Announcement } from "@/components/announcement"
import { LandingPageGridEffect } from "@/components/animations/landing-page-grid-effect"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

type LandingPageProps = {
  title: string
  description: string
  blurEffect?: boolean
  gridEffect?: boolean
  children?: React.ReactNode
}

const LandingPage = ({
  title,
  description,
  blurEffect = false,
  gridEffect = false,
  children,
}: LandingPageProps) => {
  return (
    <div className="w-full relative">
      {gridEffect && <LandingPageGridEffect />}
      <PageHeader className="relative">
        {blurEffect && <BlurEffect />}
        <Announcement />
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        {children}
      </PageHeader>
    </div>
  )
}

export default LandingPage
