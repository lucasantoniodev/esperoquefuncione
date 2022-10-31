import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DeletePostModal } from ".";
import { PostDTO } from "../../dto/postDTO";
import { FakeRepository } from "../../helpers/fakeRepository";
import ThemesProvider from "../../styles/ThemesProvider";

describe("Delete Post Modal", () => {
  let isOpen = true;
  const fakeRepository = new FakeRepository();
  const post = fakeRepository.loadData();

  beforeEach(() => {
    isOpen = true;
    render(
      <ThemesProvider>
        <DeletePostModal
          visible={isOpen}
          deletePost={async () => fakeRepository.deletePostById(post)}
          setVisible={() => (isOpen = !isOpen)}
        />
      </ThemesProvider>
    );
  });

  it("IsOpen should be false", async () => {
    const buttonCancelDelete = screen.getByRole("cancelButton");

    await userEvent.click(buttonCancelDelete);

    expect(isOpen).toBeFalsy();
  });

  it("The list should be empty", async () => {
    const buttonConfirmDelete = screen.getByRole("confirmButton");

    await userEvent.click(buttonConfirmDelete);

    expect(fakeRepository.posts.length).toEqual(0);
    expect(isOpen).toBeFalsy();
  });
});
