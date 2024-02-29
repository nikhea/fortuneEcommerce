import React from "react";
import Image from "next/image";
import { TableBannerImage, WatchBannerImage } from "../../images/png";
import style from "./ThreeColumnHome.module.scss";
import { Product } from "../../interface/ProductsDataInterface";
import { formatToCurrency } from "../../utils/formateNumbers";
import { PagesRoutes } from "../../routes/ PagesRoutes";
import Link from "next/link";
const ThreeColumnHome = ({ products }: any) => {
  const { first, second } = dataThreeColumnHome;
  const displayProducts = products
    ?.slice(0, 3)
    .map((product: Product, index: any) => (
      <div
        key={product._id}
        className="flex align-baseline text-[#151875] gap-2  items-center"
      >
        <div className="flex p-3 rounded-md shadow-md bg-secondary">
          <Image
            src={product.coverPhoto}
            alt={product.name}
            width={100}
            height={100}
          />
        </div>
        <div>
          <Link href={`${PagesRoutes.products}/${product.slug}`}>
            <h1 className="font-bold ">
              {product.name.length > 20
                ? `${product.name.slice(0, 30)}...`
                : product.name}
            </h1>
          </Link>

          <p>
            <span className="mr-1">{product.priceSymbol}</span>
            {formatToCurrency(product.price)}
          </p>
        </div>
      </div>
    ));
  return (
    <div className="container mb-72 ">
      <div className="grid grid-cols-1 gap-3 rounded-md md:grid-cols-2 lg:grid-cols-3">
        <div className={`${first.bgColor} ${style.dateCardItems} `}>
          <h1>{first.title}</h1>
          <p>
            {first.linkText}
            <hr className=" w-[115px]" />
          </p>
          <div className={`${style.imageContainer}`}>
            <Image
              className=""
              src={first.Image}
              alt={first.title}
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className={`${second.bgColor} ${style.dateCardItems} `}>
          <h1>{second.title}</h1>
          <p>{second.linkText}</p>
          <hr className=" w-[115px]" />
          <div className={`${style.imageContainer}`}>
            <Image
              className=""
              src={second.Image}
              alt={second.title}
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between w-full overflow-x-hidden gap-y-2">
          {displayProducts}
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnHome;
const dataThreeColumnHome = {
  first: {
    title: "23% off in all products",
    linkText: "coming soon",
    bgColor: "bg-pink-100",
    Image: WatchBannerImage,
  },
  second: {
    title: "23% off in all products",
    linkText: "coming soon",
    bgColor: "bg-secondary",
    Image: TableBannerImage,
  },
};

// const products = [
//   {
//     title: "text text",
//     price: "$249.99",
//     image:
//       "https://hekto.miladsdgh.ir/static/media/watch-banner.c78134dd805179d2da35.png",
//   },
//   {
//     title: "text text",
//     price: "$249.99",
//     image:
//       "https://hekto.miladsdgh.ir/static/media/watch-banner.c78134dd805179d2da35.png",
//   },
//   {
//     title: "text text",
//     price: "$249.99",
//     image:
//       "https://hekto.miladsdgh.ir/static/media/watch-banner.c78134dd805179d2da35.png",
//   },
// ];
