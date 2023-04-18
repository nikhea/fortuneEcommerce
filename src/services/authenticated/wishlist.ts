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
