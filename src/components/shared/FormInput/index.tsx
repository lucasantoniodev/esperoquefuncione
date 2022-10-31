import { HTMLInputTypeAttribute } from "react";
import * as S from "./styles/FormInputStyled";
import { useForm, UseFormRegisterReturn } from "react-hook-form";

interface IInputForm {
  inputTitle?: string;
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  register?: UseFormRegisterReturn;
  defaultValue?: string;
}

export const FormInput = (props: IInputForm) => {
  return (
    <S.FormInputLabel>
      {props.inputTitle && <span>{props.inputTitle}:</span>}
      <input
        type={props.type}
        placeholder={props.placeholder}
        {...props.register}
        defaultValue={props.defaultValue}
      />
    </S.FormInputLabel>
  );
};
