import React from "react"

import SiteFooterDemo from "@/registry/shadcn/footer-demo"
import SignUpDemo from "@/registry/shadcn/sign-up-demo"
import NavbarDemo from "@/registry/shadcn/navbar-demo"
import { GridEffect } from "@/components/animations/grid-effect"
import { DotEffect } from "@/components/animations/dot-effect"

const ComponentExamples = () => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-0 mt-10 md:grid md:grid-cols-2 gap-4">
      <div className="space-y-4">
        <div className="rounded-md border relative">
          <GridEffect />
          <SiteFooterDemo />
        </div>

        <div className="rounded-md border">
          <NavbarDemo />
        </div>
      </div>

      <div className="rounded-md border relative">
        <DotEffect />
        <SignUpDemo />
      </div>
    </div>
  )
}

export default ComponentExamples
