import React from "react";
import Techservice from "./techComponent/technologyservice";
import Explore from "../production/Explore";
import TechHero from "./techComponent/techHero";
import { Helmet } from "react-helmet";

const Techconsulting = () => {
  return (
    <>
    <Helmet>
      <title>codelinear | Technology Consulting</title>
    </Helmet>
      <TechHero />
      <Techservice />
      <Explore />
    </>
  );
};

export default Techconsulting;
