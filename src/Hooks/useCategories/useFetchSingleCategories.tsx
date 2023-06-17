import { useQuery } from "@tanstack/react-query";
import React, { FC } from "react";
import { queryKey } from "../queryKeys";
import { fetchSingleCategories } from "../../services/shared/categories";

interface IProps {
  name?: string | undefined;
}
interface Props {
  initialData: any;
  id: string | undefined;
  name: string;
}
const useFetchSingleCategories = (props: Props) => {
  const { data: Category } = useQuery(
    [queryKey.categories, props.id],
    () => fetchSingleCategories(props.id),
    {
      initialData: props?.initialData?.category,
      refetchOnMount: true,
    }
  );

  return Category?.data;
};

export default useFetchSingleCategories;
