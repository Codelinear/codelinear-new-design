import Hero from "./hero/hero";
import QSection from "./qualitySection/qualitySection";
import Explore from '../production/Explore'
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const QualityAssurance = () => {
  const produc = useRef(null);

  const scrollToMobileGameu = () => {
    if (produc.current) {
      produc.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
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
      <div className="flex">
        <div className="left section">
          <div className="section">
          <Hero/>
          </div>
          <div className="section" id="produc" ref={produc}>
          <QSection />
          </div>

        </div>
        <div className="right sticky max-xl:hidden h-[600px] top-28 mt-[500px]  max-xl:w-full bg-white max-xl:h-[300px] max-xl:top-10  max-md:h-[400px] pr-[50px]">
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
            <div className=" w-[222px] h-[463px] relative left-[30px] max-xl:h-[200px] max-xl:w-full">
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
              <div className=" stick_list w-[197px] h-[412px] left-[25px] top-[51px] absolute flex-col justify-start items-start gap-2 inline-flex max-xl:flex-row max-xl:flex-wrap  max-xl:w-full  max-xl:h-[200px]  max-lg:relative max-lg:left-[0]">
                <Link
                  to="#mobildeve"
                  onClick={scrollToMobileGameu}
                  // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  className={
                    activeSection === 2
                      ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      : " p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  }
                >
                  <div className="w-[137.52px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                    Quality Assurance
                  </div>
                </Link>
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
