"use client";
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

const shoppingCartTable = () => {
  const [cartQuantity, setCartQuantity] = useState(1);

  const increaseCartQuantity = () => {
    setCartQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseCartQuantity = () => {
    if (cartQuantity > 1) {
      setCartQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleCartQuantity = (action: string) => {
    if (action === "increase") {
      setCartQuantity(cartQuantity + 1);
    } else if (action === "decrease" && cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
    }
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
            {dummyProductsData.map((item: any, index: number) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col">
                      <h2>{item.name}</h2>
                      <div>
                        <RatingStar
                          value={item.rating}
                          size={24}
                          edit={false}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.priceSymbol} {item.price}
                </td>
                <td>
                  <span className="flex items-center">
                    <button
                      className={style.iconContainer}
                      onClick={increaseCartQuantity}
                    >
                      <PlusCircleIcon className={style.icons} />
                    </button>
                    <input
                      type="number"
                      value={cartQuantity}
                      readOnly
                      className="w-fit"
                    />
                    <button
                      className={style.iconContainer}
                      onClick={decreaseCartQuantity}
                    >
                      <MinusCircleIcon className={style.icons} />
                    </button>
                  </span>
                </td>
                <td style={{ textAlign: "center" }}>
                  {item.priceSymbol} 76589
                </td>

                <td className={style.iconContainer}>
                  <XCircleIcon className={style.icons} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between my-5">
        <Link
          href={PagesRoutes.products}
          className="text-blue-900 flex items-center capitalize"
        >
          <ArrowLongLeftIcon className={style.icons} />
          continue shopping
        </Link>
        <Button isCurve primary padding uppercase>
          clear cart
        </Button>
      </div>
    </div>
  );
};

export default shoppingCartTable;
// "bg-red-200 w-[10] h-[10] rounded-full   right-0
