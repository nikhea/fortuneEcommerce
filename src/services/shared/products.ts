import axios from "../../lib/axios";

export const fetchProducts = async () => {
  const { data } = await axios.get("products");
  // console.log(data);

  return data;
};

export const fetchSingleProducts = async (id: any) => {
  const { data } = await axios.get(`products/${id}`);
  return data;
};
