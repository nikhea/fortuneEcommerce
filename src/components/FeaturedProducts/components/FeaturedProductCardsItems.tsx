import style from "../style/FeaturedProductCardsItems.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Product } from "../../../interface/ProductsDataInterface";
import RatingStar from "../../FormElement/RatingStar/RatingStar";
import {
  ShoppingCartIcon,
  HeartIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";
import { PagesRoutes } from "../../../routes/ PagesRoutes";
import { useAddWishlist } from "../../../Hooks/useWishlist/useAddWishlist";

import { useCartState } from "../../../store/useCartStore";
import NiceModal from "@ebay/nice-modal-react";
import MyModal from "../../productModal/MyModal";
import usePrefechSingleHover from "../../../Hooks/useProducts/usePrefechSingleHover";
import { useQueryClient } from "@tanstack/react-query";
import { fetchSingleProducts } from "../../../services/shared/products";
import { formatToCurrency } from "../../../utils/formateNumbers";
import { useAddToCart } from "../../../Hooks/useCart/useAddToCart";
import IconsLoading from "../../UI/Loading/IconsLoading";
import ReactTooltips from "../../UI/Tooltip/ReactTooltips";

NiceModal.register("product-modal", MyModal);

const FeaturedProductCardsItems: FC<Product> = ({
  _id,
  name,
  price,
  coverPhoto,
  images,
  rating,
  priceSymbol,
  product,
}) => {
  const { slug } = product;
  const queryClient = useQueryClient();
  const { AddCart, AddCartisLoading } = useAddToCart();
  const { AddWishlist, AddWishlistisLoading } = useAddWishlist();
  const handleAddToCart = (product: any, quantity: number, _id: string) => {
    AddCart(product);
  };
  const showProductModal = (slug: any) => {
    NiceModal.show("product-modal", { slug });
  };
  const productFetch = (id: any) => {
    queryClient.prefetchQuery({
      queryKey: ["products", id],
      queryFn: () => fetchSingleProducts(id),
    });
  };

  return (
    <div
      onMouseEnter={() => productFetch(slug)}
      className={`${style.cards} group transition-all duration-500 ease-in delay-200 hover:cursor-pointer h-[500]`}
    >
      <div className="relative flex flex-col  w-full h-full  bg-[#F6F7FB] rounded-md  items-center  ">
        <div className="absolute z-20 flex mt-3 transition-all duration-500 ease-in delay-200 opacity-0 left-2 group-hover:opacity-100">
          {AddCartisLoading ? (
            <IconsLoading />
          ) : (
            <ShoppingCartIcon
              className={style.icons}
              onClick={() => handleAddToCart(product, 1, _id)}
            />
          )}
          {AddWishlistisLoading ? (
            <IconsLoading />
          ) : (
            <HeartIcon
              className={style.icons}
              onClick={() => AddWishlist(_id)}
            />
          )}

          {/* <div className="flex items-center justify-center h-full p-1 bg-red-200 rounded-full "> */}
          <MagnifyingGlassPlusIcon
            className={style.icons}
            onClick={() => showProductModal(slug)}
          />
          {/* </div> */}
        </div>
        {/* h-[200px]mt-[30px] w-[200px] */}
        <div className="w-full h-full overflow-hidden rounded-t-md">
          <Image
            src={coverPhoto}
            alt={name}
            // layout="fill"
            // width={200}
            // height={200}
            layout="responsive"
            width={900}
            height={900}
            className="object-cover overflow-hidden transition-all duration-500 ease-in delay-200 rounded-t-md group-hover:scale-105"
          />
          {/* h-[200px] w-[200px] */}
        </div>
        {/* <Link className={style.link} href="#">
          view details
        </Link> */}
      </div>
      <div className="w-full h-full px-3 py-3 ">
        <Link href={`${PagesRoutes.products}/${slug}`}>
          <h6 className=" text-md capitalize text-[#151875]  font-bold  ">
            {name}
          </h6>
        </Link>
        <div className="flex items-center justify-between ">
          <h2>
            <span className="mr-1"> {priceSymbol}</span>
            {formatToCurrency(price)}
          </h2>
          <div>
            <RatingStar value={rating} size={24} edit={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCardsItems;
