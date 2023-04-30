import { useQuery } from "@tanstack/react-query";
import { fetchWishlist } from "../../services/authenticated/wishlist";
import { queryKey } from "../queryKeys";

interface Props {
  initialData?: any;
}

export const useFetchWishlist = (props?: Props) => {
  const { data: wishlist, isLoading } = useQuery(
    [queryKey.wishlist],
    fetchWishlist, // replace with your actual fetch function
    {
      //   initialData: props.initialData.wishlist,
      refetchOnMount: true,
    }
  );

  return {
    wishlist,
    isLoading,
  };
};
