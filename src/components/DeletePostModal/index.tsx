import * as S from "./styles/DeletePostModalStyled";
import { Check, X } from "phosphor-react";

interface IDelePostModal {
  visible: boolean;
  setVisible: (n: boolean) => void;
  deletePost: () => Promise<void>;
}

export const DeletePostModal = ({
  visible,
  setVisible,
  deletePost,
}: IDelePostModal) => {
  return (
    <S.ModalPageContainer
      aria-modal="true"
      onClick={(e) => {
        e.stopPropagation();
        setVisible(!visible);
      }}
      visible={visible}
    >
      <S.ModalContainer>
        <h1>Você tem certeza que deseja apagar o post?</h1>
        <S.ModalButtonsContainer>
          <S.ConfirmButton
            role="confirmButton"
            aria-label="Confirmar exclusão do Post"
            onClick={(e) => {
              e.stopPropagation();
              setVisible(!visible);
              deletePost();
            }}
          >
            <Check size={20} weight="bold" />
          </S.ConfirmButton>
          <S.CancelButton
            role="cancelButton"
            aria-label="Cancelar exlusão do Post"
            onClick={(e) => {
              e.stopPropagation();
              setVisible(!visible);
            }}
          >
            <X size={20} weight="bold" />
          </S.CancelButton>
        </S.ModalButtonsContainer>
      </S.ModalContainer>
    </S.ModalPageContainer>
  );
};
