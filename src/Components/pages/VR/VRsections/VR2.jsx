import img1 from "../assets/ph_note-pencil-light.svg";
import img2 from "../assets/ph_handshake-light.svg";
import img3 from "../assets/ph_repeat-light.svg";

import { Link } from "react-router-dom";

const VR2 = () => {
  return (
    <>
      <section id="exp-design" className="exp-design mb-[121px]">
        <h2 className="capitilize whitespace-nowrap">
          AR/VR Services <span></span>
        </h2>
        <h1 className="whitespace-nowrap  max-sm:whitespace-normal">VR Product Prototyping </h1>
        <p className="exp-p">
          Transform concepts into tangible virtual models, fostering
          collaborative development and informed decision-making for businesses.
          Accelerate innovation with VR product prototyping
        </p>
        <div className="prod-container w-[924px] flex-wrap flex-wrap max-lg:w-full">
          <div className="prod-sub-container">
            <img src={img1} alt="" />
            <h3>Visualize Concepts Efficiently</h3>
            <p>
              Use VR for quick and efficient visualization of product concepts,
              aiding in design refinement.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img2} alt="" />
            <h3>Enhance Collaboration</h3>
            <p>
              Facilitate collaborative decision-making by allowing stakeholders
              to virtually interact with prototypes.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img3} alt="" />
            <h3>Iterative Development</h3>
            <p>
              Support iterative development processes by rapidly creating,
              testing, and refining virtual product prototypes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default VR2;
