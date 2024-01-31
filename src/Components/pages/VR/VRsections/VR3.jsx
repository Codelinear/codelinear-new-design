import img1 from "../assets/Browser Check.svg";
import img2 from "../assets/ph_globe-light.svg";
import img3 from "../assets/One Finger Tap.svg";

import { Link } from "react-router-dom";

const VR3 = () => {
  return (
    <>
      <section id="exp-design" className="exp-design">
        <h2 className="capitilize whitespace-nowrap">
          AR/VR services <span></span>
        </h2>
        <h1 className="whitespace-nowrap  max-sm:whitespace-normal">
          Web AR/VR Integration{" "}
        </h1>
        <p className="exp-p">
          Merge virtual and real-world experiences with our Web AR/VR
          integration, enhancing web platforms with immersive technologies for
          unparalleled engagement.
        </p>
        <div className="prod-container w-[924px] flex-wrap flex-wrap max-lg:w-full">
          <div className="prod-sub-container">
            <img src={img1} alt="" className="w-[57px] h-[57px]" />
            <h3>Accessible User Experience</h3>
            <p>
              Enable AR/VR experiences directly within web browsers for a
              seamless and accessible user interaction.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img2} alt="" className="w-[57px] h-[57px]" />
            <h3>Platform Agnostic</h3>
            <p>
              Ensure compatibility across various devices and platforms,
              allowing users to experience AR/VR without the need for specific
              applications.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img3} alt="" className="w-[57px] h-[57px]" />
            <h3>Enhanced Engagement</h3>
            <p>
              Integrate Web AR/VR to provide immersive and engaging content,
              enhancing user interactions and overall website experience.
            </p>
          </div>
        </div>
      </section>
      <div className="justify-start items-center gap-[58px] ml-[80px] inline-flex max-sm:flex-wrap max-lg:ml-[40px] max-sm:ml-[20px] max-sm:mb-[50px]">
        <div className="w-[267.25px] text-black text-xl font-normal font-['Graphik'] leading-[120%] letter-spacing-4">
          Need help in making the next big thing?
        </div>
        <Link
          to=""
          className="px-8 py-4 rounded-[50px] border border-black justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-[90%]"
        >
          <div className="text-black rounded-[50px] text-base font-normal font-['Graphik'] capitalize leading-normal">
            Talk to our experts
          </div>
        </Link>
      </div>
    </>
  );
};
export default VR3;
