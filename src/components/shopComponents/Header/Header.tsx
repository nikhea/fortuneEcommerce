import React from "react";
import CategoriesSiderBar from "../../CategoriesSiderBar/CategoriesSiderBar";

const Header = () => {
  return (
    <div className="grid-cols-12 gap-2 mt-3 lg:grid">
      <CategoriesSiderBar />
      <div className="w-full h-full col-start-3 col-end-11 rounded-md bg-secondary"></div>
      <div className="flex flex-col justify-between w-full h-full col-start-11 col-end-13 gap-2">
        <div className="w-full h-full rounded-md bg-secondary"></div>
        <div className="w-full h-full rounded-md bg-secondary"></div>
      </div>
    </div>
  );
};

export default Header;
