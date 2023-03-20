"use client";

import AccountForm from "../../components/AuthForm/AccountForm";
import Banner from "../../components/Banner/Banner";
import { PagesRoutes } from "../../routes/ PagesRoutes";

const Register = () => {
  const registerData = (data: any) => {
    console.log(data, "registerData");
  };
  return (
    <>
      <Banner image={BannerData.image} title={BannerData.title} />
      <div className="container">
        <AccountForm
          type={AccountFormDefaultText.type}
          subText={AccountFormDefaultText.subText}
          ButtonSign={AccountFormDefaultText.ButtonSign}
          altBase={AccountFormDefaultText.altBase}
          altLink={AccountFormDefaultText.altLink}
          altLinkText={AccountFormDefaultText.altLinkText}
          FormInputData={registerData}
        />
      </div>
    </>
  );
};

export default Register;

const BannerData = {
  title: `My Account`,
  image: ` https://cdn.shopify.com/s/files/1/0617/9179/7437/files/decor-tinteggiatura-interni-02.jpg?v=1652080075&width=1500`,
};
const AccountFormDefaultText = {
  type: "register",
  subText: "please create an account using the details below.",
  ButtonSign: "sign in",
  altBase: "already have an Account?",
  altLink: PagesRoutes.login,
  altLinkText: "login",
};
