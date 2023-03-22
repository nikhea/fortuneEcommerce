import style from "./style/subHeader.module.scss";

import {
  EnvelopeIcon,
  PhoneIcon,
  UserCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const subHeader = () => {
  return (
    <div className={style.subHeaderBg}>
      <div className={` ${style.subHeaderGrid} container`}>
        <div className={style.subHeaderRight}>
          <div className={style.subHeader__content}>
            <EnvelopeIcon className={style.icons} />
            <h1>imonikheaugbodaga@gmail.com</h1>
          </div>
          <div className={style.subHeader__content}>
            <PhoneIcon className={style.icons} />
            <h1>+234 706 886 1569</h1>
          </div>
        </div>
        <div className={style.subHeaderLeft}>
          <div className={style.subHeader__content}>
            <UserCircleIcon className={style.icons} />
            <h1>login</h1>
          </div>
          <div className={`${style.subHeader__content} relative`}>
            <ShoppingCartIcon className={style.icons} />
            <span className="absolute left-[12px] top-[-5px] bg-red-500  w-5 h-5 rounded-full flex justify-center items-center">
              <h1 className="text-[12px]">78</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default subHeader;
