import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/shared/products";
import { queryKey } from "../queryKeys";
import { useState } from "react";
import useFilitersStore from "../../store/useFiliters";
import { useSubFiliters } from "../../store/useSubFiliters";

interface Props {
  initialData: any;
}

export const useFetchProducts = (props: Props) => {
  const { filterProducts, setFiliters } = useFilitersStore();
  // const [pageNumber, setPageNumber] = useState(1);
  // const [limitProducts, setLimitProduct] = useState(2);
  // const [sortProducts, setSortProduct] = useState(1);
  const {
    pageNumber,
    limitProducts,
    sortProducts,
    searchQuery: search,
    setPageNumber,
    setLimitProduct,
    setSortProduct,
    handlePreviousClick,
    handleNextClick,
    handleLimitChange,
    handleSortChange,
  } = useSubFiliters();
  // pageNumber,
  // limitProducts,
  // sortProducts,
  // search,
  const {
    data: products,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery(
    [queryKey.products, filterProducts],
    () => fetchProducts(filterProducts),
    {
      // initialData: props?.initialData?.products,
      keepPreviousData: true,
      refetchOnMount: true,
    }
  );

  const handleFilterChange = (filters: any) => {
    setFiliters(filters);
  };
  return {
    products,
    pageNumber,
    isFetching,
    isLoading,
    error,
    refetch,
    setPageNumber,
    handlePreviousClick,
    handleNextClick,
    handleLimitChange,
    handleSortChange,
    handleFilterChange,
  };
};
