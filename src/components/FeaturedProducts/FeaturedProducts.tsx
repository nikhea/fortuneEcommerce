import React, { FC } from "react";
import { dummyProductsData } from "../../seed/seedDB";
import FeaturedProductCards from "./components/FeaturedProductCards";
import style from "./style/FeaturedProducts.module.scss";
import { Product } from "../../interface/ProductsDataInterface";
const FeaturedProducts: FC<any> = ({ products }) => {
  return (
    <div className={style.FeaturedProducts}>
      <div className="container">
        <h1>Featured Products</h1>
        <FeaturedProductCards featuredProducts={products?.data} />
      </div>
    </div>
  );
};

export default FeaturedProducts;
