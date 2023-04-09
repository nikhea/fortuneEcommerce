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
import { useCartState } from "../../../store/useCartStore";

const FeaturedProductCardsItems: FC<Product> = ({
  _id,
  name,
  price,
  coverPhoto,
  images,
  rating,
  priceSymbol,
  product,
}) => {
  const { addToCart } = useCartState();

  return (
    <div
      className={`${style.cards} group transition-all duration-500 ease-in delay-200 hover:cursor-pointer h-[500]`}
    >
      <div className="relative flex flex-col  w-full h-full  bg-[#F6F7FB] rounded-md  items-center  ">
        <div className="absolute flex transition-all duration-500 ease-in delay-200 opacity-0 left-2 group-hover:opacity-100 z-20 mt-3">
          <ShoppingCartIcon
            className={style.icons}
            onClick={() =>
              addToCart({
                product,
                quantity: 1,
              })
            }
          />
          <HeartIcon className={style.icons} />
          {/* <div className="bg-red-200 flex justify-center items-center rounded-full p-1 h-full "> */}
          <MagnifyingGlassPlusIcon className={style.icons} />
          {/* </div> */}
        </div>
        {/* h-[200px]mt-[30px] w-[200px] */}
        <div className=" h-full w-full overflow-hidden rounded-t-md">
          <Image
            src={coverPhoto}
            alt={name}
            // layout="fill"
            // width={200}
            // height={200}
            layout="responsive"
            width={900}
            height={900}
            className=" overflow-hidden object-cover rounded-t-md group-hover:scale-105 transition-all duration-500 ease-in delay-200"
          />
          {/* h-[200px] w-[200px] */}
        </div>
        {/* <Link className={style.link} href="#">
          view details
        </Link> */}
      </div>
      <div className="w-full h-full px-3 py-3 ">
        <Link href={`${PagesRoutes.products}/${_id}`}>
          <h6 className=" text-md capitalize text-[#151875]  font-bold  ">
            {name} {rating}
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
