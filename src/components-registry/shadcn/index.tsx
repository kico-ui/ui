import React from "react"

export const ShandcnRegistry: Record<string, any> = {
  "sign-up-demo": {
    name: "Sign Up",
    type: "shadcn:component",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/registry/shadcn/sign-up-demo")),
    files: ["registry/shadcn/sign-up-demo.tsx"],
  },
}
