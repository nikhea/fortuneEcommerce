import { useQuery } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchSingleProducts,
} from "../services/shared/products";

interface Props {
  initialData: any;
  id: string | undefined;
}

export const useSingleFetchProducts = (props: Props) => {
  const { data: product } = useQuery(
    ["products", props.id],
    () => fetchSingleProducts(props.id), // replace with your actual fetch function
    {
      initialData: props.initialData.product,
      refetchOnMount: true,
    }
  );

  return product;
};
