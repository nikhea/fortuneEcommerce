import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useCartState } from "../../store/useCartStore";
import { fetchCart } from "../../services/authenticated/cart";

export const useCart = () => {
  const { data, isLoading, error } = useQuery(
    ["carts"],
    fetchCart, // replace with your actual fetch function
    {
      //   initialData: props.initialData.wishlist,
      refetchOnMount: true,
    }
  );
  // console.log(data);

  const { cart: CartItemState } = useCartState();

  // Update the cartItems state when the data changes
  useEffect(() => {
    if (data) {
      useCartState.setState(() => ({
        cart: data[0],
      }));
    }
  }, [data]);

  return {
    CartItemState,
    isLoading,
    error,
  };
};
