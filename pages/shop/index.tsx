import React from "react";
import { Header } from "../../src/components/shopComponents";
import SliderCard from "../../src/components/Slider/SliderCard";
import { dummyProductsData } from "../../src/seed/seedDB";
import { PagesRoutes } from "../../src/routes/ PagesRoutes";

const ShopPage = () => {
  return (
    <div className="container">
      <Header />
      <SliderCard title="top selling" cardLink={PagesRoutes.products} ProductsData={dummyProductsData} />
    </div>
  );
};

export default ShopPage;
