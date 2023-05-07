import axios from "../../lib/axios";
// pageNumber?: number | 1,
// limitProducts?: number | 9,
// sortProducts?: number | 1,
// search?: string,
export const fetchProducts = async (filterProducts?: any) => {
  // &search=${search}
  const { data } = await axios.get(`products`, {
    params: filterProducts,
  });
  // ?page=${pageNumber}&limit=${limitProducts}&sort=${sortProducts}
  return data;
};
// tage?: string
export const fetchProductsByTages = async () => {
  const { data } = await axios.get(`products/tag`);

  return data.data;
};

export const fetchSingleProducts = async (name: any) => {
  const { data } = await axios.get(`products/${name}`);
  return data;
};
