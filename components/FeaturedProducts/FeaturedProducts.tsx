import React from "react";
import FeaturedProductCards from "./components/FeaturedProductCards";
import { Image1 } from "../../images/jpeg/imagesPng";
import style from "./style/FeaturedProducts.module.scss";
const FeaturedProducts = () => {
  return (
    <div className={style.FeaturedProducts}>
      <div className="container">
        <h1>Featured Products</h1>
        <FeaturedProductCards featuredProducts={FeaturedProductsData} />
      </div>
    </div>
  );
};

export default FeaturedProducts;

const FeaturedProductsData = [
  {
    _id: "323434",
    name: "luxury bedroom chair",
    image: "http://127.0.0.1:8887/jpeg/chairLuxury.png",
    images: [],
    price: 5544,
    rating: 5,
    priceSymbol: "$",
  },
  {
    _id: "323434",
    name: "luxury bedroom chair",
    image: Image1,
    images: [],
    price: 5544,
    rating: 3,
    priceSymbol: "$",
  },
  {
    _id: "323434",
    name: "luxury bedroom chair",
    image: "http://127.0.0.1:8887/jpeg/chairLuxury.png",
    images: [],
    price: 5544,
    rating: 2,
    priceSymbol: "$",
  },
  {
    _id: "323434",
    name: "luxury bedroom chair",
    image: "http://127.0.0.1:8887/jpeg/chairLuxury.png",
    images: [],
    price: 5544,
    rating: 1,
    priceSymbol: "$",
  },
  {
    _id: "323434",
    name: "luxury bedroom chair",
    image: "http://127.0.0.1:8887/jpeg/chairLuxury.png",
    images: [],
    price: 5544,
    rating: 5,
    priceSymbol: "$",
  },
  {
    _id: "323434",
    name: "luxury bedroom chair",
    image: "http://127.0.0.1:8887/jpeg/chairLuxury.png",
    images: [],
    price: 5544,
    rating: 4,
    priceSymbol: "$",
  },
  {
    _id: "323434",
    name: "luxury bedroom chair",
    image: "http://127.0.0.1:8887/jpeg/chairLuxury.png",
    images: [],
    price: 5544,
    rating: 3,
    priceSymbol: "$",
  },
];
