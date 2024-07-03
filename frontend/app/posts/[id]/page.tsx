import { API } from "@/lib/api"
import { notFound } from "next/navigation"
import { BlogPost } from "@/components/blog-post"
import { type Post } from "@/lib/types"
import { type Metadata } from "next"

export async function generateMetadata({
  params
}: { params: { id: string } }): Promise<Metadata> {
  const post = await API.getPostById(params.id) as Post

  return {
    title: `${post.title} by ${post.author}`,
  }
}

export async function generateStaticParams() {
  const entries = await API.getPostsEntries()
  // generate static pages for the top 10 posts only
  const topPosts = entries.results.slice(0, 10)

  return topPosts.map((post) => ({
    id: String(post.id),
  }))
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await API.getPostById(params.id)

  if ('error' in post) {
    notFound()
  }

  return <main className="mt-10">
    <BlogPost post={post} />
  </main>
}
