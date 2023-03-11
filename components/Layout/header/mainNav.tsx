import style from "./style/mainHeader.module.scss";
import HeaderIcon from "./headerIcon";
import { NavItems } from "./headerData";
const mainNav = () => {
  return (
    <div className={`${style.mainHeader} container`}>
      <HeaderIcon />
    </div>
  );
};

export default mainNav;
