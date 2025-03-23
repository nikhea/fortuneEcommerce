import { useForm, FormProvider } from "react-hook-form";
import style from "./style/AccountForm.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  registerAccountFormData,
  registerAccountSchema,
} from "./AccountFormData";
import Input from "../FormElement/input/input";
import Button from "../FormElement/Button/Button";
import { FC, useState } from "react";
import { IAccountFormDefaultText } from "../../interface/AccountForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRegister } from "../../auth/auth";
import { notify } from "../../utils/notify";
import AuthReCAPTCHA from "../GoogleReCAPTCHA/GoogleRecaptcha";
import { HiOutlineEye } from "react-icons/hi";
import { HiEyeSlash } from "react-icons/hi2";

const AccountForm: FC<IAccountFormDefaultText> = ({
  type,
  subText,
  altBase,
  altLink,
  altLinkText,
  ButtonSign,
  FormInputData,
}) => {
  const [view, setView] = useState(true);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<boolean>(false);

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

    registers.mutate(data, {
      onSuccess: () => {
        reset();
        router.push("/");
        // notify({
        //   type: "success",
        //   message: "Register  Successfully",
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
                <label className={style.label}>
                  first name <span className="text-primary">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="First Name"
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
                <label className={style.label}>
                  last name <span className="text-primary">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Last Name"
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
                <label className={style.label}>
                  email <span className="text-primary">*</span>
                </label>
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
                <label className={style.label}>
                  password <span className="text-primary">*</span>
                </label>
                <div className="relative ">
                  <Input
                    type={view ? "password" : "text"}
                    placeholder="Password"
                    name="password"
                    required
                    isWhiteBg
                    isCurve
                    errors={errors}
                    Width="100%"
                    inputRef={register("password")}
                  />
                  <div
                    className="absolute cursor-pointer top-7 right-3"
                    onClick={() => setView(!view)}
                  >
                    {view ? (
                      <HiOutlineEye className="w-[20px] hover:text-primary  " />
                    ) : (
                      <HiEyeSlash className="w-[20px] hover:text-primary  " />
                    )}
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <AuthReCAPTCHA onChange={onCaptchaChange} />
              </div>
              <Button isCurve primary padding uppercase full>
                {registers.isLoading ? "signing up..." : ButtonSign}
              </Button>
            </div>
          </form>
        </FormProvider>
        <div className={style.TextContainerFooter}>
          <h1>{altBase}</h1>
          <Link href={altLink} className=" hover:text-primary">
            {altLinkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
{
  /* {captchaError && "Please complete the reCAPTCHA"} */
}
{
  /* {captchaError && (
                  <p className={style.captchaError}>
                    Please complete the reCAPTCHA
                  </p>
                )} */
}
