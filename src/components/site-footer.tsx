import Link from "next/link"
import { Icons } from "@/components/icons/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { siteConfig } from "@/config/site-config"
import FooterLinks from "@/components/footer-links"
import BlurAnimation from "@/components/animations/blur-animation"
import { aboutKico, legal, more, resources } from "@/config/footer-config"

const SiteFooter = () => {
  return (
    <div className="pb-10 border-t">
      <div className="relative container grid grid-cols-2 md:grid-cols-5  bg-background gap-4 lg:gap-8 justify-items-start py-10">
        <BlurAnimation className="md:left-[50%] size-[200px] top-[50%]" />
        <div className="hidden md:block">
          <div className="flex justify-center items-center w-fit">
            <Icons.logo className="size-6" />
            <span className="text-sm ml-2 font-bold">Kico\Ui</span>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex justify-center items-center w-fit">
            <Icons.logo className="size-6" />
            <span className="text-sm ml-2 font-bold">Kico\Ui</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 md:hidden ">
          <Link href={siteConfig.links.github}>
            <Icons.gitHub className="size-4" />
          </Link>

          <Link href={siteConfig.links.twitter}>
            <Icons.twitter className="size-4 dark:fill-white" />
          </Link>
        </div>

        <div>
          <FooterLinks footerLinks={resources} />
        </div>

        <div>
          <FooterLinks footerLinks={more} />
        </div>

        <div>
          <FooterLinks footerLinks={aboutKico} />
        </div>

        <div>
          <FooterLinks footerLinks={legal} />
        </div>

        <div className="col-span-2 md:col-span-4">
          <h1 className="font-bold text-md">Contact</h1>
          <span className="mt-4 text-xs font-light text-foreground/60">
            Stay updated on new releases and features, guides, and case studies.
          </span>
          <div className="flex items-center justify-between border rounded-full mt-2">
            <Input
              className="h-8 focus-visible:ring-0 border-none focus-visible:ring-offset-0 bg-transparent"
              placeholder="example@kicoui.com"
            />
            <Button className="h-8 rounded-full w-fit py-1 px-4 text-xs">
              Connect
            </Button>
          </div>
        </div>

        <div className="hidden col-span-1 w-full space-x-10 md:flex items-center">
          <Link href={siteConfig.links.github}>
            <Icons.gitHub className="size-4" />
          </Link>

          <Link href={siteConfig.links.twitter}>
            <Icons.twitter className="size-4 dark:fill-white" />
          </Link>
        </div>
      </div>
      <span className="text-sm font-bold container mt-8 inline-block">
        © 2024 Kico Ui, Inc.
      </span>
    </div>
  )
}

export default SiteFooter
