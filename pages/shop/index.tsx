import React from "react";
import CategoriesSiderBar from "../../src/components/CategoriesSiderBar/CategoriesSiderBar";
import ProductHeader from "../../src/components/ProductsComponents/ProductHeader/ProductHeader";
import ProductsList from "../../src/components/ProductsList/ProductsList";
import products from "../products";

const ShopPage = () => {
  return (
    <div className="container">
      <div className="grid-cols-12 gap-2 lg:grid mt-3">
        <CategoriesSiderBar />
        <div className="w-full h-full bg-slate-500 col-start-3 col-end-11"></div>
        <div className="w-full flex gap-3 justify-between flex-col h-full col-start-11 col-end-13">
          <div className="w-full h-full bg-slate-500"></div>
          <div className="w-full h-full bg-slate-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
