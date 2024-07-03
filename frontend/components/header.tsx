import Link from "next/link"
import { PlusCircledIcon } from "@radix-ui/react-icons"
import { ThemToggle } from "@/components/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { GitHubIcon } from "./ui/icons"

export function Header() {
  return (
    <header className="fixed w-full h-[60px] flex items-center px-8 md:px-14 lg:px-28 border-b backdrop-blur-sm">
      <nav className="flex justify-between w-full">
        <Link href="/" className="flex items-center">
          <h1 className="hidden md:flex text-primary text-2xl font-bold">
            GameInsec Blog 🕹️
          </h1>
          <h1 className="md:hidden text-primary text-xl font-bold">
            G-Blog 🕹️
          </h1>
        </Link>

        <div className="flex items-center space-x-2">
          <ThemToggle />
          <a
            href="https://github.com/felipetodev/django-blog"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >
            <GitHubIcon className="size-5" />
          </a>
          <Link href="/posts/create" className={cn(buttonVariants())}>
            <span className="hidden md:flex font-semibold">Create new post</span>
            <span className="md:hidden">New</span>
            <PlusCircledIcon className="ml-2 size-4" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
