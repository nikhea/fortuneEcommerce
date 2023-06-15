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

const index = (props: any) => {
  // const category = useFetchSingleCategories(props);
  return (
    <div>
      <h1>index {props.id}</h1>
      <div>{JSON.stringify(props)}</div>
    </div>
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
