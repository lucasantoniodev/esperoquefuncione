import * as yup from "yup";

export const createPostFormSchema = yup.object().shape({
  img: yup
    .string()
    .required("O campo Url da imagem é obrigatório!")
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
    .required("O campo Local de Avistamento é obrigatório")
    .min(2, "Local de Avistamento deve conter no mínimo 2 caracteres!")
    .max(60, "Local de Avistamento excede o limite de caracteres!"),
  sightingHour: yup
    .string()
    .required("O campo Horário do Avistamento é obrigatório!"),
  sightingDate: yup
    .date()
    .max(new Date(), "Data de avistamento inválida!")
    .required("O campo Data de Avistamento é obrigatório!"),
});
