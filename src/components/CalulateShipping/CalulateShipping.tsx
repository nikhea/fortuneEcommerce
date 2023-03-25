import { FC } from "react";
import CalulateForm from "./CalulateForm";

export type ICalulateShipping = {
  title: String;
};
const CalulateShipping: FC<ICalulateShipping> = ({ title }) => {
  return (
    <div className="my-20">
      <h1 className=" text-center text-xl capitalize text-[#151875] mb-5 font-bold;">
        {title}
      </h1>
      <CalulateForm />
    </div>
  );
};

export default CalulateShipping;
