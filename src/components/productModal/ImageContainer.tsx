import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

const ImageContainer = ({ images }: any) => {
  const [idx, setIdx] = useState(0);
  const displayImages = images?.map((image: any, index: number) => (
    <div
      key={index}
      onClick={() => setIdx(index)}
      className="mx-3 cursor-pointer  rounded-xl"
    >
      <Image
        src={image.secure_url}
        width={100}
        height={100}
        alt={image.path}
        className="rounded-xl"
      />
    </div>
  ));
  return (
    // grid place-content-start place-items-center
    // h-fulll  rounded-l-md  pb-5 pt-6  w-full m-auto grid place-content-center
    <div className="grid w-full h-full pt-6 pb-5 m-auto  rounded-l-md place-content-center">
      <div className=" h-full  mb-5  w-[80%] mx-auto">
        <Zoom>
          <Image
            src={images[idx].secure_url}
            blurDataURL={images[idx].blurDataURL}
            layout="responsive"
            width={900}
            height={900}
            alt={""}
            className="w-full h-full  rounded-xl"
          />
        </Zoom>
      </div>

      <div className="flex justify-center h-full">{displayImages}</div>
    </div>
  );
};

export default ImageContainer;
