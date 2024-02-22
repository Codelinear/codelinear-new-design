import React from "react";
import IndustryHero from "./industrycompo/IndustryHero";
import Mainindustry from "./industrycompo/Mainindustry";
import Homeanimate from "../home/homecomponents/homeanimate/Homeanimate";
import Clients from "../home/homecomponents/Clients";
import Bloghome from "../home/homecomponents/homeblog/Bloghome";
import { Helmet } from "react-helmet";

const Industry = () => {
  return (
    <>
    <Helmet>
      <title>codelinear | Industries</title>
    </Helmet>
      <IndustryHero />
      <Mainindustry />
      <Homeanimate />
      <Clients />
      <Bloghome />
    </>
  );
};

export default Industry;
