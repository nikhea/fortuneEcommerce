import Head from "next/head";
import React from "react";
import Link from "next/link";
import { PagesRoutes } from "../../src/routes/ PagesRoutes";
import Button from "../../src/components/FormElement/Button/Button";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
const Success = () => {
  return (
    <div className="container flex items-center justify-center h-screen">
      <Head>
        <title>Check out Success | Hekto commerce</title>
      </Head>
      <div className=" shadow-2xl  rounded-xl p-10 h-[80%]  ">
        <div className="flex flex-col items-center justify-center h-full text-center ">
          <CheckCircleIcon className="mr-2 h-36 w-36 text-primary" />

          <h1 className="mb-2 capitalize text-[#151875] font-bold text-2xl md:text-3xl">
            your payment is successful
          </h1>
          <p className="text-gray-500 md:px-40">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive a notification when
            your order is completed.
          </p>
          <Link
            href={PagesRoutes.order}
            shallow
            className="mt-3 text-gray-500 underline capitalize hover:text-gray-600"
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
