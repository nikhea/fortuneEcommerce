import React from "react";
import Banner from "../../src/components/Banner/Banner";
import CalulateShipping from "../../src/components/CalulateShipping/CalulateShipping";
import ShippingSideTotal from "../../src/components/ShippingForm/ShippingSide/ShippingSideTotal";
import ShoppingCartTable from "../../src/components/shoppingCartComponents/ShoppingCartTable";
import ShoppingCartMobile from "../../src/components/shoppingCartComponents/ShoppingCartMobile";
import useDeviceProperties from "../../src/Hooks/UseMediaQueries";
import Head from "next/head";
const ShoppingCart = () => {
  const { isDesktopOrLaptop } = useDeviceProperties();

  return (
    <div>
      <Head>
        <title>Shopping Cart | Hekto commerce</title>
      </Head>
      <Banner image={BannerData.image} title={BannerData.title} />
      <div className="container grid grid-cols-1  lg:grid-cols-12 lg:!my-32 !mt-24 gap-x-5">
        {isDesktopOrLaptop ? <ShoppingCartTable /> : <ShoppingCartMobile />}
        <div className="flex flex-col justify-between w-full col-start-1 col-end-13 lg:col-start-9 lg:col-end-13 h-fit">
          <ShippingSideTotal />
          <CalulateShipping title="Calculate  Shiping" />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
// 29650431
// 10693008
const BannerData = {
  title: `Shopping Cart`,
  image: ` https://cdn.shopify.com/s/files/1/0617/9179/7437/files/decor-tinteggiatura-interni-02.jpg?v=1652080075&width=1500`,
};
