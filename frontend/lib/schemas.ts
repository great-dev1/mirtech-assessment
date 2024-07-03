import { z } from "zod";

const postSchema = z.object({
  title: z
    .string()
    .min(3, { message: "[Title] must be at least 3 characters long" })
    .max(200, { message: "[Title] must be at most 200 characters long" }),
  author: z.string()
    .min(3, { message: "[Author] must be at least 3 characters long" })
    .max(100, { message: "[Author] must be at most 100 characters long" }),
  content: z.string(),
});

export function validatePost(form: FormData) {
  return postSchema.safeParse(Object.fromEntries(form.entries()));
}
