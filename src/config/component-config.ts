import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface ComponentConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const componentConfig: ComponentConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/components",
    },
    {
      title: "Shadcn",
      href: "/components/shadcn",
    },
    {
      title: "Tailwindcss",
      href: "/components/tailwindcss",
    },
  ],
  sidebarNav: [
    {
      title: "Components",
      href: "/components",
      items: [],
    },
    {
      title: "Shadcn",
      href: "/components/shadcn",
      items: [],
    },
    {
      title: "Tailwindcss",
      href: "/components/tailwindcss",
      items: [],
    },
  ],
}
