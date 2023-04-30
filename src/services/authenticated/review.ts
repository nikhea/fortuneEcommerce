import { storage } from "../../auth/utils";
import axios from "../../lib/axios";
import { notify } from "../../utils/notify";

export const fetchProductReview = async (productId: string) => {
  const { data } = await axios.get(`review/${productId}`, {
    headers: {
      Authorization: `Bearer ${storage.getToken()}`,
    },
  });

  return data.data;
};

export const addProductReviewServer = async (
  productId: string,
  rating: number,
  comment: string
) => {
  try {
    const { data } = await axios.post(
      `review/${productId}`,
      {
        rating,
        comment,
      },
      {
        headers: {
          Authorization: `Bearer ${storage.getToken()}`,
        },
      }
    );
    console.log(data);

    if (data.statuscode === 201) {
      notify({
        type: "success",
        message: data.message,
      });
    }
  } catch (err: any) {
    if (err.response.data) {
      const { data } = err.response;
      if (data.statuscode === 500) {
        notify({
          type: "error",
          message: data.message,
        });
      }
      if (data.statuscode === 400) {
        notify({
          type: "info",
          message: data.message,
        });
      }
    }
  }
};
