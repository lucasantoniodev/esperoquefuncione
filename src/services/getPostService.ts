import { useQuery } from "@tanstack/react-query";
import { PostDTO } from "../dto/postDTO";
import axios from "axios";

export const getPostService = (id: string) => {
  const { data, isLoading } = useQuery(["post"], async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/post/${id}`
    );

    return response.data as Promise<PostDTO>;
  });

  return { data, isLoading };
};
