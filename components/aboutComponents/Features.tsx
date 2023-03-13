import React from "react";
import CashBack from "./Icon/CashBack";
import FastDelivery from "./Icon/FastDelivery";
import QualityProduct from "./Icon/QualityProduct";

import Support from "./Icon/Support";
const Features = () => {
  const displayFeatures = FeaturesData.map((feature, idx) => (
    <div
      key={idx}
      className="flex flex-col items-center pb-5 gap-5 text-center border-0 hover:border-b-2 border-primary transistionMode border-spacing-10 "
    >
      <h3>{feature.icon}</h3>
      <h1>{feature.name}</h1>
      <p className="text-[#8A8FB9] ">{feature.description}</p>
    </div>
  ));
  return (
    <div className="my-10">
      <h1 className="text-2xl capitalize text-center  font-bold">Features</h1>
      <div className="grid grid-cols-4 w-[80%] gap-x-2  m-auto my-10">
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    icon: <CashBack />,
    name: "100% Cash Back",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    icon: <QualityProduct />,
    name: "Quality Product",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    icon: <Support />,
    name: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];
