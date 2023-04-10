import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

const ImageContainer = ({ images }: any) => {
  // console.log(images);

  const [idx, setIdx] = useState(0);
  const displayImages = images.map((image: any, index: number) => (
    <div
      key={index}
      onClick={() => setIdx(index)}
      className=" cursor-pointer mx-3"
    >
      <Image
        src={image}
        blurDataURL={image.blurDataURL}
        width={100}
        height={100}
        alt={""}
      />
    </div>
  ));
  return (
    <div className=" h-full w-full rounded-l-md  py-5  grid place-content-start place-items-center ">
      <div className="w-[80%] h-full  mb-5">
        {/* <Zoom> */}
        <Image
          src={images[idx]}
          blurDataURL={images[idx].blurDataURL}
          layout="responsive"
          width={900}
          height={900}
          alt={""}
        />
        {/* </Zoom> */}
      </div>

      <div className="h-full  flex">{displayImages}</div>
    </div>
  );
};

export default ImageContainer;
