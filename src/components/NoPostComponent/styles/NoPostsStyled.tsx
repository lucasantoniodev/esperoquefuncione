import styled from "styled-components";

export const NoPostStyled = styled.div`
  text-align: center;

  img {
    height: 292px;
    margin-bottom: 42px;
    width: 379px;
  }

  .noPostStyled_title {
    color: ${({ theme }) => theme.colors.formPlaceholder};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 600;
    margin-bottom: 16px;
  }

  .noPostStyled_text {
    color: ${({ theme }) => theme.colors.formPlaceholder};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 400;
  }

  @media (max-width: 375px) {
    img {
      margin-top: 26px;
      margin-bottom: 24px;
      height: 188px;
      width: 216px;
    }

    .noPostStyled_title {
      font-size: ${({ theme }) => theme.fontSize.xm};
      font-weight: 600;
      margin-bottom: 6px;
    }

    .noPostStyled_text {
      font-size: ${({ theme }) => theme.fontSize.md};
      font-weight: 400;
    }
  }
`;
