import React, { FC, useState } from "react";
import { Product } from "../../interface/ProductsDataInterface";
import style from "./style/CartDrawer.module.scss";
import Image from "next/image";
import RatingStar from "../FormElement/RatingStar/RatingStar";
import Button from "../FormElement/Button/Button";
import Link from "next/link";
import {
  ArrowLongLeftIcon,
  XCircleIcon,
  XMarkIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
const CartItem: FC<Product> = ({
  name,
  image,
  description,
  price,
  rating,
  priceSymbol,
}) => {
  const [cartQuantity, setCartQuantity] = useState(1);

  const increaseCartQuantity = () => {
    setCartQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseCartQuantity = () => {
    if (cartQuantity > 1) {
      setCartQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <div className={style.container}>
      <div className="flex items-center gap-y-5">
        <div className={style.imgContainer}>
          <Image
            src={image}
            alt={name}
            className={`${style.img} group-hover:scale-125`}
          />
        </div>
        <div className={style.priceRateContainer}>
          <h2>{name}</h2>
          <div className="flex items-center">
            <span className="mr-1"> {priceSymbol}</span>
            {price}
            <XMarkIcon className="h-[12px] w-[30px] text-gray-500" />
            <span className=" text-gray-500">{cartQuantity}</span>
          </div>
        </div>
      </div>
      <span className="flex items-center justify-center gap-x-5 h-full">
        <button className={style.iconContainer} onClick={increaseCartQuantity}>
          <PlusCircleIcon className={style.icons} />
        </button>
        <h6 className="w-fit mt-[0.2rem] py-1 px-5 border border-pink-500">
          {cartQuantity}
        </h6>
        {/* <input
          type="number"
          value={cartQuantity}
          readOnly
          className="w-fit mt-[0.2rem] py-1 border border-pink-500"
        /> */}
        <button className={style.iconContainer} onClick={decreaseCartQuantity}>
          <MinusCircleIcon className={style.icons} />
        </button>
      </span>
      <XCircleIcon className={style.icons} />
    </div>
  );
};

export default CartItem;
