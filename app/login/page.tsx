import React from "react";
import AccountForm from "../../components/AuthForm/AccountForm";

const page = () => {
  return (
    <div>
      <div className="container">
        <AccountForm
          type={AccountFormDefaultText.type}
          subText={AccountFormDefaultText.subText}
          ButtonSign={AccountFormDefaultText.ButtonSign}
          altBase={AccountFormDefaultText.altBase}
          altLink={AccountFormDefaultText.altLink}
          altLinkText={AccountFormDefaultText.altLinkText}
        />
      </div>
    </div>
  );
};

export default page;

const AccountFormDefaultText = {
  type: "login",
  subText: "Please login using account detail bellow.",
  ButtonSign: "Sign In",
  altBase: "Don’t have an Account?",
  altLink: "/register",
  altLinkText: "Create account",
};
