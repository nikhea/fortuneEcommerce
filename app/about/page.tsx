import React from "react";
import History from "../../components/aboutComponents/History";
import Features from "../../components/aboutComponents/Features";

import Banner from "../../components/Banner/Banner";

const About = () => {
  return (
    <>
      <Banner title={BannerData.title} />

      <div className="container">
        <History />
        <Features/>
      </div>
    </>
  );
};
const BannerData = {
  title: `about us`,
};
export default About;
