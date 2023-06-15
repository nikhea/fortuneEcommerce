import axios from "../../lib/axios";

export const fetchCategories = async () => {
  const { data } = await axios.get("category");
  return data;
};
export const fetchSingleCategories = async (name: any) => {
  const { data } = await axios.get(`category/${name}`);
  return data;
};
