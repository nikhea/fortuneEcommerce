import React from "react";
import CategoriesSiderBar from "../../src/components/CategoriesSiderBar/CategoriesSiderBar";
import ProductHeader from "../../src/components/ProductsComponents/ProductHeader/ProductHeader";
import ProductsList from "../../src/components/ProductsList/ProductsList";
import products from "../products";

const ShopPage = () => {
  return (
    <div className="container">
      <ProductHeader />

      <div className="grid-cols-12 gap-2 lg:grid">
        <CategoriesSiderBar />
        <div className="w-full h-full min-h-screen col-start-3 col-end-13">
          {/* <ProductsList products={products.data} /> */}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
