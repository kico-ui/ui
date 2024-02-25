import React from "react"

import SiteFooterDemo from "@/registry/shadcn/footer-demo"
import SignUpDemo from "@/registry/shadcn/sign-up-demo"
import NavbarDemo from "@/registry/shadcn/navbar-demo"

const ComponentExamples = () => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8 mt-10">
      <div>
        <div className="max-w-[600px] rounded-md border relative">
          <div className="absolute inset-0 z-10 size-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="absolute inset-x-0 top-0 z-10 m-auto size-[310px] rounded-full bg-blue-600 opacity-20 blur-[100px]"></div>
          </div>
          <SiteFooterDemo />
        </div>

        <div className="rounded-md border mt-10">
          <NavbarDemo />
        </div>
      </div>

      <div className="max-w-[600px] rounded-md border relative">
        <div className="absolute inset-0 size-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="absolute inset-x-0 top-0 m-auto size-[310px] rounded-full opacity-20 blur-[100px]"></div>
        </div>
        <SignUpDemo />
      </div>
    </div>
  )
}

export default ComponentExamples
