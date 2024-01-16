import React from "react";
import bug from "./assets/bug.svg";
import apple from "./assets/apple.svg";
import nativ from "./assets/native.svg";
import flut from "./assets/flut.svg";

const Mobileapp = () => {
  return (
    <>
      <div className="w-full h-[759px] relative bg-white">
        <div className="m[80px] mt-[88px]  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex">
              <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                App Development and Modernization
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
            </div>
            <div className="w-[562.77px] text-black text-[49.20px] font-normal font-['Graphik'] leading-[59.04px]">
              Mobile App Development
            </div>
          </div>
          <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
            Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui in
            tortor ultrices bibendum. Sodales lorem non magna praesent elementum
            in congue massa non. Donec ornare pellentesque laoreet orci sit
            neque.
          </div>
        </div>
        <div className="left-[80px] top-[356.27px]  text-black text-xl font-normal font-['Graphik'] leading-normal my-10">
          Our capabilities
        </div>

        <div className="flex flex-wrap gap-5 w-[721px]">
          <div className="pl-[25.86px] pr-[33.34px] pt-[24.63px] pb-[25.37px] left-[80px] top-[426px]  bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] justify-start items-center inline-flex">
            <div className="self-stretch justify-center items-center gap-[42px] inline-flex">
              {/* <div  /> */}

              <img className="w-[57px] h-[57px] relative" src={bug} alt="" />
              <div className="w-[166.81px] text-black text-base font-normal font-['Graphik'] leading-tight">
                Native Android App Development
              </div>
            </div>
          </div>
          <div className="pl-[25.86px] pr-[33.34px] pt-[24.63px] pb-[25.37px] left-[80px] top-[564px]  bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] justify-start items-center inline-flex">
            <div className="self-stretch justify-center items-center gap-[42px] inline-flex">
              {/* <div /> */}
              <img className="w-[57px] h-[57px] relative" src={nativ} alt="" />
              <div className="w-[166.81px] text-black text-base font-normal font-['Graphik'] leading-tight">
                Hybrid React Native App Development
              </div>
            </div>
          </div>
          <div className="pl-[25.86px] pr-[33.34px] pt-[24.63px] pb-[25.37px] left-[438.92px] top-[426px]  bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] justify-start items-center inline-flex">
            <div className="self-stretch justify-center items-center gap-[42px] inline-flex">
              {/* <div  /> */}
              <img className="w-[57px] h-[57px] relative" src={apple} alt="" />
              <div className="w-[166.81px] text-black text-base font-normal font-['Graphik'] leading-tight">
                Native iOS App Development
              </div>
            </div>
          </div>
          <div className="pl-[25.86px] pr-[33.34px] pt-[24.63px] pb-[25.37px] left-[438.92px] top-[564px]  bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] justify-start items-center inline-flex">
            <div className="self-stretch justify-center items-center gap-[42px] inline-flex">
              {/* <div  /> */}
              <img className="w-[57px] h-[57px] relative" src={flut} alt="" />
              <div className="w-[166.81px] text-black text-base font-normal font-['Graphik'] leading-tight">
                Hybrid Flutter App Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobileapp;
