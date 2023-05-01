import Image from "next/image";
import style from "./style/shoppingCartMobile.module.scss";
import { useCartState } from "../../store/useCartStore";
import { useclearCart } from "../../Hooks/useCart/useClearCart";
import { decreaseCartItemQuantity } from "../../Hooks/useCart/useDecreaseQuantity";
import { increaseCartItemQuantity } from "../../Hooks/useCart/useIncreaseQuantity";
import { useRemoveCartItems } from "../../Hooks/useCart/useRemoveCartItems";
import { formatProductTitle } from "../../utils/formateString";
import RatingStar from "../FormElement/RatingStar/RatingStar";
import { formatToCurrency } from "../../utils/formateNumbers";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  XCircleIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { PagesRoutes } from "../../routes/ PagesRoutes";
import Button from "../FormElement/Button/Button";

const ShoppingCartMobile = () => {
  const { removeCartItem } = useRemoveCartItems();
  const { clearItemCart } = useclearCart();
  const { increaseQuantitys } = increaseCartItemQuantity();
  const { decreaseQuantitys } = decreaseCartItemQuantity();
  const { cart, getProductItemTotal } = useCartState();

  const handleRemoveItems = (product: any, itemId: string) => {
    removeCartItem(product, itemId);
  };
  return (
    <div className={style.ShoppingCartMobileContainer}>
      <div className={style.ShoppingCartMobileContainerBg}>
        <div>
          {cart.items?.map((item: any, index: number) => (
            <div key={index}>
              <div className="flex">
                <Image
                  src={item.product.coverPhoto}
                  alt={item.product.name}
                  width={100}
                  height={100}
                  className=" object-cover"
                />
                <div className="mx-1 flex flex-col space-y-3   w-full">
                  <div className="mx-2 flex justify-between  w-full">
                    <h2 className=" text-sm">
                      {formatProductTitle(item.product.name, 50)}
                    </h2>
                    <span className={style.iconContainer}>
                      <XCircleIcon
                        className={style.icons}
                        onClick={() =>
                          handleRemoveItems(item.product, item._id)
                        }
                      />
                    </span>
                  </div>
                  <div className="mx-1 flex justify-between  w-full">
                    <h2 className=" text-sm uppercase">price</h2>
                    {item.product.priceSymbol}{" "}
                    {formatToCurrency(item.product.price)}
                  </div>
                  <div className="mx-1 flex justify-between  w-full">
                    <h2 className=" text-sm uppercase">quantity</h2>
                    <span className="flex items-center">
                      <button
                        className={style.iconContainer}
                        onClick={() =>
                          increaseQuantitys(
                            item._id,
                            item.quantity,
                            item.product
                          )
                        }
                      >
                        <PlusCircleIcon className={style.icons} />
                      </button>
                      <div className="mx-2 border px-3 bg-white  text-center">
                        {item.quantity}
                      </div>
                      <button
                        className={style.iconContainer}
                        // onClick={decreaseCartQuantity}
                        onClick={() =>
                          decreaseQuantitys(
                            item._id,
                            item.quantity,
                            item.product
                          )
                        }
                      >
                        <MinusCircleIcon className={style.icons} />
                      </button>
                    </span>
                  </div>
                  <div className="mx-1 flex justify-between  w-full">
                    <h2 className=" text-sm uppercase">subtotal</h2>
                    {item.product.priceSymbol}{" "}
                    {formatToCurrency(
                      getProductItemTotal(item.quantity, item.product.price)
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-gray-300 h-[.5px] w-full rounded-[8px] my-5" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <Link
          href={PagesRoutes.products}
          className="flex items-center text-blue-900 capitalize"
        >
          <ArrowLongLeftIcon className={style.icons} />
          continue shopping
        </Link>
        <Button
          isCurve
          primary
          padding
          uppercase
          onClick={() => clearItemCart(cart)}
        >
          clear cart
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCartMobile;
