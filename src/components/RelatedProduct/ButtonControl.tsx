import { useSwiper } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const style = {
  btn: `p-5 rounded-full shadow-md  z-50 transition-all duration-500 ease-in delay-200 flex absolute top-0 translate-y-[300%] bg-pink-100 hover:bg-pink-200 `,
};
const ButtonControl = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper-nav-btns opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in delay-200">
      <button onClick={() => swiper.slidePrev()} className={style.btn}>
        <BsArrowLeft className=" text-gray-500  " />
      </button>

      <button
        onClick={() => swiper.slideNext()}
        className={`${style.btn} right-0`}
      >
        <BsArrowRight className=" text-gray-500" />
      </button>
    </div>
  );
};

export default ButtonControl;
