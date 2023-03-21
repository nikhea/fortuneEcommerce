import Image from "next/image";
import React from "react";
import { dummyProductsData } from "../../../seed/seedDB";
import RatingStar from "../../FormElement/RatingStar/RatingStar";

const ShippingCartItems = () => {
  const displaycheckoutItems = dummyProductsData.slice(0, 5).map((product) => (
    <div
      key={product._id}
      className="flex items-center justify-between pb-3 mb-3 border-b-[1px] border-b-gray-200 "
    >
      <div className="flex">
        <Image
          alt={product.name}
          src={product.image}
          width={50}
          height={50}
          className=" object-cover"
        />
        <div className="">
          <h1 className="text-sm capitalize">{product.name}</h1>
          <RatingStar value={product.rating} size={24} edit={false} />
        </div>
      </div>
      <p>
        {product.priceSymbol} {product.price}
      </p>
    </div>
  ));
  return (
    <div className="h-full flex flex-col justify-between">
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
