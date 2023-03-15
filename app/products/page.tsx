import React from "react";
import Banner from "../../components/Banner/Banner";
import ProductHeader from "../../components/ProductsComponents/ProductHeader/ProductHeader";

const Products = () => {
  return (
    <>
      <Banner image={BannerData.image} title={BannerData.title} />
      <div className="container">
        <ProductHeader />
      </div>
    </>
  );
};

const BannerData = {
  title: `Products`,
  image: ` https://cdn.shopify.com/s/files/1/0617/9179/7437/files/decor-tinteggiatura-interni-02.jpg?v=1652080075&width=1500`,
};
export default Products;
