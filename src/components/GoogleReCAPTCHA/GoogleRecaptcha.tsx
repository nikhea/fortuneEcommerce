import { FC } from "react";

import ReCAPTCHA from "react-google-recaptcha";

interface Props {
  onChange: (value: string | null) => void;
}

const AuthReCAPTCHA: FC<Props> = ({ onChange }) => {
  function handleChange(value: string | null) {
    onChange(value);
  }

  return (
    // <div
    //   style={{ width: "100% !important", background: "#000", display: "flex" }}
    // >
    // <div
    //   className="captcha"
    //   style={{ transform: "scale(0.9)", transformOrigin: "0 0" }}
    // >
    <ReCAPTCHA
      sitekey="6LfErggqAAAAAE7W4S1kz4t7acPC1szKurB8rvLq"
      onChange={handleChange}
    />
    // </div>
  );
};
export default AuthReCAPTCHA;
// console.log("Captcha value:", value);
// class="rc-anchor rc-anchor-normal rc-anchor-light"
