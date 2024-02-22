import React from "react";
import Service from "./components/service";
import Explore from "../production/Explore";
import Hero from "./components/hero";
import { Helmet } from "react-helmet";

const Sharepoint = () => {
  return (
    <>
    <Helmet>
      <title>codelinear | Microsoft Sharepoint Services</title>
    </Helmet>
      <Hero />
      <Service />
      <Explore />
    </>
  );
};

export default Sharepoint;
