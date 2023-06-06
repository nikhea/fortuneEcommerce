import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { fetchSingleProducts } from "../../services/shared/products";
import { queryKey } from "../queryKeys";

const usePrefechSingleHover = (id: string) => {
  console.log(id, "usePrefechSingleH");

  const queryClient = useQueryClient();
  queryClient.prefetchQuery({
    queryKey: [queryKey.products, id],
    queryFn: () => fetchSingleProducts(id),
  });
};

export default usePrefechSingleHover;
