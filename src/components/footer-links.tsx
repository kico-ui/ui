import Link from "next/link"
import React from "react"

type Item = {
  title: string
  href: string
}

type FooterLinksProps = {
  footerLinks: { title: string; items: Item[] }
}

const FooterLinks = ({ footerLinks }: FooterLinksProps) => {
  return (
    <div>
      <h1 className="font-bold text-md">{footerLinks.title}</h1>
      <ul className="flex space-y-2 flex-col mt-2">
        {footerLinks.items.map((item) => (
          <Link
            href={item.href}
            className="text-sm text-foreground/60 hover:text-foreground transition-all"
            key={item.title}
          >
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinks
