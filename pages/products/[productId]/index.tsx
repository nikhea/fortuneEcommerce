import ImageContainer from "../../../src/components/SingleroductPageView/components/ImageContainer";
import TextContainer from "../../../src/components/SingleroductPageView/components/TextContainer";
import RelatedProduct from "../../../src/components/RelatedProduct/RelatedProduct";
import ProductInfo from "../../../src/components/SingleroductPageView/components/ProductInfo/ProductInfo";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchSingleProducts,
} from "../../../src/services/shared/products";
import { GetStaticPaths, GetStaticProps } from "next";
import { useSingleFetchProducts } from "../../../src/Hooks/useSingleFetchProducts";

interface Props {
  initialData: {
    product: any;
  };
  id: string | undefined;
}
const ProductPage = (props: Props) => {
  const { data: product } = useSingleFetchProducts(props);

  return (
    <div className="container my-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 bg-gray-100 shadow-md rounded-md">
        <ImageContainer images={product.photos} />
        <TextContainer
          _id={product._id}
          name={product.name}
          price={product.price}
          rating={product.rating}
          priceSymbol={product.priceSymbol}
          description={product.description}
        />
      </div>
      <ProductInfo
        productName={product.name}
        productReviews={product.reviews}
        product={product}
      />
      <RelatedProduct />
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts();

  const paths = products?.data.map((product: any) => ({
    params: { productId: product._id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const SingleproductId = params?.productId;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["products"], fetchProducts);

  await queryClient.prefetchQuery(["products", SingleproductId], () =>
    fetchSingleProducts(SingleproductId)
  );
  const ProductsData = await fetchSingleProducts(SingleproductId);
  console.log(ProductsData, "Products");

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
