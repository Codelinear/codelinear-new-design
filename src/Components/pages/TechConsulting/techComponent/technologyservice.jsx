import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets//Technology consulting01.jpg";
import Strategy from "./strategy";
import Software from "./software";
import User from "./user";
import GTM from "./gtm";
import Gamification from "./gamification";
import QA from "./qa";
import Experience from "./experience";
import Transform from "./transform";

const Technology = () => {
  const produc = useRef(null);
  const appdeve = useRef(null);
  const consult = useRef(null);
  const ecommerce = useRef(null);
  const gservice = useRef(null);
  const GTMservice = useRef(null);
  const Gamificationservice = useRef(null);
  const QAservice = useRef(null);

  const scrollToMobileGameu = () => {
    if (produc.current) {
      produc.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTodesktopgame = () => {
    if (appdeve.current) {
      appdeve.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTounreal = () => {
    if (consult.current) {
      consult.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTounity = () => {
    if (ecommerce.current) {
      ecommerce.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTogservice = () => {
    if (gservice.current) {
      gservice.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToGTM = () => {
    if (GTMservice.current) {
      GTMservice.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToGamification = () => {
    if (Gamificationservice.current) {
      Gamificationservice.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToQA = () => {
    if (QAservice.current) {
      QAservice.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (
        scrollPosition + 200 >= sectionTop &&
        scrollPosition < sectionBottom
      ) {
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="app-devepage mt-[40px]">
        <div className="w-full h-full pl-[80px] pb-[29px] bg-white justify-center items-center gap-[108px] inline-flex max-lg:px-[40px] max-sm:px-[20px]">
          <div className="flex justify-between w-full">
            <div className="left">
              <div>
                <div className="section w-full self-stretch justify-center items-center inline-flex max-lg:justify-start">
                  <img
                    className="w-[727.57px] h-[717.49px] max-lg:w-[100%] max-sm:h-full"
                    src={img}
                    alt=""
                  />
                </div>
              </div>

              <div>
                <div className="w-full mb-[70px] relative bg-white section">
                  <div className="w-[670px] letter-spacing-6 mt-[130px]  text-black text-[36px] font-normal font-['Graphik'] leading-[120%] max-lg:w-[100%] max-sm:text-[24px] max-sm:tracking-tight max-sm:mt-[100px]">
                    Our Technology Consulting services go beyond conventional
                    solutions; they are the intersection of vision, creativity,
                    and technological brilliance.
                  </div>
                  <Link
                    to="/contact-us"
                    onClick={scrollToTop}
                    className="px-8 py-4 ml80px] mt-[42px]  rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-[100%]"
                  >
                    <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                      Talk to our experts
                    </div>
                  </Link>
                </div>
              </div>
              <div>
                <div id="mobildeve" className="section" ref={produc}>
                  <Experience />
                </div>
                <div id="progressive" className="section" ref={appdeve}>
                  <Transform />
                </div>
                <div id="sass" className="section" ref={consult}>
                  <Strategy />
                </div>
                <div id="apidev" className="section" ref={ecommerce}>
                  <Software />
                </div>
                <div id="legacy" className="section" ref={gservice}>
                  <User />
                </div>
                <div id="GTM" className="section" ref={GTMservice}>
                  <GTM />
                </div>
                <div
                  id="Gamification"
                  className="section"
                  ref={Gamificationservice}
                >
                  <Gamification />
                </div>
                <div id="QA" className="section" ref={QAservice}>
                  <QA />
                </div>
              </div>
            </div>
            <div className="right sticky max-xl:hidden h-[600px] top-28 mt-0  max-xl:w-full bg-white max-xl:h-[300px] max-xl:top-10  max-md:h-[400px] pr-[80px]">
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
                <div className=" w-[222px] h-[463px] relative left-[0px] max-xl:h-[200px] max-xl:w-full">
                  <div className="w-[222px] overview h-[35px] p-2 top-0 absolute rounded-lg justify-center items-center gap-2 inline-flex max-xl:flex-wrap ">
                    <div
                      className={
                        activeSection >= 1
                          ? "active text-black text-base font-normal font-['Graphik'] leading-tight"
                          : " text-black text-base font-normal font-['Graphik'] leading-tight p-3"
                      }
                    >
                      Technology Consulting{" "}
                    </div>
                  </div>
                  <div className=" stick_list mt-[1px] w-[197px] h-[412px] left-[25px] top-[51px] absolute flex-col justify-start items-start gap-[4px] inline-flex max-xl:flex-row max-xl:flex-wrap  max-xl:w-full  max-xl:h-[200px]  max-lg:relative max-lg:left-[0]">
                    <Link
                      to="#customer-experience-consulting"
                      onClick={scrollToMobileGameu}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 2
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[164.52px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        Customer Experience Consulting{" "}
                      </div>
                    </Link>
                    <Link
                      to="#digital-transformation-consulting"
                      onClick={scrollTodesktopgame}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 3
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[164.52px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        Digital transformation consulting{" "}
                      </div>
                    </Link>
                    <Link
                      to="#cloud-strategy-consulting"
                      onClick={scrollTounreal}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 4
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[164.52px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        Cloud strategy consulting{" "}
                      </div>
                    </Link>
                    <Link
                      to="#software-developmentconsulting"
                      onClick={scrollTounity}
                      className={
                        activeSection === 5
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[164.52px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        Software Development Consulting{" "}
                      </div>
                    </Link>
                    <Link
                      to="#user-experience-consulting"
                      onClick={scrollTogservice}
                      className={
                        activeSection === 6
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[164.51px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        User Experience Consulting{" "}
                      </div>
                    </Link>
                    <Link
                      to="#gtm-strategy-consulting"
                      onClick={scrollToGTM}
                      className={
                        activeSection === 7
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[164.51px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        GTM Strategy Consulting{" "}
                      </div>
                    </Link>
                    <Link
                      to="#gamification-as-a-service"
                      onClick={scrollToGamification}
                      className={
                        activeSection === 8
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[164.51px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        Gamification as a Service{" "}
                      </div>
                    </Link>
                    <Link
                      to="#qa-consulting"
                      onClick={scrollToQA}
                      className={
                        activeSection === 9
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[164.51px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        QA Consulting{" "}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
