import * as yup from "yup";

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const ContactSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});
