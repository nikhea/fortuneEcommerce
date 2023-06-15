import { useState } from "react";
import RatingStar from "../../FormElement/RatingStar/RatingStar";
import { useSubFiliters } from "../../../store/useSubFiliters";

const RatingFilter = () => {
  const { selectedRating, setSelectedRating } = useSubFiliters();

  const handleRadioChange = (value: number) => {
    setSelectedRating(value);
    // console.log("Selected rating:", value);
  };

  const displayValue = defalutValue.map((value, index) => (
    <div key={index} className="">
      <label
        id="specifyColor"
        className="flex items-center space-x-2 cursor-pointer radio-label"
      >
        <input
          type="radio"
          value={value}
          checked={selectedRating === value}
          onChange={() => handleRadioChange(value)}
        />
        <RatingStar value={value} size={24} edit={false} />
        <p>&up</p>
      </label>
    </div>
  ));

  return (
    <div>
      <h1>Rating</h1>
      {displayValue}
    </div>
  );
};

export default RatingFilter;

const defalutValue = [5, 4, 3, 2, 1, 0];
// import RatingStar from "../../FormElement/RatingStar/RatingStar";
// const RatingFiliter = () => {
//   const handerChange = (value: any) => {
//     console.log("Selected value: ", value);
//   };
//   const displayValue = defalutValue.map((value, index) => (
//     <div className="flex items-center space-x-2" key={index}>
//       <input type="radio" />
//       <RatingStar value={value} size={24} edit={false} />
//       <p>&up</p>
//     </div>
//   ));
//   return (
//     <div>
//       <h1>rating</h1>
//       {displayValue}
//     </div>
//   );
// };
// flex-col items-center space-x-2
// export default RatingFiliter;
// const defalutValue = [5, 4, 3, 2, 1, 0];
