import styled from "styled-components";

export const PostCardDivStyled = styled.div`
  display: grid;

  padding-left: 40px;
  padding-right: 40px;

  width: 532px;
  height: 465px;

  background: ${({ theme }) => theme.colors.default};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 8px;

  @media (max-width: 375px) {
    padding-left: 20px;
    padding-right: 20px;

    width: 266px;
    height: 238px;
  }
`;

export const PostCardHeaderStyled = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 20px;
`;

export const HeaderTextsContainer = styled.div``;

export const TrashButton = styled.button`
  & svg {
    width: 100%;
    color: ${({ theme }) => theme.colors.primaryColor};
    transition: all 0.3s;
  }

  :hover {
    & svg {
      color: ${({ theme }) => theme.colors.deletePostButton};
    }
  }
`;

export const EditButton = styled.button`
  & svg {
    color: ${({ theme }) => theme.colors.primaryColor};
    transition: all 0.3s;
  }

  :hover {
    & svg {
      color: ${({ theme }) => theme.colors.hoverPrimaryButtonColor};
    }
  }
`;

export const HeaderButtonsContainer = styled.div`
  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding-left: 6px;
  }
`;

export const PostBirdLocaleStyled = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 400;
  line-height: 21px;

  color: ${({ theme }) => theme.colors.formPlaceholder};

  @media (max-width: 375px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: 0px;
  }
`;

export const PostBirdNameStyled = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xm};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primaryColor};

  @media (max-width: 375px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const PostContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;

  a {
    padding: 4px 24px;

    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 36px;
    color: ${({ theme }) => theme.colors.defaultText};
    font-weight: 400;

    background-color: ${({ theme }) => theme.colors.secondColor};
    border: none;
    border-radius: 10px;
    transition: all 0.3s ease 0s;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.colors.secondColorHover};
    }

    @media (max-width: 375px) {
      font-size: ${({ theme }) => theme.fontSize.sm};
      font-weight: 500;
      padding: 2px 32px;
      line-height: 20px;
      border-radius: 8px;
    }
  }

  @media (max-width: 375px) {
    gap: 10px;
  }
`;

export const PostImageStyled = styled.img`
  width: 453px;
  height: 313px;
  object-fit: fill;
  background-repeat: no-repeat;
  border-radius: 8px;

  @media (max-width: 375px) {
    width: 224px;
    height: 143px;
    margin-top: 8px;
  }
`;
