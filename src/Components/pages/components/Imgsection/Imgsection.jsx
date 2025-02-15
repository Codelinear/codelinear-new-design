import { useEffect, useState } from "react";
import Imgbg from "./bgimage.png";
import Imgbg1 from "./bgimage2.png";
import "./Imgsection.css";
import axios from "axios";

function Imgsection() {
  return (
    <div className="imageSectioncarrer">
      <div className="imgArea">
        <img src={Imgbg} alt="" />
      </div>
      <div className="contentArea">
        <h2>
          Become a part of a community of passionate professionals dedicated to
          making a real impact through technology.
        </h2>
        <div className="sub-container-career">
          <img src={Imgbg1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Imgsection;
