import React from "react";
import WishList from "../../src/components/WishList/WishList";
import WishListHeader from "../../src/components/WishList/WishListHeader";
import { useFetchWishlist } from "../../src/Hooks/useWishlist/useFetchWishlist";
import PageLoading from "../../src/components/UI/Loading/PageLoading";

interface Props {
  initialData: {
    wishlist: any;
  };
}
const wishList = (props: Props) => {
  // const loading = true;
  const {
    wishlist,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useFetchWishlist(props);

  if (isLoading) {
    return <PageLoading />;
  }
  // const result = wishlist.map((item: any) => (
  //   <WishList key={item._id} WishListId={item._id} product={item.product} />
  // ));
  const result = wishlist?.pages.map((page, pageIndex) => (
    <React.Fragment key={pageIndex}>
      {page.data.map((item: any) => (
        <WishList key={item._id} WishListId={item._id} product={item.product} />
      ))}
    </React.Fragment>
  ));
  return (
    <div className="container m-auto">
      <WishListHeader productsLength={wishlist?.pages[0].count} />
      {result}
      <div className="grid my-3 text-center place-content-center">
        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="p-2 text-white capitalize rounded-md bg-primary"
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default wishList;
{
  /* <WishList products={dummyProductsData} /> */
}

{
  /* <button
onClick={() => fetchNextPage()}
disabled={isFetchingNextPage}
className="p-2 text-white capitalize rounded-md bg-primary"
>
{isFetchingNextPage ? "Loading..." : "Load More"}
</button>
{/* <button >
load more
</button> */
}
