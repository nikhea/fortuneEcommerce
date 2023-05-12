import React, { FC } from "react";
import Image from "next/image";
import style from "./style/product.module.scss";
import { Product } from "../../interface/ProductsDataInterface";
import { useQueryClient } from "@tanstack/react-query";
import NiceModal from "@ebay/nice-modal-react";
import { fetchSingleProducts } from "../../services/shared/products";
import {
  ShoppingCartIcon,
  HeartIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { PagesRoutes } from "../../routes/ PagesRoutes";
import { formatToCurrency } from "../../utils/formateNumbers";
import RatingStar from "../FormElement/RatingStar/RatingStar";
import { useAddToCart } from "../../Hooks/useCart/useAddToCart";
import { useAddWishlist } from "../../Hooks/useWishlist/useAddWishlist";
import IconsLoading from "../UI/Loading/IconsLoading";

const LeatestProductList: FC<Product> = ({
  _id,
  name,
  coverPhoto,
  images,
  description,
  price,
  rating,
  priceSymbol,
  product,
}) => {
  const queryClient = useQueryClient();
  const { AddCart, AddCartisLoading } = useAddToCart();
  const { AddWishlist, AddWishlistisLoading } = useAddWishlist();
  const handleAddToCart = (product: any, quantity: number, _id: string) => {
    AddCart(product);
  };
  const showProductModal = (id: any) => {
    NiceModal.show("product-modal", { productId: id });
  };
  const productFetch = (id: any) => {
    queryClient.prefetchQuery({
      queryKey: ["products", id],
      queryFn: () => fetchSingleProducts(id),
    });
  };
  return (
    <div
      className={`${style.cards} group `}
      onMouseEnter={() => productFetch(_id)}
    >
      <div className={style.upperPart}>
        <div
          className={`${style.iconsContainer} opacity-0 group-hover:opacity-100`}
        >
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
            onClick={() => showProductModal(name)}
          />
        </div>
        <div className={style.imgContainer}>
          <Image
            src={coverPhoto}
            alt={name}
            layout="responsive"
            width={900}
            height={900}
            className={`${style.img} group-hover:scale-110`}
          />
        </div>
      </div>
      <div className={style.textContainer}>
        <Link href={`${PagesRoutes.products}/${name}`}>
          <h6 className={style.h6}>{name}</h6>
        </Link>
        <p className={style.text}>{description}</p>
        <div className={style.priceRateContainer}>
          <h2>
            <span className="mr-1"> {priceSymbol}</span>
            {formatToCurrency(price)}
          </h2>
          <div>
            <RatingStar value={rating} size={24} edit={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeatestProductList;
