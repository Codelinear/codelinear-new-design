import React from "react";
import img from "../assets/services page-6 game development.jpg";
import { Link } from "react-router-dom";

const GameDevservice = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="serviepageCloud max-sm:p-">
        <div className="w-full h-[700px] relative max-[1410px]:h-full">
          <div className="flex max-lg:flex-col max-xl:w-full max-lg:justify-start max-xl:gap-[80px] max-3lg:gap-[40px] max-2lg:gap-[0px] max-lg:items-start">
            <div className="max-xl:w-full max-md:ml-0">
              <div className="mt-[80px] max-[500px]:mt-28  flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="opacity-60 w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-lg:w-full">
                  <div className=" text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    our services
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="flex-col justify-start items-start gap-[42px] flex">
                  <div className="flex-col justify-start items-start gap-[22px] flex">
                    <div className="w-[631.03px]  max-[1410px]:w-[561px] max-lg:w-[631px] max-1xl:w-[521px] max-md:w-full text-black letter-spacing-2 text-[48px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px]">
                      Game Development
                    </div>
                    <div className="w-[513.61px]  max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                      Breathe life into gaming experiences that resonate with
                      players and leave an indelible mark.
                    </div>
                  </div>
                  <Link className=" max-sm:w-full" onClick={scrollToTop} to={"/game-development"}>
                    <button className="px-8 py-4 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-full">
                      <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                        Learn more
                      </div>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex mt-16 gap-10 max-sm:gap-5  max-sm:justify-between w-[621px] max-[1410px]:w-[561px] max-1xl:w-[531px] max-lg:w-[621px] max-[1410px]:w-[531px]  max-md:w-full flex-wrap">
                <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Mobile Game Development
                </div>
                <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Desktop Game Development
                </div>
                <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Unreal Game Development
                </div>
                <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Unity Game Development
                </div>
                <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  AR/VR Game Development
                </div>
              </div>
            </div>
            <div className="max-md:w-full max-md:h-full">
              <div className="w-[359px]  max-md:w-full max-md:h-full max-lg:w-[665px] max-lg:h-[800px] h-[434px] left-[730px] mt-[80px] max-sm:mt-[30px] bg-zinc-100 flex-col justify-center items-center inline-flex">
                <img
                  className="w-[360px] h-[434px] max-md:w-full max-md:h-full max-lg:w-[665px] max-lg:h-[800px]"
                  src={img}
                  alt="placeholder"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDevservice;
