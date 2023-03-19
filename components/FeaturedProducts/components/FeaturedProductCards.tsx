"use client";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";
SwiperCore.use([
  Navigation,
  Pagination,
  EffectCoverflow,
  EffectCoverflow,
  Autoplay,
]);
import React, { FC } from "react";
import {
  FeaturedProductsProps,
  FeaturedProduct,
} from "../../../interface/FeaturedProductsDataInterface";
import FeaturedProductCardsItems from "./FeaturedProductCardsItems";

const FeaturedProductCards: FC<FeaturedProductsProps> = ({
  featuredProducts,
}) => {
  const displayData = featuredProducts.map((product: FeaturedProduct) => (
    <SwiperSlide key={product._id}>
      <FeaturedProductCardsItems
        key={product._id}
        name={product.name}
        price={product.price}
        priceSymbol={product.priceSymbol}
        rating={product.rating}
        image={product.image}
        images={product.images}
        _id={product._id}
      />
    </SwiperSlide>
  ));
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={4}
      pagination={{ clickable: true }}
    >
      <div className="my-10"> {displayData}</div>
    </Swiper>
  );
};

export default FeaturedProductCards;
