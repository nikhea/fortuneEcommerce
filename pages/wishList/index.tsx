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
  const wishlist = useFetchWishlist(props);

  return (
    <div className="container m-auto">
      <WishListHeader productsLength={dummyProductsData.length} />
      <WishList products={dummyProductsData} />
      {/* {JSON.stringify(wishlist)} */}
      <div className="grid my-3 text-center place-content-center">
        <button className="p-2 text-white capitalize rounded-md bg-primary">
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

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(["wishlist"], fetchWishlist);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       initialData: {
//         wishlist: queryClient.getQueryData(["wishlist"]),
//       },
//     },

//     revalidate: 10,
//   };
// }

// console.log(props.initialData.queries[0].state.data, "dskjkjsjjkj");

// initialData: {
//   categories: queryClient.getQueryData(["categories"]),
//   products: queryClient.getQueryData(["products"]),
// },
