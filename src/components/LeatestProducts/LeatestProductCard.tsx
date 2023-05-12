import React from "react";
import style from "./style/product.module.scss";

const LeatestProductCard = ({ displayProduct }: any) => {
  return <div className={style.productGrid}>{displayProduct}</div>;
};

export default LeatestProductCard;
