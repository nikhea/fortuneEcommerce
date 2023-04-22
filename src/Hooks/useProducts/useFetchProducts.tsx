import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/shared/products";

interface Props {
  initialData: any; // replace 'any' with your actual type
}

export const useFetchProducts = (props: Props) => {
  const { data: products } = useQuery(
    ["products"],
    fetchProducts, // replace with your actual fetch function
    {
      // initialData: props.initialData.products,
      refetchOnMount: true,
    }
  );

  return products;
};

// const { data: categories } = useQuery(["categories"], fetchCategories, {
//   initialData: props.initialData.categories,
//   refetchOnMount: true,
// });
// const { data: products } = useQuery(["products"], fetchProducts, {
//   initialData: props.initialData.products,
//   refetchOnMount: true,
// });
