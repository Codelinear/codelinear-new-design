import React from "react";
import img2 from "../assets/services page-1 product design.jpg";
import { Link } from "react-router-dom";

const Productdesing = () => {
  return (
    <>
      <div className="serviepageproductdesign">
        <div className="w-full h-[688px] relative max-lg:h-full">
          <div className="flex max-lg:flex-col  max-lg:justify-center  max-lg:items-center ">
            <div className="max-md:w-full">
              <div className="ml-[80px] max-md:ml-0 mt-[80px]  flex-col justify-start items-start gap-[30px] inline-flex max-xl:ml-4">
                <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    our services
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="flex-col justify-start items-start gap-[42px] flex">
                  <div className="flex-col justify-start items-start gap-[22px] flex">
                    <div className="w-[631.03px] max-md:w-full text-black letter-spacing-2 text-[48px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px]">
                      Product Design and Innovation
                    </div>
                    <div className="w-[513.61px] max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                      Codelinear leverages human sentiments, company values to
                      help leaders acheive digital excellence.
                    </div>
                  </div>
                  <Link to={'/product-development'}>
                    <button className="px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-full">
                      <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                        Learn more
                      </div>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex ml-[80px] mt-16 gap-10 max-lg:ml-0 max-sm:flex-wrap">
                <div className="w-[167.11px]  top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Experience Design
                </div>
                <div className="w-[125.06px] left-[298.11px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Product Engineering
                </div>
                <div className="w-[125.06px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Innovation and Strategy
                </div>
              </div>
            </div>
            <div>
              <div className="w-[359px] max-lg:w-[665px] max-md:h-full max-lg:h-[800px] h-[434px] left-[730px] mt-[80px]  bg-zinc-100 flex-col justify-center items-center inline-flex max-md:w-full">
                <img
                  className="w-[360px] h-[434px] max-md:w-full max-md:h-full max-lg:w-[665px] max-lg:h-[800px]"
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
