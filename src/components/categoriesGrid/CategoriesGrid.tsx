import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./CategoriesGrid.style.module.scss";

const CategoriesGrid = ({ categories }: any) => {
  const displayCategories = categories.data.map((category: any) => (
    <Link href="" key={category._id} className={style.gridItem}>
      <Image
        layout="fill"
        // height="100"
        src={category.coverPhoto}
        alt={category.name}
        className="object-cover"
      />
      <h1 className="absolute z-50 capitalize grid place-items-center  w-full h-full text-white  ">
        {category.name}
      </h1>
      <div className=" w-full h-full top-0 left-0 absolute bg-black opacity-60 bg-fixed " />
    </Link>
  ));
  return (
    <div className="container mt-5">
      <h1 className="text-2xl capitalize text-[#151875]  font-bold text-center my-5">
        top categories
      </h1>
      <div className={style.gridContainer}>{displayCategories}</div>
    </div>
  );
};
{
  /* <div className="bg-red-200 w-full">{category.name}</div> */
}
export default CategoriesGrid;
