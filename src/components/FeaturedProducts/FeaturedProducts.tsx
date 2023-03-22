import React from "react";
import { dummyProductsData } from "../../seed/seedDB";
import FeaturedProductCards from "./components/FeaturedProductCards";
import style from "./style/FeaturedProducts.module.scss";
const FeaturedProducts = () => {
  return (
    <div className={style.FeaturedProducts}>
      <div className="container">
        <h1>Featured Products</h1>
        <FeaturedProductCards featuredProducts={dummyProductsData} />
      </div>
    </div>
  );
};

export default FeaturedProducts;
