import React from "react";

type PageProps = {
  params: {
    productId: string;
  };
};
const ProductPage = ({ params: { productId } }: PageProps) => {
  return <div>ProductPage{productId}</div>;
};

export default ProductPage;
