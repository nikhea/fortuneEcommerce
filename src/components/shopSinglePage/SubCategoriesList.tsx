import Link from "next/link";
import Image from "next/image";
import { PagesRoutes } from "../../routes/ PagesRoutes";
const SubCategoriesList = ({ category, ID }: any) => {
  const displaySubCategory = category.subcategories
    .slice(0, 12)
    .map((subcategory: any) => (
      <Link
        href={`${PagesRoutes.shop}/${ID}/${subcategory.name}`}
        key={subcategory._id}
        className={` group`}
      >
        <div className="">
          <Image
            height={100}
            width={200}
            src={subcategory.coverPhoto}
            alt={subcategory.name}
            className="object-cover w-[200px] h-[100px] rounded-md "
          />
        </div>
        <h1 className="mt-3 text-center capitalize group-hover:text-primary">
          {subcategory.name}
        </h1>
      </Link>
    ));

  return (
    <div className="h-full my-5 rounded-md shadow-md bg-secondary">
      <h1 className="w-full p-5 text-lg text-center capitalize bg-pink-300 rounded-t-md">
        {ID} categories
      </h1>
      <div
        className={`grid ${
          category.subcategories.length >= 6 ? "grid-cols-6" : "grid-cols-6"
        } gap-5 p-5`}
      >
        {displaySubCategory}
      </div>
    </div>
  );
};

export default SubCategoriesList;
