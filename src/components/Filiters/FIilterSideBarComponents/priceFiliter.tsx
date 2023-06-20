import React from "react";
import { useSubFiliters } from "../../../store/useSubFiliters";

const PriceFilter = () => {
  const {
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    selectedValue,
    setSelectedValue,
    resetFilter,
  } = useSubFiliters();

  const defaultValues = [
    { label: "$1200 - $2000", min: 1200, max: 2000 },
    { label: "$2500 - $3000", min: 2500, max: 3000 },
    { label: "$3000 - $4000", min: 3000, max: 4000 },
    { label: "$5000 - $6000", min: 5000, max: 6000 },
    { label: "$6500 - $7000", min: 6500, max: 7000 },
  ];

  const handleDefaultSelect = (value: any) => {
    setSelectedValue(value);
    setMinPrice(value.min);
    setMaxPrice(value.max);
  };

  const handleReset = () => {
    resetFilter();
  };
  console.log(selectedValue);

  return (
    <div className=" mt-3">
      <h2>Price </h2>
      <div className="w-full">
        {defaultValues.map((value, index) => (
          <label
            key={index}
            id="specifyColor"
            className="flex items-center  gap-5 mb-2 w-fit space-x-2 cursor-pointer radio-label"
          >
            <input
              type="radio"
              value={index}
              // @ts-ignore
              checked={selectedValue?.label === value.label}
              onChange={() => handleDefaultSelect(value)}
            />
            {value.label}
          </label>
        ))}
      </div>
      <div>
        <label>
          Min Price:
          <input
            className="w-full my-2 rounded-md  font-normal  focus:outline-none px-1"
            type="number"
            value={minPrice || ""}
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
          />
        </label>
        <label>
          Max Price:
          <input
            className="w-full my-2 rounded-md  font-normal  focus:outline-none px-1"
            type="number"
            value={maxPrice || ""}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default PriceFilter;
