import React, { useEffect, useRef, useState } from "react";
import Productdesing from "./servicesinside/Productdesing";
import Appdevelopment from "./servicesinside/Appdevelopment";
import Consulting from "./servicesinside/Consulting";
import Ecommerce from "./servicesinside/Ecommerce";
import CloudEn from "./servicesinside/CloudEn";
import { Link } from "react-router-dom";
import GameDevservice from "./servicesinside/GameDevservice";
import ARservice from "./servicesinside/ARservice";
import QalityAssurance from "./servicesinside/QalityAssurance";
import Lowcode from "./servicesinside/Lowcode";
import "./service.scss";

import img from "./assets/service page 2nd fold.jpg";

const Allservice = () => {
  const produc = useRef(null);
  const appdeve = useRef(null);
  const consult = useRef(null);
  const ecommerce = useRef(null);
  const gservice = useRef(null);
  const arvr = useRef(null);
  const quality = useRef(null);
  const cloud = useRef(null);
  const lowcode = useRef(null);

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
  const scrollToarvrr = () => {
    if (cloud.current) {
      cloud.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTogservice = () => {
    if (gservice.current) {
      gservice.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToarrv = () => {
    if (arvr.current) {
      arvr.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTowuality = () => {
    if (quality.current) {
      quality.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTolowcode = () => {
    if (lowcode.current) {
      lowcode.current.scrollIntoView({ behavior: "smooth" });
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
        console.log(index);
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
      <div className="allservice relative">
        <div className="main-allservice">
          <div className="w-full h-full relative bg-white flex justify-between max-xl:flex-wrap-reverse">
            <div className="left max-md:w-full">
              <div className="flex h-[1150px] max-lg:flex-wrap  max-md:h-[650px] section max-md:p-5">
                <div className="w-[738px] ml-[80px] mt-[59px] letter-spacing-2  text-black text-[48px] font-normal font-['Graphik'] leading-[120%] max-lg:w-full max-lg:m-8 max-sm:m-0 max-md:mt-10  max-md:h-[200px] max-sm:text-[24px] max-sm:leading-[29px]">
                  We help businesses launch their success and bring the luxury
                  of transformational technology and dynamic UI/UX right to
                  their threshold.
                </div>
                <div className="left-[405px] top-[388px] absolute  bglack justify-end items-center inline-flex max-xltop-[700px] max-lg:left-[5%]  max-mdhidden max-md:w-full max-md:h-full max-lg:w-[665px] max-lg:h-[800px]  max-md:relative max-md:left-0 max-md:top-0  max-xl:top-[450px] max-lg:top-[350px]">
                  <img
                    className="w-[707.30px] h-[676.40px] origin-top-left rotat-[19.37deg] max-md:w-full  max-lg:w-[665px] max-lg:h-[800px] max-md:h-[400px]"
                    src={img}
                    alt=""
                  />
                </div>
              </div>

              <div className="max-md:p-[20px]">
                <div className="section" id="produc" ref={produc}>
                  <Productdesing />
                </div>
                <div className="section" id="appdeve" ref={appdeve}>
                  <Appdevelopment />
                </div>
                <div className="section" id="consult" ref={consult}>
                  <Consulting />
                </div>
                <div className="section" id="ecommerce" ref={ecommerce}>
                  <Ecommerce />
                </div>
                <div className="section" id="cloudd" ref={cloud}>
                  <CloudEn />
                </div>
                <div className="section" id="gservice" ref={gservice}>
                  <GameDevservice />
                </div>
                <div className="section" id="arvr" ref={arvr}>
                  <ARservice />
                </div>
                <div className="section" id="Lowcode" ref={lowcode}>
                  <Lowcode />
                </div>
                <div className="section" id="quality" ref={quality}>
                  <QalityAssurance />
                  <div className="section h-[210px] w-100%"></div>
                </div>
              </div>
            </div>

            <div className="right sticky max-xl:hidden h-[600px] top-28 mt-10  max-xl:w-full bg-white max-xl:h-[300px] max-xl:top-10  max-md:h-[400px] pr-[50px]">
              <div className="self-stretch flex-col justify-start items-start gap-3 inline-flex max-xl:w-full  max-xl:h-[300px]">
                <div className=" overview p-2 bgneutral-100 rounded-[7px] justify-center items-center gap-2 inline-flex">
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
                <div className=" w-[222px] h-[463px] relative left-[15px] max-xl:h-[200px] max-xl:w-full">
                  <div className="w-20 overview h-[35px] p-2 left-0 top-0 absolute rounded-lg justify-center items-center gap-2 inline-flex max-xl:flex-wrap ">
                    <div
                      className={
                        activeSection >= 1
                          ? "active text-black text-base font-normal font-['Graphik'] leading-tight"
                          : " text-black text-base font-normal font-['Graphik'] leading-tight p-3"
                      }
                    >
                      Services
                    </div>
                  </div>
                  <div className=" stick_list w-[197px] h-[412px] left-[25px] top-[51px] absolute flex-col justify-start items-start gap-2 inline-flex max-xl:flex-row max-xl:flex-wrap  max-xl:w-full  max-xl:h-[200px]  max-lg:relative max-lg:left-[0]">
                    <Link
                      to="#produc"
                      onClick={scrollToMobileGameu}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 2
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : " p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[137.52px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                        Product Design and Innovation
                      </div>
                    </Link>
                    <Link
                      to="#appdeve"
                      onClick={scrollTodesktopgame}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 3
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : " p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[153.52px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                        App Development and Modernization
                      </div>
                    </Link>
                    <Link
                      to="#consult"
                      onClick={scrollTounreal}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 4
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : " p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[153.52px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                        Technology Consulting
                      </div>
                    </Link>
                    <Link
                      to="#ecommerce"
                      onClick={scrollTounity}
                      className={
                        activeSection === 5
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : " p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[165.72px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                        Ecommerce Marketplace Development
                      </div>
                    </Link>
                    <Link
                      to="#cloudd"
                      onClick={scrollToarvrr}
                      className={
                        activeSection === 6
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : " p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[127.06px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                        Cloud Engineering
                      </div>
                    </Link>
                    <Link
                      to="#gservice"
                      onClick={scrollTogservice}
                      className={
                        activeSection === 7
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : " p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[133.01px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                        Game Development
                      </div>
                    </Link>
                    <Link
                      to="#arvr"
                      onClick={scrollToarrv}
                      className={
                        activeSection === 8
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : " p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[105.25px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                        AR/VR Services
                      </div>
                    </Link>

                    <Link
                      to="#lowcode"
                      onClick={scrollTolowcode}
                      className={
                        activeSection === 9
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : " p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[153.52px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                        Low-code and No-code
                      </div>
                    </Link>
                    <Link
                      to="#quality"
                      onClick={scrollTowuality}
                      className={
                        activeSection >= 10
                          ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                          : " p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[118.98px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                        Quality Assurance
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

export default Allservice;
