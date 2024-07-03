import { BlogPosts } from "@/components/blog-posts";
import { API } from "@/lib/api";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const blogEntries = await API.getPostsEntries(searchParams?.page ?? undefined);

  if ('error' in blogEntries) {
    return <div className="grid place-content-center h-screen">
      <h1 className="text-4xl font-semibold py-10">
        [Error]: {blogEntries.error} 🚨
      </h1>
    </div>
  }

  return (
    <>
      <h1 className="text-2xl md:text-4xl font-semibold py-10">
        Reviews{' '}
        <span className="text-base md:text-xl text-primary ">
          Games / Entertainment
        </span>
      </h1>
      <BlogPosts entries={blogEntries} />
    </>
  );
}
