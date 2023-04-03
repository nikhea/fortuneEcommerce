import React from "react";
import Button from "../../src/components/FormElement/Button/Button";
import WishList from "../../src/components/WishList/WishList";
import WishListHeader from "../../src/components/WishList/WishListHeader";
import { dummyProductsData } from "../../src/seed/seedDB";

const wishList = () => {
  return (
    <div className="container m-auto">
      <WishListHeader productsLength={dummyProductsData.length} />
      <WishList products={dummyProductsData} />
      <div className="text-center my-3 grid place-content-center">
        <button className=" bg-primary rounded-md text-white p-2 capitalize">
          load more
        </button>
      </div>
      {/* <Button isCurve primary padding uppercase>
        sign up
      </Button> */}
    </div>
  );
};

export default wishList;
