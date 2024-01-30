import React from "react";
import Gamehero from "./gamecomponents/gamehero/Gamehero";
import Gameservices from "./gamecomponents/gameservice/Gameservices";
import Explore from '../production/Explore'

const Gamedev = () => {
  return (
    <>
      <Gamehero />
      <Gameservices />
      <Explore />
    </>
  );
};

export default Gamedev;
