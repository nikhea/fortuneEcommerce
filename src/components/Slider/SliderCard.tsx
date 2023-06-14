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
import useDeviceProperties from "../../Hooks/UseMediaQueries";
import { Product } from "../../interface/ProductsDataInterface";
import SliderButtonControl from "./SliderButtonControl";
import SliderCardItems from "./SliderCardItems";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
SwiperCore.use([
  Navigation,
  Pagination,
  EffectCoverflow,
  EffectCoverflow,
  Autoplay,
]);

export type ISliderCard = {
  ProductsData: any;
  title: string;
  cardLink: string;
  backgroundColor: string;
};
const SliderCard: FC<ISliderCard> = ({
  ProductsData,
  title,
  cardLink,
  backgroundColor,
}) => {
  const { isDesktopOrLaptop } = useDeviceProperties();
  const displayProducts = ProductsData.slice(0, 8).map((product: any) => (
    <SwiperSlide key={product._id}>
      <SliderCardItems
        _id={product._id}
        image={product.image}
        name={product.name}
        price={product.price}
        priceSymbol={product.priceSymbol}
        rating={product.rating}
        product={product}
      />
    </SwiperSlide>
  ));
  return (
    <div className="my-5 rounded-md shadow-md bg-secondary">
      <div
        className={`flex items-center justify-between px-5 py-3 ${backgroundColor} rounded-t-md`}
      >
        <h1 className="text-xl capitalize">{title}</h1>
        <Link href={cardLink} className="flex items-center uppercase">
          see all <ChevronRightIcon className="w-5 h-5 ml-2" />
        </Link>
      </div>
      <div className="relative p-5 ">
        {isDesktopOrLaptop ? (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={6}
          >
            <div className="h-full gap-3 my-10"> {displayProducts}</div>
            <SliderButtonControl />
          </Swiper>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={4}
          >
            <div className="h-full my-10"> {displayProducts}</div>
            <SliderButtonControl />
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default SliderCard;
