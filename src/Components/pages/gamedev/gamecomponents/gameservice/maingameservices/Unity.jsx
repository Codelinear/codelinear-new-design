import React from "react";
import img from "../../gameassets/solar_gamepad-broken.svg";
import img2 from "../../gameassets/iconamoon_3d-light.svg";
import code from "../../gameassets/material-symbols_code.svg";
const Unity = () => {
  return (
    <div className="unreal">
      <div className="w-full h-[813px] relative bg-white">
        <div className="left-[80px] top-[67px] absolute flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex">
              <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                game development services
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
            </div>
            <div className="w-[631.03px] text-black text-[49.20px] font-normal font-['Graphik'] leading-[59.04px]">
              Unity Game Development
            </div>
          </div>
          <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
            Elevate your gaming vision with Unity's versatile game development,
            blending powerful tools, cross-platform capabilities, and incredible
            interactive experiences.
          </div>
        </div>
        <div className="left-[80px] top-[350.20px] absolute justify-start items-start gap-[21px] inline-flex">
          <div className="pl-[25.38px] pr-11 pt-[38.18px] pb-[40.20px] bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] flex-col justify-center items-start gap-[41.38px] inline-flex">
            <div className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex">
              <img
                className="w-[47.71px] h-[35.78px] relative"
                src={img}
                alt=""
              />
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[185.22px] text-black text-[20px] font-normal font-['Graphik'] leading-[120%]">
                Easy cross-platform development
              </div>
              <div className="w-[235.01px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Effortlessly create across platforms with streamlined and
                user-friendly cross-platform development solutions.
              </div>
            </div>
          </div>
          <div className="pl-[25.38px] pr-11 pt-[38.18px] pb-[40.20px] bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] flex-col justify-center items-start gap-[41.38px] inline-flex">
            <div className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex">
              <img
                className="w-[47.71px] h-[35.78px] relative"
                src={code}
                alt=""
              />
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[195.22px] text-black text-[20px] font-normal font-['Graphik'] leading-[120%]">
                Robust development environment{" "}
              </div>
              <div className="w-[235.01px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Unity provides a robust development environment fostering
                efficiency, and seamless integration.
              </div>
            </div>
          </div>
          <div className="pl-[25.38px] pr-11 pt-[38.18px] pb-[40.20px] bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] flex-col justify-center items-start gap-[41.38px] inline-flex">
            <div className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex">
              <img
                className="w-[47.71px] h-[35.78px] relative"
                src={img2}
                alt=""
              />
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[159.22px] text-black text-[20px] font-normal font-['Graphik'] leading-[120%]">
                2D & 3D capabilities{" "}
              </div>
              <div className="w-[235.01px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Unlock limitless creative possibilities , regardless of the type
                of game you want to create.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unity;
