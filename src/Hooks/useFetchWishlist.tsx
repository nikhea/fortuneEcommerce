import { useQuery } from "@tanstack/react-query";
import { fetchWishlist } from "../services/authenticated/wishlist";

interface Props {
  initialData?: any; // replace 'any' with your actual type
}

export const useFetchWishlist = (props?: Props) => {
  const { data: wishlist, isLoading } = useQuery(
    ["wishlist"],
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
