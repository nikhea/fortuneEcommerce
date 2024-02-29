import Link from "next/link";
import React from "react";
import Button from "../../FormElement/Button/Button";
import { formatToCurrency } from "../../../utils/formateNumbers";
import { useStripePay } from "../../../Hooks/useStripe/useStripePay";
import { usePathname } from "next/navigation";
import { PagesRoutes } from "../../../routes/ PagesRoutes";
import { useCartState } from "../../../store/useCartStore";
import { notify } from "../../../utils/notify";

const ShippingSideTotal = ({ user }: any) => {
  const { isLoading, handleCheckout } = useStripePay();
  const { getSubTotal } = useCartState();

  const pathname = usePathname();
  const currentRoute = PagesRoutes.shipping;

  const handleSubmit = () => {
    if (!user.shipping)
      return notify({
        type: "error",
        message: "Please add your shipping details",
      });
    handleCheckout();
  };
  return (
    <div className="bg-[#F4F4FC] w-full px-3 py-3 rounded-md flex flex-col  justify-center gap-y-5">
      <div className="flex items-center justify-between capitalize text-[#1D3178] text-xl py-2">
        <h1 className="">subTotal:</h1>
        <h2>$ {formatToCurrency(getSubTotal())}</h2>
      </div>
      <hr className="h-[2px] bg-gray-400 w-full" />
      <div className="flex items-center justify-between capitalize text-[#1D3178] text-xl py-2">
        <h1>Total:</h1>
        <h2>$ {formatToCurrency(42343)}</h2>
      </div>
      <hr className="h-[2px] bg-gray-400 w-full " />

      {pathname === currentRoute ? (
        // <button onClick={() => handleCheckout()}>
        //   {isLoading ? "Loading" : "checkout now!"}
        // </button>
        <Button isCurve primary padding uppercase full onClick={handleSubmit}>
          {isLoading ? "Loading" : "checkout now!"}
        </Button>
      ) : (
        <Link href="/shipping" className="grid my-5 place-items-center">
          <Button isCurve primary padding uppercase>
            proceed to checkout
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ShippingSideTotal;
{
  /* <button onClick={() => handleCheckout()}>
{isLoading ? "Loading" : " check out Now!"}
</button> */
}
{
  /* <Link href="/shipping" className="grid my-5 place-items-center">
        <Button isCurve primary padding uppercase>
          proceed to checkout
        </Button>
      </Link> */
}
