import React, { FC } from "react";
import useDeviceProperties from "../../../Hooks/UseMediaQueries";
import Link from "next/link";
import Image from "next/image";

export type ItemDataProps = {
  title: string;
  image: string;
  titleLink: string;
};
export type ICardGrid = {
  ItemsData: ItemDataProps[];
  title: string;
  backgroundColor: string;
};
const CardGrid: FC<ICardGrid> = ({ ItemsData, title, backgroundColor }) => {
  const { isDesktopOrLaptop } = useDeviceProperties();
  const displayItem = ItemsData.slice(0, 6).map((itemsData, index) => (
    <Link
      className="flex h-full relative"
      href={itemsData.titleLink}
      key={index}
    >
      <Image
        width={500}
        height={500}
        src={itemsData.image}
        alt={itemsData.title}
        className="object-cover rounded-md"
      />
      <div className="absolute rounded-b-md opacity-75 z-20 bg-black text-white w-full text-center bottom-0 capitalize">
        <h1 className="my-3">{itemsData.title}</h1>
      </div>
    </Link>
  ));
  return (
    <div className="my-5 rounded-md shadow-md bg-secondary">
      <div
        className={`flex items-center justify-center px-5 py-3 ${backgroundColor} rounded-t-md`}
      >
        <h1 className="text-xl capitalize">{title}</h1>
      </div>
      <div className="relative grid gap-3 grid-cols-6 p-5 ">{displayItem}</div>
    </div>
  );
};

export default CardGrid;
