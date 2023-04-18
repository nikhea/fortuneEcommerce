import { useLogin } from "../../src/auth/auth";
import AccountForm from "../../src/components/AuthForm/LoginAccountForm";
import Banner from "../../src/components/Banner/Banner";
import { PagesRoutes } from "../../src/routes/ PagesRoutes";

const page = () => {
  const login = useLogin();

  const loginData = (data: any) => {
    // login.mutate(data, {
    //   onSuccess: () => console.log("login"),
    // });
    // login.mutate(data);
    // console.log(data, "LoginData");
  };
  return (
    <>
      <Banner title={BannerData.title} />

      <div className="container">
        <AccountForm
          type={AccountFormDefaultText.type}
          subText={AccountFormDefaultText.subText}
          ButtonSign={AccountFormDefaultText.ButtonSign}
          altBase={AccountFormDefaultText.altBase}
          altLink={AccountFormDefaultText.altLink}
          altLinkText={AccountFormDefaultText.altLinkText}
          FormInputData={loginData}
        />
      </div>
    </>
  );
};

export default page;
const BannerData = {
  title: `My Account`,
};
const AccountFormDefaultText = {
  type: "login",
  subText: "please login using the account details below.",
  ButtonSign: "sign in",
  altBase: "don’t have an account?",
  altLink: PagesRoutes.register,
  altLinkText: "create account",
};
