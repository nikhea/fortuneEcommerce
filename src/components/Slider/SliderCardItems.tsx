import React, { FC } from "react";
import { IRelatedProductItem } from "../../interface/ProductsDataInterface";
import Image from "next/image";
import Link from "next/link";
import { PagesRoutes } from "../../routes/ PagesRoutes";
import RatingStar from "../FormElement/RatingStar/RatingStar";
import {
  ShoppingCartIcon,
  HeartIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";
import IconsLoading from "../UI/Loading/IconsLoading";
import { useAddToCart } from "../../Hooks/useCart/useAddToCart";
import { useAddWishlist } from "../../Hooks/useWishlist/useAddWishlist";
import style from "./SliderCardItems.module.scss";
import NiceModal from "@ebay/nice-modal-react";
const SliderCardItems: FC<any> = ({
  _id,
  image,
  name,
  price,
  priceSymbol,
  rating,
  product,
}) => {
  const { AddCart, AddCartisLoading } = useAddToCart();
  const { AddWishlist, AddWishlistisLoading } = useAddWishlist();
  const handleAddToCart = (product: any, quantity: number, _id: string) => {
    AddCart(product);
  };
  const showProductModal = (slug: any) => {
    NiceModal.show("product-modal", { slug });
  };
  return (
    <div className="grid h-full transition-all duration-500 ease-in delay-200 group hover:cursor-pointer place-content-center">
      <div className="relative overflow-hidden rounded-md ">
        <div className="absolute bottom-0 right-0 z-20 flex flex-col transition-all duration-500 ease-in delay-200 opacity-0 group-hover:opacity-100">
          {AddCartisLoading ? (
            <IconsLoading />
          ) : (
            <ShoppingCartIcon
              className={style.icons}
              onClick={() => handleAddToCart(product, 1, _id)}
            />
          )}
          {AddWishlistisLoading ? (
            <IconsLoading />
          ) : (
            <HeartIcon
              className={style.icons}
              onClick={() => AddWishlist(_id)}
            />
          )}

          <MagnifyingGlassPlusIcon
            className={style.icons}
            // onClick={() => showProductModal(slug)}
          />
        </div>
        <Image
          src={image}
          alt={name}
          width={190}
          height={190}
          className="object-cover transition-all duration-500 ease-in delay-200 rounded-md hover:scale-110"
        />
      </div>
      <div>
        <Link href={`${PagesRoutes.products}/${_id}`}>
          <h6 className="text-sm capitalize ">{name}</h6>
        </Link>
        <RatingStar value={rating} size={20} edit={false} />
        <h2 className="text-sm capitalize ">
          <span className="mr-1"> {priceSymbol}</span>
          {price}
        </h2>
      </div>
    </div>
  );
};

export default SliderCardItems;
