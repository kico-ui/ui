import { Header } from "@/components/ui/header"
import ComponentExamples from "@/components/component-examples"
import FeatureCards from "@/components/feature-cards"
import LandingPage from "@/components/landing-page"

import { PageActions } from "@/components/page-header"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site-config"
import { Icons } from "@/components/icons/icons"

export const PageActionLinks = () => {
  return (
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
  )
}

export default function Home() {
  return (
    <section className="container">
      <LandingPage
        title="Make development easy"
        description="Beautifully designed components that you can copy and paste into
            your apps. Build complex components easy and responsive."
        gridEffect
      >
        <PageActionLinks />
      </LandingPage>
      <FeatureCards />
      <div className="h-full relative pb-24">
        <Header>Kico ui component examples</Header>
        <ComponentExamples />
      </div>
    </section>
  )
}
