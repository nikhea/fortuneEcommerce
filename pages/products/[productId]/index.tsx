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
      <div className="grid grid-cols-1 bg-gray-100 rounded-md shadow-md lg:grid-cols-2 gap-x-5">
        <ImageContainer images={product.photos} />
        <TextContainer
          _id={product._id}
          name={product.name}
          price={product.price}
          rating={product.rating}
          priceSymbol={product.priceSymbol}
          description={product.description}
          quantity={0}
          product={product}
        />
      </div>
      <ProductInfo
        productName={product.name}
        productId={product._id}
        product={product}
      />
      <RelatedProduct />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts(1, 9, 1);
  const filiterProducts = products?.data.results[0].data || [];
  const paths = filiterProducts.map((product: any) => ({
    params: { productId: product.name.toString() },
  }));
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const SingleproductId = params?.productId;
  const queryClient = new QueryClient();

  // await queryClient.prefetchQuery(["products"], () => fetchProducts(1, 9, 1));
  await queryClient.prefetchQuery([queryKey.products], () =>
    fetchProducts(1, 9, 1)
  );

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

// export const getStaticPaths: GetStaticPaths = async () => {
//   const products = await fetchProducts();

//   const paths = products?.data.map((product: any) => ({
//     params: { productId: product._id.toString() },
//   }));

//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const SingleproductId = params?.productId;
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(["products"], fetchProducts);

//   await queryClient.prefetchQuery(["products", SingleproductId], () =>
//     fetchSingleProducts(SingleproductId)
//   );
//   const ProductsData = await fetchSingleProducts(SingleproductId);
//   console.log(ProductsData, "Products");

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       initialData: {
//         product: ProductsData,
//       },
//       id: SingleproductId,
//     },

//     revalidate: 10,
//   };
// };
// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: true,
//   };
// };

// export async function getServerSideProps(context: { params: any }) {
//   const { params } = context;
//   const SingleproductId = params?.productId;
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(["products"], fetchProducts);

//   await queryClient.prefetchQuery(["products", SingleproductId], () =>
//     fetchSingleProducts(SingleproductId)
//   );
//   const product = await fetchSingleProducts(SingleproductId);
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       initialData: {
//         product,
//       },
//       id: SingleproductId,
//     },
//   };
// }
