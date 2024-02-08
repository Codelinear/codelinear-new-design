import React from "react";
import Cloudservice from "./cloudComponents/cloudServices";
import Explore from "../production/Explore";
import CloudHero from "./cloudComponents/cloudHero";

const Cloud = () => {
  return (
    <>
      <CloudHero />
      <Cloudservice />
      <Explore />
    </>
  );
};

export default Cloud;
