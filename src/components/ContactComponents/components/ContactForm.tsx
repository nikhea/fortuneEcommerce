"use client";
import { useForm, FormProvider, useController } from "react-hook-form";
import style from "../style/form.module.scss";
import useFormPersist from "react-hook-form-persist";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../FormElement/input/input";
import Button from "../../FormElement/Button/Button";
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
          Please don't hesitate to contact us. Our team is ready to assist you
          with any questions or concerns you may have. You can reach us through
          phone, email, or our website's contact form. We value your feedback
          and are always striving to improve our services. We look forward to
          hearing from you soon.
        </p>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="grid grid-cols-2 gap-5">
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
              // name="message"
              className="p-5 rounded-[10px] my-3 w-full h-full min-h-[150px] outline-none border border-[#C4C4C4] border-solid bg-white text-black  focus:outline-none focus:border-pink-500"
              {...register("message", { required: true, maxLength: 1000 })}
            />
          </div>
          <Button isCurve primary padding uppercase>
            send mail
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
