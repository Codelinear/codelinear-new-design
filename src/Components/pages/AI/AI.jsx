import React from "react";
import AIservice from "./AIcomponents/aiService";
import Explore from "../production/Explore";
import AIHero from "./AIcomponents/aiHero";
import { Helmet } from "react-helmet";
import Footer from "../../Footer/Footer";

const AI = () => {
  return (
    <>
      <Helmet>
        <title>Services - AI Services</title>
        <meta
          name="keywords"
          content="artificial intellegence, ai services, Codelinear"
        />
        <link rel="canonical" href="https://codelinear.com/services/artificial-intelligence-services" />
        <meta
          name="description"
          content="Explore our Artificial Intelligence (AI) services to leverage cutting-edge technologies and algorithms for your business. From machine learning to natural language processing, we offer tailored AI solutions to drive innovation and efficiency. Contact us today to learn more."
        />
      </Helmet>
      <AIHero />
      <AIservice />
      <Explore />
      <Footer />
    </>
  );
};

export default AI;
