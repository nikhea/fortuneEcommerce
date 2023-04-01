import React from "react";

import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from "../../../src/images/jpeg/imagesPng";
import ImageContainer from "../../../src/components/SingleroductPageView/components/ImageContainer";
import TextContainer from "../../../src/components/SingleroductPageView/components/TextContainer";

const ProductPage = () => {
  return (
    <div className="container my-5">
      <div className="grid grid-cols-2 gap-x-5 bg-gray-100 shadow-md rounded-md">
        <ImageContainer images={product.images} />
        <TextContainer
          _id={product._id}
          name={product.name}
          price={product.price}
          rating={product.rating}
          priceSymbol={product.priceSymbol}
          description={product.description}
        />
      </div>
    </div>
  );
};

export default ProductPage;

const product = {
  _id: "323434",
  name: "luxury bedroom chair",
  image: Image1,
  images: [Image1, Image2, Image3, Image4, Image5, Image6, Image7],
  price: 5544,
  // qantity:
  rating: 5,
  priceSymbol: "$",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
};
