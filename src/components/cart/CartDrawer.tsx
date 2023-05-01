// "use client";
import React, { useState } from "react";
import Image from "next/image";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useCartDrawerState } from "../../store/useShoppingCartSideBar";
import { PagesRoutes } from "../../routes/ PagesRoutes";
import style from "./style/CartDrawer.module.scss";
import { dummyProductsData } from "../../seed/seedDB";
import Link from "next/link";
import { XCircleIcon } from "@heroicons/react/24/outline";
import CartItem from "./CartItem";
import { Product } from "../../interface/ProductsDataInterface";
import useDeviceProperties from "../../Hooks/UseMediaQueries";
import { formatToCurrency } from "../../utils/formateNumbers";
import { useCartState } from "../../store/useCartStore";
import { CartEmptyImage } from "../../images/jpeg/imagesPng";
import { useUser } from "../../auth/auth";
const CartDrawer = () => {
  const { isDesktopOrLaptop } = useDeviceProperties();
  const { CartDrawer, setCartDrawer } = useCartDrawerState();
  const { cart, getSubTotal } = useCartState();
  const user = useUser();
  const toggleDrawer = () => {
    setCartDrawer(!CartDrawer);
  };
  // const displayCartItem = {cart?.items?.length}
  // cart.items?.map((cartItem: any) => (
  //   <CartItem
  //     key={cartItem._id}
  //     name={cartItem.product.name}
  //     price={cartItem.product.price}
  //     priceSymbol={cartItem.product.priceSymbol}
  //     image={cartItem.product.coverPhoto}
  //     quantity={cartItem.quantity}
  //     _id={cartItem._id}
  //     rating={0}
  //     product={cartItem.product}
  //     description={""}
  //   />
  // ));
  return (
    <Drawer
      open={CartDrawer}
      onClose={toggleDrawer}
      direction="right"
      duration={1000}
      className="h-10 overflow-y-scroll scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-pink-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      style={{
        width: isDesktopOrLaptop ? "40vw" : "100vw",
        height: "100%",
        zIndex: "99999999999999999",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <div className="relative  w-[95%] m-auto h-full">
        <div className={style.iconContainer}>
          <XCircleIcon className={style.icons} onClick={() => toggleDrawer()} />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="grid h-fit grid-cols-1 gap-3 mb-5 text-sm">
            {cart?.items?.length > 0 ? (
              cart.items.map((cartItem: any) => (
                <CartItem
                  key={cartItem._id}
                  name={cartItem.product.name}
                  price={cartItem.product.price}
                  priceSymbol={cartItem.product.priceSymbol}
                  image={cartItem.product.coverPhoto}
                  quantity={cartItem.quantity}
                  _id={cartItem._id}
                  rating={0}
                  product={cartItem.product}
                  description={""}
                />
              ))
            ) : (
              <div className="grid h-full place-content-center place-items-center">
                <Image
                  src={CartEmptyImage.src}
                  alt={CartEmptyImage.src}
                  width={500}
                  height={500}
                />
                {cart?.items?.length === 0 && "Your cart is empty"}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between py-2 text-xl capitalize w-[95%] m-auto">
              <h1 className="">subTotal:</h1>
              <h2>$ {formatToCurrency(getSubTotal())}</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 m-auto mb-5 text-sm  w-[95%]">
              <Link href={PagesRoutes.products} onClick={() => toggleDrawer()}>
                <button className={style.btnOutline}> continue shopping</button>
              </Link>
              <Link
                href={PagesRoutes.shoppingCart}
                onClick={() => toggleDrawer()}
              >
                <button className={style.btn}> view cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
