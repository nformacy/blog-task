import * as yup from "yup";

export const LoginFormSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required()
})
