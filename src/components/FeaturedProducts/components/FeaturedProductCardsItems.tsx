import style from "../style/FeaturedProductCardsItems.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Product } from "../../../interface/ProductsDataInterface";
import RatingStar from "../../FormElement/RatingStar/RatingStar";
import {
  ShoppingCartIcon,
  HeartIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";
import { PagesRoutes } from "../../../routes/ PagesRoutes";

const FeaturedProductCardsItems: FC<Product> = ({
  _id,
  name,
  price,
  image,
  images,
  rating,
  priceSymbol,
}) => {
  return (
    <div
      className={`${style.cards} group transition-all duration-500 ease-in delay-200`}
    >
      <div className="relative flex flex-col  w-full h-full  bg-[#F6F7FB] rounded-md py-3 items-center  ">
        <div className="absolute flex transition-all duration-500 ease-in delay-200 opacity-0 left-2 group-hover:opacity-100 ">
          <ShoppingCartIcon className={style.icons} />
          <HeartIcon className={style.icons} />
          <MagnifyingGlassPlusIcon className={style.icons} />
        </div>
        <div className="mt-[30px] w-[200px] overflow-hidden">
          <Image
            src={image}
            alt={name}
            // width={300}
            // height={500}
            className="h-[200px] object-cover group-hover:scale-125 transition-all duration-500 ease-in delay-200"
          />
        </div>
        {/* <Link className={style.link} href="#">
          view details
        </Link> */}
      </div>
      <div className="w-full h-full px-3 py-3 ">
        <Link href={`${PagesRoutes.products}/${_id}`}>
          <h6 className=" text-xl capitalize text-[#151875]  font-bold  ">
            {name}
          </h6>
        </Link>
        <div className="flex items-center justify-between ">
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

export default FeaturedProductCardsItems;
