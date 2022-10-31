import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchInput } from ".";
import { QueryContextProvider } from "../../../contexts/QueryContext";
import ThemesProvider from "../../../styles/ThemesProvider";

describe("Search Input Component Test", () => {
  beforeEach(() => {
    render(
      <QueryContextProvider>
        <ThemesProvider>
          <SearchInput />
        </ThemesProvider>
      </QueryContextProvider>
    );
  });
  it("Should be return Buscar passaros for the placeholder name", () => {
    expect(screen.getByPlaceholderText("Buscar passaros")).toBeInTheDocument();
  });
  it("Should be return a magnifying glass if input is empty", () => {
    const image = screen.getByRole("lupa");
    expect(image).not.toBeNull();
  });

  it("Should return an input as typed", async () => {
    const inputElement = screen.getByRole("pesquisa") as HTMLInputElement;
    await userEvent.type(inputElement, "Pardal");
    expect(inputElement.value).toBe("Pardal");
  });
  it("Should return the image of an x ​​when there is an input greater than zero", async () => {
    const inputElement = screen.getByRole("pesquisa") as HTMLInputElement;
    await userEvent.type(inputElement, "Pardal");
    const image = screen.getByRole("apagar");
    expect(image).not.toBeNull();
  });
});
