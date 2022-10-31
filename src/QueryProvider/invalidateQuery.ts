import { queryClient } from "./index";

export const handleInvalidateQuery = async () => {
  await queryClient.invalidateQueries(["posts"]);
};
