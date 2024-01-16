import React, { useEffect } from "react";
import "./served.scss";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger);

const Served = () => {
  //   const head = document.querySelector("select");

  //   const leftContent = document.querySelector("img");
  //   //   const rightContent = document.querySelector(".list-one");

  //   gsap.set(leftContent, { opacity: 1, pointerEvents: "none" });
  //   ///////////1st///////////////////////////

  const servedIN = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });

    gsap.to(".one-list", {
      background: "#000",
      duration: 0.3,
    });

    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".middel", {
      //   background: "#D3DAA7",
      //   width: "600%",
      //   visibility: "hidden",
      display: "none",
      duration: 0.3,
    });

    gsap.to(".left1", {
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });

    gsap.to(".right1", {
      visibility: "visible",
      duration: 0.3,
    });
  };

  const servedOUT = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".one-list", {
      background: "transparent",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left1", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right1", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel", {
      //   background: "#D3DAA7",
      //   width: "600%",
      //   visibility: "visible",
      //   display: "hidden",
      display: "block",
      duration: 0.3,
    });
  };

  //   ///////////1st///////////////////////////
  //   ///////////2st///////////////////////////

  const servedINTechno = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    gsap.to(".list-2", {
      background: "#000",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "600%",
      duration: 0.3,
    });
    gsap.to(".middel2", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".left2", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });
    gsap.to(".right2", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  const servedOUTTechno = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".list-2", {
      background: "transparent",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left2", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right2", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel2", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  //   ///////////3st///////////////////////////
  //   ///////////2st///////////////////////////

  const servedINTecom = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    gsap.to(".list-3", {
      background: "#000",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "600%",
      duration: 0.3,
    });
    gsap.to(".middel3", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".left3", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });
    gsap.to(".right3", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  const servedOUTTecom = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".list-3", {
      background: "transparent",

      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left3", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right3", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel3", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  //   ///////////3st///////////////////////////
  //   ///////////2st///////////////////////////

  const servedINTsup = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    gsap.to(".list-4", {
      background: "#000",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "600%",
      duration: 0.3,
    });
    gsap.to(".middel4", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".left4", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });
    gsap.to(".right4", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  const servedOUTTsup = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".list-4", {
      background: "transparent",

      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left4", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right4", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel4", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  //   ///////////3st///////////////////////////
  //   ///////////2st///////////////////////////

  const servedINhel = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    gsap.to(".list-5", {
      background: "#000",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "600%",
      duration: 0.3,
    });
    gsap.to(".middel5", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".left5", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });
    gsap.to(".right5", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  const servedOUTThel = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".list-5", {
      background: "transparent",

      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left5", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right5", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel5", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  //   ///////////3st///////////////////////////
  //   ///////////2st///////////////////////////

  const servedINTfood = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    gsap.to(".list-6", {
      background: "#000",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "600%",
      duration: 0.3,
    });
    gsap.to(".middel6", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".left6", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });
    gsap.to(".right6", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  const servedOUTTfood = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".list-6", {
      background: "transparent",

      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left6", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right6", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel6", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  //   ///////////3st///////////////////////////
  //   ///////////2st///////////////////////////

  const servedINTbio = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    gsap.to(".list-7", {
      background: "#000",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "600%",
      duration: 0.3,
    });
    gsap.to(".middel7", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".left7", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });
    gsap.to(".right7", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  const servedOUTTbio = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".list-7", {
      background: "transparent",

      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left7", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right7", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel7", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  //   ///////////3st///////////////////////////
  //   ///////////2st///////////////////////////

  const servedINTman = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    gsap.to(".list-8", {
      background: "#000",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "600%",
      duration: 0.3,
    });
    gsap.to(".middel8", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".left8", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });
    gsap.to(".right8", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  const servedOUTTmanu = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".list-8", {
      background: "transparent",

      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left8", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right8", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel8", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  //   ///////////3st///////////////////////////
  return (
    <>
      <div className="industry relative bg-white">
        <div className="main-top">
          <div className="head-industry flex justify-between items-start w-[100%] px-[55px]">
            <div className="w-[503.60px] text-black text-[32px] font-normal font-['Graphik'] leading-[38.40px] pb-20">
              In the fast-paced world of technology, we don't just adapt; we
              disrupt.
            </div>
          </div>
        </div>

        <div className="botton concept relative">
          <div className="flex items-start">
            {/* <div className="left-bottom-img">
              <img src={img} alt="" />
            </div> */}

            <div className="right-concept">
              <div
                onMouseEnter={servedIN}
                onMouseLeave={servedOUT}
                className="list-one  one-list"
              >
                <div className="left-consulting left1">Fintech</div>

                <div className="middle-consult middel">FINETECH</div>
                <div className="right-cosult right1">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>Tradejini</li>
                  </ul>
                </div>
              </div>

              <div
                onMouseEnter={servedINTechno}
                onMouseLeave={servedOUTTechno}
                className="list-one list-2"
              >
                <div className="left-consulting left2">Technology</div>

                <div className="middle-consult middel2">Technology</div>
                <div className="right-cosult right2">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>
              <div
                onMouseEnter={servedINTecom}
                onMouseLeave={servedOUTTecom}
                className="list-one list-3"
              >
                <div className="left-consulting left3">ecommerce</div>

                <div className="middle-consult middel3">ecommerce</div>
                <div className="right-cosult right3">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>
              <div
                onMouseEnter={servedINTsup}
                onMouseLeave={servedOUTTsup}
                className="list-one list-4"
              >
                <div className="left-consulting left4">Ecommerce</div>

                <div className="middle-consult middel4">Ecommerce</div>
                <div className="right-cosult right4">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>
              <div
                onMouseEnter={servedINhel}
                onMouseLeave={servedOUTThel}
                className="list-one list-5"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #FFF 41.46%, rgba(255, 255, 255, 0.00) 68.17%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="left-consulting left5"
                >
                  MANUFACTURING
                </div>

                <div className="middle-consult middel5">MANUFACTURING</div>
                <div className="right-cosult right5">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>
              <div
                onMouseEnter={servedINTfood}
                onMouseLeave={servedOUTTfood}
                className="list-one list-6"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #FFF 41.46%, rgba(255, 255, 255, 0.00) 68.17%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="left-consulting left6"
                >
                  Supply chain and logistics
                </div>
                <div className="middle-consult middel6">
                  Supply chain and logistics
                </div>
                <div className="right-cosult right6">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>
              <div
                onMouseEnter={servedINTbio}
                onMouseLeave={servedOUTTbio}
                className="list-one list-7"
              >
                <div className="left-consulting left7">Healthcare</div>

                <div className="middle-consult middel7">Healthcare</div>
                <div className="right-cosult right7">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>
              {/* <div
                onMouseEnter={servedINTman}
                onMouseLeave={servedOUTTmanu}
                className="list-one list-8"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #FFF 41.46%, rgba(255, 255, 255, 0.00) 68.17%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="left-consulting left8"
                >
                  Food and Beverages
                </div>

                <div className="middle-consult middel8">Food and Beverages</div>
                <div className="right-cosult right8">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>

              <div
                onMouseEnter={servedINTman}
                onMouseLeave={servedOUTTmanu}
                className="list-one list-8"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #FFF 41.46%, rgba(255, 255, 255, 0.00) 68.17%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="left-consulting left8"
                >
                  Food and Beverages
                </div>

                <div className="middle-consult middel8">Hospitality</div>
                <div className="right-cosult right8">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>
              <div
                onMouseEnter={servedINTman}
                onMouseLeave={servedOUTTmanu}
                className="list-one list-8"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #FFF 41.46%, rgba(255, 255, 255, 0.00) 68.17%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="left-consulting left8"
                >
                  Real Estate
                </div>

                <div className="middle-consult middel8">Real Estate</div>
                <div className="right-cosult right8">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>
              <div
                onMouseEnter={servedINTman}
                onMouseLeave={servedOUTTmanu}
                className="list-one list-8"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #FFF 41.46%, rgba(255, 255, 255, 0.00) 68.17%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="left-consulting left8"
                >
                  Sustainable Energy
                </div>

                <div className="middle-consult middel8">Sustainable Energy</div>
                <div className="right-cosult right8">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Served;
