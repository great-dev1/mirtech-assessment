import { API_URL } from "@/lib/consts";
import { fetcher } from "@/lib/utils";
import type {
  FetchPostsResponse,
  PostsEntries,
  Post,
  ErrorResponseType
} from "@/lib/types";

export class API {
  private static parseList(data: FetchPostsResponse): PostsEntries {
    const parsedResults = data.results.map((post) => ({
      ...post,
      createdAt: post.created_at,
    }));

    return { ...data, results: parsedResults };
  }

  static async getPostsEntries(page?: string): Promise<PostsEntries | ErrorResponseType> {
    return fetcher<PostsEntries>(
      `${API_URL}/${page ? `?page=${page}` : ''}`,
      { cache: 'no-store' },
      this.parseList
    );
  }

  static async getPostById(id: string): Promise<Post | ErrorResponseType> {
    return fetcher<Post>(
      `${API_URL}/${id}/`,
      undefined,
      (data) => ({ ...data, createdAt: data.created_at })
    );
  }

  static async createPost(data: Omit<Post, "id" | "createdAt">): Promise<Post | ErrorResponseType> {
    return fetcher<Post>(
      `${API_URL}/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
      (data) => ({ ...data, createdAt: data.created_at })
    );
  }
}
