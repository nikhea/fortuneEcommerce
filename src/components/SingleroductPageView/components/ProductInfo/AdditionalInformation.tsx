import React, { FC } from "react";
import style from "./AdditionalInformation.module.scss";
export type IAdditionalInformation = {
  productSpecifications: any;
  productFeatures: any;
  productavailability: any;
  productStatus: any;
};
const AdditionalInformation: FC<IAdditionalInformation> = ({
  productSpecifications,
  productFeatures,
  productavailability,
  productStatus,
}) => {
  console.log(productavailability);
  const dispalyProductSpecifications = productSpecifications.map(
    (specification: any) => (
      <li
        className="list-inside flex space-x-1 uppercase"
        key={specification._id}
      >
        <h6 className=" ">{specification.name}</h6> <span>:</span>
        <h6 className="">{specification.value}</h6>
      </li>
    )
  );
  const dispalyproductFeatures = productFeatures.map(
    (features: any, index: number) => (
      <li
        style={{
          listStyle: "inside",
        }}
        className="list-inside flex space-x-1 capitalize"
        key={index}
      >
        {features}
      </li>
    )
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className={style.borderContent}>
        <h1>availability</h1>
        <ul className=" capitalize">
          <li className="flex space-x-1">
            <h6>quantity</h6> <span>:</span>
            <h6>{productavailability.quantity}</h6>
          </li>
          <li className="flex space-x-1">
            <h6>status</h6> <span>:</span>
            <h6>{productStatus}</h6>
          </li>
        </ul>
      </div>
      <div className={style.borderContent}>
        <h1 className=" uppercase ">key features</h1>
        <ul
          style={{
            listStyle: "inside",
          }}
          className="list-inside text-gray-500"
        >
          {dispalyproductFeatures}
        </ul>
      </div>
      <div className={style.borderContent}>
        <h1>specifications</h1>
        <ul className="">{dispalyProductSpecifications}</ul>
      </div>
      <div className={style.borderContent}>
        <h1>discounts</h1>
        <h2 className=" capitalize text-gray-500 p-5 text-sm">
          there is currently no discount avaliable for this product
        </h2>
      </div>
    </div>
  );
};

export default AdditionalInformation;
