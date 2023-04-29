import React from "react";
import Link from "next/link";
import { PagesRoutes } from "../../src/routes/ PagesRoutes";
import Button from "../../src/components/FormElement/Button/Button";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
const Success = () => {
  return (
    <div className="container h-screen flex justify-center items-center">
      <div className=" shadow-2xl  rounded-xl p-10 h-[80%]  ">
        <div className=" h-full flex flex-col justify-center items-center text-center">
          <CheckCircleIcon className=" h-36 w-36 mr-2 text-primary" />

          <h1 className="mb-2 capitalize text-[#151875] font-bold text-2xl md:text-3xl">
            your payment is successful
          </h1>
          <p className="md:px-40 text-gray-500">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive a notification when
            your order is completed.
          </p>
          <Link
            href={PagesRoutes.order}
            shallow
            className="mt-3 capitalize text-gray-500 underline hover:text-gray-600"
          >
            {/* <Button isCurve primary padding uppercase> */}
            view orders
            {/* </Button> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
