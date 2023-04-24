import { storage } from "../../auth/utils";
import axios from "../../lib/axios";
import { notify } from "../../utils/notify";
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
  if (data.statuscode === 409) {
    notify({
      type: "info",
      message: data.message,
    });
  }
  if (data.statuscode === 201) {
    notify({
      type: "success",
      message: data.message,
    });
  }
  if (data.statuscode === 400) {
    notify({
      type: "error",
      message: data.message,
    });
  }
  return data.data;
};
