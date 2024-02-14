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
          We believe in the power of design-led technology to shape the future.
          We are committed to fostering a work environment that encourages
          creativity, collaboration, and continuous learning
        </h2>
        {/* <p>
          Lorem Ipsum, Position <br />
          Codelinear
        </p> */}
      </div>
    </div>
  );
}

export default Massa;
