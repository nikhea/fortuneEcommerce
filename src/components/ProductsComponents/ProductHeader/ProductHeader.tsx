// "use client";
import style from "../style/productHeader.module.scss";
import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import Select from "../../FormElement/select/select";
import { useViewState } from "../../../store/useView";

const ProductHeader = () => {
  const { gridStyle, setGridStyle } = useViewState();
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
            // options={propertyTypeOPtions}
            // field={propertyTypeOPtions.find(
            //   ({ value }) => value === propertyTypeField.value
            // )}
            // handleSelectChange={handlepropertyTypeChange}
            inputFull
            isCurve
          />
        </div>
        <div className={style.filiterItem}>
          <p>per page :</p>
          <Select
            placeholder="Type"
            // options={propertyTypeOPtions}
            // field={propertyTypeOPtions.find(
            //   ({ value }) => value === propertyTypeField.value
            // )}
            // handleSelectChange={handlepropertyTypeChange}
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
          <input type="text" placeholder="Search" className={style.input} />
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
