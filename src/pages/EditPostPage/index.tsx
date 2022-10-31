import * as S from "./styles/EditPostPageStyled";
import { FormInput } from "../../components/shared/FormInput";
import { PrimaryButton } from "../../components/shared/Buttons/PrimaryButton";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PostDTO } from "../../dto/postDTO";
import { getPostService } from "../../services/getPostService";
import { updatePostService } from "../../services/updatePostService";
import { updatePostFormSchema } from "../../validateSchemas/updatePostFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

export const EditPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading: isLoadingPost } = getPostService(id!);
  const { updatePost, isLoading } = updatePostService();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<PostDTO>({
    resolver: yupResolver(updatePostFormSchema),
    reValidateMode: "onSubmit",
  });

  if (Object.keys(errors).length <= 0) {
    setValue("img", data?.img!);
    setValue("name", data?.name!);
    setValue("scientificName", data?.scientificName!);
    setValue("observation", data?.observation!);
    setValue("sighting", data?.sighting!);
    setValue("sightingHour", data?.sightingHour!);
  }

  const onSubmit = async (postFormData: PostDTO) => {
    const updatedPost: PostDTO = {
      id: id!,
      img: postFormData.img,
      name: postFormData.name,
      scientificName: postFormData.scientificName,
      observation: postFormData.observation,
      sighting: postFormData.sighting,
      sightingHour: postFormData.sightingHour,
      sightingDate: data!.sightingDate,
    };

    await updatePost(updatedPost);
    navigate("/");
  };

  errors.img ? toast.error(errors?.img?.message) : null;
  errors.name ? toast.error(errors?.name?.message) : null;
  errors.scientificName ? toast.error(errors?.scientificName?.message) : null;
  errors.observation ? toast.error(errors?.observation?.message) : null;
  errors.sighting ? toast.error(errors?.sighting?.message) : null;
  errors.sightingHour ? toast.error(errors?.sightingHour?.message) : null;

  return (
    <S.EditPostPageContainer>
      {isLoadingPost && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="32"
          visible={true}
        />
      )}
      {!isLoadingPost && (
        <S.EditPostPageContent>
          <S.ContentHeader>
            <h1>Edite o seu Post:</h1>
            <p>Edite aqui as informações do seu post.</p>
          </S.ContentHeader>
          <S.ContentMain>
            <S.MainFormContainer onSubmit={handleSubmit(onSubmit)}>
              <S.FormInputsContainer>
                <figure>
                  <img src={data?.img!} alt="Imagem atual do post" />
                </figure>
                <S.FormInputsContent>
                  <FormInput
                    type="text"
                    placeholder="Url da imagem"
                    register={register("img")}
                    inputTitle="Imagem"
                  />
                  <FormInput
                    type="text"
                    placeholder="Observação"
                    register={register("observation")}
                    inputTitle="Observação"
                  />
                  <FormInput
                    type="text"
                    placeholder="Nome do Pássaro"
                    register={register("name")}
                    inputTitle="Nome do Pássaro"
                  />
                  <FormInput
                    type="text"
                    placeholder="Nome do Pássaro (Científico)"
                    register={register("scientificName")}
                    inputTitle="Nome Científico"
                  />

                  <FormInput
                    type="text"
                    placeholder="Local de Avistamento"
                    register={register("sighting")}
                    inputTitle="Local de Avistamento"
                  />
                  <FormInput
                    type="time"
                    placeholder="Horario do Avistamento"
                    register={register("sightingHour")}
                    inputTitle="Horário do Avistamento"
                  />
                </S.FormInputsContent>
              </S.FormInputsContainer>
              <S.FormFooter>
                {!isLoading && (
                  <PrimaryButton disabled={false} type="submit">
                    Editar
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
              </S.FormFooter>
            </S.MainFormContainer>
          </S.ContentMain>
        </S.EditPostPageContent>
      )}
    </S.EditPostPageContainer>
  );
};
