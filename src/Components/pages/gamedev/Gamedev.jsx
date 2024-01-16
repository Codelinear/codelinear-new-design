import React from "react";
import Gamehero from "./gamecomponents/gamehero/Gamehero";
import Gameservices from "./gamecomponents/gameservice/Gameservices";
import Mobilegame from "./gamecomponents/gameservice/maingameservices/Mobilegame";
import Desktopgame from "./gamecomponents/gameservice/maingameservices/Desktopgame";
import Unreal from "./gamecomponents/gameservice/maingameservices/Unreal";
import Unity from "./gamecomponents/gameservice/maingameservices/Unity";
import ArVr from "./gamecomponents/gameservice/maingameservices/ArVr";
import Otherservice from "./gamecomponents/gameservice/Otherservice";

const Gamedev = () => {
  return (
    <>
      {/* <div>Gamedev</div> */}
      <Gamehero />
      <Gameservices />
      <Otherservice />
    </>
  );
};

export default Gamedev;
