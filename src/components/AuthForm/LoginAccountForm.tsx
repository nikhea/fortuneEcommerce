import { useForm, FormProvider } from "react-hook-form";
import style from "./style/AccountForm.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginAccountFormData, loginAccountSchema } from "./AccountFormData";
import Input from "../FormElement/input/input";
import Button from "../FormElement/Button/Button";
import { FC, useState } from "react";
import { IAccountFormDefaultText } from "../../interface/AccountForm";
import Link from "next/link";
import { useLogin } from "../../auth/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { notify } from "../../utils/notify";
import { useQueryClient } from "@tanstack/react-query";
import { queryKey } from "../../Hooks/queryKeys";
import AuthReCAPTCHA from "../GoogleReCAPTCHA/GoogleRecaptcha";

const AccountForm: FC<IAccountFormDefaultText> = ({
  type,
  subText,
  altBase,
  altLink,
  altLinkText,
  ButtonSign,
  FormInputData,
}) => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const login = useLogin();
  const router = useRouter();

  const methods = useForm<loginAccountFormData>({
    resolver: yupResolver(loginAccountSchema),
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const submitForm = (data: any) => {
    if (!captchaValue) {
      setCaptchaError(true);
      notify({ type: "error", message: "complete the reCAPTCHA" });
      return;
    }
    const formData = { ...data, recaptcha: captchaValue };
    console.log(formData);
    login.mutate(data, {
      onSuccess: () => {
        reset();
        router.push("/");
        queryClient.invalidateQueries([queryKey.carts]);
        // notify({
        //   type: "success",
        //   message: "Logged In Successfully",
        // });
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
                  placeholder="Password"
                  name="password"
                  required
                  isWhiteBg
                  isCurve
                  errors={errors}
                  // Width="100%"
                  inputRef={register("password")}
                />
              </div>
              <div className={style.inputContainer}>
                <AuthReCAPTCHA onChange={onCaptchaChange} />
              </div>
              <Button isCurve primary padding uppercase full>
                {login.isLoading ? "signing in..." : ButtonSign}
              </Button>
            </div>
          </form>
        </FormProvider>
        <div className={style.TextContainerFooter}>
          <h1>{altBase}</h1>
          <Link href={altLink} className="hover:text-primary">
            {altLinkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
