import React, { useState } from "react";
import LeatestProductsHeader from "./LeatestProductsHeader";
import BestSeller from "./LeatestProductsSection/BestSeller";
import NewArrival from "./LeatestProductsSection/NewArrival";
import SpecialOffer from "./LeatestProductsSection/SpecialOffer";
import { newProduct } from "../../seed/product";

const leatestProducts = () => {
  const [step, setStep] = useState(0);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl capitalize text-[#151875]  font-bold">
          leatestProducts
        </h1>
        <LeatestProductsHeader step={step} setStep={setStep} />
      </div>
      <div className="container">
        {(() => {
          switch (step) {
            case 0:
              return <NewArrival NewArrivalProducts={newProduct} />;
            case 1:
              return <BestSeller BestSellerProducts={newProduct} />;
            case 2:
            case 3:
              return <SpecialOffer SpecialOfferProducts={newProduct} />;
            default:
              return <NewArrival NewArrivalProducts={newProduct} />;
          }
        })()}
      </div>
    </div>
  );
};

export default leatestProducts;
