import React, { FC } from "react";
import { ProductCardsProps } from "../../interface/ProductsDataInterface";
import ProductCards from "./ProductCards";

const ProductsList: FC<ProductCardsProps> = ({ products }) => {
  return <ProductCards products={products} />;
};

export default ProductsList;
