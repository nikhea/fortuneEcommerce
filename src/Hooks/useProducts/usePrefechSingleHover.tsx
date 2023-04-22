import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { fetchSingleProducts } from "../../services/shared/products";

const usePrefechSingleHover = (id: string) => {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery({
    queryKey: ["products", id],
    queryFn: () => fetchSingleProducts(id),
  });
};

export default usePrefechSingleHover;
