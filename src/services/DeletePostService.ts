import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { handleInvalidateQuery } from "../QueryProvider/invalidateQuery";

export const deletePostService = (id: string | undefined) => {
  const { data, mutateAsync, isLoading } = useMutation(async () => {
    const response = await axios.delete(
      `http://localhost:3000/post/${id}`
    );

    if (response.data) {
      toast.success("Post deletado com sucesso!");
    } else {
      toast.error("Ooops! Ocorreu  uma falha ao deletar o post.");
    }

    return response.data as number;
  });

  const deletePost = async () => {
    await mutateAsync();
    await handleInvalidateQuery();
  };

  return { data, deletePost, isLoading };
};
