import { FC } from "react";
import Banner from "../../components/Banner/Banner";
import ShippingForm from "../../components/ShippingForm/ShippingForm";
import ShippingCartItems from "../../components/ShippingForm/ShippingSide/ShippingCartItems";
import ShippingSideTotal from "../../components/ShippingForm/ShippingSide/ShippingSideTotal";

const Shipping = () => {
  return (
    <div>
      <Banner image={BannerData.image} title={BannerData.title} />
      <div className="container grid grid-cols-12 !my-32 gap-x-5">
        <ShippingForm />
        <div className="flex flex-col justify-between w-full h-full col-start-9 col-end-13 ">
          <div className="">cart</div>
          <ShippingSideTotal />
          <ShippingCartItems />
        </div>
      </div>
    </div>
  );
};

export default Shipping;

const BannerData = {
  title: `shipping details`,
  image: ` https://cdn.shopify.com/s/files/1/0617/9179/7437/files/decor-tinteggiatura-interni-02.jpg?v=1652080075&width=1500`,
};
