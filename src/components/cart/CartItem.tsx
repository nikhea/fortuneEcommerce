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
import { formatToCurrency } from "../../utils/formateNumbers";
import { useclearCart } from "../../Hooks/useCart/useClearCart";
import { decreaseCartItemQuantity } from "../../Hooks/useCart/useDecreaseQuantity";
import { increaseCartItemQuantity } from "../../Hooks/useCart/useIncreaseQuantity";
import { useRemoveCartItems } from "../../Hooks/useCart/useRemoveCartItems";
import { formatProductTitle } from "../../utils/formateString";
const CartItem: FC<Product> = ({
  name,
  image,
  description,
  price,
  rating,
  priceSymbol,
  quantity,
  product,
  _id,
}) => {
  const { removeCartItem } = useRemoveCartItems();
  const { increaseQuantitys } = increaseCartItemQuantity();
  const { decreaseQuantitys } = decreaseCartItemQuantity();
  const handleRemoveItems = (product: any, itemId: string) => {
    removeCartItem(product, itemId);
  };
  return (
    <div className={style.container}>
      <div className="flex items-center gap-y-5">
        <div className={style.imgContainer}>
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className={`${style.img} group-hover:scale-125`}
          />
        </div>
        <div className={style.priceRateContainer}>
          <h2 className="text-sm">{formatProductTitle(name, 20)}</h2>
          <div className="flex items-center">
            <span className="mr-1"> {priceSymbol}</span>
            {formatToCurrency(price)}
            <XMarkIcon className="h-[12px] w-[30px] text-gray-500" />
            <span className="text-gray-500 ">{quantity}</span>
          </div>
        </div>
      </div>
      <span className="flex items-center justify-center h-full gap-x-5">
        <button
          className={style.iconContainer}
          onClick={() => increaseQuantitys(_id, quantity, product)}
        >
          <PlusCircleIcon className={style.icons} />
        </button>
        <h6 className="w-fit mt-[0.2rem] py-1 px-5 border border-pink-500">
          {quantity}
        </h6>
        <button
          className={style.iconContainer}
          onClick={() => decreaseQuantitys(_id, quantity, product)}
        >
          <MinusCircleIcon className={style.icons} />
        </button>
      </span>
      <XCircleIcon
        className={style.icons}
        onClick={() => handleRemoveItems(product, _id)}
      />
    </div>
  );
};

export default CartItem;

// const [cartQuantity, setCartQuantity] = useState(1);

// const increaseCartQuantity = () => {
//   setCartQuantity((prevQuantity) => prevQuantity + 1);
// };

// const decreaseCartQuantity = () => {
//   if (cartQuantity > 1) {
//     setCartQuantity((prevQuantity) => prevQuantity - 1);
//   }
// };
