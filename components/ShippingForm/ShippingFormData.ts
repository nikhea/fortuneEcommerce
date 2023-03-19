import * as yup from "yup";

export type ShippingFormData = {
  email: string;
  getUpdates?: boolean;
  firstname: string;
  lastname: string;
  postalCode: string;
  phone: number;
  state: string;
  city: string;
  address: string;
};

export const ShippingSchema = yup.object().shape({
  email: yup.string().required(),
  getUpdates: yup.bool().required().default(false),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  postalCode: yup.string().required(),
  phone: yup.number().required(),
});
