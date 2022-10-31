import React from "react";
import { PrimaryButtonStyled } from "./styles/PrimaryButtonStyled";

interface IButton {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  size?: number;
  disabled?: boolean;
}

export const PrimaryButton = (props: React.PropsWithChildren<IButton>) => {
  return (
    <PrimaryButtonStyled
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </PrimaryButtonStyled>
  );
};
