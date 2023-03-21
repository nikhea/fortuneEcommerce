import React from "react";
import { ProductsData } from "../../seed/seedDB";
import FeaturedProductCards from "./components/FeaturedProductCards";
import style from "./style/FeaturedProducts.module.scss";
const FeaturedProducts = () => {
  return (
    <div className={style.FeaturedProducts}>
      <div className="container">
        <h1>Featured Products</h1>
        <FeaturedProductCards featuredProducts={ProductsData} />
      </div>
    </div>
  );
};

export default FeaturedProducts;

