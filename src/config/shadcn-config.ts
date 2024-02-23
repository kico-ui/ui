import { SidebarNavItem } from "@/types/nav"

type ShadcnComponentConfigType = {
  sidebarNav: SidebarNavItem[]
}

const shadcnComponentConfig: ShadcnComponentConfigType = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/components/shadcn/introduction",
          items: [],
        },
      ],
    },
    {
      title: "Shadcn Components",
      items: [
        {
          title: "Sign up",
          href: "/components/shadcn/sign-up",
          items: [],
        },
        {
          title: "Login",
          href: "/components/shadcn/login",
          items: [],
        },
        {
          title: "Footer",
          href: "/components/shadcn/footer",
          items: [],
        },
        {
          title: "Navbar",
          href: "/components/shadcn/navbar",
          items: [],
        },
      ],
    },
  ],
}

export default shadcnComponentConfig
