"use client";
import HistoryImage from "./Icon/Group 267.jpg";

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

const TestimonalSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {swipdata.map((swiper, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex text-center items-center justify-center flex-col mb-10 gap-2">
            <div className="rounded-full h-[100px] w-[100px]">
              <img
                src={swiper.image.src}
                alt={swiper.image.src}
                className="rounded-full h-[100px] w-[100px]"
              />
            </div>
            <h1 className="text-center text-xl uppercase">{swiper.name}</h1>
            <p className="text-center w-[20%] text-[#8A8FB9]">
              {swiper.testimonal}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonalSlider;

const swipdata = [
  {
    image: HistoryImage,
    name: "fortune ugbodaga",
    testimonal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    image: HistoryImage,
    name: "love ugbodaga",
    testimonal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];
