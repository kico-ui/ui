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
import LinkedCards from "@/components/linked-cards"
import ComponentExamples from "@/components/component-examples"
import { cn } from "@/lib/utils"
import FeatureCards from "@/components/feature-cards"

export default function Home() {
  return (
    <div className="container">
      <PageHeader className="relative">
        {/* <BlurAnimation className="md:top-[30%] md:left-[30%]" /> */}
        <Announcement />
        <PageHeaderHeading>
          Make <span className="text-active">development</span> easy
        </PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Build complex components easy and responsive.
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

      <FeatureCards />

      <div className="min-h-screen min-w-screen relative">
        <div className="flex items-center justify-center w-full mt-8">
          <h2 className="text-2xl md:text-4xl">Kico ui components with</h2>
        </div>
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 sm:gap-6">
          <LinkedCards />
        </div>

        <div className="py-10">
          <div className="flex items-center justify-center w-full mt-8">
            <h2 className="text-2xl md:text-4xl">Kico ui component examples</h2>
          </div>
          <ComponentExamples />
        </div>
      </div>
    </div>
  )
}
