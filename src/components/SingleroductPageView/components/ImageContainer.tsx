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
      className="mx-3 cursor-pointer  rounded-xl"
    >
      <Image
        src={image.secure_url}
        blurDataURL={image.blurDataURL}
        width={100}
        height={100}
        alt={image.path}
        className="rounded-xl"
      />
    </div>
  ));
  return (
    // grid place-content-start place-items-center
    <div className=" h-full  rounded-l-md  pb-5 pt-6  w-[95%] m-auto grid place-content-center place-items-center">
      <div className="h-full mb-5 ">
        <Zoom>
          <Image
            src={images[idx].secure_url}
            blurDataURL={images[idx].blurDataURL}
            layout="responsive"
            width={900}
            height={900}
            alt={""}
          />
        </Zoom>
      </div>

      <div className="flex justify-center h-full">{displayImages}</div>
    </div>
  );
};

export default ImageContainer;
