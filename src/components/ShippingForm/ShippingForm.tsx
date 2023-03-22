"use client";
import style from "./style/ShippingForm.module.scss";
import { useForm, FormProvider, useController } from "react-hook-form";

import useFormPersist from "react-hook-form-persist";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { ShippingFormData, ShippingSchema } from "./ShippingFormData";
import Button from "../FormElement/Button/Button";
import Input from "../FormElement/input/input";
const ShippingForm = () => {
  const methods = useForm<ShippingFormData>({
    resolver: yupResolver(ShippingSchema),
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;
  const submitForm = (formData: any) => {
    console.log(errors);
    console.log(formData);
  };
  return (
    <div className={style.formContainer}>
      <h1 className="mainText">contact information</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className={`${style.inputContainer} `}>
            <label className={style.label}>email</label>
            <Input
              type="email"
              placeholder="Email Address"
              name="email*"
              required
              isWhiteBg
              isCurve
              inputFull
              errors={errors}
              inputRef={register("email")}
            />
          </div>
          <div className="flex items-center justify-start my-3 space-x-2">
            <input
              type="checkbox"
              placeholder="Email Address"
              {...register("getUpdates")}
            />
            <p className="text-[#151875]">
              Keep me up to date on news and excluive offers
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-5 my-5">
            <div className={style.inputContainer}>
              <label className={style.label}>first Name</label>
              <Input
                type="text"
                placeholder="First Name*"
                name="firstname"
                required
                isWhiteBg
                isCurve
                inputFull
                errors={errors}
                inputRef={register("firstname")}
              />
            </div>

            <div className={style.inputContainer}>
              <label className={style.label}>last Name</label>
              <Input
                type="text"
                placeholder="last Name*"
                name="lastname"
                required
                isWhiteBg
                isCurve
                inputFull
                errors={errors}
                inputRef={register("lastname")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>phone</label>
              <Input
                type="text"
                placeholder="phone*"
                name="phone"
                required
                isWhiteBg
                isCurve
                inputFull
                errors={errors}
                inputRef={register("phone")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>postal code</label>
              <Input
                type="text"
                placeholder="postalCode*"
                name="postalCode"
                required
                isWhiteBg
                isCurve
                inputFull
                errors={errors}
                inputRef={register("postalCode")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>state</label>
              <Input
                type="text"
                placeholder="state*"
                name="state"
                required
                isWhiteBg
                isCurve
                inputFull
                errors={errors}
                inputRef={register("state")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>city</label>
              <Input
                type="text"
                placeholder="city*"
                name="city"
                required
                isWhiteBg
                isCurve
                inputFull
                errors={errors}
                inputRef={register("city")}
              />
            </div>
          </div>
          <div className={`${style.inputContainer} !mb-5`}>
            <label className={style.label}>address</label>
            <Input
              type="text"
              placeholder="address*"
              name="address"
              required
              isWhiteBg
              isCurve
              inputFull
              errors={errors}
              inputRef={register("address")}
            />
          </div>
          <Button isCurve primary padding uppercase>
            update details
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ShippingForm;
