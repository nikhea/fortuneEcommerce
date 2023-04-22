import { FC } from "react";
import Banner from "../../src/components/Banner/Banner";
import ShippingForm from "../../src/components/ShippingForm/ShippingForm";
import ShippingCartItems from "../../src/components/ShippingForm/ShippingSide/ShippingCartItems";
import ShippingSideTotal from "../../src/components/ShippingForm/ShippingSide/ShippingSideTotal";
import PayButton from "../../src/components/FormElement/PayButton/PayButton";
const Shipping = () => {
  return (
    <div>
      <Banner image={BannerData.image} title={BannerData.title} />
      <div className="container grid grid-cols-12 !my-32 gap-x-5">
        <ShippingForm />
        <div className="flex flex-col justify-between w-full h-full col-start-1 col-end-13 lg:col-start-9 lg:col-end-13 ">
          <PayButton />
          <ShippingCartItems />
          <ShippingSideTotal />
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
