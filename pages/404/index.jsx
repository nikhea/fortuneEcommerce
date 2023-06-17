import React from "react";
import { PagesRoutes } from "../../src/routes/ PagesRoutes";
import { NotFoundImage } from "../../src/images/jpeg/imagesPng";
import Image from "next/image";
import Link from "next/link";

const style = {
  btn: `  @apply border-0  border-solid  min-w-[10px] text-center  rounded-[8px] text-white  bg-primary  not-italic font-[400] text-sm outline-none cursor-pointer  py-[1em] px-[2em] capitalize   h-full  `,
};
const NotFound = () => {
  return (
    <div className="container grid w-full h-full place-content-center">
      <Image
        src={NotFoundImage.src}
        alt="Not Found"
        width={913}
        height={645}
        blurDataURL={NotFoundImage.blurDataURL}
      />
      {/* <h1 className="text-[#152970] font-black text-center text-2xl">
        oops! The page you resquested was not found!
      </h1> */}
      <Link
        href={PagesRoutes.home}
        className=" grid justify-center text-center bg-black w-fit place-self-center place-content-center rounded-[8px]"
      >
        <button className={style.btn}>back to home</button>
      </Link>
    </div>
  );
};

export default NotFound;
