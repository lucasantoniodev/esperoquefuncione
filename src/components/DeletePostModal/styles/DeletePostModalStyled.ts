import styled from "styled-components";

interface IDeletePostModal {
  visible: boolean;
}

export const ModalPageContainer = styled.section<IDeletePostModal>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background: ${({ theme }) => theme.colors.formColor};
  padding: 42px 54px 22px;
  border-radius: 8px;
  transition: all 0.6s;

  animation: showEffect 0.3s;

  h1 {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.navbarBackground};
    max-width: 232px;
    text-align: center;
  }

  @keyframes showEffect {
    from {
      transform: translateY(100px);
      opacity: 0;
    }

    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @media (max-width: 375px) {
    padding: 42px 32px 22px;

    h1 {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }
`;

export const ModalButtonsContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 26px;

  button {
    display: flex;
    border: none;
    border-radius: 8px;
    padding: 4px 32px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.formColor};
    transition: all 0.3s;
  }
`;

export const ConfirmButton = styled.button`
  background: ${({ theme }) => theme.colors.navbarBackground};
  :hover {
    background: ${({ theme }) => theme.colors.hoverPrimaryButtonColor};
  }
`;

export const CancelButton = styled.button`
  background: ${({ theme }) => theme.colors.deletePostButton};
  :hover {
    background: ${({ theme }) => theme.colors.deletePostButtonHover};
  }
`;
