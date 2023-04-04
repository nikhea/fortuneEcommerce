import React, { FC, useState } from "react";
export type IHeaderProps = {
  step: any;
  setStep: any;
};

const style = {
  headerTitleContainer: ` hidden md:flex justify-between borde mb-16 capitalize md:text-1xl`,
  headerTitle: ``,
};

const ProductInfoHeader: FC<IHeaderProps> = ({ step, setStep }) => {
  const [title] = useState([
    "description",
    "additional information",
    "videos",
    "reviews",
  ]);
  const handleActiveTab = (index: any) => {
    setStep(index);
  };
  return (
    <div className={style.headerTitleContainer}>
      {title.map((title: string, index: number) => (
        <h1
          key={index}
          style={{ width: "55%", textAlign: "center", cursor: "pointer" }}
          className={
            step === index
              ? `bg-transparent border-b border-primary   border-solid	 text-[#000] `
              : "hover:text-primary"
          }
          onClick={() => handleActiveTab(index)}
        >
          {title}
        </h1>
      ))}
    </div>
  );
};
// border-[#b9b9b9]
export default ProductInfoHeader;