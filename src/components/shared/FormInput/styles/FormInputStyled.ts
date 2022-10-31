import styled from "styled-components";

export const FormInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 2px;

  span {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 500;
  }

  input {
    width: 294px;
    height: 38px;
    padding: 0px 12px 0px 26px;
    border-radius: 4px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.navbarBackground};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 400;
    background: transparent;
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.formPlaceholder};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.md};
  }
  input:focus {
    outline: none;
  }

  @media (max-width: 375px) {
    span {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }

    input {
      padding: 0px 12px 0px 12px;
      font-size: ${({ theme }) => theme.fontSize.sm};
    }

    input::placeholder {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }
`;
