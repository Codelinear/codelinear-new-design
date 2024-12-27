import React from "react";
import Servicehero from "./servicecompo/servicehero/Servicehero";
import Allservice from "./servicecompo/allservices/Allservice";
import Bloghome from "../home/homecomponents/homeblog/Bloghome";
import { Helmet } from "react-helmet";
import Footer from "../../Footer/Footer";
const Servicepage = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://codelinear.com/services" />
        <meta
          name="keywords"
          content="services, web development, mobile apps, software consulting, project management, Codelinear"
        />
        <meta
          name="description"
          content="Explore Codelinear's extensive suite of services designed to cater to your development requirements. Whether you need web development, mobile app creation, software consulting, or project management, our team offers expert solutions to drive your business towards success."
        />
        <title>Codelinear - Services page</title>
      </Helmet>
      <Servicehero />
      <Allservice />
      <Bloghome />
      <Footer />
    </>
  );
};

export default Servicepage;
