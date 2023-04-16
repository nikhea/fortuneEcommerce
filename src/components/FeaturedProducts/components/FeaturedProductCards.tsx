// "use client";
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
  featuredProducts,
  Product,
} from "../../../interface/ProductsDataInterface";
import FeaturedProductCardsItems from "./FeaturedProductCardsItems";
import useDeviceProperties from "../../../Hooks/UseMediaQueries";

const FeaturedProductCards: FC<featuredProducts> = ({ featuredProducts }) => {
  const { isDesktopOrLaptop } = useDeviceProperties();
  const displayData = featuredProducts.map((product: Product) => (
    <SwiperSlide key={product._id}>
      <FeaturedProductCardsItems
        key={product._id}
        name={product.name}
        price={product.price}
        priceSymbol={product.priceSymbol}
        rating={product.rating}
        coverPhoto={product.coverPhoto}
        images={product.images}
        description={product.description}
        _id={product._id}
        product={product}
      />
    </SwiperSlide>
  ));
  return (
    <>
      {isDesktopOrLaptop ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          <div className="h-full my-10"> {displayData}</div>
        </Swiper>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <div className="h-full my-10"> {displayData}</div>
        </Swiper>
      )}
    </>
  );
};

export default FeaturedProductCards;
// breakpoints={{
//   0: {
//     slidesPerView: 1,
//   },
//   400: {
//     slidesPerView: 2,
//   },
//   639: {
//     slidesPerView: 3,
//   },
//   865: {
//     slidesPerView: 4,
//   },
//   1000: {
//     slidesPerView: 5,
//   },
//   1500: {
//     slidesPerView: 6,
//   },
//   1700: {
//     slidesPerView: 7,
//   },
// }}

// breakpoints={{
//   600: {
//     slidesPerView: 1,
//   },
//   800: {
//     slidesPerView: 2,
//   },
//   1000: {
//     slidesPerView: 3,
//   },
// }}
