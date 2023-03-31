import React from "react";
import Banner from "../../src/components/Banner/Banner";
import CategoriesSiderBar from "../../src/components/CategoriesSiderBar/CategoriesSiderBar";
import ProductHeader from "../../src/components/ProductsComponents/ProductHeader/ProductHeader";
import ProductsList from "../../src/components/ProductsList/ProductsList";
import { dummyProductsData } from "../../src/seed/seedDB";

const Products = () => {
  return (
    <>
      <Banner image={BannerData.image} title={BannerData.title} />
      <div className="container">
        <ProductHeader />
        <div className="grid grid-cols-12 gap-2">
          <CategoriesSiderBar />
          <div className="w-full h-full min-h-screen col-start-3 col-end-13">
            <ProductsList products={dummyProductsData} />
          </div>
        </div>
      </div>
    </>
  );
};

const BannerData = {
  title: `Products`,
  image: ` https://cdn.shopify.com/s/files/1/0617/9179/7437/files/decor-tinteggiatura-interni-02.jpg?v=1652080075&width=1500`,
};
export default Products;
