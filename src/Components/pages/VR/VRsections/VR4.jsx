import img1 from "../assets/material-symbols-light_navigation-outline.svg";
import img2 from "../assets/ph_map-pin-light.svg";
import img3 from "../assets/Triangle Flag.svg";

import { Link } from "react-router-dom";

const VR4 = () => {
  return (
    <>
      <section id="exp-design" className="exp-design">
        <h2 className="capitilize whitespace-nowrap">
          AR/VR services <span></span>
        </h2>
        <h1 className="whitespace-nowrap">AR Navigation Solutions </h1>
        <p className="exp-p">
          Revolutionize navigation with AR Navigation Solution, integrating
          augmented reality to provide intuitive, interactive, and efficient
          guidance for users.
        </p>
        <div className="prod-container w-[924px] flex-wrap">
          <div className="prod-sub-container">
            <img src={img1} alt="" />
            <h3>Interactive Wayfinding</h3>
            <p>
              Provide users with interactive and dynamic wayfinding, enhancing
              navigation through augmented reality overlays.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img2} alt="" />
            <h3>Location-Based Information</h3>
            <p>
              Deliver real-time, location-based information to users, offering
              relevant details about their surroundings through AR.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img3} alt="" />
            <h3 className="whitespace-nowrap">Seamless Navigation Experience</h3>
            <p>
              Utilize AR navigation to create a seamless and intuitive
              navigation experience, improving user convenience and reducing
              reliance on traditional maps.
            </p>
          </div>
        </div>
      </section>
      <div className="justify-start mb-[100px] items-center gap-[58px] ml-[80px] inline-flex">
        <div className="w-[267.25px] text-black text-xl font-normal font-['Graphik'] leading-normal">
          Need help in making the next big thing?
        </div>
        <Link
          to=""
          className="px-8 py-4 rounded-[50px] border border-black justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
        >
          <div className="text-black rounded-[50px] text-base font-normal font-['Graphik'] capitalize leading-normal">
            Talk to our experts
          </div>
        </Link>
      </div>
    </>
  );
};
export default VR4;
