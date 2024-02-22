import React from "react";
import Service from "./components/service";
import Explore from "../production/Explore";
import Hero from "./components/hero";
import { Helmet } from "react-helmet";

const Salesforce = () => {
  return (
    <>
    <Helmet>
      <title>codelinear | Salesforce Services</title>
    </Helmet>
      <Hero />
      <Service />
      <Explore />
    </>
  );
};

export default Salesforce;
