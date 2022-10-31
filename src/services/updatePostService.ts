import { useMutation } from "@tanstack/react-query";
import { PostDTO } from "../dto/postDTO";
import axios from "axios";
import { handleInvalidateQuery } from "../QueryProvider/invalidateQuery";
import { toast } from "react-toastify";

export const updatePostService = () => {
  const { data, mutateAsync, isLoading } = useMutation(
    async (post: PostDTO) => {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/posts`,
        post
      );

      if (response.data) {
        toast.success("Post atualizado com sucesso!");
      } else {
        toast.error("Nenhuma alteração foi feita!");
      }
      return (await response.data) as number;
    }
  );

  const updatePost = async (post: PostDTO) => {
    await mutateAsync(post);
    await handleInvalidateQuery();
  };

  return { data, isLoading, updatePost };
};
