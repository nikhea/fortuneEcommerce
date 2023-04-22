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
const TextContainer: FC<SingleInfoPageComponentProduct> = ({
  _id,
  name,
  price,
  rating,
  priceSymbol,
  description,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(1);

  const increaseCartQuantity = () => {
    setCartQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseCartQuantity = () => {
    if (cartQuantity > 1) {
      setCartQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleIsAdded = () => {
    setIsAdded(true);
  };
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
        <p>{description}</p>
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
        {!isAdded ? (
          <Button
            isCurve
            primary
            padding
            uppercase
            full
            shadow
            onClick={handleIsAdded}
          >
            Add to cart
          </Button>
        ) : (
          <div className="grid items-center grid-cols-3 w-fit ">
            <button onClick={increaseCartQuantity} className={style.cartButton}>
              +
            </button>
            <h6 className="px-6"> {cartQuantity}</h6>
            <button onClick={decreaseCartQuantity} className={style.cartButton}>
              -
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextContainer;
