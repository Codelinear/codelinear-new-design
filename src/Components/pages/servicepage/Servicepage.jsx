import React from "react";
import Servicehero from "./servicecompo/servicehero/Servicehero";
import Allservice from "./servicecompo/allservices/Allservice";
import Bloghome from "../home/homecomponents/homeblog/Bloghome";
import { Helmet } from "react-helmet";
const Servicepage = () => {
  return (
    <>
      <Helmet>
        <title>codelinear | Services</title>
        <meta
          name="keywords"
          content="services, web development, mobile apps, software consulting, project management, Codelinear"
        />
        <meta
          name="description"
          content="Explore Codelinear's extensive suite of services designed to cater to your development requirements. Whether you need web development, mobile app creation, software consulting, or project management, our team offers expert solutions to drive your business towards success."
        />
      </Helmet>
      <Servicehero />
      <Allservice />
      <Bloghome />
    </>
  );
};

export default Servicepage;
