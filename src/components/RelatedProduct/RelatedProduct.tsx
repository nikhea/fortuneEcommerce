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
import React from "react";
import { dummyProductsData } from "../../seed/seedDB";

import RelatedProductItem from "./RelatedProductItem";
import ButtonControl from "./ButtonControl";
import useDeviceProperties from "../../Hooks/UseMediaQueries";

const RelatedProduct = () => {
  const { isDesktopOrLaptop } = useDeviceProperties();

  const displayProducts = dummyProductsData.slice(0, 8).map((product) => (
    <SwiperSlide key={product._id}>
      <RelatedProductItem
        _id={product._id}
        image={product.image}
        name={product.name}
        price={product.price}
        priceSymbol={product.priceSymbol}
        rating={product.rating}
      />
    </SwiperSlide>
  ));
  return (
    <div className="relative group">
      <h1 className="text-2xl capitalize font-bold mt-10 text-[#151875]">
        Related Product
      </h1>

      {isDesktopOrLaptop ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={4}
          // loop={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
        >
          <div className="h-full my-10"> {displayProducts}</div>
          <ButtonControl />
        </Swiper>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={2}
          // loop={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: true,
          // }}
        >
          <div className="h-full my-10"> {displayProducts}</div>
          <ButtonControl />
        </Swiper>
      )}
    </div>
  );
};

export default RelatedProduct;
