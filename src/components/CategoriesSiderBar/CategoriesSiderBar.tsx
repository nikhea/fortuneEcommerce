import style from "./style/CategoriesSiderBar.module.scss";
import Link from "next/link";
import { categoriesRoutes } from "../../routes/CategoriesRoutes";
import { PagesRoutes } from "../../routes/ PagesRoutes";

const ProductSiderBar = () => {
  const displayCategoriesData = categoriesRoutes.map((categories, index) => {
    return (
      <li
        key={index}
        className="w-full px-2 py-3 m-auto my-0 group hover:text-primary h-fit"
      >
        <Link
          href={`${PagesRoutes.shop}/${categories.name}`}
          className="flex items-center"
        >
          <span className={style.icons}>{categories.icon}</span>
          <h1> {categories.name}</h1>
        </Link>
        <div
          className={`${style.categorieslg} hidden text-black  border-l-[1px] border-l-gray-200  opactity-0 group-hover:opacity-100 transition-all duration-500 ease-in delay-200 group-hover:block z-40`}
        >
          <div className="grid grid-cols-3 gap-3 overflow-hidden">
            {categories.subcategories.map((subcategory, index) => (
              <div key={index}>
                <Link
                  href={`${PagesRoutes.shop}/${categories.name}/${subcategory.subName}`}
                  className="uppercase !w-full inline-block border-b-[1px] border-b-gray-200 mb-2 hover:text-primary overflow-hidden "
                >
                  {subcategory.subName}
                </Link>
                {subcategory.subLinks.map((link, index) => (
                  <Link
                    href={`${PagesRoutes.shop}/${categories.name}/${link}`}
                    className="flex flex-col mb-1 overflow-hidden text-sm capitalize w-fit hover:text-primary"
                    key={index}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className={`${style.categoriesSm} `}>
      <ul className="my-1 ">{displayCategoriesData}</ul>
    </div>
  );
};
export default ProductSiderBar;
