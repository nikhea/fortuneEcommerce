import style from "../style/TextContainer.module.scss";
import React, { FC, useState } from "react";
import { SingleInfoPageComponentProduct } from "../../../interface/ProductsDataInterface";
import Button from "../../FormElement/Button/Button";
import RatingStar from "../../FormElement/RatingStar/RatingStar";
import {
  CheckCircleIcon,
  HeartIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { BsFacebook, BsInstagram, BsTwitter, BsTiktok } from "react-icons/bs";
import { formatToCurrency } from "../../../utils/formateNumbers";
import { useFetchProductReviews } from "../../../Hooks/useReview/useFetchReview";
import { useCartState } from "../../../store/useCartStore";
import { useAddToCart } from "../../../Hooks/useCart/useAddToCart";
import { decreaseCartItemQuantity } from "../../../Hooks/useCart/useDecreaseQuantity";
import { increaseCartItemQuantity } from "../../../Hooks/useCart/useIncreaseQuantity";
const TextContainer: FC<SingleInfoPageComponentProduct> = ({
  _id,
  name,
  price,
  rating,
  priceSymbol,
  description,
  product,
}) => {
  const { reviews, isLoading } = useFetchProductReviews(_id);

  const { isProductInCart } = useCartState();
  const { AddCart } = useAddToCart();
  const { increaseQuantitys } = increaseCartItemQuantity();
  const { decreaseQuantitys } = decreaseCartItemQuantity();
  const itemDetails = useCartState((state) => state.getItemDetails(_id));
  return (
    <div className="h-full w-full flex flex-col justify-between py-5 px-2 lg:px-0 lg:pr-5 ">
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
        <h2 className=" capitalize text-xl ">
          <span className="mr-1"> {priceSymbol}</span>
          {formatToCurrency(price)}
        </h2>
        <p>{description}</p>
        <div className="flex items-center  text-primary">
          <CheckCircleIcon className={style.icons} />
          <h5>shop secure, free return</h5>
        </div>
      </div>
      <div className={style.spacer} />

      {/* <div className="flex items-center  gap-x-3">
        <button className={style.btn}>Add to wishlist</button>
        <button className={style.btn}>Add to compare</button>
      </div> */}
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
          >
            Add to cart
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

// const [isAdded, setIsAdded] = useState(false);
// const [cartQuantity, setCartQuantity] = useState(1);

// const increaseCartQuantity = () => {
//   setCartQuantity((prevQuantity) => prevQuantity + 1);
// };

// const decreaseCartQuantity = () => {
//   if (cartQuantity > 1) {
//     setCartQuantity((prevQuantity) => prevQuantity - 1);
//   }
// };
// const handleIsAdded = () => {
//   setIsAdded(true);
// };
