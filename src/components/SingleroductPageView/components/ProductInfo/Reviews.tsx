import React, { FC } from "react";
import Image from "next/image";
import { IProductReviews } from "../../../../interface/ProductsDataInterface";
import RatingStar from "../../../FormElement/RatingStar/RatingStar";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";

export type IProductReview = {
  productReviews: IProductReviews[];
};
const reviews: FC<IProductReview> = ({ productReviews }) => {
  const displayReview = productReviews.map((review, index) => (
    <div key={index}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={review.photo}
            alt={review.name}
            className={` w-[50px] h-[50px] rounded-full group-hover:scale-125`}
          />
          <h1 className=" capitalize text-md">{review.name} ugbodaga</h1>
        </div>
        <BsThreeDotsVertical className="text-gray-500" />
      </div>
      <div className="flex items-center space-x-4 my-1">
        <RatingStar value={review.rating} size={14} edit={false} />
        <h6 className="text-gray-500 text-sm">December 20, 2023</h6>
      </div>
      <p className="w-[80%] text-gray-500">{review.text}</p>

      <div className="bg-gray-300 h-[.5px] w-full rounded-[8px] my-5" />
    </div>
  ));

  return (
    <>
      <div className="flex justify-end mb-2">
        <button className=" bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-transparent hover:text-primary border-2 border-pink-500">
          add a review
        </button>
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="w-full h-full  col-start-1 col-end-5 flex">
          review summary
        </div>
        <div className="w-full h-full min-h-screen col-start-5 col-end-13 flex flex-col ">
          {displayReview}
        </div>
      </div>
    </>
  );
};

export default reviews;
