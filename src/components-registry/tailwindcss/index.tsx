import React from "react"

export const TailewindcssRegistry: Record<string, any> = {
  "sign-up-demo": {
    name: "Sign Up",
    type: "tailwindcss:component",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/registry/tailwindcss/sign-up-demo")),
  },
  "login-demo": {
    name: "Login",
    type: "tailwindcss:component",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/registry/tailwindcss/login-demo")),
  },
  "footer-demo": {
    name: "Footer",
    type: "tailwindcss:component",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/registry/tailwindcss/footer-demo")),
  },
  "navbar-demo": {
    name: "Navbar",
    type: "tailwindcss:component",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/registry/tailwindcss/navbar-demo")),
  },
  "neumorphism-buttons-demo": {
    name: "Neumorphism Buttons",
    type: "tailwindcss:component",
    registryDependencies: undefined,
    component: React.lazy(
      () => import("@/registry/tailwindcss/neumorphism-buttons-demo")
    ),
  },
}
