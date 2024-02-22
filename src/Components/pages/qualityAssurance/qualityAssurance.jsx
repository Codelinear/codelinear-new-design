import Hero from "./hero/hero";
import QSection from "./qualitySection/qualitySection";
import Explore from "../production/Explore";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const QualityAssurance = () => {
  const produc = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition +  200 >= sectionTop && scrollPosition < sectionBottom) {
        setActiveSection(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <Helmet>
      <title>codelinear | Quality Assurance</title>
    </Helmet>
      <div className="flex">
        <div className="left w-[100%] max-xl:w-full">
          <div className="section">
            <Hero />
          </div>
          <div className="section" id="produc" ref={produc}>
            <div className="section">
              <QSection />
            </div>
          </div>
        </div>
        <div className="right sticky max-xl:hidden h-[600px] top-28 mt-[530px]  max-xl:w-full bg-white max-xl:h-[300px] max-xl:top-10  max-md:h-[400px] pr-[80px]">
          <div className="self-stretch flex-col justify-start items-start gap-3 inline-flex max-xl:w-full  max-xl:h-[300px]">
            <div className=" overview bgneutral-100 p-2 rounded-[7px]  justify-center items-center gap-2 inline-flex">
              <div
                className={
                  activeSection === 0
                    ? "active text-black text-base font-normal font-['Graphik'] leading-tight"
                    : " text-black text-base font-normal font-['Graphik'] leading-tight p-3"
                }
              >
                Overview
              </div>
            </div>
            <div className=" w-[122px] h-[463px] relative left-[20px] max-xl:h-[200px] max-xl:w-full">
              <div className="w-20 overview h-[35px] p-2 top-0 absolute rounded-lg justify-center items-center gap-2 inline-flex max-xl:flex-wrap ">
                <div
                  className={
                    activeSection >= 1
                      ? "active text-black text-base font-normal font-['Graphik'] leading-tight"
                      : " text-black text-base font-normal font-['Graphik'] leading-tight p-3"
                  }
                >
                  Quality Assurance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Explore />
    </>
  );
};
export default QualityAssurance;
