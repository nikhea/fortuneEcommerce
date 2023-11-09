import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "../../services/authenticated/order";
import { queryKey } from "../queryKeys";

interface Props {
  initialData?: any;
}

export const useFetchOrders = (props?: Props) => {
  const { data: orders, isLoading } = useQuery(
    [queryKey.orders],
    fetchOrders, // replace with your actual fetch function
    {
      refetchOnMount: true,
    }
  );

  return {
    orders,
    isLoading,
  };
};
