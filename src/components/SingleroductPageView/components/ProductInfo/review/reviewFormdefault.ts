import * as yup from "yup";

export type ReviewFormData = {
  rating: number;
  comment: string;
};

export const ReviewSchema = yup.object().shape({
  rating: yup.number().required(),
  comment: yup.string().required(),
});
