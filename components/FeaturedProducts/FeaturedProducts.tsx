import React from "react";
import FeaturedProductCards from "./components/FeaturedProductCards";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from "../../images/jpeg/imagesPng";
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
    image: Image1,
    images: [],
    price: 5544,
    rating: 5,
    priceSymbol: "$",
  },
  {
    _id: "323434",
    name: "luxury bedroom chair",
    image: Image2,
    images: [],
    price: 5544,
    rating: 3,
    priceSymbol: "$",
  },
  {
    _id: "323434",
    name: "luxury bedroom chair",
    image: Image3,
    images: [],
    price: 5544,
    rating: 2,
    priceSymbol: "$",
  },
  {
    _id: "323434",
    name: "luxury bedroom chair",
    image: Image4,
    images: [],
    price: 5544,
    rating: 1,
    priceSymbol: "$",
  },
  {
    _id: "323434",
    name: "luxury bedroom chair",
    image: Image5,
    images: [],
    price: 5544,
    rating: 5,
    priceSymbol: "$",
  },
  {
    _id: "323434",
    name: "luxury bedroom chair",
    image: Image6,
    images: [],
    price: 5544,
    rating: 4,
    priceSymbol: "$",
  },
  {
    _id: "323434",
    name: "luxury bedroom chair",
    image: Image7,
    images: [],
    price: 5544,
    rating: 3,
    priceSymbol: "$",
  },
];

// "http://localhost:3000/_next/image?url=http%3A%2F%2F127.0.0.1%3A8887%2Fjpeg%2FchairLuxury.png&w=640&q=75",
// http://127.0.0.1:8887/jpeg/chairLuxury.png
