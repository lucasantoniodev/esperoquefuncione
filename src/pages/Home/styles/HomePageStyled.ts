import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  padding: 130px 0 80px 0;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  background: ${({ theme }) => theme.colors.formBackground};
  min-height: 100vh;

  label {
    display: none;
  }

  @media (max-width: 375px) {
    padding: 80px 0 80px 0;
    min-height: 100vh;
    label {
      width: 280px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      display: flex;
    }
  }
`;
