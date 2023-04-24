import React from "react";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { useFetchOrders } from "../../src/Hooks/useOrder/useFetchOrders";

interface Props {
  initialData: {
    wishlist: any;
  };
}
const Orders = (props: Props) => {
  const { orders, isLoading } = useFetchOrders(props);

  return (
    <div>
      Orders
      {isLoading ? "loading" : JSON.stringify(orders)}
    </div>
  );
};

export default Orders;
