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
      <div className=" w-[300%] ">
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
          At Hekto Furniture, we prioritize our clients' satisfaction and strive
          to provide an exceptional shopping experience. Our selection of home
          decor is designed to meet your specific needs, and we maintain high
          standards in our shopping practices. Whether you're uncertain about
          your preferences or seeking inspiration, our e-shop offers various
          resources to help you identify what you're looking for.
        </p>
        <Link href="/contact" shallow>
          <Button isCurve primary padding uppercase>
            contact us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default History;
