import React from "react";
import { Link } from "react-router-dom";

import img6 from "../assets/services page-5 cloud engineering.jpg";

const CloudEn = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <div className="serviepageCloud">
      <div className="w-full h-[700px] relative max-[1410px]:h-full">
        <div className="flex max-xl:flex-col  max-xl:justify-start  max-xl:items-start">
          <div>
            <div className="ml-[80px] max-md:ml-0 mt-[80px] max-xl:ml-[40px]  max-md:m-10  flex-col justify-start items-start gap-[30px] inline-flex">
              <div className="opacity-60 w-[521.42px]  max-md:w-full justify-start items-center gap-[13.42px] inline-flex">
                <div className="opaciy-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                  our services
                </div>
                <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
              </div>
              <div className="flex-col justify-start items-start gap-[42px] flex">
                <div className="flex-col justify-start items-start gap-[22px] flex">
                  <div className="w-[631.03px]  max-[1410px]:w-[561px] max-lg:w-[631px] max-md:w-full text-black letter-spacing-2 text-[48px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px]">
                    Cloud Engineering
                  </div>
                  <div className="w-[513.61px]  max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                    Engineered to meet the unique needs of your business,
                    empower your business to thrive in the face of evolving
                    challenges.
                  </div>
                </div>
                <Link onClick={scrollToTop} to={"/cloud-engineering"}>
                  <button className="px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-full">
                    <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                      Learn more
                    </div>
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex ml-[80px] max-sm:justify-between max-[1410px]:w-[561px] max-lg:w-[621px]  max-xl:ml-[40px] max-md:ml-0 mt-16 gap-10 max-sm:gap-5 w-[621px]  max-md:w-full flex-wrap">
              <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                Cloud Ops
              </div>
              <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                Cloud Consulting & Migration
              </div>
              <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                Cloud Security
              </div>
              <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                Cloud App Testing & Implementation
              </div>
              <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                Cloud Managed Services
              </div>
            </div>
          </div>
          <div>
            <div className="w-[359px]  max-md:w-full max-md:h-full max-xl:w-[665px] max-xl:h-[800px] max-xl:ml-[40px] max-md:ml-0 h-[434px] left-[730px] mt-[80px]  bg-zinc-100 flex-col justify-center items-center inline-flex">
              <img
                className="w-[360px]  max-md:w-full max-md:h-full max-xl:w-[665px] max-xl:h-[800px] h-[434px]"
                src={img6}
                alt="placeholder"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudEn;
