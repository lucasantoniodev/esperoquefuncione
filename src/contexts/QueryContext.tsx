import { createContext, PropsWithChildren, useState } from "react";
import { PostDTO } from "../dto/postDTO";

type QueryContextType = {
  inputValue: string;
  setInputValue: (filter: string) => void;
  filterPost: (posts: PostDTO[]) => PostDTO[] | undefined;
};

const initialValue: QueryContextType = {
  inputValue: "",
  setInputValue: () => {},
  filterPost: () => [],
};

export const QueryContext = createContext<QueryContextType>(initialValue);

export const QueryContextProvider = ({ children }: PropsWithChildren) => {
  const [inputValue, setInputValue] = useState(initialValue.inputValue);

  const filterPost = (posts: PostDTO[]) => {
    const filteredPost = posts?.filter((post) => {
      const lowerFilter = inputValue.toLowerCase();
      return post.name.toLowerCase().includes(lowerFilter);
    });

    return filteredPost;
  };

  return (
    <QueryContext.Provider value={{ inputValue, setInputValue, filterPost }}>
      {children}
    </QueryContext.Provider>
  );
};
