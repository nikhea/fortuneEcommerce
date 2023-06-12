import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./CategoriesGrid.style.module.scss";
import useDeviceProperties from "../../Hooks/UseMediaQueries";
import { PagesRoutes } from "../../routes/ PagesRoutes";

const CategoriesGrid = ({ categories }: any) => {
  const { isTabletOrMobile } = useDeviceProperties();
  const displayCategoriesLg = categories.data.map((category: any) => (
    <Link
      href={`${PagesRoutes.shop}/${category.name}`}
      key={category._id}
      className={`${style.gridItem} group`}
    >
      <Image
        height={300}
        width={300}
        src={category.coverPhoto}
        alt={category.name}
        className="object-cover h-full rounded-md  "
      />
      <h1 className="capitalize group-hover:text-primary text-center mt-3">
        {category.name}
      </h1>
    </Link>
  ));
  const displayCategories = categories.data.slice(0, 4).map((category: any) => (
    <Link href="" key={category._id} className={`${style.gridItem} group`}>
      <Image
        height={300}
        width={300}
        src={category.coverPhoto}
        alt={category.name}
        className="object-cover h-full rounded-md  "
      />
      <h1 className="capitalize text-center mt-3 group-hover:text-primary">
        {category.name}
      </h1>
    </Link>
  ));
  return (
    <div className="container mt-5">
      <h1 className="text-2xl capitalize text-[#151875]  font-bold text-center my-5">
        top categories
      </h1>
      <div
        // style={{ margin: "0px 0", gap: "12px" }}
        className={style.gridContainer}
      >
        {isTabletOrMobile ? displayCategories : displayCategoriesLg}
      </div>
    </div>
  );
};

export default CategoriesGrid;
{
  /* <Link href="" key={category._id} className={style.gridItem}>
<Image
  layout="fill"
  // height="100"
  src={category.coverPhoto}
  alt={category.name}
  className="object-cover"
/>
<h1 className="absolute z-50 grid w-full h-full text-white capitalize place-items-center ">
  {category.name}
</h1>
<div className="absolute top-0 left-0 w-full h-full bg-fixed bg-black opacity-60" />
</Link> */
}
