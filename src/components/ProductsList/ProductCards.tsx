import React, { FC } from "react";
import {
  ProductCardsProps,
  Product,
} from "../../interface/ProductsDataInterface";
import ProductListItem from "./ProductListItem";

const ProductCards: FC<ProductCardsProps> = ({ products }) => {
  const displayProducts = products.map((product: Product) => (
    <ProductListItem
      key={product._id}
      _id={product._id}
      name={product.name}
      image={product.image}
      price={product.price}
      rating={product.rating}
      priceSymbol={product.priceSymbol}
    />
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      {displayProducts}
    </div>
  );
};

export default ProductCards;
