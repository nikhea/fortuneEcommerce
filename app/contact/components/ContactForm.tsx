"use client";
import { useForm, FormProvider, useController } from "react-hook-form";
import style from "../style/form.module.scss";
import useFormPersist from "react-hook-form-persist";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../../components/FormElement/input/input";
import Button from "../../../components/FormElement/Button/Button";
import { FC } from "react";
import { ContactFormData, ContactSchema } from "./ContactFormData";
const ContactForm = () => {
  const methods = useForm<ContactFormData>({
    resolver: yupResolver(ContactSchema),
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;
  console.log(errors);
  const submitForm = (formData: any) => {
    console.log(errors);
    console.log(formData);
  };
  return (
    <div>
      <div className={style.TextForm}>
        <h1>get in touch </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
          bibendum quam.
        </p>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex items-center w-full gap-5 justify-between">
            <div className={style.inputContainer}>
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
            <div className={style.inputContainer}>
              <label className={style.label}>name</label>
              <Input
                type="name"
                placeholder="name*"
                name="name"
                required
                isWhiteBg
                isCurve
                inputFull
                errors={errors}
                inputRef={register("name")}
              />
            </div>
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>subject</label>
            <Input
              type="subject"
              placeholder="subject*"
              name="subject"
              required
              isWhiteBg
              isCurve
              inputFull
              errors={errors}
              inputRef={register("subject")}
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}> message</label>
            <textarea
              placeholder="type your message*"
              name="message"
              className="p-5 rounded-[10px] my-3 w-full h-full min-h-[150px] outline-none border border-[#C4C4C4] border-solid bg-white text-black  focus:outline-none focus:border-sky-500"
              // ref={register({ required: true, maxLength: 1000 })}
            />
          </div>
          <Button isCurve primary padding uppercase>
            sand mail
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
