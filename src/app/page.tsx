import Link from "next/link"

import { Announcement } from "@/components/announcement"
import { Icons } from "@/components/icons/icons"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site-config"
import { cn } from "@/lib/utils"
import LineAnimation from "@/components/animations/line-animation"

export default function Home() {
  return (
    <div className="container relative">
      <div className="relative">
        <LineAnimation
          linePosition={60}
          lines={["bottom", "top", "left", "right"]}
          className="md:hidden lg:block"
        />
        <LineAnimation
          linePosition={100}
          lines={["bottom"]}
          className="hidden lg:block"
        />
        <LineAnimation
          linePosition={180}
          lines={["bottom"]}
          className="hidden lg:block"
        />
        <PageHeader>
          <Announcement />
          <PageHeaderHeading>
            Make <span className="text-active">development</span> easy
          </PageHeaderHeading>
          <PageHeaderDescription>
            Beautifully designed components that you can copy and paste into
            your apps.Build complex components easy and responsive.
          </PageHeaderDescription>
          <PageActions className="relative mt-4">
            <LineAnimation
              linePosition={200}
              lines={["left", "right"]}
              className="hidden lg:block"
            />
            <Link href="/components" className={cn(buttonVariants())}>
              Get Started
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <Icons.gitHub className="mr-2 size-4" />
              GitHub
            </Link>
          </PageActions>
        </PageHeader>
      </div>
    </div>
  )
}
