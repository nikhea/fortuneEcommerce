import axios from "../../lib/axios";

export const fetchProducts = async (
  pageNumber?: number | 1,
  limitProducts?: number | 9,
  sortProducts?: number | 1,
  search?: string,
  filterProducts?: any
) => {
  // &search=${search}
  const { data } = await axios.get(
    `products?page=${pageNumber}&limit=${limitProducts}&sort=${sortProducts}`,
    {
      params: filterProducts,
    }
  );

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
