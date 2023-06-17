import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchSubSingleCategories } from "../../services/shared/subcategories";
import { queryKey } from "../queryKeys";

interface Props {
  initialData: any;
  id: string | undefined;
  name: string;
}
const usefetchSingleSubCategories = (props: Props) => {
  const { data: subcategory } = useQuery(
    [queryKey.subcategory, props.id],
    () => fetchSubSingleCategories(props.id),
    {
      initialData: props?.initialData?.subcategory,
      refetchOnMount: true,
    }
  );

  return subcategory.data;
};

export default usefetchSingleSubCategories;
