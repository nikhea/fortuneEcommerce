"use client";
import style from "./style/CategoriesSiderBar.module.scss";
import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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
        className="my-0 cursor-pointer group w-full hover:text-primary  py-3 h-fit px-2 m-auto"
      >
        <Link href="#" className="flex items-center gap-1">
          <span>{categories.icon}</span>
          <h1> {categories.name}</h1>
        </Link>
        <div
          className={`${style.categorieslg} text-black hidden border-l-[1px] border-l-gray-200  opactity-0 group-hover:opacity-100  group-hover:block transition-all duration-500 ease-in delay-200`}
        >
          {JSON.stringify(categories.subcategories)}
        </div>
      </li>
    );
  });
  return (
    <div className={`${style.categoriesSm} `}>
      <ul className="my-1 ">{displayCategoriesData}</ul>
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

// export const categoriesData = [
//   {
//     name: "Living Room Furniture",
//     subcategories: [
//       "Sofas & Couches",
//       "Sectionals",
//       "Chairs",
//       "Coffee & Accent Tables",
//       "TV Stands & Entertainment Centers",
//       "Bookshelves & Cabinets",
//     ],
//   },
//   {
//     name: "Bedroom Furniture",
//     subcategories: [
//       "Beds",
//       "Dressers & Chests",
//       "Nightstands",
//       "Armoires & Wardrobes",
//       "Vanities",
//       "Bedroom Sets",
//     ],
//   },
//   {
//     name: "Dining Room Furniture",
//     subcategories: [
//       "Dining Tables",
//       "Dining Chairs",
//       "Buffets & Sideboards",
//       "Bar & Counter Stools",
//       "Dining Sets",
//     ],
//   },
//   {
//     name: "Home Office Furniture",
//     subcategories: [
//       "Desks",
//       "Office Chairs",
//       "Bookcases",
//       "File Cabinets",
//       "Office Sets",
//     ],
//   },
//   {
//     name: "Outdoor Furniture",
//     subcategories: [
//       "Patio Sets",
//       "Outdoor Seating",
//       "Outdoor Tables",
//       "Outdoor Dining",
//       "Outdoor Accessories",
//     ],
//   },
//   {
//     name: "Mattresses & Bedding",
//     subcategories: [
//       "Mattresses",
//       "Bedding Sets",
//       "Pillows",
//       "Mattress Toppers",
//       "Mattress Protectors",
//     ],
//   },
// ];
export const categoriesData = [
  {
    name: "Furniture",
    icon: <ShoppingCartIcon className={style.icons} />,
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
    name: "Furniture",
    icon: <ShoppingCartIcon className={style.icons} />,
    subcategories: ["Sofas & Couches"],
  },
];
