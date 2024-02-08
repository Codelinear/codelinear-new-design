import React from "react";
import IndustryHero from "./industrycompo/IndustryHero";
import Mainindustry from "./industrycompo/Mainindustry";
import Homeanimate from "../home/homecomponents/homeanimate/Homeanimate";
import Clients from "../home/homecomponents/Clients";
import Bloghome from "../home/homecomponents/homeblog/Bloghome";

const Industry = () => {
  return (
    <>
      <IndustryHero />
      <Mainindustry />
      <Homeanimate />
      <Clients />
      <Bloghome />
    </>
  );
};

export default Industry;
