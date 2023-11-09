import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../services/shared/categories";
import { queryKey } from "../queryKeys";

interface Props {
  initialData: any;
}

export const useFetchCategories = (props: Props) => {
  const { data: categories } = useQuery(
    [queryKey.categories],
    fetchCategories,
    {
      initialData: props?.initialData?.categories,
      refetchOnMount: true,
    }
  );

  return categories;
};
