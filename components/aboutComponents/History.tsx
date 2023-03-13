import style from "./style/History.module.scss";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "../FormElement/Button/Button";
import HistoryIcon from "./Icon/HistoryIcon";
import HistoryImage from "./Icon/Group 267.jpg";
const History = () => {
  return (
    <div className="flex gap-x-5 items-center w-[70%] m-auto my-20">
      <div className=" w-[100%] ">
        <Image
          src={HistoryImage.src}
          alt={HistoryImage.src}
          width={HistoryImage.width}
          height={HistoryImage.height}
        />
      </div>
      <div className={style.textContainer}>
        <h1>know about our ecomerce business, history</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
          amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
          quis bibendum quam.
        </p>
        <Link href="/contact">
          <Button isCurve primary padding uppercase>
            contact us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default History;
