import { NoPostStyled } from "./styles/NoPostsStyled";

export const NoPost = () => {
  return (
    <NoPostStyled>
      <img
        id="illustration"
        src={"/ilustracao.svg"}
        alt="Ilustração para páginas sem posts. Com duas pessoas em busca de algo."
      />
      <p className="noPostStyled_title">Nenhum post encontrado!</p>
      <p className="noPostStyled_text">Crie um agora.</p>
    </NoPostStyled>
  );
};
