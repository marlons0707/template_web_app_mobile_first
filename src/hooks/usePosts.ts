import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/services/posts.service";
import type { Post } from "../types/posts";

export const usePosts = () => {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};
