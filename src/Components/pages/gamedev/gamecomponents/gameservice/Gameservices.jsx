import React, { useRef } from "react";
import Mobilegame from "./maingameservices/Mobilegame";

import Desktopgame from "./maingameservices/Desktopgame";
import Unreal from "./maingameservices/Unreal";
import Unity from "./maingameservices/Unity";
import ArVr from "./maingameservices/ArVr";
import { Link } from "react-router-dom";
import img from '../gameassets/image 38.svg'
// import Otherservice from "./gameservice/Otherservice";

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
  return (
    <>
      <div className="game-service">
        <div className="w-full hfull mt-[80px]  bg-white">
          <div className="w-full h-full relative bg-white flex justify-between">
            <div className="leftt">
              <div>
                <div className="flex gap-40 w-full">
                  <div className="flex flex-col gap-[471px]">
                    <p className="w-[305px] ml-[80px] pt-[40.08px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                      Immerse players in visually stunning landscapes. Our
                      design-centric approach ensures games that are not just
                      playable but also a visual feast for users.
                    </p>

                    <div className="ml-[80px] top-[607.30px]  flex-col justify-start items-start gap-[25px] inline-flex">
                      <p className="w-[305px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                        Have an idea and want to get started?
                      </p>
                      <button className=" talk-btn  hover:bg-yellow-400 transition-all px-8 py-4 rounded-[31px]  hover:border-yellow-400  border border-black justify-center items-center gap-2 inline-flex">
                        <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                          Let’s talk
                        </div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <img
                      className="w-[556.98px] h-[696.22px] left-[498.02px] top-[40.08px] "
                      src={img}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div>
                <div id="mobilegameu" ref={mobileGameRefu}>
                  <Mobilegame />
                </div>
                <div id="desktopgame" ref={desktopgame}>
                  <Desktopgame />
                </div>
                <div id="unreal" ref={unreal}>
                  <Unreal />
                </div>
                <div id="unity" ref={unity}>
                  <Unity />
                </div>
                <div id="arvr" ref={arvr}>
                  <ArVr />
                </div>
              </div>
            </div>

            <div className="right sticky h-[600px] top-20">
              <div className=" pr-[55px] z-[] pt-20 pb-[312px] left-[1163px] top-20 sticky h-[800px] bg-white flex-col justify-start items-center flex">
                <div className="self-stretch flex-col justify-start items-start gap-3 inline-flex sticky top-0 h-[500px]">
                  <div className="p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 inline-flex">
                    <div className="text-black text-base font-normal font-['Graphik'] leading-tight">
                      Overview
                    </div>
                  </div>

                  <div className="w-[222px] h-[341px] relative">
                    <div className="w-[172.50px] h-[54px] p-2 left-0 top-0 absolute rounded-lg justify-center items-center gap-2 inline-flex">
                      <div className="w-[156.50px] text-black text-base font-normal font-['Graphik'] leading-tight">
                        Game development services
                      </div>
                    </div>
                    <div className="w-[197px] h-[282px] left-[25px] top-[59px] absolute flex-col justify-start items-start gap-2 inline-flex">
                      <Link
                        to="#mobilegameu"
                        onClick={scrollToMobileGameu}
                        className="p-2 rounded-lg border justify-center items-center gap-2 inline-flex"
                      >
                        <div className="w-[137.74px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                          Mobile Game Development
                        </div>
                      </Link>
                      <Link
                        to="#desktopgame"
                        onClick={scrollTodesktopgame}
                        className="p-2 rounded-lg border justify-center items-center gap-2 inline-flex"
                      >
                        <div className="w-[153.76px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                          Desktop Game Development
                        </div>
                      </Link>
                      <Link
                        to="#unreal"
                        onClick={scrollTounreal}
                        className="p-2 rounded-lg border justify-center items-center gap-2 inline-flex"
                      >
                        <div className="w-[153.76px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                          Unreal Game Development
                        </div>
                      </Link>
                      <Link
                        to="#unity"
                        onClick={scrollTounity}
                        className="p-2 rounded-lg border justify-center items-center gap-2 inline-flex"
                      >
                        <div className="w-[97.01px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                          Unity Game Development
                        </div>
                      </Link>
                      <Link
                        to="#arvr"
                        onClick={scrollToarvr}
                        className="p-2 rounded-lg border justify-center items-center gap-2 inline-flex"
                      >
                        <div className="w-[165.98px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                          AR/VR Game Development
                        </div>
                      </Link>
                    </div>
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
