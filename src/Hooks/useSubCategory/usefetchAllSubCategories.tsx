import { useQuery } from "@tanstack/react-query";
import { fetchAllSubCategories } from "../../services/shared/subcategories";
import { queryKey } from "../queryKeys";

const usefetchAllSubCategories = () => {
  const subCategories = useQuery([queryKey.subcategory], fetchAllSubCategories);

  return subCategories.data;
};

export default usefetchAllSubCategories;
