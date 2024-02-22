import React from "react";
import Cloudservice from "./cloudComponents/cloudServices";
import Explore from "../production/Explore";
import CloudHero from "./cloudComponents/cloudHero";
import { Helmet } from "react-helmet";

const Cloud = () => {
  return (
    <>
    <Helmet>
      <title>codelinear | Cloud Engineering</title>
    </Helmet>
      <CloudHero />
      <Cloudservice />
      <Explore />
    </>
  );
};

export default Cloud;
