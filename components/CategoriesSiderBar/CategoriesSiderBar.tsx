"use client";
import style from "./style/CategoriesSiderBar.module.scss";
import { useState } from "react";

const ProductSiderBar = () => {
  const [show, setShow] = useState(1);

  // const handleShow = () => {
  //   if (show === false) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  // };
  const handleMouseEnter = (index: number) => {
    // console.log(index);
  };
  const displayCategoriesData = categoriesData.map((categories, index) => {
    return (
      <li
        // onClick={handleShow}
        key={index}
        onMouseEnter={() => handleMouseEnter(index)}
        className="my-0 cursor-pointer group w-full hover:bg-pink-200  py-3 h-fit px-2 m-auto"
      >
        {categories.name}
        <div
          className={`${style.categorieslg} hidden border-l-[1px] border-l-gray-200  opactity-0 group-hover:opacity-100  group-hover:block transition-all duration-500 ease-in delay-200`}
        >
          {JSON.stringify(categories.subcategories)}
        </div>
      </li>
    );
  });
  return (
    <div className={`${style.categoriesSm} `}>
      <ul className="my-2 ">{displayCategoriesData}</ul>
      {/* <div
        className={`${style.categorieslg} opacity-0 group-hover:opacity-100`}
      >
        ProductSiderBar Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Similique numquam voluptas delectus, sapiente earum aperiam
        placeat inventore? Excepturi fuga pariatur nemo accusamus asperiores,
        corrupti omnis. Quasi quae nisi doloremque accusamus?
      </div> */}
    </div>
  );
};

export default ProductSiderBar;
// className={`${style.categorieslg} ${!show ? "hidden" : "visible"}`}
// className={`${style.categorieslg} hidden opactity-0 group-hover:opacity-100  group-hover:block transition-all duration-500 ease-in delay-200`}

export const categoriesData = [
  {
    name: "Living Room Furniture",
    subcategories: [
      "Sofas & Couches",
      "Sectionals",
      "Chairs",
      "Coffee & Accent Tables",
      "TV Stands & Entertainment Centers",
      "Bookshelves & Cabinets",
    ],
  },
  {
    name: "Bedroom Furniture",
    subcategories: [
      "Beds",
      "Dressers & Chests",
      "Nightstands",
      "Armoires & Wardrobes",
      "Vanities",
      "Bedroom Sets",
    ],
  },
  {
    name: "Dining Room Furniture",
    subcategories: [
      "Dining Tables",
      "Dining Chairs",
      "Buffets & Sideboards",
      "Bar & Counter Stools",
      "Dining Sets",
    ],
  },
  {
    name: "Home Office Furniture",
    subcategories: [
      "Desks",
      "Office Chairs",
      "Bookcases",
      "File Cabinets",
      "Office Sets",
    ],
  },
  {
    name: "Outdoor Furniture",
    subcategories: [
      "Patio Sets",
      "Outdoor Seating",
      "Outdoor Tables",
      "Outdoor Dining",
      "Outdoor Accessories",
    ],
  },
  {
    name: "Mattresses & Bedding",
    subcategories: [
      "Mattresses",
      "Bedding Sets",
      "Pillows",
      "Mattress Toppers",
      "Mattress Protectors",
    ],
  },
];
