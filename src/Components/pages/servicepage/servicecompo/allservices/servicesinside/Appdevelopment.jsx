import React from "react";
import { Link } from "react-router-dom";
import img3 from "../assets/services page-2 app development.jpg";

const Appdevelopment = () => {
  return (
    <>
      <>
        <div className="serviepageappdevs">
          <div className="w-full h-[688px] relative max-lg:h-full">
            <div className="flex max-lg:flex-col  max-lg:justify-center  max-lg:items-center ">
              <div className="max-md:w-full">
                <div className="ml-[80px] max-md:ml-0 mt-[80px]  flex-col justify-start items-start gap-[30px] inline-flex max-xl:ml-4">
                  <div className="w-[521.42px] max-md:w-full justify-start items-center gap-[13.42px] inline-flex">
                    <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                      our services
                    </div>
                    <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[42px] flex">
                    <div className="flex-col justify-start items-start gap-[22px] flex">
                      <div className="w-[631.03px] letter-spacing-2 max-md:w-full text-black text-[48px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px]">
                        App Development and Modernization
                      </div>
                      <div className="w-[513.61px] max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                        Build enduring app experiences that captivate users,
                        drive growth, and leave a lasting impact.
                      </div>
                    </div>
                    <Link to={"/appdev"}>
                      <button className="px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-full">
                        <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                          Learn more
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="flex ml-[80px] max-md:ml-0 mt-16 gap-10 w-[621px] flex-wrap max-md:w-full ">
                  <div className="w-[167.11px] left-[80px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[30%]">
                    Mobile App
                  </div>
                  <div className="w-[167.04px] left-[298px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[50%]">
                    Progressive Web App
                  </div>
                  <div className="w-[166.55px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[30%]">
                    SaaS Development
                  </div>
                  <div className="w-[166px] left-[80px] top-[570.33px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:w-[50%]">
                    API Development and Integration
                  </div>
                  <div className="w-[125.06px] left-[298.11px] top-[570.33px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[100%]">
                    Legacy App Modernization
                  </div>
                </div>
              </div>
              <div>
                <div className="w-[359px]  max-md:w-full max-md:h-full  max-lg:w-[665px] max-lg:h-[800px] h-[434px] left-[730px] mt-[80px]  bg-zinc-100 flex-col justify-center items-center inline-flex">
                  <img
                    className="w-[360px] h-[434px] max-md:w-full   max-lg:w-[665px] max-lg:h-[800px] max-md:h-full"
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
