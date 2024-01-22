import React from "react";
import { Link } from "react-router-dom";

const Apidev = () => {
  return (
    <>
      <>
        <div className="w-full h-[847px] relative bg-white">
          <div className="left-[80px] mt-[168px]  flex-col justify-start items-start gap-[22px] inline-flex">
            <div className="flex-col justify-start items-start gap-[30px] flex">
              <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex">
                <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                  App Development and Modernization
                </div>
                <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
              </div>
              <div className="w-[562.77px] text-black text-[49.20px] font-normal font-['Graphik'] leading-[59.04px]">
              API Development and Integration
              </div>
            </div>
            <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
              Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui in
              tortor ultrices bibendum. Sodales lorem non magna praesent
              elementum in congue massa non. Donec ornare pellentesque laoreet
              orci sit neque.
            </div>
          </div>

          <div className="left-[80px] top-[401px] mt-[100px] flex-col justify-start items-start gap-[85px] inline-flex">
            <div className="justify-start items-start gap-[52px] inline-flex">
              <div className="flex-col justify-start items-start gap-5 inline-flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  Venenatis in eu lacus
                </div>
                <div className="w-[273.16px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui
                  in tortor ultrices bibendum. Sodales lorem non magna praesent
                  elementum{" "}
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 inline-flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  Aliquam fringilla
                </div>
                <div className="w-[273.16px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui
                  in tortor ultrices bibendum. Sodales lorem non magna praesent
                  elementum{" "}
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 inline-flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  Placerat aliquet
                </div>
                <div className="w-[273.16px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui
                  in tortor ultrices bibendum. Sodales lorem non magna praesent
                  elementum{" "}
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-[58px] inline-flex">
              <div className="w-[267.25px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                Need help in making the next big thing?
              </div>
              <Link
                to=""
                className="px-8 py-4 rounded-se-full border border-black justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
              >
                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                  Talk to our experts
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Apidev;
