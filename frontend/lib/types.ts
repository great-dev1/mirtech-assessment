export interface FetchPostsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: RawPost[]
}

interface RawPost {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

export type PostsEntries = Omit<FetchPostsResponse, 'results'> & { results: Post[] }

export type ErrorResponseType = {
  results: [];
  error: string;
}
