import * as yup from "yup";

export const updatePostFormSchema = yup.object().shape({
  img: yup
    .string()
    .required("O Url da imagem é obrigatório!")
    .url("Url inválida!"),
  name: yup
    .string()
    .required("O campo Nome do Pássaro é obrigatório!")
    .min(2, "Nome do Pássaro deve conter no mínimo 2 caracteres!")
    .max(60, "Nome do Pássaro excede o limite de caracteres"),
  scientificName: yup
    .string()
    .max(60, "Nome Científico excede o limite de caracteres!"),
  observation: yup
    .string()
    .max(240, "Observação excede o limite de 240 caracteres!"),
  sighting: yup
    .string()
    .required()
    .min(2, "O Local de Avistamento deve conter no mínimo 2 caracteres!")
    .max(60, "Local de Avistamento excede o limite de caracteres!"),
  sightingHour: yup.string().required(),
});
