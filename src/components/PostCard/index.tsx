import { Trash, PencilSimple } from "phosphor-react";
import * as S from "./styles/PostCardStyled";
import { Link } from "react-router-dom";
import { PostDTO } from "../../dto/postDTO";
import { DeletePostModal } from "../DeletePostModal";
import { useState } from "react";

import { queryClient } from "../../QueryProvider";
import { deletePostService } from "../../services/DeletePostService";

interface IPost {
  post: PostDTO;
}

export const PostCard = ({ post }: IPost) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { deletePost } = deletePostService(post._id);

  return (
    <>
      <S.PostCardDivStyled>
        <S.PostCardHeaderStyled>
          <S.HeaderTextsContainer>
            <S.PostBirdLocaleStyled>{post.sighting}</S.PostBirdLocaleStyled>
            <S.PostBirdNameStyled>{post.name}</S.PostBirdNameStyled>
          </S.HeaderTextsContainer>
          <S.HeaderButtonsContainer>
            <S.EditButton onClick={() => queryClient.removeQueries(["post"])}>
              <Link aria-label="editar post" to={`/edit/${post._id}`}>
                <PencilSimple size={18} weight="bold" />
              </Link>
            </S.EditButton>
            <S.TrashButton
              aria-label="apagar post"
              onClick={() => setShowModal(!showModal)}
            >
              <Trash size={18} weight="bold" />
            </S.TrashButton>
          </S.HeaderButtonsContainer>
        </S.PostCardHeaderStyled>
        <S.PostContentStyled>
          <S.PostImageStyled
            src={
              post.img ||
              "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"
            }
          />
          <Link to={`/post/${post._id}`}>Ver Mais</Link>
        </S.PostContentStyled>
      </S.PostCardDivStyled>
      <DeletePostModal
        visible={showModal}
        setVisible={setShowModal}
        deletePost={deletePost}
      />
    </>
  );
};
