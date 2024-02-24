import React from "react"

export const TailewindcssRegistry: Record<string, any> = {
  "sign-up-demo": {
    name: "Sign Up",
    type: "tailwindcss:component",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/registry/tailwindcss/sign-up-demo")),
    files: ["registry/tailwindcss/sign-up-demo.tsx"],
  },
  "login-demo": {
    name: "Login",
    type: "tailwindcss:component",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/registry/tailwindcss/login-demo")),
    files: ["registry/tailwindcss/login-demo.tsx"],
  },
  "footer-demo": {
    name: "Footer",
    type: "tailwindcss:component",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/registry/tailwindcss/footer-demo")),
    files: ["registry/tailwindcss/footer-demo.tsx"],
  },
  "navbar-demo": {
    name: "Navbar",
    type: "tailwindcss:component",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/registry/tailwindcss/navbar-demo")),
    files: ["registry/tailwindcss/navbar-demo.tsx"],
  },
}
