import React from "react";
import LeatestProductList from "../LeatestProductList";
import LeatestProductCard from "../LeatestProductCard";

const SpecialOffer = ({ SpecialOfferProducts }: any) => {
  const displayProduct = SpecialOfferProducts.map((product: any) => (
    <LeatestProductList
      key={product._id}
      _id={product._id}
      name={product.name}
      coverPhoto={product.coverPhoto}
      price={product.price}
      rating={product.rating}
      priceSymbol={product.priceSymbol}
      description={product.description}
      slug={product.slug}
    />
  ));
  return <LeatestProductCard displayProduct={displayProduct} />;
};

export default SpecialOffer;
