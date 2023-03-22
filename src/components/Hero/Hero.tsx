"use client";
import style from "./style/Hero.module.scss";
import Image from "next/image";
import ImageSlide1 from "../../images/svg/ImageSlide1.png";
import ImageSlide2 from "../../images/svg/ImageSlide2.png";
import ImageSlide3 from "../../images/svg/ImageSlide3.png";
import lamp from "../../images/svg/lamp.png";
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
import Link from "next/link";
import Button from "../FormElement/Button/Button";
SwiperCore.use([
  Navigation,
  Pagination,
  EffectCoverflow,
  EffectCoverflow,
  Autoplay,
]);
const Hero = () => {
  const getCurrentYear = new Date().getFullYear();
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      allowTouchMove={false}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      {HeroData.map((swiper, idx) => (
        <SwiperSlide key={idx}>
          <div className={style.historyHero}>
            <div className="container flex items-center justify-between h-full gap-x-5">
              <div className={style.textContent}>
                <div>
                  <Image
                    className="absolute right-[36em] w-[166px] top-[-166px]"
                    width={lamp.width}
                    height={lamp.height}
                    src={lamp.src}
                    alt={swiper.name}
                  ></Image>
                </div>
                <h6 className="text-primary">{swiper.name}</h6>
                <h1 className="text-4xl font-black">{`${swiper.mainText} ${getCurrentYear}`}</h1>
                <p className="">{swiper.desc}</p>
                <Link href="/products" shallow className="w-fit">
                  <Button isCurve primary padding uppercase>
                    shop now
                  </Button>
                </Link>
              </div>
              <div className="w-[100%]">
                <Image
                  // className="w-[100%]"
                  width={swiper.image.width}
                  height={swiper.image.height}
                  src={swiper.image.src}
                  alt={swiper.name}
                ></Image>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;

const HeroData = [
  {
    image: ImageSlide1,
    name: "Best Furniture For Your Castle....",
    mainText: "New Furniture Collection Trends in",
    desc: "Nothing says castle living like plush and luxurious seating. Our collection features ornate sofas and chairs fit for royalty. The velvet upholstery and intricate detailing will add a touch of elegance to any room. Sink into our comfortable seating options and feel like a king or queen.",
  },
  {
    image: ImageSlide2,
    name: "Best Furniture For Your Castle....",
    mainText: "New Furniture Collection Trends in",
    desc: " Gather your courtiers around a dining table fit for a feast. Our classic dining sets feature sturdy wood construction with intricate carvings and details. Choose from our selection of table sizes and chairs to accommodate all your guests. The timeless design of our dining sets will ensure that your castle remains stylish for years to come.",
  },
  {
    image: ImageSlide3,
    name: "Best Furniture For Your Castle....",
    mainText: "New Furniture Collection Trends in",
    desc: "Add a touch of uniqueness to your castle with our statement pieces. From a chaise lounge with a built-in bookshelf to an ornate four-poster bed with intricate metalwork and a grand piano with detailed design, these pieces will elevate the look of any room and become the centerpiece of your castle.",
  },
];
