"use client";
import { useState } from "react";
import style from "./style/mainHeader.module.scss";
import HeaderIcon from "./headerIcon";
import { NavItems } from "./headerData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
const mainNav = () => {
  const pathname = usePathname();
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
      <Link href={links.link}>{links.name} </Link>
    </li>
  ));
  return (
    <div
      className={` ${style.mainHeaderBgNormal} ${
        background ? `${style.mainHeaderBgActive} transistionMode` : ""
      }`}
    >
      <div className={`${style.mainHeader} container`}>
        <Link href="/">
          <HeaderIcon />
        </Link>
        <ul>{displayNameItems}</ul>
        <div className={style.subHeaderLeft}>
          <Link href="/login">
            <div className={style.subHeader__content}>
              <UserCircleIcon className={style.icons} />
              <h1>login</h1>
            </div>
          </Link>
          <div className={`${style.subHeader__content} relative`}>
            <ShoppingCartIcon className={style.icons} />
            <span className="absolute left-[12px] top-[-5px] bg-primary  w-5 h-5 rounded-full flex justify-center items-center">
              <h1 className="text-[12px] text-white">78</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mainNav;
