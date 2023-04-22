import React from "react";
import { useUser } from "../../../auth/auth";
import { useCartState } from "../../../store/useCartStore";
import { storage } from "../../../auth/utils";
import axios from "../../../lib/axios";

const PayButton = () => {
  const { cart } = useCartState();
  const cartItem = cart.items;
  const user = useUser();

  const handleCheckout = async () => {
    try {
      const res = await axios.post(
        `stripe/create-checkout-session`,
        {
          cartItem,
        },
        {
          headers: {
            Authorization: `Bearer ${storage.getToken()}`,
          },
        }
      );
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button onClick={handleCheckout}>Check out</button>
    </>
  );
};

export default PayButton;
