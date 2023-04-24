import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "../../services/authenticated/order";

interface Props {
  initialData?: any; // replace 'any' with your actual type
}

export const useFetchOrders = (props?: Props) => {
  const { data: orders, isLoading } = useQuery(
    ["order"],
    fetchOrders, // replace with your actual fetch function
    {
      //   initialData: props.initialData.wishlist,
      refetchOnMount: true,
    }
  );

  return {
    orders,
    isLoading,
  };
};
