import React from "react";
import History from "../../components/aboutComponents/History";
import Features from "../../components/Features/Features";
import Banner from "../../components/Banner/Banner";
import ClientSay from "../../components/aboutComponents/ClientSay";

const About = () => {
  return (
    <>
      <Banner title={BannerData.title} />

      <div className="container">
        <History />
        <Features title="Features" />
        <ClientSay />
      </div>
    </>
  );
};
const BannerData = {
  title: `about us`,
};
export default About;
