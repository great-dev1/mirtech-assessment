import Link from "next/link";
import Avatar from 'avvvatars-react'
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { type Post } from "@/lib/types";

export function BlogPost({ post }: { post: Post }) {
  return (
    <section className="animate-fade-in-up flex flex-col gap-y-12">
      <nav>
        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-75">
          <ArrowLeftIcon className="size-6" />
          <span className="font-semibold">
            Back to Blog
          </span>
        </Link>
      </nav>
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold">
        {post.title}
      </h1>
      <div className="flex flex-col gap-y-5 justify-between sm:flex-row sm:gap-y-0 sm:items-center">
        <div className="flex space-x-4">
          <div className="flex items-center justify-center border border-primary rounded-full size-[50px] overflow-hidden">
            <Avatar style="shape" value={post.author} size={50} shadow />
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base">
              {post.author}
            </h4>
            <span className="text-xs sm:text-sm opacity-50">
              Admin
            </span>
          </div>
        </div>
        <span className="text-sm uppercase opacity-50">
          {new Intl.DateTimeFormat('en', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }).format(new Date(post.createdAt))}
        </span>
      </div>
      <p>
        {post.content}
      </p>
    </section>
  )
}
