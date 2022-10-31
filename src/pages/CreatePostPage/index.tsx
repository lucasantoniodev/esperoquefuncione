import * as S from "./styles/CreatePostStyled";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/shared/Buttons/PrimaryButton";
import { FormInput } from "../../components/shared/FormInput";
import { PostDTO } from "../../dto/postDTO";
import { createPostService } from "../../services/createPostService";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPostFormSchema } from "../../validateSchemas/createPostFormSchema";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

export const CreatePostPage = () => {
  const navigate = useNavigate();
  const { createPost, isLoading } = createPostService();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PostDTO>({
    resolver: yupResolver(createPostFormSchema),
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (postFormData: PostDTO) => {
    const post: PostDTO = {
      img: postFormData.img,
      name: postFormData.name,
      scientificName: postFormData.scientificName,
      observation: postFormData.observation,
      sighting: postFormData.sighting,
      sightingHour: postFormData.sightingHour,
      sightingDate: postFormData.sightingDate,
    };

    await createPost(post);

    navigate("/");
  };

  errors.img ? toast.error(errors?.img?.message) : null;
  errors.name ? toast.error(errors?.name?.message) : null;
  errors.scientificName ? toast.error(errors?.scientificName?.message) : null;
  errors.observation ? toast.error(errors?.observation?.message) : null;
  errors.sighting ? toast.error(errors?.sighting?.message) : null;
  errors.sightingHour ? toast.error(errors?.sightingHour?.message) : null;
  errors.sightingDate ? toast.error(errors?.sightingDate?.message) : null;

  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() - 1);
  const defaultDateInputValue = defaultDate.toISOString().slice(0, 10);

  return (
    <S.CreatePostContainer>
      <S.CreatePostStyled>
        <S.HeaderContainer>
          <h2>Crie o seu Post:</h2>
          <p>Coloque aqui as informações do seu post.</p>
        </S.HeaderContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.InputsContainer>
            <FormInput
              inputTitle="Imagem"
              type="text"
              placeholder="Url da Imagem"
              register={register("img")}
            ></FormInput>
            <FormInput
              inputTitle="Nome científico"
              type="text"
              placeholder="Nome do Pássaro (Científico)"
              register={register("scientificName")}
            ></FormInput>
            <FormInput
              inputTitle="Nome do Pássaro"
              type="text"
              placeholder="Nome do Pássaro"
              register={register("name")}
            ></FormInput>
            <FormInput
              inputTitle="Local de Avistamento"
              type="text"
              placeholder="Local de Avistamento"
              register={register("sighting")}
            ></FormInput>
            <FormInput
              inputTitle="Observação"
              type="text"
              placeholder="Observação"
              register={register("observation")}
            ></FormInput>
            <FormInput
              inputTitle="Horário do Avistamento"
              type="time"
              placeholder="Horário do Avistamento"
              register={register("sightingHour")}
            ></FormInput>
          </S.InputsContainer>
          <S.SightingDateInputContainer>
            <FormInput
              inputTitle="Data de Avistamento"
              type="date"
              defaultValue={defaultDateInputValue}
              placeholder="Data de avistamento"
              register={register("sightingDate")}
            ></FormInput>
          </S.SightingDateInputContainer>
          {!isLoading && (
            <PrimaryButton disabled={false} type="submit">
              Criar
            </PrimaryButton>
          )}
          {isLoading && (
            <PrimaryButton disabled={true} type="submit">
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="14"
                visible={true}
              />
            </PrimaryButton>
          )}
        </form>
      </S.CreatePostStyled>
    </S.CreatePostContainer>
  );
};
