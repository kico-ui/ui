import { Icons } from "@/components/icons/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import BlurAnimation from "./animations/blur-animation"

const SiteFooter = () => {
  return (
    <div className="pb-10 border-t">
      <div className="relative container grid grid-cols-2 md:grid-cols-5  bg-background gap-4 lg:gap-8 justify-items-start py-10">
        <BlurAnimation className="md:left-[50%] size-[200px] top-[50%]" />
        <div className="hidden md:block">
          <div className="flex justify-center items-center w-fit">
            <Icons.logo className="size-6" />
            <span className="text-xs ml-2">Kico\Ui</span>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex justify-center items-center w-fit">
            <Icons.logo className="size-6" />
            <span className="text-sm ml-2">Kico\Ui</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 md:hidden ">
          <Link href="#">
            <Icons.gitHub className="size-4" />
          </Link>

          <Link href="#">
            <Icons.twitter className="size-4 dark:fill-white" />
          </Link>
        </div>

        <div>
          <h1 className="font-bold text-sm">Resources</h1>
          <ul className="flex space-y-2 flex-col mt-2">
            <Link
              href="/docs"
              className="text-xs text-foreground/60 hover:text-foreground transition-all"
            >
              Docs
            </Link>
            <Link
              href="/learn"
              className="text-xs text-foreground/60 hover:text-foreground transition-all"
            >
              Learn
            </Link>
            <Link
              href="/components"
              className="text-xs text-foreground/60 hover:text-foreground transition-all"
            >
              Components
            </Link>
            <Link
              href="/examples"
              className="text-xs text-foreground/60 hover:text-foreground transition-all"
            >
              Examples
            </Link>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-sm">More</h1>
          <ul className="flex space-y-2 flex-col mt-2">
            <Link
              href="/docs"
              className="text-xs text-foreground/60 hover:text-foreground transition-all"
            >
              Releases
            </Link>
            <Link
              href="/learn"
              className="text-xs text-foreground/60 hover:text-foreground transition-all"
            >
              GitHub
            </Link>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-sm">About Kico</h1>
          <ul className="flex space-y-2 flex-col mt-2">
            <Link
              href="/docs"
              className="text-xs text-foreground/60 hover:text-foreground transition-all"
            >
              Open Source Software
            </Link>
            <Link
              href="/learn"
              className="text-xs text-foreground/60 hover:text-foreground transition-all"
            >
              GitHub
            </Link>
            <Link
              href="/components"
              className="text-xs text-foreground/60 hover:text-foreground transition-all"
            >
              X
            </Link>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-sm">Legal</h1>
          <ul className="flex space-y-2 flex-col mt-2">
            <Link
              href="/docs"
              className="text-xs text-foreground/60 hover:text-foreground transition-all"
            >
              Privacy Policy
            </Link>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-4">
          <h1 className="font-bold text-sm">Contact</h1>
          <span className="mt-4 text-xs font-light text-foreground/60">
            Stay updated on new releases and features, guides, and case studies.
          </span>
          <div className="flex items-center justify-between border rounded-full mt-2">
            <Input
              className="h-8 focus-visible:ring-0 border-none focus-visible:ring-offset-0 bg-transparent"
              placeholder="example@kicoui.com"
            />
            <Button className="h-8 rounded-full w-fit py-1 px-4 text-xs">
              Connect
            </Button>
          </div>
        </div>

        <div className="hidden col-span-1 w-full space-x-10 md:flex items-center">
          <Link href="#">
            <Icons.gitHub className="size-4" />
          </Link>

          <Link href="#">
            <Icons.twitter className="size-4 dark:fill-white" />
          </Link>
        </div>
      </div>
      <span className="text-sm font-bold container mt-8 inline-block">
        © 2024 Kico Ui, Inc.
      </span>
    </div>
  )
}

export default SiteFooter
