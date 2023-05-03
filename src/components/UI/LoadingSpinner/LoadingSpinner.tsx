import React from "react";
import style from "./loadingSpinner.module.scss";
const LoadingSpinner = () => {
  return (
    <div className="w-1">
      <div className={style.ldsroller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
