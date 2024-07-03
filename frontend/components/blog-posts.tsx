import Link from "next/link"
import { BlogPagination } from "@/components/blog-pagination"
import { type PostsEntries } from "@/lib/types"

export function BlogPosts({ entries }: { entries: PostsEntries }) {
  return (
    <div className="animate-fade-in-up flex flex-col h-full">
      {entries.results.map((entry) => (
        <Link
          key={entry.id}
          href={`/posts/${entry.id}`}
          className="flex flex-col p-4 border rounded mb-4 transition-colors hover:border-primary"
        >
          <h2 className="text-xl md:text-2xl font-semibold capitalize">
            {entry.title}
          </h2>
          <p className="mt-2 md:mt-4 text-foreground/50 truncate md:whitespace-normal">
            {entry.content}
          </p>
          <footer className="flex justify-between mt-4">
            <span className="text-sm text-primary/80 font-semibold">{entry.author}</span>
            <time className="text-sm text-primary/80" dateTime={entry.createdAt}>
              {new Date(entry.createdAt).toLocaleDateString()}
            </time>
          </footer>
        </Link>
      ))}
      <BlogPagination
        count={entries.count}
        next={entries.next}
        previous={entries.previous}
      />
    </div>
  )
}
