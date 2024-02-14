import React from "react";
import img4 from "../assets/services page-3 technology consulting.jpg";
import { Link } from "react-router-dom";

const Consulting = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="serviepageconsulting">
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
                      Technology Consulting
                    </div>
                    <div className="w-[513.61px]  max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                      Our seasoned consultants bring a universal perspective to
                      your unique challenges, offering insights that redefine
                      possibilities.
                    </div>
                  </div>
                  <Link className=" max-sm:w-full" onClick={scrollToTop} to={"/technology-consulting"}>
                    <button className="px-8 py-4 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-full">
                      <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                        Learn more
                      </div>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex mt-16 gap-10 max-sm:gap-5  max-sm:justify-between w-[621px] max-[1410px]:w-[561px] max-1xl:w-[531px] max-lg:w-[621px] max-[1410px]:w-[531px]  max-md:w-full flex-wrap">
                <div className="w-[175px] left-[80px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Customer Experience Consulting
                </div>
                <div className="w-[175px] left-[298px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Digital transformation consulting
                </div>
                <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Cloud strategy consulting
                </div>
                <div className="w-[175px] left-[80px] top-[570.33px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Software Development Consulting
                </div>
                <div className="w-[175px] left-[298.11px] top-[570.33px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  User Experience Consulting
                </div>
                <div className="w-[175px] left-[298.11px] top-[570.33px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  GTM Strategy Consulting
                </div>
                <div className="w-[175px] left-[298.11px] top-[570.33px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Gamification as a Service
                </div>
                <div className="w-[175px] left-[298.11px] top-[570.33px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  QA Consulting
                </div>
              </div>
            </div>
            <div className="max-md:w-full max-md:h-full">
              <div className="w-[359px]  max-md:w-full max-md:h-full max-lg:w-[665px] max-lg:h-[800px] h-[434px] left-[730px] mt-[80px] max-sm:mt-[30px] bg-zinc-100 flex-col justify-center items-center inline-flex">
                <img
                  className="w-[360px] h-[434px] max-md:w-full max-md:h-full max-lg:w-[665px] max-lg:h-[800px]"
                  src={img4}
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

export default Consulting;
