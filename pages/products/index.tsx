import React, { FC } from "react";
import Banner from "../../src/components/Banner/Banner";
import CategoriesSiderBar from "../../src/components/CategoriesSiderBar/CategoriesSiderBar";
import ProductHeader from "../../src/components/ProductsComponents/ProductHeader/ProductHeader";
import ProductsList from "../../src/components/ProductsList/ProductsList";
import { dummyProductsData } from "../../src/seed/seedDB";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchCategories } from "../../src/services/shared/categories";
import { fetchProducts } from "../../src/services/shared/products";
import { useFetchProducts } from "../../src/Hooks/useProducts/useFetchProducts";

interface Props {
  initialData: {
    categories: any; // replace 'any' with your actual type
    products: any; // replace 'any' with your actual type
  };
}
const Products: FC<Props> = (props) => {
  const products = useFetchProducts(props);

  return (
    <>
      <Banner image={BannerData.image} title={BannerData.title} />
      <div className="container">
        <ProductHeader />

        <div className="grid-cols-12 gap-2 lg:grid">
          <CategoriesSiderBar />
          <div className="w-full h-full min-h-screen col-start-3 col-end-13">
            {/* <ProductsList products={products.data} /> */}
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

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["products"], fetchProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },

    revalidate: 10,
  };
}
export default Products;
