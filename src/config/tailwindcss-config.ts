import { SidebarNavItem } from "@/types/nav"

type TailwindcssComponentConfigType = {
  sidebarNav: SidebarNavItem[]
}

const TailwindcssComponentConfig: TailwindcssComponentConfigType = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/components/tailwindcss/introduction",
          items: [],
        },
      ],
    },
    {
      title: "Buttons",
      items: [
        {
          title: "Neumorphism Buttons",
          href: "/components/tailwindcss/neumorphism-buttons",
          items: [],
        },
        {
          title: "Kico Fancy Button",
          href: "/components/tailwindcss/kico-fancy-button",
          items: [],
        },
      ],
    },
    {
      title: "Kico Components",
      items: [
        {
          title: "Sign up",
          href: "/components/tailwindcss/sign-up",
          items: [],
        },
        {
          title: "Login",
          href: "/components/tailwindcss/login",
          items: [],
        },
        {
          title: "Footer",
          href: "/components/tailwindcss/footer",
          items: [],
        },
        {
          title: "Navbar",
          href: "/components/tailwindcss/navbar",
          items: [],
        },
      ],
    },
  ],
}

export default TailwindcssComponentConfig
