import Hero from "../src/components/Hero/Hero";
import FeaturedProducts from "../src/components/FeaturedProducts/FeaturedProducts";
import Features from "../src/components/Features/Features";
import NewletterBanner from "../src/components/newsLetterBanner/newletterBanner";
import { QueryClient } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/react-query";
import { FC } from "react";
import { useFetchCategories } from "../src/Hooks/useFetchCategories";
import { useFetchProducts } from "../src/Hooks/useProducts/useFetchProducts";
import { fetchCategories } from "../src/services/shared/categories";
import {
  fetchProducts,
  fetchProductsByTages,
} from "../src/services/shared/products";
import { queryKey } from "../src/Hooks/queryKeys";
import { useFetchProductsByTage } from "../src/Hooks/useProducts/useFetchProductsByTages";

interface Props {
  initialData: {
    categories: any; // replace 'any' with your actual type
    products: any; // replace 'any' with your actual type
  };
}

const HomePage: FC<Props> = (props) => {
  const categories = useFetchCategories(props);
  const products = useFetchProductsByTage(props);
  // const filiterProducts = products?.data.results[0].data || [];
  return (
    <div>
      <Hero />
      <FeaturedProducts products={products} />
      <Features title="what shopex offer!" />
      <NewletterBanner />
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKey.categories], fetchCategories);
  //@ts-ignore
  // await queryClient.prefetchQuery([queryKey.products], fetchProducts);
  //@ts-ignore
  await queryClient.prefetchQuery(
    [queryKey.productsTage],
    fetchProductsByTages
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },

    revalidate: 10,
  };
}

// console.log(props.initialData.queries[0].state.data, "dskjkjsjjkj");

// initialData: {
//   categories: queryClient.getQueryData(["categories"]),
//   products: queryClient.getQueryData(["products"]),
// },
