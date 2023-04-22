// "use client";
import { PagesRoutes } from "../../routes/ PagesRoutes";
import { useState } from "react";
import style from "./style/ShoppingCartTable.module.scss";
import React from "react";
import { dummyProductsData } from "../../seed/seedDB";
import Image from "next/image";
import RatingStar from "../FormElement/RatingStar/RatingStar";
import Button from "../FormElement/Button/Button";
import Link from "next/link";
import {
  ArrowLongLeftIcon,
  XCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useCartState } from "../../store/useCartStore";
import { formatToCurrency } from "../../utils/formateNumbers";
import { useRemoveCartItems } from "../../Hooks/useCart/useRemoveCartItems";
import { useclearCart } from "../../Hooks/useCart/useClearCart";
import { increaseCartItemQuantity } from "../../Hooks/useCart/useIncreaseQuantity";
import { decreaseCartItemQuantity } from "../../Hooks/useCart/useDecreaseQuantity";

const shoppingCartTable = () => {
  const { removeCartItem } = useRemoveCartItems();
  const { clearItemCart } = useclearCart();
  const { increaseQuantitys } = increaseCartItemQuantity();
  const { decreaseQuantitys } = decreaseCartItemQuantity();
  const { cart, getProductItemTotal } = useCartState();

  const handleRemoveItems = (product: any, itemId: string) => {
    removeCartItem(product, itemId);
  };
  return (
    <div className={style.ShoppingCartTableContainer}>
      <div className={style.ShoppingCartTableContainerBg}>
        <table>
          <thead className="mb-5">
            <tr className="uppercase text-[#333b4d] w-full">
              <th>Product</th>
              <th>price</th>
              <th>quantity</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            {cart.items?.map((item: any, index: number) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.product.coverPhoto}
                      alt={item.product.name}
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col">
                      <h2>{item.product.name}</h2>
                      <div>
                        <RatingStar
                          value={item.product.rating}
                          size={24}
                          edit={false}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.product.priceSymbol}{" "}
                  {formatToCurrency(item.product.price)}
                </td>
                <td>
                  <span className="flex items-center">
                    <button
                      className={style.iconContainer}
                      onClick={() =>
                        increaseQuantitys(item._id, item.quantity, item.product)
                      }
                    >
                      <PlusCircleIcon className={style.icons} />
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      readOnly
                      className="w-fit"
                    />
                    <button
                      className={style.iconContainer}
                      // onClick={decreaseCartQuantity}
                      onClick={() =>
                        decreaseQuantitys(item._id, item.quantity, item.product)
                      }
                    >
                      <MinusCircleIcon className={style.icons} />
                    </button>
                  </span>
                </td>
                <td style={{ textAlign: "center" }}>
                  {item.product.priceSymbol}{" "}
                  {getProductItemTotal(item.quantity, item.product.price)}
                </td>

                <td className={style.iconContainer}>
                  <XCircleIcon
                    className={style.icons}
                    // onClick={() => removeFromCart(item.product._id)}
                    onClick={() => handleRemoveItems(item.product, item._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between my-5">
        <Link
          href={PagesRoutes.products}
          className="flex items-center text-blue-900 capitalize"
        >
          <ArrowLongLeftIcon className={style.icons} />
          continue shopping
        </Link>
        <Button
          isCurve
          primary
          padding
          uppercase
          onClick={() => clearItemCart(cart)}
        >
          clear cart
        </Button>
      </div>
    </div>
  );
};

export default shoppingCartTable;
// "bg-red-200 w-[10] h-[10] rounded-full   right-0

// const [cartQuantity, setCartQuantity] = useState(1);

// const increaseCartQuantity = () => {
//   setCartQuantity((prevQuantity) => prevQuantity + 1);
// };

// const decreaseCartQuantity = () => {
//   if (cartQuantity > 1) {
//     setCartQuantity((prevQuantity) => prevQuantity - 1);
//   }
// };
// const handleCartQuantity = (action: string) => {
//   if (action === "increase") {
//     setCartQuantity(cartQuantity + 1);
//   } else if (action === "decrease" && cartQuantity > 1) {
//     setCartQuantity(cartQuantity - 1);
//   }
// };
