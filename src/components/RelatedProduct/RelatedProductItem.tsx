import {
  ShoppingCartIcon,
  HeartIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";
import style from "./style/RelatedProductItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { IRelatedProductItem } from "../../interface/ProductsDataInterface";
import { PagesRoutes } from "../../routes/ PagesRoutes";

import RatingStar from "../FormElement/RatingStar/RatingStar";

const RelatedProductItem: FC<IRelatedProductItem> = ({
  _id,
  image,
  name,
  price,
  priceSymbol,
  rating,
}) => {
  return (
    <div className="grid place-content-center ">
      <div className="mt-[30px] w-[200px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          className="h-[200px] object-cover hover:scale-110 transition-all duration-500 ease-in delay-200"
        />
      </div>
      <Link href={`${PagesRoutes.products}/${_id}`}>
        <h6 className=" text-xl capitalize text-[#151875]  font-bold  ">
          {name}
        </h6>
      </Link>{" "}
      <RatingStar value={rating} size={24} edit={false} />
      <h2 className=" capitalize text-xl ">
        <span className="mr-1"> {priceSymbol}</span>
        {price}
      </h2>
    </div>
  );
};

export default RelatedProductItem;

{
  /* <>
<div className="mt-[30px] w-[200px] overflow-hidden">
  <Image
    src={image}
    alt={name}
    className="h-[200px] object-cover group-hover:scale-110 transition-all duration-500 ease-in delay-200"
  />
</div>
<h1> {name}</h1>
<RatingStar value={rating} size={24} edit={false} />
<h2 className=" capitalize text-xl ">
  <span className="mr-1"> {priceSymbol}</span>
  {price}
</h2> */
}
// </>
{
  /* <div
className={`${style.cards} group transition-all duration-500 ease-in delay-200`}
>
<div className="relative flex flex-col  w-full h-full  bg-[#F6F7FB] rounded-md py-3 items-center  ">
  <div className="absolute flex transition-all duration-500 ease-in delay-200 opacity-0 left-2 group-hover:opacity-100 ">
    <ShoppingCartIcon className={style.icons} />
    <HeartIcon className={style.icons} />
    <MagnifyingGlassPlusIcon className={style.icons} />
  </div>
  <div className="mt-[30px] w-[200px] overflow-hidden">
    <Image
      src={image}
      alt={name}
      // width={300}
      // height={500}
      className="h-[200px] object-cover group-hover:scale-110 transition-all duration-500 ease-in delay-200"
    />
  </div>
</div>
<div className="w-full h-full px-3 py-3 ">
  <Link href={`${PagesRoutes.products}/${_id}`}>
    <h6 className=" text-xl capitalize text-[#151875]  font-bold  ">
      {name}
    </h6>
  </Link>
  <div className="flex items-center justify-between ">
    <h2>
      <span className="mr-1"> {priceSymbol}</span>
      {price}
    </h2>
    <div>
      <RatingStar value={rating} size={24} edit={false} />
    </div>
  </div>
</div>
</div> */
}
