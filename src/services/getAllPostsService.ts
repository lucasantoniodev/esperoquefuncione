import { useQuery } from "@tanstack/react-query";
import { PostDTO } from "../dto/postDTO";
import axios from "axios";

export const getAllPostsService = () => {
  const { data, isLoading } = useQuery(
    ["posts"],
    async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/posts`
      );

      return response.data as Promise<PostDTO[]>;
    },
    {
      staleTime: 1000 * 60, //1 minute
    }
  );
  return { data, isLoading };
};
