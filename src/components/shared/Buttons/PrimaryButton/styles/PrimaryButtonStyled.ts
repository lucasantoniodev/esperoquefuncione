import styled from "styled-components";

export const PrimaryButtonStyled = styled.button`
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
`;
