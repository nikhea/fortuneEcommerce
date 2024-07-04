import Head from "next/head";

import React from "react";
import History from "../../src/components/aboutComponents/History";
import Features from "../../src/components/Features/Features";
import Banner from "../../src/components/Banner/Banner";
import ClientSay from "../../src/components/aboutComponents/ClientSay";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Hekto commerce</title>
      </Head>
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
