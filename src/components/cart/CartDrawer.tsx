"use client";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useCartDrawerState } from "../../store/useShoppingCartSideBar";
import { PagesRoutes } from "../../routes/ PagesRoutes";
import style from "./style/CartDrawer.module.scss";
import { dummyProductsData } from "../../seed/seedDB";
import Image from "next/image";
import RatingStar from "../FormElement/RatingStar/RatingStar";
import Button from "../FormElement/Button/Button";
import Link from "next/link";
import {
  ArrowLongLeftIcon,
  XCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
const CartDrawer = () => {
  const { CartDrawer, setCartDrawer } = useCartDrawerState();
  const toggleDrawer = () => {
    setCartDrawer(!CartDrawer);
  };
  return (
    <Drawer
      open={CartDrawer}
      onClose={toggleDrawer}
      direction="right"
      duration={1000}
      // className="w-[80vw]"
      className="h-10 scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-pink-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
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
        <Link href={PagesRoutes.shoppingCart} onClick={() => toggleDrawer()}>
          <Button isCurve primary padding uppercase full>
            view cart
          </Button>
        </Link>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
