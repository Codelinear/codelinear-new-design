import React from "react";
import Imgmassa from "./imagemassa.png";
import "./Massa.css";

function Massa() {
  return (
    <div className="massSection">
      <div className="massiImage">
        <img src={Imgmassa} alt="bgimage" />
      </div>
      <div className="massaContent">
        <h2>
          “Quis nec massa felis ornare mauris sagittis egestas ultrices massa.
          Ut mauris pellentesque adipiscing tortor nulla gravida ut senectus
          volutpat. Rhoncus faucibus feugia”
        </h2>
        <p>
          Lorem Ipsum, Position <br />
          Codelinear
        </p>
      </div>
    </div>
  );
}

export default Massa;
