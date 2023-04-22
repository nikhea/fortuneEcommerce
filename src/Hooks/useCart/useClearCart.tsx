import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ClearCartServer } from "../../services/authenticated/cart";
import { useCartState } from "../../store/useCartStore";

export const useclearCart = () => {
  const { removeFromCart, addToCart, clearCart } = useCartState();

  const queryClient = useQueryClient();

  const { mutateAsync, status, isLoading, data } = useMutation(
    ClearCartServer,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts"]);
      },
    }
  );

  const clearItemCart = async (cart: any) => {
    try {
      await mutateAsync(cart._id);
    } catch (error) {
      //   removeFromCart(product._id);
    }
  };
  return {
    clearItemCart,
    status,
    isLoading,
    data,
  };
};
