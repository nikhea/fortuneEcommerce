import { FC } from "react";
import Banner from "../../src/components/Banner/Banner";
import ShippingForm from "../../src/components/ShippingForm/ShippingForm";
import ShippingCartItems from "../../src/components/ShippingForm/ShippingSide/ShippingCartItems";
import ShippingSideTotal from "../../src/components/ShippingForm/ShippingSide/ShippingSideTotal";
import PayButton from "../../src/components/FormElement/PayButton/PayButton";
import { useUser } from "../../src/auth/auth";
import Head from "next/head";
const Shipping = () => {
  const { data } = useUser();
  const defaultValue = {
    email: data?.email,
    firstname: data?.firstname,
    lastname: data?.lastname,
    phone: data?.shipping?.address.phone,
    state: data?.shipping?.address.state,
    country: data?.shipping?.address?.country,
    city: data?.shipping?.address.city,
    street: data?.shipping?.address?.street,
    postalCode: data?.shipping?.address?.postalCode,
  };

  return (
    <div>
      <Head>
        <title>Shipping | Hekto commerce</title>
      </Head>
      <Banner image={BannerData.image} title={BannerData.title} />
      <div className="container grid grid-cols-12 !my-32 gap-x-5">
        <ShippingForm defaultValue={defaultValue} user={data} />
        <div className="flex flex-col justify-between w-full h-full col-start-1 col-end-13 lg:col-start-9 lg:col-end-13 ">
          {/* <PayButton /> */}
          <ShippingCartItems />
          <ShippingSideTotal user={data} />
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
