import Link from "next/link"

import FooterLinks from "@/components/footer-links"
import { Icons } from "@/components/icons/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { siteConfig } from "@/config/site-config"
import { aboutKico, components, legal, more } from "@/config/footer-config"
import LogoLink from "@/components/logo-link"

export const FooterSocials = () => {
  return (
    <>
      <Link href={siteConfig.links.github}>
        <Icons.gitHub className="size-4" />
      </Link>
    </>
  )
}

const SiteFooter = () => {
  return (
    <div className="pb-10 border-t">
      <div className="relative container">
        <div className="grid grid-cols-2 md:grid-cols-6  bg-background gap-8 lg:gap-8 justify-items-start py-10">
          <div className="hidden md:block">
            <LogoLink />
          </div>

          <div className="md:hidden">
            <LogoLink />
          </div>
          <div className="flex items-center space-x-4 md:hidden ">
            <FooterSocials />
          </div>

          <FooterLinks footerLinks={components} />
          <FooterLinks footerLinks={more} />
          <FooterLinks footerLinks={aboutKico} />
          <FooterLinks footerLinks={legal} />

          {/* <div className="col-span-2 md:col-span-4">
            <h1 className="font-bold text-md">Contact</h1>
            <span className="mt-4 text-xs font-light text-foreground/60">
              Stay updated on new releases and features, guides, and case
              studies.
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
          </div> */}

          <div className="hidden col-span-1 w-full space-x-10 md:block">
            <FooterSocials />
          </div>
        </div>

        <span className="text-sm font-bold mt-8 inline-block">
          © 2024 Kico Ui, Inc.
        </span>
      </div>
    </div>
  )
}

export default SiteFooter
