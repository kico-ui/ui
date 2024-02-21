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
  ],
  sidebarNav: [
    {
      title: "Components",
      href: "/components",
      items: [],
    },
  ],
}
