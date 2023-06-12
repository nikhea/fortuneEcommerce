import React from "react";
import { NewLetterBannerImage } from "../../images/jpeg/imagesPng";
import Button from "../FormElement/Button/Button";

const newletterBanner = () => {
  return (
    <div className=" h-[40vh] mt-10 top-0 left-0 right-0 bottom-0 overflow-hidden relative">
      <img
        src={NewLetterBannerImage.src}
        className="absolute object-cover w-full h-full"
      />
      <div className="container absolute top-0 bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-center w-full h-full gap-y-5">
        <h6 className="text-base font-bold text-white capitalize md:text-lg lg:text-2xl">
          get leatest update by subscribing to our new letter
        </h6>
        <Button isCurve primary padding uppercase>
          subcribe now
        </Button>
      </div>
      <div className="` h-[40vh] w-full top-0 left-0 absolute bg-black opacity-60 bg-fixed " />
    </div>
  );
};

export default newletterBanner;

{
  /* <div
style={{
  background: `url(${NewLetterBannerImage.src})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  aspectRatio: "4/3",
  objectFit: "cover",
}}
className=" w-full h-[60vh]   bg-cover bg-center bg-no-repeat relative bg-fixed object-content z-30"
></div> */
}
