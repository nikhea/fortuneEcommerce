import React, { FC } from "react";
import Image from "next/image";
import RatingStar from "../FormElement/RatingStar/RatingStar";
import { XCircleIcon } from "@heroicons/react/24/outline";
const style = {
  icons: ` @apply h-6 w-6;`,
  iconContainer: `@apply cursor-pointer relative text-xl hover:text-primary transition-all duration-500 ease-in delay-200 `,
  btnOutline: `border-2  border-solid border-primary bg-transparent min-w-[10px] w-fit rounded-[8px] text-primary  bg-white  not-italic font-[400] text-[14px] outline-none cursor-pointer mx-0 py-2 px-2 hover:text-white hover:bg-primary capitalize transition-all duration-500 ease-in`,
  btnStatus: `border-2  border-solid bg-transparent min-w-[10px] w-[12%] rounded-[8px]   text-white  not-italic font-[400] text-[14px] outline-none cursor-pointer mx-0 py-2 px-2 capitalize`,
};

export type IWishListItem = {
  name: string;
  rating: number;
  status: string;
  price: number;
  priceSymbol: string;
  image: any;
};
const WishListItem: FC<IWishListItem> = ({
  name,
  rating,
  status,
  price,
  priceSymbol,
  image,
}) => {
  const statusStyle: any = {
    backgroundColor:
      status === "in stock"
        ? "green"
        : status === "out of stock"
        ? "red"
        : status === "being restocked"
        ? "gold"
        : null,
    borderColor:
      status === "in stock"
        ? "green"
        : status === "out of stock"
        ? "red"
        : status === "being restocked"
        ? "gold"
        : null,
  };
  return (
    <div className="flex items-center justify-between my-5">
      <div className="flex items-center">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className=" object-cover"
        />
        <div>
          <h1> {name}</h1>
          <RatingStar value={rating} size={24} edit={false} />
        </div>
      </div>
      <h2>
        {priceSymbol}
        <span className="mr-1"> {price}</span>
      </h2>

      <button className={style.btnStatus} style={statusStyle}>
        {status}
      </button>
      <button className={style.btnOutline}>add to cart</button>
      <div className={style.iconContainer}>
        <XCircleIcon className={style.icons} />
      </div>
    </div>
  );
};
// {
//     borderColor: "red",
//     background: "red",
//   }
export default WishListItem;
