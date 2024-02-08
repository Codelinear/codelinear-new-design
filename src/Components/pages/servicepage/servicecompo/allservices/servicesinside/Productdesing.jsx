import React from "react";
import img2 from "../assets/services page-1 product design.jpg";
import { Link } from "react-router-dom";

const Productdesing = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="serviepageproductdesign">
        <div className="w-full h-[700px] relative max-[1410px]:h-full">
          <div className="flex max-xl:flex-col  max-xl:justify-start  max-xl:items-start">
            <div className="max-md:w-full max-xl:ml-[40px] max-md:ml-0">
              <div className="ml-[80px] max-xl:ml-0 max-md:ml-0 mt-[80px] max-[500px]:mt-5  flex-col justify-start items-start gap-[30px] inline-flex max-xl:ml-[0px] max-sm:ml-0px">
                <div className="opacity-60 w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className=" text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    our services
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="flex-col justify-start items-start gap-[42px] flex">
                  <div className="flex-col justify-start items-start gap-[22px] flex">
                    <div className="w-[631.03px]  max-[1410px]:w-[561px] max-lg:w-[631px] max-md:w-full text-black letter-spacing-2 text-[48px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px]">
                      Product Design and Innovation
                    </div>
                    <div className="w-[513.61px] max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                      Sculpt digital products that stand out from the crowd,
                      spark emotions, and redefine what's possible.
                    </div>
                  </div>
                  <Link onClick={scrollToTop} to={"/product-design-and-innovation"}>
                    <button className="px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-full">
                      <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                        Learn more
                      </div>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex ml-[80px]  max-xl:ml-[0px] max-md:ml-0 mt-16 gap-10 max-sm:gap-5  max-sm:justify-between w-[621px] max-[1410px]:w-[561px] max-lg:w-[621px] max-[1410px]:w-[531px]  max-md:w-full flex-wrap">
                <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Experience Design
                </div>
                <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Product Engineering
                </div>
                <div className="w-[175px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Innovation and Strategy
                </div>
              </div>
            </div>
            <div>
              <div className="w-[359px]  max-md:w-full max-md:h-full max-xl:w-[665px] max-xl:h-[800px] max-xl:ml-[40px] max-md:ml-0 h-[434px] left-[730px] mt-[80px]  bg-zinc-100 flex-col justify-center items-center inline-flex">
                <img
                  className="w-[360px] h-[434px] max-md:w-full max-md:h-full max-xl:w-[665px] max-xl:h-[800px]"
                  src={img2}
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

export default Productdesing;
