"use client";
import { useForm, FormProvider, useController } from "react-hook-form";
import style from "./style/AccountForm.module.scss";
import useFormPersist from "react-hook-form-persist";
import { yupResolver } from "@hookform/resolvers/yup";
import { AccountFormData, AccountSchema } from "./AccountFormData";
import Input from "../FormElement/input/input";
import Button from "../FormElement/Button/Button";
import { FC } from "react";
import { IAccountFormDefaultText } from "../../interface/AccountForm";
import Link from "next/link";
// import { DevTool } from "@hookform/devtools";

const AccountForm: FC<IAccountFormDefaultText> = (AccountFormDefaultText) => {
  const methods = useForm<AccountFormData>({
    resolver: yupResolver(AccountSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const submitForm = (formData: any) => {
    console.log(formData, "filter Data");
    console.log(FormData);
  };
  return (
    <div className={style.formMainContainer}>
      <div className={style.formContainer}>
        <div className={style.TextContainer}>
          <h1>{AccountFormDefaultText.type}</h1>
          <p>{AccountFormDefaultText.subText}</p>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="  w-[90%] m-auto ">
              <div className={style.inputContainer}>
                <label className={style.label}>email</label>
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required
                  isWhiteBg
                  isCurve
                  errors={errors}
                  // Width="100%"
                  inputRef={register("email")}
                />
              </div>
              <div className={style.inputContainer}>
                <label className={style.label}>password</label>
                <Input
                  type="password"
                  placeholder="Password Address"
                  name="password"
                  required
                  isWhiteBg
                  isCurve
                  errors={errors}
                  // Width="100%"
                  inputRef={register("password")}
                />
              </div>
              <Button isCurve primary padding uppercase full>
                {AccountFormDefaultText.ButtonSign}
              </Button>
            </div>
          </form>
        </FormProvider>
        <div className={style.TextContainerFooter}>
          <h1>{AccountFormDefaultText.altBase}</h1>
          <Link href={AccountFormDefaultText.altLink}>
            {AccountFormDefaultText.altLinkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
