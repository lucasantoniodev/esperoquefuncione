import styled from "styled-components";

export const EditPostPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 118px 0px 36px 0px;
  min-height: 100vh;

  @media (max-width: 375px) {
    padding: 96px 0px 36px 0px;
  }
`;

export const EditPostPageContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 46px;
  padding: 38px 96px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 8px;

  @media (max-width: 375px) {
    padding: 26px 26px 32px;
    gap: 23px;
  }
`;

export const ContentHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  h1 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  p {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.xm};
    color: ${({ theme }) => theme.colors.formPlaceholder};
  }

  @media (max-width: 375px) {
    h1 {
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.xm};
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }
`;

export const ContentMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 46px;

  @media (max-width: 375px) {
    gap: 32px;
  } ;
`;

export const FormInputsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 42px;
  figure {
    width: 454px;
    height: 314px;

    img {
      height: 100%;
      width: 100%;
      border-radius: 8px;
    }
  }

  @media (max-width: 375px) {
    gap: 26px;
    figure {
      width: 232px;
      height: 154px;
    }
  }
`;

export const FormInputsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;

  @media (max-width: 375px) {
    grid-template-columns: 1fr;

    label {
      input {
        width: 236px;
        height: 34px;
      }
    }
  } ;
`;

export const FormFooter = styled.footer`
  display: flex;
  justify-content: center;

  @media (max-width: 375px) {
    button {
      font-size: ${({ theme }) => theme.fontSize.md};
      line-height: 23px;
      font-weight: 500;
      padding: 4px 54px;
    }
  }
`;
