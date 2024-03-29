import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWishlist } from "../../services/authenticated/wishlist";
import { queryKey } from "../queryKeys";

export const useAddWishlist = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, status, isLoading, data } = useMutation(addToWishlist, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKey.wishlist]);
    },
  });

  const AddWishlist = async (id: string) => {
    await mutateAsync(id);
  };
  return {
    AddWishlist,
    status,
    AddWishlistisLoading: isLoading,
    data,
  };
};
