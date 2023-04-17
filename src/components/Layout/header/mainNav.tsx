// "use client";
import { useState } from "react";
import style from "./style/mainHeader.module.scss";
import HeaderIcon from "./headerIcon";
import { NavItems } from "./headerData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserCircleIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import DropDown from "./dropDown";
import { PagesRoutes } from "../../../routes/ PagesRoutes";
import { useCartDrawerState } from "../../../store/useShoppingCartSideBar";
import { useMobileMenuStateState } from "../../../store/useMobileMenuState";
import useDeviceProperties from "../../../Hooks/UseMediaQueries";
import { useCartState } from "../../../store/useCartStore";
// import CartDrawerComponent from "../../cart/CartDrawer";

const mainNav = () => {
  const { cart } = useCartState();
  const { isDesktopOrLaptop, isTabletOrMobile } = useDeviceProperties();
  const pathname = usePathname();
  const { setCartDrawer } = useCartDrawerState();
  const { setMobileMenuState } = useMobileMenuStateState();
  const [background, setBackground] = useState(false);

  const ChangeBackground = () => {
    if (window.scrollY >= 90) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", ChangeBackground);
  }

  const displayNameItems = NavItems.map((links, idx) => (
    <li
      key={idx}
      className={`${
        pathname == links.link ? `${style.active} transistionMode` : ""
      }`}
    >
      <Link href={links.link} shallow>
        {links.name}
      </Link>
    </li>
  ));
  return (
    <>
      <div
        className={` ${style.mainHeaderBgNormal} ${
          background ? `${style.mainHeaderBgActive} transistionMode` : ""
        }`}
      >
        <div className={`${style.mainHeader} container`}>
          <Link href={PagesRoutes.home} shallow>
            <HeaderIcon />
          </Link>
          {isDesktopOrLaptop && <ul className="hidden">{displayNameItems}</ul>}
          <div className={style.subHeaderLeft}>
            {isDesktopOrLaptop && (
              <DropDown>
                <Link href="/#" shallow>
                  <div className={style.subHeader__content}>
                    <UserCircleIcon className={style.icons} />
                    <h1>Account</h1>
                  </div>
                </Link>
              </DropDown>
            )}
            {/* <Link href={PagesRoutes.shoppingCart} shallow> */}
            <div
              onClick={() => setCartDrawer(true)}
              className={`${style.subHeader__content} relative cursor-pointer`}
            >
              <ShoppingCartIcon className={style.icons} />
              <span className="absolute left-[12px] top-[-5px] bg-primary  w-5 h-5 rounded-full flex justify-center items-center">
                <h1 className="text-[12px] text-white">{cart.items.length}</h1>
              </span>
            </div>
            {isTabletOrMobile && (
              <div
                onClick={() => setMobileMenuState(true)}
                className={`${style.subHeader__content} relative cursor-pointer`}
              >
                <Bars3Icon className={style.icons} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default mainNav;
{
  /* <Link href={PagesRoutes.shoppingCart} shallow> */
}
