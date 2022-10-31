import styled from "styled-components";

export const SearchInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 522px;
  height: 38px;
  background: ${({ theme }) => theme.colors.formColor};
  padding: 8px 12px;
  border-radius: 10px;

  input {
    border: none;
    outline: none;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 400;
    background: transparent;
    width: 100%;
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.formPlaceholder};
    font-weight: 400;
  }

  & svg {
    color: ${({ theme }) => theme.colors.formPlaceholder};
  }

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
`;
