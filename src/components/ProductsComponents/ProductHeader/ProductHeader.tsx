import style from "../style/productHeader.module.scss";
import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import Select, { optionsProps } from "../../FormElement/select/select";
import { useViewState } from "../../../store/useView";
import { FC } from "react";
import { useFetchProducts } from "../../../Hooks/useProducts/useFetchProducts";
import { useSubFiliters } from "../../../store/useSubFiliters";
import useFilitersStore from "../../../store/useFiliters";

export type IProductHeader = {
  // handleSortChange: (sort: number) => void;
  // props: any;
};
const ProductHeader = (props: any) => {
  const { gridStyle, setGridStyle } = useViewState();
  const {
    handleSortChange,
    handleLimitChange,
    handleSearch,
    searchQuery,
    pageNumber,
    limitProducts,
    sortProducts,
  } = useSubFiliters();

  const handleInputChange = (event: any) => {
    const query = event.target.value;
    handleSearch(query);
  };
  return (
    <div className="flex-col items-center justify-between hidden my-10 lg:flex lg:flex-row">
      <div className="flex flex-col justify-between">
        <h2>Ecommerce Acceories & Furniture item </h2>
        <p>About 9,620 results</p>
      </div>

      <div className={style.filiters}>
        <div className={style.filiterItem}>
          <p>sort by :</p>
          <Select
            placeholder="Type"
            options={sortOptions}
            handleSelectChange={handleSortChange}
            inputFull
            isCurve
            defaultValue={sortOptions[0]}
          />
        </div>
        <div className={style.filiterItem}>
          <p>per page :</p>
          <Select
            placeholder="Type"
            options={limitOptions}
            handleSelectChange={handleLimitChange}
            defaultValue={limitOptions[3]}
            inputFull
          />
        </div>

        <div className={`${style.filiterItem}  `}>
          <p>view :</p>
          <span
            className={
              gridStyle === true ? style.activeButton : "cursor-pointer"
            }
            onClick={() => setGridStyle(true)}
          >
            <Squares2X2Icon className="icons" />
          </span>
          <span
            className={
              gridStyle === false ? style.activeButton : "cursor-pointer"
            }
          >
            <ListBulletIcon
              onClick={() => setGridStyle(false)}
              className="icons"
            />
          </span>
        </div>
        <div className={style.filiterItem}>
          <p className="mr-5">search :</p>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            className={style.input}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
const sortOptions = [
  { value: -1, label: "Newest" },
  { value: 1, label: "Oldest" },
];

const limitOptions = [
  { value: 1, label: "1" },
  { value: 3, label: "3" },
  { value: 5, label: "5" },
  { value: 9, label: "9" },
];
