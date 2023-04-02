import React from "react";
import WishList from "../../src/components/WishList/WishList";
import WishListHeader from "../../src/components/WishList/WishListHeader";
import { dummyProductsData } from "../../src/seed/seedDB";

const wishList = () => {
  return (
    <div className="container">
      <WishListHeader productsLength={dummyProductsData.length} />
      <WishList products={dummyProductsData} />
    </div>
  );
};

export default wishList;
