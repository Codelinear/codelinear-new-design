import React from "react";
import AppHero from "./appDcomponets/apphero/AppHero";
import Appservice from "./appDcomponets/appservices/Appservice";
import Otherservice from "../gamedev/gamecomponents/gameservice/Otherservice";

const Appdevelop = () => {
  return (
    <>
      <AppHero />
      <Appservice />
      <Otherservice />
    </>
  );
};

export default Appdevelop;
