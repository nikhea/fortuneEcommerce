import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { queryKey } from "../../../src/Hooks/queryKeys";
import { fetchProducts } from "../../../src/services/shared/products";
import {
  fetchCategories,
  fetchSingleCategories,
} from "../../../src/services/shared/categories";
import useFetchSingleCategories from "../../../src/Hooks/useCategories/useFetchSingleCategories";

import { PagesRoutes } from "../../../src/routes/ PagesRoutes";
import { ItemData } from "..";
import CardGrid from "../../../src/components/shopComponents/CardGrid/CardGrid";
import SubCategoriesList from "../../../src/components/shopSinglePage/SubCategoriesList";
import Banner from "../../../src/components/Banner/Banner";

const index = (props: any) => {
  const category = useFetchSingleCategories(props);

  return (
    <>
      <Banner image={category.coverPhoto} title={props.id} />
      <div className="container">
        <SubCategoriesList category={category} ID={props.id} />
        <CardGrid
          ItemsData={ItemData}
          title="Phone Deals"
          backgroundColor="bg-green-200"
        />
      </div>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const category = await fetchCategories();
  const categories = category?.data || [];
  const paths = categories.map((category: any) => ({
    params: { shopId: category.name.toString() },
  }));

  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const SingleShopId = params?.shopId;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([queryKey.products], fetchProducts);
  await queryClient.prefetchQuery([queryKey.categories], fetchCategories);

  await queryClient.prefetchQuery(["products", SingleShopId], () =>
    fetchSingleCategories(SingleShopId)
  );
  const categoriesData = await fetchSingleCategories(SingleShopId);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      initialData: {
        category: categoriesData,
      },
      id: SingleShopId,
    },

    revalidate: 10,
  };
};

export default index;
// health & Beauty
