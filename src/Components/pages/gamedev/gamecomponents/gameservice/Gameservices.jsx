import React, { useRef, useEffect, useState } from "react";
import Mobilegame from "./maingameservices/Mobilegame";

import Desktopgame from "./maingameservices/Desktopgame";
import Unreal from "./maingameservices/Unreal";
import Unity from "./maingameservices/Unity";
import ArVr from "./maingameservices/ArVr";
import { Link } from "react-router-dom";
import img from "../gameassets//Game development03.jpg";

const Gameservices = () => {
  const mobileGameRefu = useRef(null);
  const desktopgame = useRef(null);
  const unreal = useRef(null);
  const unity = useRef(null);
  const arvr = useRef(null);

  const scrollToMobileGameu = () => {
    if (mobileGameRefu.current) {
      mobileGameRefu.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTodesktopgame = () => {
    if (desktopgame.current) {
      desktopgame.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTounreal = () => {
    if (unreal.current) {
      unreal.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTounity = () => {
    if (unity.current) {
      unity.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToarvr = () => {
    if (arvr.current) {
      arvr.current.scrollIntoView({ behavior: "smooth" });
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
      <div className="game-service">
        <div className="w-full hfull mt-[80px]  bg-white">
          <div className="w-full h-full relative bg-white flex justify-between">
            <div className="leftt">
              <div>
                <div className="flex gap-40 mb-[101px] w-full">
                  <div className="flex flex-col gap-[436px] max-lg:gap-[40px]">
                    <p className="section w-[305px] ml-[80px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-lg:ml-[40px] max-sm:ml-[20px]">
                      Immerse players in visually stunning landscapes. Our
                      design-centric approach ensures games that are not just
                      playable but also a visual feast for users.
                    </p>
                    <img
                      className="w-full h-full hidden max-lg:block pl-[40px] max-sm:px-[20px]"
                      src={img}
                      alt=""
                    />
                    <div className="ml-[80px] top-[607.30px]  flex-col justify-start items-start gap-[25px] inline-flex max-lg:ml-[40px] max-sm:ml-[20px]">
                      <p className="w-[305px] letter-spacing-4 text-black text-xl font-normal font-['Graphik']">
                        Have an idea and want to get started?
                      </p>
                      <button className=" talk-btn  hover:bg-yellow-400 transition-all px-8 py-4 rounded-[31px]  hover:border-yellow-400  border border-black justify-center items-center gap-2 inline-flex">
                        <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                          Let’s talk
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="max-lg:hidden">
                    <img
                      className="w-[556.98px] h-[696.22px] left-[498.02px] top-[40.08px] "
                      src={img}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div>
                <div id="mobilegameu" className='section' ref={mobileGameRefu}>
                  <Mobilegame />
                </div>
                <div id="desktopgame" className='section' ref={desktopgame}>
                  <Desktopgame />
                </div>
                <div id="unreal" className='section' ref={unreal}>
                  <Unreal />
                </div>
                <div id="unity" className='section' ref={unity}>
                  <Unity />
                </div>
                <div id="arvr" className='section' ref={arvr}>
                  <ArVr />
                </div>
              </div>
            </div>

            <div className="right sticky max-xl:hidden h-[600px] top-28 mt-10  max-xl:w-full bg-white max-xl:h-[300px] max-xl:top-10  max-md:h-[400px] pr-[50px]">
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
                      Game Development
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
                        Mobile game development
                      </div>
                    </Link>
                    <Link
                      to="#progressive"
                      onClick={scrollTodesktopgame}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 3
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : " p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[153.52px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                        Desktop game development
                      </div>
                    </Link>
                    <Link
                      to="#sass"
                      onClick={scrollTounreal}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 4
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : " p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[153.52px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                       Unreal game development
                      </div>
                    </Link>
                    <Link
                      to="#apidev"
                      onClick={scrollTounity}
                      className={
                        activeSection === 5
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : " p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[165.72px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                        Unity game development
                      </div>
                    </Link>
                    <Link
                      to="#legacy"
                      onClick={scrollToarvr}
                      className={
                        activeSection === 6
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : " p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[133.01px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                        AR/VR game development
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

export default Gameservices;
