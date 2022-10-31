import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  background: ${({ theme }) => theme.colors.navbarBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 72px;

  a {
    display: flex;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 16px 22px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  a {
    display: flex;
    align-items: center;
    gap: 6px;
    height: 38px;
    padding: 0px 18px;
    background: ${({ theme }) => theme.colors.default};
    color: ${({ theme }) => theme.colors.navbarBackground};
    border-radius: 10px;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.default};
    transition: all 0.3s;

    span {
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: 600;
    }
  }

  a:hover {
    background: ${({ theme }) => theme.colors.navbarBackground};
    color: ${({ theme }) => theme.colors.default};
  }

  @media (max-width: 375px) {
    label {
      display: none;
    }

    a {
      padding: 0px 8px;
      border-radius: 4px;
      height: 32px;

      p {
        display: none;
      }
    }
  }
`;

export const userContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.default};
  transition: all 0.3s;
  :hover {
    color: ${({ theme }) => theme.colors.hoverPrimaryButtonColor};
  }

  @media (max-width: 375px) {
    display: none;
  }
`;
