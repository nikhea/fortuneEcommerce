// "use client";
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

const AccountForm: FC<IAccountFormDefaultText> = ({
  type,
  subText,
  altBase,
  altLink,
  altLinkText,
  ButtonSign,
  FormInputData,
}) => {
  const methods = useForm<AccountFormData>({
    resolver: yupResolver(AccountSchema),
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

    if (formData) {
      if (formData.email === "" || formData.password === "") {
        FormInputData(formData);
        reset();
      }
    }
  };
  return (
    <div className={style.formMainContainer}>
      <div className={style.formContainer}>
        <div className={style.TextContainer}>
          <h1>{type}</h1>
          <p>{subText}</p>
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
                {ButtonSign}
              </Button>
            </div>
          </form>
        </FormProvider>
        <div className={style.TextContainerFooter}>
          <h1>{altBase}</h1>
          <Link href={altLink}>{altLinkText}</Link>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
