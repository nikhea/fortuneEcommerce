import { storage } from "../../auth/utils";
import axios from "../../lib/axios";
import { notify } from "../../utils/notify";

export const addShippingServer = async (shippingData: any) => {
  try {
    const { data } = await axios.post(
      `shipping`,
      {
        ...shippingData,
      },
      {
        headers: {
          Authorization: `Bearer ${storage.getToken()}`,
        },
      }
    );
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
export const UpdateShippingServer = async (shippingData: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.patch(
        `shipping`,
        { ...shippingData },
        {
          headers: {
            Authorization: `Bearer ${storage.getToken()}`,
          },
        }
      );
      resolve(data);
      if (data.statuscode === 200) {
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
    } catch (err) {
      reject(err);
    }
  });
};
