import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

const ImageContainer = ({ images }: any) => {
  console.log(images);

  const [idx, setIdx] = useState(0);
  const displayImages = images.map((image: any, index: number) => (
    <div key={index} onClick={() => setIdx(index)} className=" cursor-pointer">
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
    <div className=" h-full w-full rounded-l-md  grid place-items-center py-5">
      <div className=" w-[400px] h-[400px] grid place-content-center">
        <Zoom>
          <Image
            src={images[idx]}
            blurDataURL={images[idx].blurDataURL}
            width={250}
            height={200}
            alt={""}
          />
        </Zoom>
      </div>

      <div className="h-full  flex">{displayImages}</div>
    </div>
  );
};

export default ImageContainer;
