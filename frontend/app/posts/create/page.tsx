"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SubmitButton } from "@/app/actions/submit-button"
import { createPost } from "@/app/actions/create-post"
import { redirect } from "next/navigation"
import { toast } from "sonner"

export default function CreatePost() {
  return (
    <>
      <section className="animate-fade-in-up flex flex-col items-center justify-center h-full">
        <h1 className="text-xl md:text-4xl text-primary font-semibold pb-4 md:pb-8">
          Create a new post
        </h1>
        <form
          action={async (form: FormData) => {
            // simulate 0.5s of loading
            await new Promise((resolve) => setTimeout(resolve, 500))

            const { success, message, result } = await createPost(form)

            if (!success || !result) {
              return toast.error(message)
            }

            toast.success(message)

            redirect(`/posts/${result.id}`)
          }}
          className="w-full max-w-screen-md space-y-6 md:space-y-10"
        >
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="title" className="opacity-75 font-bold">Title</label>
            <Input name="title" id="title" placeholder="New post title" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="author" className="opacity-75 font-bold">Author</label>
            <Input name="author" id="author" placeholder="@author" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="content" className="opacity-75 font-bold">Content</label>
            <Textarea
              name="content"
              id="content"
              className="min-h-[250px]"
            />
          </div>
          <SubmitButton>
            Create post
          </SubmitButton>
        </form>
      </section>
    </>
  )
}
