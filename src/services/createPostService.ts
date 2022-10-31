import { useMutation } from "@tanstack/react-query";
import { PostDTO } from "../dto/postDTO";
import axios from "axios";
import { toast } from "react-toastify";
import { handleInvalidateQuery } from "../QueryProvider/invalidateQuery";

export const createPostService = () => {
  const { data, mutateAsync, isLoading } = useMutation(
    async (post: PostDTO) => {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/posts`,
        post
      );

      if (response.data) {
        toast.success("Post criado com sucesso!");
      } else {
        toast.error("Ooops! Ocorreu  uma falha ao criar um post.");
      }

      return response.data as Number;
    }
  );

  const createPost = async (post: PostDTO) => {
    await mutateAsync(post);
    await handleInvalidateQuery();
  };

  return { isLoading, createPost, data };
};
