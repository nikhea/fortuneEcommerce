import React from "react";
import Button from "../../src/components/FormElement/Button/Button";
import WishList from "../../src/components/WishList/WishList";
import WishListHeader from "../../src/components/WishList/WishListHeader";
import { dummyProductsData } from "../../src/seed/seedDB";
import { useFetchWishlist } from "../../src/Hooks/useFetchWishlist";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchWishlist } from "../../src/services/authenticated/wishlist";

interface Props {
  initialData: {
    wishlist: any;
  };
}
const wishList = (props: Props) => {
  // const wishlist = useFetchWishlist(props);

  return (
    <div className="container m-auto">
      <WishListHeader productsLength={dummyProductsData.length} />
      <WishList products={dummyProductsData} />
      <div className="grid my-3 text-center place-content-center">
        <button className="p-2 text-white capitalize rounded-md bg-primary">
          load more
        </button>
      </div>
    </div>
  );
};

export default wishList;
