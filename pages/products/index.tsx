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
import { queryKey } from "../../src/Hooks/queryKeys";
import Filiters from "../../src/components/Filiters/Filiters";
import ProductPagination from "../../src/components/ProductsComponents/ProductPagination/ProductPagination";
import { useSubFiliters } from "../../src/store/useSubFiliters";
import PageLoading from "../../src/components/UI/Loading/PageLoading";

interface Props {
  initialData: {
    categories: any;
    products: any;
  };
}
const Products: FC<Props> = (props) => {
  const {
    isLoading,
    isFetching,
    products,
    pageNumber,
    handlePreviousClick,
    handleNextClick,
    setPageNumber,
    handleSortChange,
  } = useFetchProducts(props);
  const { searchQuery } = useSubFiliters();
  const filiterProducts = products?.data.results[0].data || [];
  const filteredProducts = filiterProducts.filter((product: any) => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  const totalPages = products?.data?.totalPages;

  return (
    <>
      <Banner image={BannerData.image} title={BannerData.title} />
      <div className="container">
        <ProductHeader handleSortChange={() => handleSortChange} />

        <div className="grid-cols-12 gap-2 lg:grid">
          <div className="col-start-1 col-end-3">
            <CategoriesSiderBar />
            <Filiters />
          </div>
          <div className="w-full h-full min-h-screen col-start-3 col-end-13">
            {isLoading ? (
              <PageLoading />
            ) : (
              <>
                <ProductsList products={filteredProducts} />

                <ProductPagination
                  pageNumber={pageNumber}
                  totalPages={totalPages}
                  handlePreviousClick={handlePreviousClick}
                  handleNextClick={handleNextClick}
                  setPageNumber={setPageNumber}
                />
              </>
            )}
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

  //@ts-ignore

  await queryClient.prefetchQuery([queryKey.products], () =>
    fetchProducts(1, 9, 1)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },

    revalidate: 10,
  };
}
export default Products;
// const totalPages = products?.totalCount
//   ? Math.ceil(products.totalCount / products?.limit)
//   : 1;
