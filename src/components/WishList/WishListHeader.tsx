import React, { FC } from "react";

export type WishListHeader = {
  productsLength: number;
};
const WishListHeader: FC<WishListHeader> = ({ productsLength }) => {
  return (
    <div>
      <h1 className="text-2xl capitalize font-bold">wishList</h1>
      <p className="text-md capitalize  font-[300] my-5">
        you have {productsLength} items in your wishlist
      </p>
    </div>
  );
};

export default WishListHeader;
