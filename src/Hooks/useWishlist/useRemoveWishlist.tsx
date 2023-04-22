import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addToWishlist,
  removeWishlist,
} from "../../services/authenticated/wishlist";
export const useRemoveWishlist = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, status, isLoading, data } = useMutation(removeWishlist, {
    onSuccess: () => {
      queryClient.invalidateQueries(["wishlist"]);
    },
  });

  const removeFromWishlist = async (id: string) => {
    await mutateAsync(id);
  };

  return {
    removeFromWishlist,
    status,
    isLoading,
    data,
  };
};
