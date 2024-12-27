import React from "react";
import AppHero from "./appDcomponets/apphero/AppHero";
import Appservice from "./appDcomponets/appservices/Appservice";
import Explore from "../production/Explore";
import { Helmet } from "react-helmet";
import Footer from "../../Footer/Footer";

const Appdevelop = () => {
  return (
    <>
      <Helmet>
        <title>Services - App Development & Modernization</title>
        <meta
          name="keywords"
          content="app developement, application development,application development and modernization , app development services, application development service, Codelinear"
        />
        <link rel="canonical" href="https://codelinear.com/services/app-development-and-modernization" />
        <meta
          name="description"
          content="Explore our Artificial Intelligence (AI) services to leverage cutting-edge technologies and algorithms for your business. From machine learning to natural language processing, we offer tailored AI solutions to drive innovation and efficiency. Contact us today to learn more."
        />
      </Helmet>
      <AppHero />
      <Appservice />
      <Explore />
      <Footer />
    </>
  );
};

export default Appdevelop;
