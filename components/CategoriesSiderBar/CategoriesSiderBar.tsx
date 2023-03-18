"use client";
import style from "./style/CategoriesSiderBar.module.scss";
import { useState } from "react";

const ProductSiderBar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (show === false) {
      setShow(true);
    }
    else {
      setShow(false);
    }
  };
  const displayCategoriesData = categoriesData.map((categories, index) => {
    return (
      <ul key={index}>
        <li onClick={handleShow} className="py-5 cursor-pointer">
          {categories.name}
        </li>
      </ul>
    );
  });
  return (
    <div className={`${style.categoriesSm}`}>
      {displayCategoriesData}
      <div className={`${style.categorieslg} ${!show ? "hidden" : "visible"}`}>
        ProductSiderBar Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Similique numquam voluptas delectus, sapiente earum aperiam
        placeat inventore? Excepturi fuga pariatur nemo accusamus asperiores,
        corrupti omnis. Quasi quae nisi doloremque accusamus?
      </div>
    </div>
  );
};

export default ProductSiderBar;

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
