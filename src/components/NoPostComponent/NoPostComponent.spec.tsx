import { render } from "@testing-library/react";
import { NoPost } from ".";
import ThemesProvider from "../../styles/ThemesProvider";

describe("No Post Component", () => {
  const { container } = render(
    <ThemesProvider>
      <NoPost />
    </ThemesProvider>
  );
  it("Should be return a class of the title", () => {
    container.querySelector(".noPostStyled_title");
    expect(container).not.toBeNull();
  });
  it("Should be return a class of the paragraph", () => {
    container.querySelector(".noPostStyled_text");
    expect(container).not.toBeNull();
  });
  it("Should be return a image", () => {
    container.querySelector("#illustration");
    expect(container).not.toBeNull();
  });
});
