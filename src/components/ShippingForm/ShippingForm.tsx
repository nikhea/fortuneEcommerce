import {  useEffect } from "react";
import style from "./style/ShippingForm.module.scss";
import { useForm, FormProvider } from "react-hook-form";
import Button from "../FormElement/Button/Button";
import Input from "../FormElement/input/input";
import useAddShippingDetails from "../../Hooks/shipping/useAddShipping";
import useUpdateShippingDetails from "../../Hooks/shipping/useUpdateShipping";
import { yupResolver } from "@hookform/resolvers/yup";
import { ShippingFormData, ShippingSchema } from "./ShippingFormData";
const ShippingForm = ({ defaultValue, user }: any) => {
  const { addShippingfn, isLoading } = useAddShippingDetails();
  const { updateShipping, isLoadingShipping } = useUpdateShippingDetails();
  const methods = useForm<ShippingFormData>({
    resolver: yupResolver(ShippingSchema),
    defaultValues: defaultValue,
    mode: "onChange",
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;

  useEffect(() => {
    setValue("email", defaultValue.email);
    setValue("firstname", defaultValue.firstname);
    setValue("lastname", defaultValue.lastname);
    setValue("phone", defaultValue.phone);
    setValue("postalCode", defaultValue.postalCode);
    setValue("state", defaultValue.state);
    setValue("city", defaultValue.city);
    setValue("street", defaultValue.street);
    setValue("country", defaultValue.country);
  }, [defaultValue, setValue]);
  const submitForm = (formData: any) => {
    user?.shipping ? updateShipping(formData) : addShippingfn(formData);
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
              disabled
              placeholder="Email Address*"
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
              className="checkbox-custom-class"
              type="checkbox"
              placeholder="Email Address"
              {...register("getUpdates")}
            />
            <p className="text-[#151875] text-sm md:text-base">
              Keep me up to date on news and excluive offers
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 my-5 lg:grid-cols-2">
            <div className={style.inputContainer}>
              <label className={style.label}>first Name</label>
              <Input
                type="text"
                disabled
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
                disabled
                name="lastname"
                required
                isWhiteBg
                isCurve
                inputFull
                errors={errors}
                inputRef={register("lastname")}
              />
            </div>
          </div>
          <div className={`${style.inputContainer} !mb-5`}>
            <label className={style.label}>country</label>
            <Input
              type="text"
              placeholder="country*"
              name="country"
              required
              isWhiteBg
              isCurve
              inputFull
              errors={errors}
              inputRef={register("country")}
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-5 my-5 lg:grid-cols-2">
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
            <div className={style.inputContainer}>
              <label className={style.label}>phone</label>
              <Input
                type="number"
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
                type="number"
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
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}> street address</label>
            <textarea
              placeholder="type your street address*"
              // name="message"
              className="p-5 rounded-[10px] my-3 w-full h-full min-h-[150px] outline-none border border-[#C4C4C4] border-solid bg-white text-black  focus:outline-none focus:border-pink-500"
              {...register("street", { required: true, maxLength: 1000 })}
            />
          </div>
          <Button isCurve primary padding uppercase full>
            {user?.shipping
              ? isLoadingShipping
                ? "loading"
                : "update details"
              : isLoading
              ? "loading"
              : "add details"}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ShippingForm;
