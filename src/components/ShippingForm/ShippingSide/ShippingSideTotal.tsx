import Link from "next/link";
import React from "react";
import Button from "../../FormElement/Button/Button";

const ShippingSideTotal = () => {
  return (
    <div className="bg-[#F4F4FC] w-full px-3 py-3 rounded-md flex flex-col  justify-center gap-y-5">
      <div className="flex items-center justify-between capitalize text-[#1D3178] text-xl py-2">
        <h1 className="">subTotal:</h1>
        <h2>$ 12343</h2>
      </div>
      <hr className="h-[2px] bg-gray-400 w-full" />
      <div className="flex items-center justify-between capitalize text-[#1D3178] text-xl py-2">
        <h1>Total:</h1>
        <h2>$ 42343</h2>
      </div>
      <hr className="h-[2px] bg-gray-400 w-full " />
      <Link href="" className="grid my-5 place-items-center">
        <Button isCurve primary padding uppercase>
          proceed to checkout
        </Button>
      </Link>
    </div>
  );
};

export default ShippingSideTotal;
