import React from "react";
import ImageContainer from "./ImageContainer";
import TextContainer from "./TextContainer";
import { Product } from "../../interface/ProductsDataInterface";
import { AiOutlineClose } from "react-icons/ai";
import NiceModal from "@ebay/nice-modal-react";

const productModal = ({ product }: any) => {
  const closeProductModal = () => {
    NiceModal.remove("product-modal");
  };
  return (
    <>
      <div className=" m-2 text-left w-[97%] flex justify-end">
        <AiOutlineClose
          size={20}
          onClick={closeProductModal}
          className="cursor-pointer  w-fit"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ImageContainer images={product.photos} />
        <TextContainer
          _id={product._id}
          name={product.name}
          price={product.price}
          rating={product.rating}
          priceSymbol={product.priceSymbol}
          description={product.description}
          product={product}
          quantity={product.quantity}
          slug={product.slug}
          shortDescription={product.shortDescription}
        />
      </div>
    </>
  );
};

export default productModal;

const product = {
  priceSymbol: "$",
  currency: "USD",
  _id: "64310ea98338e958dc1842e3",
  name: "2 In 1 Men's Short Sleeve Shorts Set - Black",
  description: "lorem 2 luxury bags",
  price: 2893,
  quantity: 5,
  sold: 0,
  photos: [
    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/68/202776/1.jpg?0636",
    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/68/202776/3.jpg?6987",
    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/68/202776/4.jpg?6987",
  ],
  coverPhoto:
    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/68/202776/1.jpg?0636",
  specifications: [
    {
      name: "sku",
      value: "73829827jldsjl",
      _id: "64310ea98338e958dc1842e4",
    },
    {
      name: "model",
      value: "black",
      _id: "64310ea98338e958dc1842e5",
    },
  ],
  availability: {
    inStock: true,
    quantity: 5,
    deliveryDate: "2023-04-07T11:47:02.000Z",
    _id: "64310ea98338e958dc1842e6",
  },
  category: {
    _id: "6430f9a3faa11777be61da74",
    name: "fashion",
    description: "fashion categories",
    subcategories: [
      "643100f920ec1db40f43e29a",
      "6431011520ec1db40f43e2a1",
      "643101c620ec1db40f43e2b1",
      "643101e020ec1db40f43e2b9",
    ],
    products: [],
    createdAt: "2023-04-08T05:20:35.823Z",
    updatedAt: "2023-04-08T05:55:44.945Z",
    __v: 4,
  },
  subcategory: {
    _id: "643101e020ec1db40f43e2b9",
    name: "men fashion",
    products: [
      "64310ea98338e958dc1842e3",
      "6432e8edfd0465de5837fa31",
      "6433274a9b13eef0ad8e4147",
      "643366829b13eef0ad8e41cd",
    ],
    category: "6430f9a3faa11777be61da74",
    createdAt: "2023-04-08T05:55:44.942Z",
    updatedAt: "2023-04-10T01:29:38.758Z",
    __v: 4,
  },
  rating: 0,
  reviews: [],
  features: ["T-shirt", "shorts", "short sleeve"],
  discounts: [],
  createdAt: "2023-04-08T06:50:17.645Z",
  updatedAt: "2023-04-08T06:50:17.645Z",
  __v: 0,
};
