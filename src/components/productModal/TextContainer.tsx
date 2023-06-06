import style from "./style/TextContainer.module.scss";
import React, { FC, useState } from "react";
import {
  CheckCircleIcon,
  HeartIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { BsFacebook, BsInstagram, BsTwitter, BsTiktok } from "react-icons/bs";
import { SingleInfoPageComponentProduct } from "../../interface/ProductsDataInterface";
import Button from "../FormElement/Button/Button";
import RatingStar from "../FormElement/RatingStar/RatingStar";
import { formatToCurrency } from "../../utils/formateNumbers";
import { useCartState } from "../../store/useCartStore";
import { decreaseCartItemQuantity } from "../../Hooks/useCart/useDecreaseQuantity";
import { increaseCartItemQuantity } from "../../Hooks/useCart/useIncreaseQuantity";
import { useAddToCart } from "../../Hooks/useCart/useAddToCart";
const TextContainer: FC<SingleInfoPageComponentProduct> = ({
  _id,
  name,
  price,
  rating,
  priceSymbol,
  product,
}) => {
  let CartisLoading = true;
  const { isProductInCart } = useCartState();
  const { AddCart, AddCartisLoading } = useAddToCart();
  const { increaseQuantitys } = increaseCartItemQuantity();
  const { decreaseQuantitys } = decreaseCartItemQuantity();
  const itemDetails = useCartState((state) => state.getItemDetails(_id));

  return (
    <div className="flex flex-col justify-between w-full h-full px-2 py-5 lg:px-0 lg:pr-5 ">
      <div className="flex items-center justify-between">
        <h1 className="  text-xl capitalize text-[#151875]  font-bold ">
          {name}
        </h1>
        <div className="flex items-center justify-between">
          <HeartIcon className={style.iconsHover2} />
          <PlusCircleIcon className={style.iconsHover2} />
        </div>
      </div>
      <div className="flex items-center">
        <RatingStar value={rating} size={24} edit={false} />
        <h5 className="ml-1">(9 reviews)</h5>
      </div>
      <div className="bg-primary text-white px-2 py-1 w-fit rounded-md text-[1em] ">
        free delivery*
      </div>
      <div className={style.spacer} />
      <div className="flex flex-col space-y-3">
        <h2 className="text-xl capitalize ">
          <span className="mr-1"> {priceSymbol}</span>
          {formatToCurrency(price)}
        </h2>
        <p>{product.shortDescription}</p>
        <div className="flex items-center text-primary">
          <CheckCircleIcon className={`${style.icons} h-6 w-6 mr-2`} />
          <h5>shop secure, free return</h5>
        </div>
      </div>
      <div className={style.spacer} />
      <div className="flex items-center my-2">
        <span className="mr-2"> share</span>
        <div className="flex items-center space-x-3">
          <BsFacebook className={style.iconsHover} />
          <BsInstagram className={style.iconsHover} />
          <BsTiktok className={style.iconsHover} />
          <BsTwitter className={style.iconsHover} />
        </div>
      </div>
      <div className="mt-3">
        {!isProductInCart(_id) ? (
          <Button
            isCurve
            primary
            padding
            uppercase
            full
            shadow
            onClick={() => AddCart(product)}
            disabled={AddCartisLoading}
            // disabled
          >
            {AddCartisLoading ? "adding item to cart" : " add to cart"}
          </Button>
        ) : (
          <div className="grid items-center grid-cols-3 w-fit ">
            <button
              onClick={() =>
                increaseQuantitys(
                  itemDetails?.itemId,
                  itemDetails?.quantity,
                  product
                )
              }
              className={style.cartButton}
            >
              +
            </button>
            <h6 className="px-6"> {itemDetails?.quantity}</h6>
            <button
              onClick={() =>
                decreaseQuantitys(
                  itemDetails?.itemId,
                  itemDetails?.quantity,
                  product
                )
              }
              className={style.cartButton}
            >
              -
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextContainer;

// const increaseCartQuantity = () => {
//   setCartQuantity((prevQuantity) => prevQuantity + 1);
// };

// const decreaseCartQuantity = () => {
//   if (cartQuantity > 1) {
//     setCartQuantity((prevQuantity) => prevQuantity - 1);
//   }
// };
