import React from "react";
import AIservice from "./AIcomponents/aiService";
import Explore from "../production/Explore";
import AIHero from "./AIcomponents/aiHero";

const AI = () => {
  return (
    <>
      <AIHero />
      <AIservice />
      <Explore />
    </>
  );
};

export default AI;
