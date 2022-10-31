import { FormInput } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import ThemesProvider from "../../../styles/ThemesProvider";

describe("Form Input", () => {
  it("The input should have a placeholder text equal to 'Nome do usuario'", () => {
    render(
      <ThemesProvider>
        <FormInput placeholder="Nome do usuario" />
      </ThemesProvider>
    );

    expect(screen.getByPlaceholderText("Nome do usuario")).toBeInTheDocument();
  });

  it("The input should have a Input Title text equal to 'Observação'", () => {
    render(
      <ThemesProvider>
        <FormInput placeholder="*" inputTitle="Observação" />
      </ThemesProvider>
    );

    expect(screen.getByLabelText("Observação:")).toBeInTheDocument();
  });

  it("The input with text type tobe a textbox", () => {
    render(
      <ThemesProvider>
        <FormInput placeholder="*" type="text" />
      </ThemesProvider>
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("The input value to equal 'valor'", async () => {
    render(
      <ThemesProvider>
        <FormInput placeholder="*" type="text" />
      </ThemesProvider>
    );

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: {
        value: "valor",
      },
    });

    expect(input).toHaveValue("valor");
  });
});
