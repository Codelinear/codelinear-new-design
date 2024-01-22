import React from "react";



import img from "../assets/Frame 1000002735 (2).png"


const ARservice = () => {
  return (
    <>
      <div className="serviepagearrv">
      <div className="w-full h-[640px] relative max-lg:h-full">
            <div className="flex max-lg:flex-col  max-lg:justify-center  max-lg:items-center ">
            <div>
              <div className="ml-[80px] max-md:ml-0 mt-[80px]  flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="w-[521.42px]   max-md:w-full justify-start items-center gap-[13.42px] inline-flex">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    our services
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="flex-col justify-start items-start gap-[42px] flex">
                  <div className="flex-col justify-start items-start gap-[22px] flex">
                    <div className="w-[631.03px]  max-md:w-full text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px]">
                      AR/VR Services
                    </div>
                    <div className="w-[513.61px]  max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                      Codelinear leverages human sentiments, company values to
                      help leaders acheive digital excellence.
                    </div>
                  </div>
                  <button className="px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-full">
                    <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                      Learn more
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex ml-[80px] max-md:ml-0 mt-16 gap-10 w-[621px]  max-md:w-full flex-wrap">
                <div className="w-[167.11px] left-[80px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[50%]">
                  Web AR/VR Integration
                </div>
                <div className="w-[167.04px] left-[298px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[30%]">
                  Immersive tours
                </div>
                <div className="w-[167.04px] left-[513px] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Location based AR apps
                </div>
              </div>
            </div>
            <div>
              <div className="w-[359px]  max-md:w-full max-md:h-full max-lg:w-[665px] max-lg:h-[800px] h-[434px] left-[730px] mt-[80px]  bg-zinc-100 flex-col justify-center items-center inline-flex">
                <img
                  className="w-[360px]  max-md:w-full max-md:h-full max-lg:w-[665px] max-lg:h-[800px] h-[434px]"
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

export default ARservice;
