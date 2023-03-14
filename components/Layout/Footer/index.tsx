import Link from "next/link";
import React from "react";
import Button from "../../FormElement/Button/Button";
import style from "./footer.module.scss";
import HektoIcon from "./HektoIcon";
import SocialIconGroup from "./socialIconGroup";
const Footer = () => {
  const displayFooter = displayFooterData.map((FooterData, idx) => (
    <div key={idx} className="">
      <h1 className={style.FooterDataName}> {FooterData.name}</h1>
      <ul>
        {FooterData.items.map((FooterItemData, idx) => (
          <li key={idx}>{FooterItemData}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <div className={style.footer__bg}>
        <div className={`${style.footer__grid} container`}>
          <div className={style.footer__right}>
            <HektoIcon />
            <Link href="/register" shallow>
              <Button isCurve primary padding uppercase>
                sign up
              </Button>
            </Link>
            <div className={style.footer__rightText}>
              <h1> contact information</h1>
              <p> 17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>
          <div className={style.footer__left}>{displayFooter}</div>
        </div>
      </div>
      <div className={style.footer__subBg}>
        <div className={`${style.footer__sub} container`}>
          <h1>©Webecy - All Rights Reserved</h1>
          <div className="lg:mr-[6em]">
            <SocialIconGroup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const displayFooterData = [
  {
    name: "categories",
    items: [
      "Living Room Furniture",
      "Bedroom Furniture",
      "Dining Room Furniture",
      "Living Room Furniture",
      "Mattresses & Bedding",
    ],
  },
  {
    name: "customer care",
    items: [
      "my account",
      "discount",
      "returns",
      "orders history",
      "order tracking",
    ],
  },
  {
    name: "pages",
    items: [
      "blog",
      "browse the shop",
      "category",
      "pre-Built pages",
      "visual composer elements",
      // "wooCommerce pages",
    ],
  },
];
