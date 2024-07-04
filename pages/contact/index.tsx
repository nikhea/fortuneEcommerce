import Head from "next/head";

import style from "./index.module.scss";
import Banner from "../../src/components/Banner/Banner";
import ContactWay from "../../src/components/ContactComponents/components/ContactWay";
import Information from "../../src/components/ContactComponents/components/Information";
import ContactForm from "../../src/components/ContactComponents/components/ContactForm";
import ContactLogo from "../../src/components/ContactComponents/components/ContactLogo";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Hekto commerce</title>
      </Head>
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
