import React from "react";
import Imgmassa from "./imagemassa.png";
import "./Massa.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Massa() {
  return (
    <div className="massSection">
      <div className="massiImage">
        <img src={Imgmassa} alt="" />
      </div>
      <div className="massaContent">
        <h2>
          {" "}
          We believe in the power of design-led technology to shape the future.
          We are committed to fostering a work environment that encourages
          creativity, collaboration, and continuous learning{" "}
        </h2>
      </div>
    </div>
  );
}

export default Massa;
