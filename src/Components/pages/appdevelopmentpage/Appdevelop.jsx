import React from "react";
import AppHero from "./appDcomponets/apphero/AppHero";
import Appservice from "./appDcomponets/appservices/Appservice";
import Explore from "../production/Explore";

const Appdevelop = () => {
  return (
    <>
      <AppHero />
      <Appservice />
      <Explore />
    </>
  );
};

export default Appdevelop;
