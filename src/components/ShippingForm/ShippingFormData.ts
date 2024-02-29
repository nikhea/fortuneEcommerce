import * as yup from "yup";

export type ShippingFormData = {
  email: string;
  getUpdates?: boolean;
  firstname: string;
  lastname: string;
  postalCode: string;
  phone: number;
  country: string;
  state: string;
  city: string;
  street: string;
};

export const ShippingSchema = yup.object().shape({
  email: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  getUpdates: yup.bool().required().default(false),
  street: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  postalCode: yup.string().required(),
  phone: yup.number().required(),
  country: yup.string().required(),
});
