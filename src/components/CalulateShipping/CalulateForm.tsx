"use client";
import Link from "next/link";
import style from "./style/CalulateForm.module.scss";
import React from "react";
import Button from "../FormElement/Button/Button";
import Input from "../FormElement/input/input";

const CalulateForm = () => {
  let errors = "true";
  return (
    <div className="bg-[#F4F4FC] w-full px-3 py-3 rounded-md flex flex-col  justify-center gap-y-5">
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
          // inputRef={register("email")}
        />
      </div>{" "}
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
          // inputRef={register("email")}
        />
      </div>{" "}
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
          // inputRef={register("email")}
        />
      </div>
      <Link href="" className="grid place-items-center mb-3">
        <Button isCurve primary padding uppercase full>
          Calculate Shiping
        </Button>
      </Link>
    </div>
  );
};

export default CalulateForm;
{
  /* <div className="flex items-center justify-between capitalize text-[#1D3178] text-xl py-2">
<h1 className="">subTotal:</h1>
<h2>$ 12343</h2>
</div>
<hr className="h-[2px] bg-gray-400 w-full" />
<div className="flex items-center justify-between capitalize text-[#1D3178] text-xl py-2">
<h1>Total:</h1>
<h2>$ 42343</h2>
</div>
<hr className="h-[2px] bg-gray-400 w-full " /> */
}
