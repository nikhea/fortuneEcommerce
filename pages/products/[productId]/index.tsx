import Head from "next/head";

import ImageContainer from "../../../src/components/SingleroductPageView/components/ImageContainer";
import TextContainer from "../../../src/components/SingleroductPageView/components/TextContainer";
import RelatedProduct from "../../../src/components/RelatedProduct/RelatedProduct";
import ProductInfo from "../../../src/components/SingleroductPageView/components/ProductInfo/ProductInfo";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchSingleProducts,
} from "../../../src/services/shared/products";
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from "next";
import { useSingleFetchProducts } from "../../../src/Hooks/useProducts/useSingleFetchProducts";
import { useRouter } from "next/router";
import { queryKey } from "../../../src/Hooks/queryKeys";
import { capitalizeFirstLetter } from "../../../src/utils/capitalizeFirstLetter";

interface Props {
  initialData: {
    product: any;
  };
  id: string | undefined;
}
const ProductPage = (props: Props) => {
  const { data: product } = useSingleFetchProducts(props);
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="container my-5">
      <Head>
        <title>{capitalizeFirstLetter(product.name)}| Hekto commerce</title>

        {/* <title>{product.name}| Hekto commerce</title> */}
      </Head>
      <div className="grid grid-cols-1 bg-gray-100 rounded-md shadow-md lg:grid-cols-2 gap-x-5">
        <ImageContainer images={product.photos} />
        <TextContainer
          _id={product._id}
          name={product.name}
          price={product.price}
          rating={product.rating}
          priceSymbol={product.priceSymbol}
          description={product.description}
          shortDescription={product.shortDescription}
          quantity={0}
          product={product}
          slug={product.slug}
        />
      </div>
      <ProductInfo
        productName={product.name}
        productId={product._id}
        product={product}
      />
      {/* <RelatedProduct /> */}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts();
  const filiterProducts = products?.data.results[0].data || [];
  const paths = filiterProducts.map((product: any) => ({
    params: { productId: product.slug.toString() },
  }));
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const SingleproductId = params?.productId;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKey.products], () => fetchProducts());

  await queryClient.prefetchQuery(["products", SingleproductId], () =>
    fetchSingleProducts(SingleproductId)
  );
  const ProductsData = await fetchSingleProducts(SingleproductId);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      initialData: {
        product: ProductsData,
      },
      id: SingleproductId,
    },

    revalidate: 10,
  };
};

export default ProductPage;
