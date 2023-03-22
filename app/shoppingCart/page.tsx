import React from "react";
import Banner from "../../components/Banner/Banner";
import ShippingSideTotal from "../../components/ShippingForm/ShippingSide/ShippingSideTotal";
import ShoppingCartTable from "../../components/shoppingCartComponents/ShoppingCartTable";
const ShoppingCart = () => {
  return (
    <div>
      <Banner image={BannerData.image} title={BannerData.title} />
      <div className="container grid grid-cols-12 !my-32 gap-x-5">
        <ShoppingCartTable />
        <div className="flex flex-col justify-between w-full h-full col-start-9 col-end-13 ">
          <ShippingSideTotal />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

const BannerData = {
  title: `Shopping Cart`,
  image: ` https://cdn.shopify.com/s/files/1/0617/9179/7437/files/decor-tinteggiatura-interni-02.jpg?v=1652080075&width=1500`,
};
