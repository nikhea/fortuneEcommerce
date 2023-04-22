import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCartServer } from "../../services/authenticated/cart";
import { useCartState } from "../../store/useCartStore";

export const useAddToCart = () => {
  const { removeFromCart, addToCart } = useCartState();

  const queryClient = useQueryClient();

  const { mutateAsync, status, isLoading, data } = useMutation(
    addToCartServer,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts"]);
      },
    }
  );

  const AddCart = async (product: any) => {
    try {
      addToCart(product);
      await mutateAsync(product);
    } catch (error) {
      removeFromCart(product._id);
    }
  };
  return {
    AddCart,
    status,
    isLoading,
    data,
  };
};
