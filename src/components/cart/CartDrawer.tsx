// "use client";
import React, { useState } from "react";
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
const CartDrawer = () => {
  const { CartDrawer, setCartDrawer } = useCartDrawerState();
  const toggleDrawer = () => {
    setCartDrawer(!CartDrawer);
  };
  const displayCartItem = dummyProductsData.map((cartItem: Product) => (
    <CartItem
      key={cartItem._id}
      name={cartItem.name}
      price={cartItem.price}
      priceSymbol={cartItem.priceSymbol}
      rating={cartItem.rating}
      image={cartItem.image}
      images={cartItem.images}
      description={cartItem.description}
      _id={cartItem._id}
    />
  ));
  return (
    <Drawer
      open={CartDrawer}
      onClose={toggleDrawer}
      direction="right"
      duration={1000}
      className="h-10 overflow-y-scroll scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-pink-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      style={{
        width: "40vw",
        height: "100%",
        zIndex: "99999999999999999",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <div className="relative  w-[95%] m-auto">
        <div className={style.iconContainer}>
          <XCircleIcon className={style.icons} onClick={() => toggleDrawer()} />
        </div>
        <div className="grid grid-cols-1 gap-3 mb-5 text-sm">
          {displayCartItem}
        </div>
        <div className="flex items-center justify-between py-2 text-xl capitalize">
          <h1 className="">subTotal:</h1>
          <h2>$ 12343</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
          <Link href={PagesRoutes.products} onClick={() => toggleDrawer()}>
            <button className={style.btnOutline}> continue shopping</button>
          </Link>
          <Link href={PagesRoutes.shoppingCart} onClick={() => toggleDrawer()}>
            <button className={style.btn}> view cart</button>
          </Link>
        </div>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
