import axios from "../../lib/axios";

export const fetchProducts = async (
  pageNumber?: number | undefined,
  limitProducts?: number | undefined,
  sortProducts?: number | undefined,
  search?: string,
  filterProducts?: any
) => {
  const { data } = await axios.get(
    `products?page=${pageNumber}&limit=${limitProducts}&sort=${sortProducts}&search=${search}`,
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
