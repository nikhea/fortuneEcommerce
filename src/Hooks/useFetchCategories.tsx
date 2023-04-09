import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services/shared/categories";

interface Props {
  initialData: any; // replace 'any' with your actual type
}

export const useFetchCategories = (props: Props) => {
  const { data: categories } = useQuery(
    ["categories"],
    fetchCategories, // replace with your actual fetch function
    {
      //   initialData: props.initialData.categories,
      refetchOnMount: true,
    }
  );

  return categories;
};
