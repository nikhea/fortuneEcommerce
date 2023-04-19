import { useForm, FormProvider } from "react-hook-form";
import style from "./style/AccountForm.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  registerAccountFormData,
  registerAccountSchema,
} from "./AccountFormData";
import Input from "../FormElement/input/input";
import Button from "../FormElement/Button/Button";
import { FC } from "react";
import { IAccountFormDefaultText } from "../../interface/AccountForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRegister } from "../../auth/auth";
import { notify } from "../../utils/notify";

const AccountForm: FC<IAccountFormDefaultText> = ({
  type,
  subText,
  altBase,
  altLink,
  altLinkText,
  ButtonSign,
  FormInputData,
}) => {
  const router = useRouter();

  const registers = useRegister();
  const methods = useForm<registerAccountFormData>({
    resolver: yupResolver(registerAccountSchema),
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;
  console.log(errors);
  const submitForm = (data: any) => {
    registers.mutate(data, {
      onSuccess: () => {
        reset();
        router.push("/");
        notify({
          type: "success",
          message: "Register  Successfully",
        });
      },
    });
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
                <label className={style.label}>first name</label>
                <Input
                  type="text"
                  placeholder="firstname"
                  name="firstname"
                  required
                  isWhiteBg
                  isCurve
                  errors={errors}
                  // Width="100%"
                  inputRef={register("firstname")}
                />
              </div>
              <div className={style.inputContainer}>
                <label className={style.label}>last name</label>
                <Input
                  type="text"
                  placeholder="lastname"
                  name="lastname"
                  required
                  isWhiteBg
                  isCurve
                  errors={errors}
                  // Width="100%"
                  inputRef={register("lastname")}
                />
              </div>
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
                {registers.isLoading ? "signing up..." : ButtonSign}
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
