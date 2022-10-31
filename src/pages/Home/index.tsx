import { PostCard } from "../../components/PostCard";
import { getAllPostsService } from "../../services/getAllPostsService";
import * as S from "./styles/HomePageStyled";
import { QueryContext } from "../../contexts/QueryContext";
import { useContext } from "react";
import { NoPost } from "../../components/NoPostComponent";
import { RotatingLines } from "react-loader-spinner";
import { SearchInput } from "../../components/shared/SearchInput";

export const HomePage = () => {
  const { filterPost } = useContext(QueryContext);
  const { data, isLoading } = getAllPostsService();

  const filteredPosts = filterPost(data!)?.reverse();

  return (
    <S.HomeContainer>
      <SearchInput />
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="32"
          visible={true}
        />
      )}
      {filteredPosts?.length! > 0 &&
        filteredPosts?.map((post) => {
          return <PostCard key={post._id} post={post} />;
        })}
      {filteredPosts?.length! <= 0 && <NoPost />}
    </S.HomeContainer>
  );
};
