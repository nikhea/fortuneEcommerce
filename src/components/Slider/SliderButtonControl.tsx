import { useSwiper } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const style = {
  btn: `p-3 rounded-full shadow-md  z-50 transition-all duration-500 ease-in delay-200 flex absolute top-0 translate-y-[200%] bg-black opacity-50 hover:opacity-100 `,
};
// bg-pink-100 hover:bg-pink-200
const SliderButtonControl = () => {
  const swiper = useSwiper();
  return (
    // opacity-0
    <div className="transition-all duration-500 ease-in delay-200 swiper-nav-btns group-hover:opacity-100">
      <button onClick={() => swiper.slidePrev()} className={style.btn}>
        <BsArrowLeft className="text-gray-100 " />
      </button>

      <button
        onClick={() => swiper.slideNext()}
        className={`${style.btn} right-0`}
      >
        <BsArrowRight className="text-gray-100 " />
      </button>
    </div>
  );
};

export default SliderButtonControl;
