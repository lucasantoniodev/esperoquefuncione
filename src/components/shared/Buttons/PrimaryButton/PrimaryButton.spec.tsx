import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PrimaryButton } from ".";
import ThemesProvider from "../../../../styles/ThemesProvider";

describe("description", () => {
  let count = 0;
  let disabled = false;

  beforeEach(() => {
    render(
      <ThemesProvider>
        <PrimaryButton
          disabled={disabled}
          onClick={() => {
            count += 1;
            disabled = !disabled;
          }}
        >
          Ver mais
        </PrimaryButton>
      </ThemesProvider>
    );
  });

  it("Should increment 1 and disable button", async () => {
    const button = screen.getByText("Ver mais");

    await userEvent.click(button);

    expect(count).toEqual(1);
    expect(disabled).toBeTruthy();
  });
  it("Should have a text Ver mais ", () => {
    const button = screen.getByText("Ver mais");

    expect(button.textContent).toBe("Ver mais");
  });
});
