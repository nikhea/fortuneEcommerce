import React from "react";
import CashBack from "./Icon/CashBack";
import FastDelivery from "./Icon/FastDelivery";
import QualityProduct from "./Icon/QualityProduct";

import Support from "./Icon/Support";
const Features = () => {
  const displayFeatures = FeaturesData.map((feature, idx) => (
    <div
      key={idx}
      className="flex flex-col items-center pb-5 gap-y-5 gap-x-10 text-center cursor-pointer border-0 hover:border-b-2 border-primary transistionMode border-spacing-10 "
    >
      <h3>{feature.icon}</h3>
      <h1>{feature.name}</h1>
      <p className="text-[#8A8FB9] ">{feature.description}</p>
    </div>
  ));
  return (
    <div className="my-10">
      <h1 className="text-2xl capitalize text-center  font-bold">Features</h1>
      <div className="grid grid-cols-4 w-[90%] gap-x-3  m-auto my-10">
        {displayFeatures}
      </div>
    </div>
  );
};

export default Features;

const FeaturesData = [
  {
    icon: <FastDelivery />,
    name: "Free Delivery",
    description:
      "We are pleased to offer free delivery on all orders. No matter the size or location, we want to make it easy for you to receive your purchase without any additional cost.",
  },
  {
    icon: <CashBack />,
    name: "100% Cash Back",
    description:
      "We stand behind the quality of our products and offer a 100% cash back guarantee. If for any reason you are not completely satisfied, we will provide a full refund.",
  },
  {
    icon: <QualityProduct />,
    name: "Quality Product",
    description:
      "At our store, we prioritize quality above all else. We carefully select each item to ensure that it meets our high standards of craftsmanship, durability, and design. ",
  },
  {
    icon: <Support />,
    name: "24/7 Support",
    description:
      "We believe in providing exceptional customer service, which is why our knowledgeable and friendly team is available 24/7 to assist you with any questions or concerns.",
  },
];
