import React from "react"

import BlurAnimation from "@/components/animations/blur-animation"
import SiteFooterDemo from "@/registry/shadcn/footer-demo"
import SignUpDemo from "@/registry/shadcn/sign-up-demo"

const ComponentExamples = () => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8 mt-10">
      <div>
        <div className="max-w-[600px] rounded-md border">
          <BlurAnimation className="bg-pink-800" />
          <SiteFooterDemo />
        </div>
      </div>
      <div className="max-w-[600px] rounded-md border">
        <BlurAnimation className="bg-blue-800 md:top-[50%]" />
        <SignUpDemo />
      </div>
    </div>
  )
}

export default ComponentExamples
