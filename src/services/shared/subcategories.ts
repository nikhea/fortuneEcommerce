import axios from "../../lib/axios";

const PAGE_SIZE = 2;

export const fetchAllSubCategories = async () => {
  const { data } = await axios.get(`subcategory`);
  return data;
};
export const fetchSubCategories = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `subcategory/pagination?page=${pageParam}&pageSize=${PAGE_SIZE}`
  );
  return data;
};
export const fetchSubSingleCategories = async (name: any) => {
  const { data } = await axios.get(`subcategory/${name}`);
  return data;
};
