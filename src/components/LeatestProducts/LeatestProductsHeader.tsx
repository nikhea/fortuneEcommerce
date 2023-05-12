import React, { FC, useState } from "react";
export type IHeaderProps = {
  step: any;
  setStep: any;
};

const style = {
  headerTitleContainer: `flex justify-center space-x-10 mb-16 mt-5 capitalize md:text-1xl`,
  headerTitle: ``,
};
const LeatestProductsHeader: FC<IHeaderProps> = ({ step, setStep }) => {
  const [title] = useState(["new arrival", "best selller", "special offer"]);
  const handleActiveTab = (index: any) => {
    setStep(index);
  };
  return (
    <div className={style.headerTitleContainer}>
      {title.map((title: string, index: number) => (
        <h1
          key={index}
          style={{ textAlign: "center", cursor: "pointer" }}
          className={
            step === index
              ? `bg-transparent border-b border-primary   border-solid	 text-primary text-sm md:text-[16px]`
              : "text-[#151875] text-sm md:text-[16px]"
          }
          onClick={() => handleActiveTab(index)}
        >
          {title}
        </h1>
      ))}
    </div>
  );
};

export default LeatestProductsHeader;
