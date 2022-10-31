import styled from "styled-components";

export const PostDetailPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 72px;
  padding-top: 86px;
  min-height: 100vh;

  a {
    font-size: ${({ theme }) => theme.fontSize.xm};

    padding: 4px 24px;

    font-size: ${({ theme }) => theme.fontSize.xm};
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
  }

  @media (max-width: 375px) {
    gap: 42px;
    padding-bottom: 40px;

    a {
      font-size: ${({ theme }) => theme.fontSize.md};
      line-height: 23px;
      font-weight: 500;
      padding: 4px 54px;
    }
  }
`;

export const PostDetailPageContent = styled.section`
  align-items: center;
  display: flex;
  gap: 64px;
  max-width: 1180px;

  article {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 500;
  }

  h3 {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: ${({ theme }) => theme.fontSize.xm};
    font-weight: 700;
  }

  h4 {
    color: ${({ theme }) => theme.colors.defaultText};
    font-weight: 500;
  }

  h5 {
    color: ${({ theme }) => theme.colors.formPlaceholder};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 400;
  }

  p {
    color: ${({ theme }) => theme.colors.defaultText};
    font-size: ${({ theme }) => theme.fontSize.xm};
    font-weight: 400;
    max-width: 554px;
    word-break: break-all;
  }

  span {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  img {
    width: 511px;
    height: 364px;
    border-radius: 8px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    gap: 18px;
    align-items: flex-start;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.xm};
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSize.md};
    }

    h4 {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }

    h5 {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.sm};
      max-width: 254px;
    }

    img {
      width: 274px;
      height: 188px;
    }
  }
`;
