"use server"

import { API } from "@/lib/api";
import { validatePost } from "@/lib/schemas";
import { revalidatePath } from "next/cache";
import { type Post } from "@/lib/types";

interface ActionResponse {
  success: boolean
  message: string | null
  result: Post | null
}

export async function createPost(form: FormData): Promise<ActionResponse> {
  const result = validatePost(form)

  if (!result.success) {
    // return string with errors as message
    return {
      success: false,
      message: result.error.errors.map((e) => e.message).join("\n"),
      result: null
    }
  }

  const data = await API.createPost(result.data)

  if ('error' in data) {
    return {
      success: false,
      message: "An error occurred while creating the post",
      result: null
    }
  }

  revalidatePath("/posts")

  return {
    success: true,
    message: `Post created successfully with id ${data.id}`,
    result: data
  }
}
