import img1 from "../assets/ph_gear-light.svg";
import img2 from "../assets/ph_eye-light.svg";
import img3 from "../assets/ph_hand-light.svg";

import { Link } from "react-router-dom";

const VR1 = () => {
  return (
    <>
      <section id="exp-design" className="exp-design">
        <h2 className="capitilize whitespace-nowrap">
          AR/VR Services <span></span>
        </h2>
        <h1 className="whitespace-nowrap">Immersive Experiences </h1>
        <p className="exp-p">
          Dive into unparalleled sensory delight with our immersive experiences,
          where cutting-edge technology converges with design for captivating,
          memorable interactions.
        </p>
        <div className="prod-container w-[924px] flex-wrap">
          <div className="prod-sub-container">
            <img src={img1} alt="" />
            <h3>Engaging Storytelling</h3>
            <p>
              Craft narratives that captivate users, leveraging immersive
              technologies to create compelling and memorable experiences.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img2} alt="" />
            <h3>Interactive Visuals</h3>
            <p>
              Incorporate interactive elements within the experience, allowing
              users to engage with the virtual or augmented environment.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img3} alt="" />
            <h3>Multi-Sensory Engagement</h3>
            <p>
              Enhance immersion by appealing to multiple senses, incorporating
              audio, visuals, and, where applicable, haptic feedback to create
              an engaging user experience.
            </p>
          </div>
        </div>
      </section>
      <div className="justify-start mb-[191px] items-center gap-[58px] ml-[80px] inline-flex">
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
export default VR1;
