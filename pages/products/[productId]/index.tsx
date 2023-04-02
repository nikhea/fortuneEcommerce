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
import RelatedProduct from "../../../src/components/RelatedProduct/RelatedProduct";
import ProductInfo from "../../../src/components/SingleroductPageView/components/ProductInfo/ProductInfo";

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
      <ProductInfo productName={product.name} />
      <RelatedProduct />
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
// images: [Image1, Image2, Image3, Image4, Image5, Image6, Image7],

// images: [
//   "https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//   "https://plus.unsplash.com/premium_photo-1675130119382-6f891206f406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//   "https://media.istockphoto.com/id/1457119120/photo/mid-adult-woman-dancing-reggaeton-at-skateboard-park.jpg?b=1&s=170667a&w=0&k=20&c=oI0G4kZKKOeej7NfcJ-Qy_Ib95O367cOiC4GN4bcQSo=",
//   "https://media.istockphoto.com/id/1356569932/photo/style-and-confidence.jpg?b=1&s=170667a&w=0&k=20&c=MvMzYpB6-WWMn2e95A2H6ICu0XERnL61PwvnQYrbr3o=",
// ],
