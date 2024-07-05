import Head from "next/head";

import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps } from "next";
import { queryKey } from "../../../../src/Hooks/queryKeys";
import {
  fetchAllSubCategories,
  fetchSubSingleCategories,
} from "../../../../src/services/shared/subcategories";
import usefetchSingleSubCategories from "../../../../src/Hooks/useSubCategory/usefetchSingleSubCategories";
import usefetchAllSubCategories from "../../../../src/Hooks/useSubCategory/usefetchAllSubCategories";
import { fetchCategories } from "../../../../src/services/shared/categories";
import Banner from "../../../../src/components/Banner/Banner";
import { ItemData } from "../..";
import CardGrid from "../../../../src/components/shopComponents/CardGrid/CardGrid";
import Link from "next/link";
import { PagesRoutes } from "../../../../src/routes/ PagesRoutes";
import { capitalizeFirstLetter } from "../../../../src/utils/capitalizeFirstLetter";

const index = (props: any) => {
  const subCategories = usefetchAllSubCategories();
  const subCategory = usefetchSingleSubCategories(props);

  return (
    <>
      <Head>
        <title>{capitalizeFirstLetter(subCategory.name)} | Hekto commerce</title>
      </Head>
      <Banner image={subCategory.coverPhoto} title={props.id} />
      <div className="container">
        <span className="flex gap-2 mt-5 capitalize w-fit">
          <Link href={PagesRoutes.shop}>shop</Link>
          {">"}
          <Link href={`${PagesRoutes.shop}/${subCategory.category.name}`}>
            {subCategory.category.name}
          </Link>
          {">"}
          <Link href="#" className="text-primary">
            {props.id}
          </Link>
        </span>
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
  const subCategory = await fetchAllSubCategories();
  const categories = category?.data || [];
  const subCategories = subCategory?.data || [];
  const paths: any = [];
  categories.forEach((category: any) => {
    subCategories.forEach((subCategory: any) => {
      paths.push({
        params: {
          shopId: category.name.toString(),
          shopSubId: subCategory.name.toString(),
        },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const shop = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    [queryKey.subcategory],
    fetchAllSubCategories
  );
  await queryClient.prefetchQuery([queryKey.subcategory, shop?.shopSubId], () =>
    fetchSubSingleCategories(shop?.shopSubId)
  );
  const subcategoriesData = await fetchAllSubCategories();
  const subcategoryData = await fetchSubSingleCategories(shop?.shopSubId);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      initialData: {
        subcategories: subcategoriesData,
        subcategory: subcategoryData,
      },
      id: shop?.shopSubId,
    },

    revalidate: 10,
  };
};
export default index;
// shopSubId
// export const getStaticPaths: GetStaticPaths = async () => {
//   const category = await fetchCategories();
//   const subCategory = await fetchAllSubCategories();
//   const categories = category?.data || [];
//   const subCategories = subCategory?.data || [];
//   const paths = subCategories.map((subCategory: any) => ({
//     // params: { shopSubId: subCategory.name.toString() },
//     params: {
//       shopId: subCategories.category.name.toString(),
//       shopSubId: subCategory.name.toString(),
//     },
//   }));

//   return { paths, fallback: false };
// };
