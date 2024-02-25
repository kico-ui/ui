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
import ComponentExamples from "@/components/component-examples"
import { cn } from "@/lib/utils"
import FeatureCards from "@/components/feature-cards"
import BlurAnimation from "@/components/animations/blur-animation"

export default function Home() {
  return (
    <section className="container">
      <div className="min-h-screen">
        <div className="w-full relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <PageHeader className="relative">
            <BlurAnimation className="md:top-[30%] md:left-[30%] dark:bg-blue-600 bg-white" />
            <Announcement />
            <PageHeaderHeading>
              Make <span className="text-active">development</span> easy
            </PageHeaderHeading>
            <PageHeaderDescription>
              Beautifully designed components that you can copy and paste into
              your apps. Build complex components easy and responsive.
            </PageHeaderDescription>
            <PageActions className="relative mt-4">
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

        <FeatureCards />
      </div>

      <div className="container min-h-screen relative pb-24">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl">Kico ui component examples</h2>
        </div>
        <ComponentExamples />
      </div>
    </section>
  )
}
