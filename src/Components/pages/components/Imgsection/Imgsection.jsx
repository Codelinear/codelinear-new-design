import React from "react";
import Imgbg from "./bgimage.png";
import Imgbg1 from "./bgimage2.png";
import "./Imgsection.css";

function Imgsection() {
  return (
    <div className="imageSectioncarrer">
      <div className="imgArea">
        <img src={Imgbg} alt="bgimage" />
      </div>
      <div className="contentArea">
        <h2>
          Quis nec massa felis ornare mauris sagittis egestas ultrices massa. Ut
          mauris pellentesque adipiscing tortor nulla gravida ut senectus
          volutpat. Rhoncus faucibus feugia
        </h2>
        <div className="sub-container-career">
          <img src={Imgbg1} alt="bgimage" />
        </div>
      </div>
    </div>
  );
}

export default Imgsection;
