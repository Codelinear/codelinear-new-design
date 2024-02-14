import img1 from "../assets/Bubble_Logo_no_code 1.svg";
import img2 from "../assets/Webflow_logo_2023 1.svg";
import img3 from "../assets/WordPress_blue_logo 1.svg";
import img4 from "../assets/Wix.com_website_logo 1.svg";
import img5 from "../assets/4373224_hubspot_logo_logos_icon 1.svg";

import { Link } from "react-router-dom";

const LowSection = () => {
  const scrollToTop = () =>{
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }
  return (
    <>
      <section id="exp-design" className="exp-design">
        <h2>
          LOW-CODE AND NO-CODE <span></span>
        </h2>
        <h1 className="whitespace-nowrap max-sm:whitespace-normal">Low-code and No-code</h1>
        <p className="exp-p">
          Propel your ideas from concept to reality at unprecedented speed. Our
          Low Code No Code approach reduces development cycles, allowing you to
          innovate and iterate rapidly.
        </p>
        <div className="prod-container w-[924px] flex-wrap max-lg:w-full">
          <div className="prod-sub-container">
            <img src={img1} alt=""  className="w-[57px] h-[57px]"/>
            <h3>Bubble</h3>
            <p>
              Empowers users with no-code development, enabling the creation of
              custom web applications effortlessly and efficiently.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img2} alt=""  className="w-[57px] h-[57px]"/>
            <h3>Webflow</h3>
            <p>
              Intuitive design tools for building responsive websites visually,
              enabling quick web design without code constraints.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img3} alt=""  className="w-[57px] h-[57px]"/>
            <h3>WordPress</h3>
            <p>
              Robust content management system, facilitating website creation
              and customization with extensive plugins and themes.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img4} alt="" className="w-[57px] h-[57px]" />
            <h3>Wix</h3>
            <p>
              User-friendly website builder offering customizable templates and
              intuitive drag-and-drop tools for effortless website creation.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img5} alt="" className="w-[57px] h-[57px]" />
            <h3>HubSpot</h3>
            <p>
              Drag-and-drop design, SEO tools, and integrated marketing features
              for optimization.
            </p>
          </div>
        </div>
      </section>
      <div className="justify-start items-center gap-[58px] ml-[80px] max-sm:m-0 max-sm:px-[20px] inline-flex max-sm:flex-wrap max-lg:ml-[40px] max-sm:m]">
        <div className="w-[267.25px] text-black text-xl font-normal font-['Graphik'] leading-[120%] letter-spacing-4">
           Need help in making the next big thing?
        </div>
        <Link
          to={"/contact-us"}
          onClick={scrollToTop}
          className="px-8 py-4 rounded-[50px] border border-black justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-[100%]"
        >
          <div className="text-black rounded-[50px] text-base font-normal font-['Graphik'] capitalize leading-normal">
            Talk to our experts
          </div>
        </Link>
      </div>
    </>
  );
};
export default LowSection;
