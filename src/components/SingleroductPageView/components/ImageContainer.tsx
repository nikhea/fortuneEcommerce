import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

const ImageContainer = ({ images }: any) => {
  const [idx, setIdx] = useState(0);
  const displayImages = images.map((image: any, index: number) => (
    <div
      key={index}
      onClick={() => setIdx(index)}
      className=" cursor-pointer mx-3 rounded-xl"
    >
      <Image
        src={image}
        blurDataURL={image.blurDataURL}
        width={100}
        height={100}
        alt={""}
        className="rounded-xl"
      />
    </div>
  ));
  return (
    // grid place-content-start place-items-center
    <div className=" h-full  rounded-l-md  pb-5 pt-6  w-[95%] m-auto grid place-content-center place-items-center">
      <div className=" h-full  mb-5">
        <Zoom>
          <Image
            src={images[idx]}
            blurDataURL={images[idx].blurDataURL}
            layout="responsive"
            width={900}
            height={900}
            alt={""}
          />
        </Zoom>
      </div>

      <div className="h-full  flex justify-center">{displayImages}</div>
    </div>
  );
};

export default ImageContainer;
