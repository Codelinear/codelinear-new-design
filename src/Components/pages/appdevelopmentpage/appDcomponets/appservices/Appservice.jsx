import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Mobileapp from "./appdeveservices/Mobileapp";
import Progressive from "./appdeveservices/Progressive";
import Sass from "./appdeveservices/Sass";
import Apidev from "./appdeveservices/Apidev";
import Legacy from "./appdeveservices/Legacy";

const Appservice = () => {
  const mobileAppRfu = useRef(null);
  const prograssive = useRef(null);
  const sass = useRef(null);
  const api = useRef(null);
  const legacy = useRef(null);

  const scrollToMobileGameu = () => {
    if (mobileAppRfu.current) {
      mobileAppRfu.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTodesktopgame = () => {
    if (prograssive.current) {
      prograssive.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTounreal = () => {
    if (sass.current) {
      sass.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTounity = () => {
    if (api.current) {
      api.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToarvr = () => {
    if (legacy.current) {
      legacy.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="app-devepage mt-40">
        <div className="w-full h-full pl-[80px] pb-[29px] bg-white justify-center items-center gap-[108px] inline-flex">
          <div className="flex justify-between w-full">
            <div className="left">
              <div>
                <div className="w-[726.65px] self-stretch justify-center items-center inline-flex">
                  <img
                    className="w-[727.57px] h-[717.49px]"
                    src="https://via.placeholder.com/728x717"
                    alt=""
                  />
                </div>
              </div>

              <div>
                <div className="w-full h-[462px] relative bg-white">
                  <div className="w-[588.86px] ml[80px] mt-[80px]  text-black text-4xl font-normal font-['Graphik'] leading-[43.20px]">
                    Quis nec massa felis ornare mauris sagittis egestas ultrices
                    massa. Ut mauris pellentesque adipiscing tortor nulla
                    gravida ut senectus volutpat. Rhoncus faucibus feugia
                  </div>
                  <Link
                    to="/"
                    className="px-8 py-4 ml80px] mt-[63px]  rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                  >
                    <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                      Talk to our experts
                    </div>
                  </Link>
                </div>
              </div>

              <div>
                <div id="mobildeve" ref={mobileAppRfu}>
                  <Mobileapp />
                </div>
                <div id="progressive" ref={prograssive}>
                  <Progressive />
                </div>
                <div id="sass" ref={sass}>
                  <Sass />
                </div>
                <div id="apidev" ref={api}>
                  <Apidev />
                </div>
                <div id="legacy" ref={legacy}>
                  <Legacy />
                </div>
              </div>
            </div>

            <div className="right sticky h-[600px] top-20">
              <div className="w-[277px] self-stretch pr-[55px] pt-20 pb-[354px] bg-white flex-col justify-start items-center inline-flex">
                <div className="self-stretch flex-col justify-start items-start gap-3 inline-flex">
                  <div className="p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 inline-flex">
                    <div className="text-black text-base font-normal font-['Graphik'] leading-tight">
                      Overview
                    </div>
                  </div>
                  <div className="w-[222px] h-[299px] relative">
                    <div className="w-[172.50px] h-[54px] p-2 left-0 top-0  rounded-lg justify-center items-center gap-2 inline-flex">
                      <div className="w-[156.50px] text-black text-base font-normal font-['Graphik'] leading-tight">
                        App Development and Modernization
                      </div>
                    </div>

                    <div className="w-[197px] h-[231px] left-[25px] top-[68px]  flex-col justify-start items-start gap-2 inline-flex">
                      <Link
                        to="#mobilegameu"
                        onClick={scrollToMobileGameu}
                        className="p-2 rounded-lg border justify-center items-center gap-2 inline-flex"
                      >
                        <div className="w-[75.91px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                          Mobile App
                        </div>
                      </Link>
                      <Link
                        to="#progressive"
                        onClick={scrollTodesktopgame}
                        className="p-2 rounded-lg border justify-center items-center gap-2 inline-flex"
                      >
                        <div className="w-[140.22px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                          Progressive Web App
                        </div>
                      </Link>
                      <Link
                        to="#sass"
                        onClick={scrollTounreal}
                        className="p-2 rounded-lg border justify-center items-center gap-2 inline-flex"
                      >
                        <div className="w-[125.29px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                          SaaS Development
                        </div>
                      </Link>
                      <Link
                        to="#apidev"
                        onClick={scrollTounity}
                        className="p-2 rounded-lg border justify-center items-center gap-2 inline-flex"
                      >
                        <div className="w-[114.35px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                          API Development and Integration
                        </div>
                      </Link>
                      <Link
                        to="#legacy"
                        onClick={scrollToarvr}
                        className="p-2 rounded-lg border justify-center items-center gap-2 inline-flex"
                      >
                        {" "}
                        <div className="w-[96.77px] opacity-80 text-black text-sm font-normal font-['Graphik'] leading-[16.80px]">
                          Legacy App Modernization
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

export default Appservice;
