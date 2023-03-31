// "use client";
import React, { FC, useState } from "react";
import {
  ProductCardsProps,
  Product,
} from "../../interface/ProductsDataInterface";
import style from "./style/product.module.scss";
import ProductListItem from "./ProductListItem";
import { useViewState } from "../../store/useView";
const ProductCards: FC<ProductCardsProps> = ({ products }) => {
  const { gridStyle } = useViewState();
  const displayProducts = products.map((product: Product) => (
    <ProductListItem
      key={product._id}
      _id={product._id}
      name={product.name}
      image={product.image}
      price={product.price}
      rating={product.rating}
      priceSymbol={product.priceSymbol}
      description={product.description}
    />
  ));
  console.log(gridStyle, "gridStyle");

  return (
    <div className={`${gridStyle ? style.productGrid : style.productList}`}>
      {displayProducts}
    </div>
  );
};

export default ProductCards;