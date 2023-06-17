import { useQuery } from "@tanstack/react-query";
import { fetchAllSubCategories } from "../../services/shared/subcategories";
import { queryKey } from "../queryKeys";

const usefetchAllSubCategories = () => {
  const { data: subCategories } = useQuery(
    [queryKey.subcategory],
    fetchAllSubCategories
  );

  return subCategories;
};

export default usefetchAllSubCategories;
