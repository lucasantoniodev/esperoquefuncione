import { useQuery } from "@tanstack/react-query";
import { PostDTO } from "../dto/postDTO";
import axios from "axios";

export const getAllPostsService = () => {
  const { data, isLoading } = useQuery(
    ["posts"],
    async () => {
      const response = await axios.get(
        `https://lucasantoniodev.000webhostapp.com/teste.json`, {
        headers: {"Access-Control-Allow-Origin": "*"}
      }
      );

      return response.data as Promise<PostDTO[]>;
    },
    {
      staleTime: 1000 * 60, //1 minute
    }
  );
  return { data, isLoading };
};
