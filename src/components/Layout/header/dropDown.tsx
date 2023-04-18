import React, { useState } from "react";
import { useRouter } from "next/router";

import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import Link from "next/link";
import {
  UserPlusIcon,
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { TbBrandWish } from "react-icons/tb";
import { PagesRoutes } from "../../../routes/ PagesRoutes";
import { logoutFn, useLogout, useUser } from "../../../auth/auth";
import { toast } from "react-toastify";
const style = {
  Menu: `min-w-[150px] mx-auto  flex flex-col rounded-[10px] py-1 mt-2 text-[#0D0E43]`,
  MenuItem: `!mb-2`,
  MenuItemLink: `flex items-center mt-4 mx-3 w-full capitalize`,
  MenuItemLinkText: `text-[1rem] `,
  icons: `h-6 w-6 mr-2`,
};
const dropDown = ({ children }: any) => {
  const router = useRouter();
  const user = useUser();
  const logout = useLogout({});
  console.log(user.data?.email);

  // const user = false;.
  const [drop, setDrop] = useState(false);

  function onVisibleChange(visible: any) {
    setDrop((prevDrop: any) => !prevDrop);
  }
  const logoutUser = () => {
    logout.mutate(
      {},
      {
        onSuccess: () => {
          // router.push("/");
          toast.success("LoggedOut Successfully");
        },
      }
    );
  };
  const menu = (
    <Menu className={style.Menu}>
      <MenuItem key="0" className={style.MenuItem}>
        {!user.data?.email ? (
          <>
            <Link
              href={PagesRoutes.register}
              shallow
              className={style.MenuItemLink}
            >
              <UserPlusIcon className={style.icons} />
              <p className={style.MenuItemLinkText}>register</p>
            </Link>
            <Link
              href={PagesRoutes.login}
              shallow
              className={style.MenuItemLink}
            >
              <ArrowLeftOnRectangleIcon className={style.icons} />
              <p className={style.MenuItemLinkText}>login</p>
            </Link>
          </>
        ) : (
          <>
            <Link
              href={PagesRoutes.wishList}
              shallow
              className={style.MenuItemLink}
            >
              <TbBrandWish className={style.icons} />
              <p className={style.MenuItemLinkText}>wish list</p>
            </Link>
            <Link href="/settings" shallow className={style.MenuItemLink}>
              <Cog6ToothIcon className={style.icons} />
              <p className={style.MenuItemLinkText}>settings</p>
            </Link>
            <Link href="#" className={style.MenuItemLink} onClick={logoutUser}>
              <ArrowLeftOnRectangleIcon className={style.icons} />
              <p className={style.MenuItemLinkText}>logout</p>
            </Link>
          </>
        )}
      </MenuItem>
    </Menu>
  );
  return (
    <Dropdown
      trigger={["click"]}
      overlay={menu}
      animation="slide-up"
      onVisibleChange={onVisibleChange}
    >
      {children}
    </Dropdown>
  );
};

export default dropDown;
