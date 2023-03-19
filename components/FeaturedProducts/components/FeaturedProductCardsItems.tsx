import style from "../style/FeaturedProductCardsItems.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FeaturedProduct } from "../../../interface/FeaturedProductsDataInterface";
import RatingStar from "../../FormElement/RatingStar/RatingStar";
import {
  ShoppingCartIcon,
  HeartIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";

const FeaturedProductCardsItems: FC<FeaturedProduct> = ({
  name,
  price,
  image,
  images,
  rating,
  priceSymbol,
}) => {
  return (
    <div className={style.cards}>
      <div className="relative flex flex-col  w-full  bg-[#F6F7FB] rounded-md py-3 items-center mb-3 ">
        <div className="flex absolute left-2">
          <ShoppingCartIcon className={style.icons} />
          <HeartIcon className={style.icons} />
          <MagnifyingGlassPlusIcon className={style.icons} />
        </div>
        <div className="mt-[30px]">
          <Image src={image} alt={name} width={500} height={500} />
        </div>
        <Link className={style.link} href="#">
          view details
        </Link>
      </div>
      <div className="px-3">
        <h6 className=" text-xl capitalize text-[#151875]  font-bold  ">
          {name}
        </h6>
        <div className="flex items-center justify-between  py-3 ">
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