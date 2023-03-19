import Image from "next/image";
import React from "react";
import { Image1 } from "../../../images/jpeg/imagesPng";

const ShippingCartItems = () => {
  return (
    <div>
      <div>
        <Image alt="Shipping" src={Image1} width={300} height={300} />
        <div>
          <h1>luxury funiture</h1>
          <h2>rating : 5</h2>
        </div>
      </div>
      <p>$ 1234</p>
    </div>
  );
};

export default ShippingCartItems;
