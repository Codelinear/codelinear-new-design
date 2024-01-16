import React from "react";
import img from "../../gameassets/image 168.png";
const ArVr = () => {
  return (
    <>
      <div className="ArVr">
        <div className="w-full h-[1071px] relative bg-white">
          <div className="h-[622px] left-[513px] top-[353px] absolute flex-col justify-start items-center inline-flex">
            <img className="w-[522.44px] h-[645.42px]" src={img} alt="" />
          </div>
          <div className="flex flex-col gap-10">
            <div className="ml-[80px]  mt-[67px]  flex-col justify-start items-start gap-[22px] inline-flex">
              <div className="flex-col justify-start items-start gap-[30px] flex">
                <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    game development services
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-[631.03px] text-black text-[49.20px] font-normal font-['Graphik'] leading-[59.04px]">
                  AR/VR Game Development
                </div>
              </div>
              <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui
                in tortor ultrices bibendum. Sodales lorem non magna praesent
                elementum in congue massa non. Donec ornare pellentesque laoreet
                orci sit neque.
              </div>
            </div>

            <div className="ml-[80px] top-[353px]  flex-col justify-start items-start gap-[54px] inline-flex">
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  Immersive
                </div>
                <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui
                  in tortor ultrices bibendum. Sodales lorem non magna praesent
                  elementum{" "}
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  Life-like experience
                </div>
                <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui
                  in tortor ultrices bibendum. Sodales lorem non magna praesent
                  elementum{" "}
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  Enhanced Co-op interaction
                </div>
                <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui
                  in tortor ultrices bibendum. Sodales lorem non magna praesent
                  elementum{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArVr;
