import Image from "next/image";
import React from "react";
// import { dummyitem.ProductsData } from "../../../seed/seedDB";
import RatingStar from "../../FormElement/RatingStar/RatingStar";
import { useCartState } from "../../../store/useCartStore";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { formatToCurrency } from "../../../utils/formateNumbers";
import Link from "next/link";
import { PagesRoutes } from "../../../routes/ PagesRoutes";

const ShippingCartItems = () => {
  const { cart, getProductItemTotal } = useCartState();
  const displaycheckoutItems = cart?.items?.map((item) => (
    <div
      key={item.product._id}
      className="flex items-center justify-between pb-3 mb-3 border-b-[1px] border-b-gray-200 "
    >
      <div className="flex ">
        <Image
          alt={item?.product.name}
          src={item?.product.coverPhoto}
          width={50}
          height={50}
          className="object-cover "
        />
        <div className="mx-1">
          <Link
            className="hover:text-primary"
            href={`${PagesRoutes.products}/${item.product.name}`}
          >
            <h1 className="text-sm capitalize">
              {item?.product.name.substring(0, 40)}....
            </h1>
          </Link>
          <div className="flex items-center">
            <span className="mr-1"> {item?.product.priceSymbol}</span>
            {formatToCurrency(item?.product.price)}
            <XMarkIcon className="h-[12px] w-[30px] text-gray-500" />
            <span className="text-gray-500 ">{item?.quantity}</span>
          </div>
        </div>
      </div>
      <p>
        {item?.product.priceSymbol}
        {formatToCurrency(
          getProductItemTotal(item?.quantity, item?.product.price)
        )}
      </p>
    </div>
  ));
  return (
    <div className="flex flex-col h-full my-20 lg:my-0">
      {displaycheckoutItems}
    </div>
  );
};

export default ShippingCartItems;
{
  /* <div>
<Image alt="Shipping" src={Image1} width={300} height={300} />
<div>
  <h1>luxury funiture</h1>
  <h2>rating : 5</h2>
</div>
</div>
<p>$ 1234</p> */
}
