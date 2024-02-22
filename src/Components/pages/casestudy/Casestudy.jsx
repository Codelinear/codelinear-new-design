import React from "react";
import CaseHero from "./casecompo/caseHero/CaseHero";
import Cases from "./casecompo/case/Casesss";
import Casecards from "./casecompo/Casecards";
import Bloghome from "../home/homecomponents/homeblog/Bloghome";
import { Helmet } from "react-helmet";

const Casestudy = () => {
  return (
    <>
    <Helmet>
      <title>codelinear | Case Studies</title>
    </Helmet>
      <CaseHero />
      <Cases />
      <Casecards />
      <Bloghome />
    </>
  );
};

export default Casestudy;
