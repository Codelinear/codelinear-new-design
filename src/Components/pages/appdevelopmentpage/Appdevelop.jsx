import React from "react";
import AppHero from "./appDcomponets/apphero/AppHero";
import Appservice from "./appDcomponets/appservices/Appservice";
import Explore from "../production/Explore";
import { Helmet } from "react-helmet";
const Appdevelop = () => {
  return (
    <>
     <Helmet>
        <title>codelinear | App Development & Modernization</title>
      </Helmet> 
      <AppHero />
      <Appservice />
      <Explore />
    </>
  );
};

export default Appdevelop;
