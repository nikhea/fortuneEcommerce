import React, { FC } from "react";
import Image from "next/image";
import { IProductReviews } from "../../../../../interface/ProductsDataInterface";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import RatingStar from "../../../../FormElement/RatingStar/RatingStar";
import NiceModal from "@ebay/nice-modal-react";
import ReviewModel from "./ReviewModel";

export type IProductReview = {
  productReviews: IProductReviews[];
};
NiceModal.register("review-modal", ReviewModel);

const reviews: FC<IProductReview> = ({ productReviews }) => {
  const showReviewModal = () => {
    NiceModal.show("review-modal");
  };
  const displayReview = productReviews.map((review, index) => (
    <div key={index}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={review.photo}
            alt={review.name}
            className={` w-[50px] h-[50px] rounded-full group-hover:scale-125`}
          />
          <h1 className="capitalize text-md">{review.name} ugbodaga</h1>
        </div>
        <BsThreeDotsVertical className="text-gray-500" />
      </div>
      <div className="flex items-center my-1 space-x-4">
        <RatingStar value={review.rating} size={14} edit={false} />
        <h6 className="text-sm text-gray-500">December 20, 2023</h6>
      </div>
      <p className="w-[80%] text-gray-500">{review.text}</p>

      <div className="bg-gray-300 h-[.5px] w-full rounded-[8px] my-5" />
    </div>
  ));

  return (
    <>
      <div className="flex justify-end mb-2">
        <button
          onClick={showReviewModal}
          className="px-3 py-2 text-white bg-pink-500 border-2 border-pink-500 rounded-md hover:bg-transparent hover:text-primary"
        >
          add a review
        </button>
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="flex w-full h-full col-start-1 col-end-5">
          review summary
        </div>
        <div className="flex flex-col w-full h-full min-h-screen col-start-5 col-end-13 ">
          {displayReview}
          <div className="grid my-3 text-center place-content-center">
            <button className="p-2 text-white capitalize rounded-md bg-primary">
              load more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default reviews;
