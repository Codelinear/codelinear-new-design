import React from "react";
import Gamehero from "./gamecomponents/gamehero/Gamehero";
import Gameservices from "./gamecomponents/gameservice/Gameservices";
import Explore from '../production/Explore'
import { Helmet } from "react-helmet";

const Gamedev = () => {
  return (
    <>
    <Helmet>
      <title>codelinear | Game Development</title>
    </Helmet>
      <Gamehero />
      <Gameservices />
      <Explore />
    </>
  );
};

export default Gamedev;
