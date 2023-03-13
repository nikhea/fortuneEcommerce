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
            <div className="rounded-full h-[150px] w-[150px]">
              <img
                src={swiper.image}
                alt={swiper.image}
                className="rounded-full h-[150px] w-[150px]"
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
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    name: "Gene Reyes",
    testimonal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "Lucille Lewis",
    testimonal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/74.jpg",
    name: "Kyle Chapman",
    testimonal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Sally Davis",
    testimonal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/80.jpg",
    name: "Roger Gomez",
    testimonal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jennie Nichols",
    testimonal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];
