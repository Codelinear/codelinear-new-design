import React from "react";
import img from "../assets/services page-6 game development.jpg";
import { Link } from "react-router-dom";

const GameDevservice = () => {
  return (
    <>
      <div className="serviepageCloud max-sm:p-5">
        <div className="w-full h-[668px] relative max-lg:h-full">
          <div className="flex max-lg:flex-col  max-lg:justify-center  max-lg:items-center ">
            <div>
              <div className="ml-[80px] max-md:ml-0 mt-[80px]  flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="w-[521.42px]  max-md:w-full justify-start items-center gap-[13.42px] inline-flex">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    our services
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="flex-col justify-start items-start gap-[42px] flex">
                  <div className="flex-col justify-start items-start gap-[22px] flex">
                    <div className="w-[631.03px]  max-md:w-full text-black letter-spacing-2 text-[48px] font-normal font-['Graphik']  leading-[120%] max-sm:text-[36px]">
                      Game Development
                    </div>
                    <div className="w-[513.61px]  max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                      Breathe life into gaming experiences that resonate with
                      players and leave an indelible mark.  
                    </div>
                  </div>
                  <Link to={"/gamedev"}>
                    <button className="px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-full">
                      <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                        Learn more
                      </div>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex ml-[80px] max-md:ml-0 mt-16 gap-10 w-[621px]  max-md:w-full flex-wrap">
                <div className="w-[167.11px] left-[80px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[50%]">
                  Mobile Game Development
                </div>
                <div className="w-[167.04px] left-[298px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[30%]">
                  Desktop Game Development
                </div>
                <div className="w-[167.04px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[50%]">
                  Unreal Game Development
                </div>
                <div className="w-[175.04px] left-[80px] top-[570.33px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[30%]">
                  Unity Game Development
                </div>
                <div className="w-[167.04px] left-[298.11px] top-[570.33px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  AR/VR Game Development
                </div>
              </div>
            </div>
            <div>
              <div className="w-[359px]  max-md:w-full max-md:h-full max-lg:w-[665px] max-lg:h-[800px] h-[434px] left-[730px] mt-[80px]  bg-zinc-100 flex-col justify-center items-center inline-flex">
                <img
                  className="w-[360px] max-md:w-full max-md:h-full max-lg:w-[665px] max-lg:h-[800px] h-[434px]"
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
