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

const ProductListItem: FC<Product> = ({
  _id,
  name,
  image,
  images,
  description,
  price,
  rating,
  priceSymbol,
}) => {
  return (
    <div className={`${style.cards} group `}>
      <div className={style.upperPart}>
        <div className={`${style.iconsContainer} group-hover:opacity-100`}>
          <ShoppingCartIcon className={style.icons} />
          <HeartIcon className={style.icons} />
          <MagnifyingGlassPlusIcon className={style.icons} />
        </div>
        <div className={style.imgContainer}>
          <Image
            src={image}
            alt={name}
            className={`${style.img} group-hover:scale-125`}
          />
        </div>
      </div>
      <div className={style.textContainer}>
        <Link href="#">
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
