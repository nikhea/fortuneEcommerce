// "use clinet"
import style from "./style/ShoppingCartTable.module.scss";
import React from "react";
import { dummyProductsData } from "../../seed/seedDB";
import Image from "next/image";
import RatingStar from "../FormElement/RatingStar/RatingStar";
import Button from "../FormElement/Button/Button";
import Link from "next/link";
import { ArrowLongLeftIcon, XCircleIcon } from "@heroicons/react/24/outline";

import { PagesRoutes } from "../../routes/ PagesRoutes";

const shoppingCartTable = () => {
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
                  <input type="number" />
                </td>
                <td> {item.priceSymbol} 76589</td>

                <td className=" cursor-pointer relative text-xl hover:text-primary transition-all duration-500 ease-in delay-200">
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
