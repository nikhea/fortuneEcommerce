import style from "./index.module.scss";
import Banner from "../../components/Banner/Banner";
import ContactWay from "../../components/ContactComponents/components/ContactWay";
import Information from "../../components/ContactComponents/components/Information";
import ContactForm from "../../components/ContactComponents/components/ContactForm";
import ContactLogo from "../../components/ContactComponents/components/ContactLogo";

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
