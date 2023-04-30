import React from "react";
import {
  useForm,
  FormProvider,
  useController,
  Controller,
} from "react-hook-form";
import style from "./style/form.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReviewFormData, ReviewSchema } from "./reviewFormdefault";
import Button from "../../../../FormElement/Button/Button";
import RatingStar from "../../../../FormElement/RatingStar/RatingStar";
import Rating from "react-rating-stars-component";
import { addProductReview } from "../../../../../Hooks/useReview/useAddReview";

// import RatingStar from "../";
// import RatingStar from "../../FormElement/RatingStar/RatingStar";

const AddReviewForm = ({ productId }: any) => {
  const { addReview } = addProductReview();
  const methods = useForm<ReviewFormData>({
    resolver: yupResolver(ReviewSchema),
  });
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  const submitForm = (formData: any) => {
    const { rating, comment } = formData;
    addReview(productId, rating, comment);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className={style.inputContainer}>
          <label className={style.label}>rating</label>
          {/* <RatingStar value={0} size={54} edit={true} /> */}
          <Controller
            control={control}
            name="rating"
            defaultValue={0}
            render={({ field: { onChange, value } }) => (
              <Rating
                count={5}
                size={44}
                activeColor="#ffd700"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}> comment</label>
          <textarea
            placeholder="type your comment*"
            // name="message"
            className="p-5 rounded-[10px] my-3 w-full h-full min-h-[150px] outline-none border border-[#C4C4C4] border-solid bg-white text-black  focus:outline-none focus:border-pink-500"
            {...register("comment", { required: true, maxLength: 1000 })}
          />
        </div>
        <Button isCurve primary padding uppercase>
          add review
        </Button>
      </form>
    </FormProvider>
  );
};

export default AddReviewForm;
