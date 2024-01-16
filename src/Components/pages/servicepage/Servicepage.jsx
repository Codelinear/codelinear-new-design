import React from "react";
import Servicehero from "./servicecompo/servicehero/Servicehero";
import Allservice from "./servicecompo/allservices/Allservice";
import Bloghome from "../home/homecomponents/homeblog/Bloghome";

const Servicepage = () => {
  return (
    <>
      <Servicehero />
      <Allservice />
      <Bloghome/>
    </>
  );
};

export default Servicepage;
