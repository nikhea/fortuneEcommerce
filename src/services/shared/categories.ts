export const fetchCategories = async () => {
  const res = await fetch("http://localhost:4000/api/category");
  return await res.json();
};
