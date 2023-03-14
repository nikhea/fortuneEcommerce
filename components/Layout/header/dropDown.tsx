import React, { useState } from "react";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import Link from "next/link";
import {
  UserPlusIcon,
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
const style = {
  Menu: `min-w-[150px] mx-auto  flex flex-col rounded-[10px] py-1 mt-2`,
  MenuItem: `!mb-2`,
  MenuItemLink: `flex items-center mt-4 mx-3 w-full capitalize`,
  MenuItemLinkText: `text-[1rem] `,
  icons: `h-6 w-6 mr-2`,
};
const dropDown = ({ children }: any) => {
  const user = false;
  const [drop, setDrop] = useState(false);

  function onVisibleChange(visible: any) {
    setDrop((prevDrop: any) => !prevDrop);
  }
  const menu = (
    <Menu className={style.Menu}>
      <MenuItem key="0" className={style.MenuItem}>
        {!user ? (
          <>
            <Link href="/register" shallow className={style.MenuItemLink}>
              <UserPlusIcon className={style.icons} />
              <p className={style.MenuItemLinkText}>register</p>
            </Link>
            <Link href="/login" shallow className={style.MenuItemLink}>
              <ArrowLeftOnRectangleIcon className={style.icons} />
              <p className={style.MenuItemLinkText}>login</p>
            </Link>
          </>
        ) : (
          <>
            <Link href="/settings" shallow className={style.MenuItemLink}>
              <Cog6ToothIcon className={style.icons} />
              <p className={style.MenuItemLinkText}>settings</p>
            </Link>
            <Link href="#" className={style.MenuItemLink}>
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
