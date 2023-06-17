import React from "react";
import { Header } from "../../src/components/shopComponents";
import SliderCard from "../../src/components/Slider/SliderCard";
import { dummyProductsData } from "../../src/seed/seedDB";
import { PagesRoutes } from "../../src/routes/ PagesRoutes";
import CardGrid from "../../src/components/shopComponents/CardGrid/CardGrid";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { queryKey } from "../../src/Hooks/queryKeys";
import { fetchCategories } from "../../src/services/shared/categories";
import {
  fetchProducts,
  fetchProductsByTages,
} from "../../src/services/shared/products";
import { useFetchCategories } from "../../src/Hooks/useFetchCategories";

const ShopPage = (props: any) => {
  const categories = useFetchCategories(props);

  return (
    <div className="container">
      <Header />
      <SliderCard
        title="top selling"
        backgroundColor="bg-green-200"
        cardLink={PagesRoutes.products}
        ProductsData={dummyProductsData}
      />
      <CardGrid
        ItemsData={ItemData}
        title="Phone Deals"
        backgroundColor="bg-pink-200"
      />
      <SliderCard
        title="Best Price | Up to 50% Off"
        backgroundColor="bg-blue-200"
        cardLink={PagesRoutes.products}
        ProductsData={dummyProductsData}
      />
      <CardGrid
        ItemsData={ItemData}
        title="Phone Deals"
        backgroundColor="bg-green-200"
      />
      <SliderCard
        title="Free Global Postal Deals"
        backgroundColor="bg-pink-200"
        cardLink={PagesRoutes.products}
        ProductsData={dummyProductsData}
      />
      <CardGrid
        ItemsData={ItemData}
        title="Phone Deals"
        backgroundColor="bg-red-200"
      />
      <SliderCard
        title="Free Global Postal Deals"
        backgroundColor="bg-yellow-200"
        cardLink={PagesRoutes.products}
        ProductsData={dummyProductsData}
      />
    </div>
  );
};

export default ShopPage;
export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKey.categories], fetchCategories);

  await queryClient.prefetchQuery([queryKey.products], () => fetchProducts());
  //@ts-ignore
  await queryClient.prefetchQuery(
    [queryKey.productsTage],
    fetchProductsByTages
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      initialData: {
        categories: queryClient.getQueryData(["categories"]),
        products: queryClient.getQueryData(["products"]),
      },
    },

    revalidate: 10,
  };
}

export const ItemData = [
  {
    title: "android phone",
    image:
      "https://res.cloudinary.com/djkqaqoj3/image/upload/v1685900346/subcategories-1685900320063/g3dsxzhmuak5k3deskn6.jpg",
    titleLink: "#",
  },
  {
    title: "inverter",
    image:
      "https://res.cloudinary.com/djkqaqoj3/image/upload/v1685911750/subcategories-1685911641846/sxz1b4kf4sdkznygbatf.jpg",
    titleLink: "#",
  },
  {
    title: "make up",
    image:
      "https://res.cloudinary.com/djkqaqoj3/image/upload/v1685900200/subcategories-1685900149911/yxpegog7ldazsb2maqpq.jpg",
    titleLink: "#",
  },
  {
    title: "television",
    image:
      "https://res.cloudinary.com/djkqaqoj3/image/upload/v1685900283/subcategories-1685900214715/coy0k0s4hhamrklozj7z.jpg",
    titleLink: "#",
  },
  {
    title: "fridges",
    image:
      "https://res.cloudinary.com/djkqaqoj3/image/upload/v1685900200/subcategories-1685900149911/yxpegog7ldazsb2maqpq.jpg",
    titleLink: "#",
  },
  {
    title: "air conditioners",
    image:
      "https://res.cloudinary.com/djkqaqoj3/image/upload/v1685900283/subcategories-1685900214715/coy0k0s4hhamrklozj7z.jpg",
    titleLink: "#",
  },
];
