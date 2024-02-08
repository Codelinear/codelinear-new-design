import React from "react";
import { Link } from "react-router-dom";
import img3 from "../assets/services page-2 app development.jpg";

const Appdevelopment = () => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  };
  return (
    <>
      <>
        <div className="serviepageappdevs">
        <div className="w-full h-[700px] relative max-[1410px]:h-full">
            <div className="flex max-xl:flex-col  max-xl:justify-start  max-xl:items-start">
              <div className="max-md:w-full">
                <div className="ml-[80px] max-md:ml-0 mt-[80px]  flex-col justify-start items-start gap-[30px] inline-flex max-xl:ml-[40px]">
                  <div className="opacity-60 w-[521.42px] max-md:w-full justify-start items-center gap-[13.42px] inline-flex">
                    <div className=" text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                      our services
                    </div>
                    <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[42px] flex">
                    <div className="flex-col justify-start items-start gap-[22px] flex">
                      <div className="w-[631.03px]  max-[1410px]:w-[561px] max-lg:w-[631px] letter-spacing-2 max-md:w-full text-black text-[48px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px]">
                        App Development and Modernization
                      </div>
                      <div className="w-[513.61px] max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                        Build enduring app experiences that captivate users,
                        drive growth, and leave a lasting impact.
                      </div>
                    </div>
                    <Link onClick={scrollToTop} to={"/app-development-and-modernization"}>
                      <button className="px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-full">
                        <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                          Learn more
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="flex ml-[80px]  max-xl:ml-[40px] max-md:ml-0 mt-16 gap-10 max-sm:justify-between max-sm:gap-5 w-[621px] max-[1410px]:w-[561px] max-lg:w-[621px]  max-md:w-full flex-wrap">
                <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                    Mobile App
                  </div>
                  <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                    Progressive Web App
                  </div>
                  <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                    SaaS Development
                  </div>
                  <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                    API Development and Integration
                  </div>
                  <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                    Legacy App Modernization
                  </div>
                </div>
              </div>
              <div>
              <div className="w-[359px]  max-md:w-full max-md:h-full max-xl:w-[665px] max-xl:h-[800px] max-xl:ml-[40px] max-md:ml-0 h-[434px] left-[730px] mt-[80px]  bg-zinc-100 flex-col justify-center items-center inline-flex">
                  <img
                    className="w-[360px] h-[434px] max-md:w-full   max-xl:w-[665px] max-xl:h-[800px] max-md:h-full"
                    src={img3}
                    alt="placeholder"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Appdevelopment;
