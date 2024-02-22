import React from "react";
import AIservice from "./AIcomponents/aiService";
import Explore from "../production/Explore";
import AIHero from "./AIcomponents/aiHero";
import { Helmet } from "react-helmet";
const AI = () => {
  return (
    <>
      <Helmet>
        <title>codelinear | AI Services</title>
      </Helmet>
      <AIHero />
      <AIservice />
      <Explore />
    </>
  );
};

export default AI;
