import { siteConfig } from "@/config/site-config"

export const resources = {
  title: "Resources",
  items: [
    {
      title: "Components",
      href: "/components",
    },
    {
      title: "Docs",
      href: "/docs",
    },

    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "Learn",
      href: "/learn",
    },
  ],
}

export type FooterLinksType = typeof resources

export const more: FooterLinksType = {
  title: "More",
  items: [
    { title: "Releases", href: siteConfig.links.releases },
    {
      title: "GitHub",
      href: siteConfig.links.github,
    },
  ],
}

export const aboutKico: FooterLinksType = {
  title: "About Kico",
  items: [
    { title: "Open Source Software", href: siteConfig.links.github },
    {
      title: "GitHub",
      href: siteConfig.links.github,
    },
    {
      title: "X",
      href: siteConfig.links.twitter,
    },
  ],
}

export const legal: FooterLinksType = {
  title: "Legal",
  items: [{ title: "Privacy Policy", href: "/legal/privacy-policy" }],
}
