import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { fetchWishlist } from "../../services/authenticated/wishlist";
import { queryKey } from "../queryKeys";

interface Props {
  initialData?: any;
}

export const useFetchWishlist = (props?: Props) => {
  const {
    data: wishlist,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery([queryKey.wishlist], fetchWishlist, {
    getNextPageParam: (lastPage, pages) => {
      const { page, totalPages } = lastPage;
      if (page < totalPages) {
        return page + 1;
      }
      return undefined;
    },
    refetchOnMount: true,
  });

  return {
    wishlist,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  };
};
