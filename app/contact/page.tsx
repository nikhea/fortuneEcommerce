import style from "./style/index.module.scss";
import Banner from "../../components/Banner/Banner";
import ContactWay from "./components/ContactWay";
import Information from "./components/Information";
import ContactForm from "./components/ContactForm";
import ContactLogo from "./components/ContactLogo";

const Contact = () => {
  return (
    <>
      <Banner title={BannerData.title} />

      <div className="container">
        <div className={style.TwoColumGrid}>
          <Information />
          <ContactWay />
        </div>
        <div className={style.TwoColumGrid}>
          <ContactForm />
          <div className="hidden lg:flex">
            <ContactLogo />
          </div>
        </div>
      </div>
    </>
  );
};
const BannerData = {
  title: `contact us`,
};
export default Contact;
