import axiosInstance from "../axiosInstance";
import type { Post } from "../../types/posts";

export const getPosts = async (): Promise<Post[]> => {
  const response = await axiosInstance.get<Post[]>("/posts");
  return response.data;
};
