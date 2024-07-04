import Head from "next/head";
import React, { FC, useEffect } from "react";
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
import FilitersSideBar from "../../src/components/Filiters/FilitersSideBar";
import ProductPagination from "../../src/components/ProductsComponents/ProductPagination/ProductPagination";
import { useSubFiliters } from "../../src/store/useSubFiliters";
import PageLoading from "../../src/components/UI/Loading/PageLoading";
import useFilitersStore from "../../src/store/useFiliters";
import PriceFilter from "../../src/components/Filiters/FIilterSideBarComponents/priceFiliter";


interface Props {
  initialData: {
    categories: any;
    products: any;
  };
}
const Products: FC<Props> = (props) => {
  const {
    selectedRating,
    searchQuery,
    pageNumber,
    limitProducts,
    sortProducts,
    minPrice,
    maxPrice,
  } = useSubFiliters();
  const {
    isLoading,
    isFetching,
    products,
    pageNumber: ProductpageNumber,
    handlePreviousClick,
    handleNextClick,
    setPageNumber,
    handleSortChange,
  } = useFetchProducts(props);
  const { filterProducts, setFiliters } = useFilitersStore();

  useEffect(() => {
    setFiliters({
      search: searchQuery,
      page: pageNumber,
      limit: limitProducts,
      sort: sortProducts,
      rating: selectedRating,
      minPrice,
      maxPrice,
    });
  }, [
    searchQuery,
    selectedRating,
    pageNumber,
    limitProducts,
    sortProducts,
    minPrice,
    maxPrice,
  ]);

  const maiProducts = products?.data.results[0].data || [];
  const filteredProducts = maiProducts.filter((product: any) => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  const totalPages = products?.data?.totalPages;

  return (
    <>
      <Head>
        <title>Products | Hekto commerce</title>
      </Head>
      <Banner image={BannerData.image} title={BannerData.title} />
      <div className="container">
        <ProductHeader handleSortChange={() => handleSortChange} />

        <div className="grid-cols-12 gap-5 lg:grid">
          <div className="col-start-1 col-end-3">
            <CategoriesSiderBar />
            <div className="px-2 py-3 my-5 rounded-md bg-secondary">
              <FilitersSideBar />
              <PriceFilter />
            </div>
          </div>
          <div className="w-full h-full min-h-screen col-start-3 col-end-13">
            {isLoading ? (
              <PageLoading />
            ) : (
              <>
                <ProductsList products={filteredProducts} />

                <ProductPagination
                  pageNumber={ProductpageNumber}
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

  await queryClient.prefetchQuery([queryKey.products], () => fetchProducts());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      initialData: {
        products: queryClient.getQueryData(["products"]),
      },
    },

    revalidate: 10,
  };
}
export default Products;
// const totalPages = products?.totalCount
//   ? Math.ceil(products.totalCount / products?.limit)
//   : 1;
