import React, { FC } from "react";
import {
  Product,
  ProductsProps,
  WishlistProps,
} from "../../interface/ProductsDataInterface";
import WishListItem from "./WishListItem";

const WishList: FC<WishlistProps> = ({ product, WishListId }) => {
  // console.log(product);

  // const displayProduct = products.map((product: Product) => (
  //   <div key={product._id}>
  //     <WishListItem
  //       name={product.name}
  //       rating={product.rating}
  //       status={product.status}
  //       price={product.price}
  //       priceSymbol={product.priceSymbol}
  //       image={product.image}
  //     />
  //     <div className="bg-gray-300 h-[.5px] w-full rounded-[8px] my-2" />
  //   </div>
  // ));
  return (
    <div className="grid place-content-center grid-cols-1">
      {/* {displayProduct} */}
      <div>
        <WishListItem
          name={product.name}
          rating={product.rating}
          status={product.status}
          price={product.price}
          priceSymbol={product.priceSymbol}
          image={product.coverPhoto}
          WishListId ={WishListId }
        />
        <div className="bg-gray-300 h-[.5px] w-full rounded-[8px] my-2" />
      </div>
    </div>
  );
};

export default WishList;
