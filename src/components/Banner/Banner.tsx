import React, { FC } from "react";
import BannerImage from "./sofa-2.jpg";
const bg =
  "https://www.thehouse48.com/wp-content/uploads/2021/12/chuttersnap-603079-unsplash-e1546425079773.jpg";

export type IBanner = {
  image?: string;
  title: string;
  subTitle?: string;
};
const Banner: FC<IBanner> = ({ image, title, subTitle }) => {
  const style = {
    bgImage: `  w-full h-[50vh] md:h-[340px]  bg-cover bg-center bg-no-repeat relative bg-fixed object-content z-30 `,
    container: `h-full  w-[85%] m-auto flex flex-col text-cente md:flex-row  justify-center md:justify-between md:items-center`,
    textContainer: `text-white z-50   md:text-start mt-5`,
    title: `text-4xl md:text-7xl font-black uppercase tracking-wider`,
    description: ` my-5 text-sm md:text-[0.9rem] tracking-wide pr-20 md:pr-0`,
    play: `md:mr-[60px] `,
    overlay: `h-full w-full top-0 left-0 absolute bg-black opacity-60 bg-fixed -z-50`,
  };
  // bg-[url('https://www.thehouse48.com/wp-content/uploads/2021/12/chuttersnap-603079-unsplash-e1546425079773.jpg')]
  return (
    <div
      className={style.bgImage}
      style={{
        backgroundImage: image ? `url(${image})` : `url(${BannerImage.src})`,
      }}
    >
      <div className={style.container}>
        <div className={style.textContainer}>
          {title && <h1 className={style.title}>{title}</h1>}
          {subTitle && <p className={style.description}>{subTitle}</p>}
        </div>
      </div>
      <div className={style.overlay}></div>
    </div>
  );
};

export default Banner;
