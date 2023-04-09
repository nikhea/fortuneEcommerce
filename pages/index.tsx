import Hero from "../src/components/Hero/Hero";
import FeaturedProducts from "../src/components/FeaturedProducts/FeaturedProducts";
import Features from "../src/components/Features/Features";
import NewletterBanner from "../src/components/newsLetterBanner/newletterBanner";
import { QueryClient } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/react-query";
import { FC } from "react";
import { useFetchCategories } from "../src/Hooks/useFetchCategories";
import { useFetchProducts } from "../src/Hooks/useFetchProducts";
import { fetchCategories } from "../src/services/shared/categories";
import { fetchProducts } from "../src/services/shared/products";

interface Props {
  initialData: {
    categories: any; // replace 'any' with your actual type
    products: any; // replace 'any' with your actual type
  };
}

const HomePage: FC<Props> = (props) => {
  const categories = useFetchCategories(props);
  const products = useFetchProducts(props);

  return (
    <div>
      <Hero />
      <FeaturedProducts products={products} />
      {/* {JSON.stringify(categories)} */}
      <Features title="what shopex offer!" />
      {/* {JSON.stringify(products)} */}
      <NewletterBanner />
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["categories"], fetchCategories);
  await queryClient.prefetchQuery(["products"], fetchProducts);

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
