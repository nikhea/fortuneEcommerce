export const fetchProducts = async () => {
  const res = await fetch("http://localhost:4000/api/products");
  return await res.json();
};

export const fetchSingleProducts = async (id: any) => {
  const res = await fetch(`http://localhost:4000/api/products/${id}`);
  return await res.json();
};
