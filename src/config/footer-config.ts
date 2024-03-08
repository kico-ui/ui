import { siteConfig } from "@/config/site-config"

export const components = {
  title: "Components",
  items: [
    {
      title: "Components",
      href: "/components",
    },
    {
      title: "Shadcn",
      href: "/components/shadcn",
    },

    {
      title: "Tailwind",
      href: "/components/tailwindcss",
    },
  ],
}

export type FooterLinksType = typeof components

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
  ],
}

export const legal: FooterLinksType = {
  title: "Legal",
  items: [],
}
