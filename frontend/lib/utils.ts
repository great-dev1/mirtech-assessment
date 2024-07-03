import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"
import { type ErrorResponseType } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPageParams(url: string): string {
  const urlParams = url.split("?").at(-1);
  const params = new URLSearchParams(urlParams);
  return params.get("page")!;
}

export async function fetcher<T>(
  url: string,
  options: RequestInit = {},
  dataParser: (data: any) => T
): Promise<T | ErrorResponseType> {
  try {
    const resp = await fetch(url, options);
    if (!resp.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await resp.json();
    return dataParser(data);
  } catch (e) {
    console.error(e);
    return { results: [], error: "Database might be down" };
  }
}
