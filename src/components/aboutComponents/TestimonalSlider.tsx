// "use client";
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
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {swipdata.map((swiper, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex flex-col items-center justify-center gap-2 mb-10 text-center">
            <div className="rounded-full h-[150px] w-[150px]">
              <img
                src={swiper.image}
                alt={swiper.image}
                className="rounded-full h-[150px] w-[150px]"
              />
            </div>
            <h1 className="text-xl text-center uppercase">{swiper.name}</h1>
            <p className="text-center lg:w-[50%] text-[#8A8FB9]">
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
      "I recently purchased a new sofa from this furniture e-commerce and I couldn't be happier! The quality of the product exceeded my expectations, and the free delivery made the purchase even sweeter. I highly recommend this store.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "Lucille Lewis",
    testimonal:
      "I was hesitant to buy furniture online, but this e-commerce made the process so easy. The 360-degree view of the products allowed me to see every angle of the furniture, and the detailed product descriptions were very helpful. I will definitely be shopping here again.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/74.jpg",
    name: "Kyle Chapman",
    testimonal:
      "The customer service at this furniture e-commerce is top-notch. They were so patient and helpful with my inquiries, and even gave me recommendations on which pieces would work best in my space. I am extremely satisfied with my purchase and the overall shopping experience.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Sally Davis",
    testimonal:
      "I love the variety of furniture options available at this e-commerce store. From modern to classic, they have it all. The quality of the products is exceptional and I am so happy with my new bedroom set.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/80.jpg",
    name: "Roger Gomez",
    testimonal:
      "The prices at this furniture e-commerce are unbeatable. I was able to get high-quality furniture for a fraction of the cost I would have paid at a brick-and-mortar store. Plus, the free delivery made it even more affordable. I highly recommend this store to anyone looking to spruce up their home.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jennie Nichols",
    testimonal:
      "I had a great experience shopping at this furniture e-commerce. The website was easy to navigate, the checkout process was simple, and my order arrived promptly. The quality of the furniture is fantastic and I will definitely be shopping here again in the future.",
  },
];
