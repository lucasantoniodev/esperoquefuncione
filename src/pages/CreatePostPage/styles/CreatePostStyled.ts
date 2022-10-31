import styled from "styled-components";

export const CreatePostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 86px;
  min-height: 100vh;

  @media (max-width: 375px) {
    padding-bottom: 40px;
  }
`;

export const CreatePostStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 48px 112px;
  gap: 32px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    button {
      margin-top: 18px;
    }
  }

  @media (max-width: 375px) {
    padding: 32px 22px 48px;

    form {
      button {
        font-size: ${({ theme }) => theme.fontSize.md};
        line-height: 23px;
        font-weight: 500;
        padding: 4px 54px;
      }
    }
  }
`;
export const InputsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
  column-gap: 32px;
  row-gap: 16px;

  @media (max-width: 375px) {
    grid-template-columns: 1fr;

    label {
      input {
        width: 236px;
        height: 34px;
      }
    }
  }
`;

export const SightingDateInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 375px) {
    label {
      input {
        width: 236px;
        height: 34px;
      }
    }
  }
`;

export const HeaderContainer = styled.header`
  text-align: center;
  h2 {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 500;
    margin-bottom: 16px;
  }

  p {
    color: ${({ theme }) => theme.colors.formPlaceholder};
    font-size: ${({ theme }) => theme.fontSize.xm};
    font-weight: 400;
  }

  @media (max-width: 375px) {
    h2 {
      font-size: ${({ theme }) => theme.fontSize.xm};
      font-weight: 500;
      margin-bottom: 0px;
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }
`;
