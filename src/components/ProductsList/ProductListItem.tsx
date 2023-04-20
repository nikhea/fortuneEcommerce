import React, { FC } from "react";
import Image from "next/image";
import style from "./style/product.module.scss";
import { Product } from "../../interface/ProductsDataInterface";
import {
  ShoppingCartIcon,
  HeartIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import RatingStar from "../FormElement/RatingStar/RatingStar";
import { PagesRoutes } from "../../routes/ PagesRoutes";
import NiceModal from "@ebay/nice-modal-react";
import { useQueryClient } from "@tanstack/react-query";
import { fetchSingleProducts } from "../../services/shared/products";

const ProductListItem: FC<Product> = ({
  _id,
  name,
  coverPhoto,
  images,
  description,
  price,
  rating,
  priceSymbol,
}) => {
  const queryClient = useQueryClient();
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
          <ShoppingCartIcon className={style.icons} />
          <HeartIcon className={style.icons} />
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
            {price}
          </h2>
          <div>
            <RatingStar value={rating} size={24} edit={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
{
  /* <div className="absolute flex transition-all duration-500 ease-in delay-200 opacity-0 left-2 group-hover:opacity-100 "> */
}
