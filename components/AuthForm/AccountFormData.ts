import * as yup from "yup";

export type AccountFormData = {
  email: string;
  password: string;
};

export const AccountSchema = yup.object().shape({
  email: yup.string(),
  password: yup.string()
});
