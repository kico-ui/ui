import Link from "next/link"

import { Icons } from "@/components/icons/icons"
import { siteConfig } from "@/config/site-config"

function LogoLink() {
  return (
    <Link href="/" className="mr-6 flex items-center space-x-2">
      <Icons.logo className="size-6" />
      <span className="hidden font-bold sm:inline-block">
        {siteConfig.name}
      </span>
    </Link>
  )
}

export default LogoLink
