import { storage } from "../../auth/utils";
import axios from "../../lib/axios";

export const fetchWishlist = async () => {
  const { data } = await axios.get("wishlist", {
    headers: {
      Authorization: `Bearer ${storage.getToken()}`,
    },
  });
  return data.data;
};

export const addToWishlist = async (productId: string) => {
  const { data } = await axios.post(
    "wishlist",
    { productId },
    {
      headers: {
        Authorization: `Bearer ${storage.getToken()}`,
      },
    }
  );
  return data.data;
};
export const removeWishlist = async (id: string) => {
  const { data } = await axios.delete(`wishlist/${id}`, {
    headers: {
      Authorization: `Bearer ${storage.getToken()}`,
    },
  });
  return data.data;
};
