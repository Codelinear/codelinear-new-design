import React from "react";

import eye from "../../gameassets/ph_eye.svg";
import watch from "../../gameassets/mdi_stopwatch-outline.svg";
import game from "../../gameassets/iconoir_3d-select-solid.svg";

const Unreal = () => {
  return (
    <div className="unreal">
      <div className="w-full h-[815px] relative bg-white">
        <div className="ml-[80px] mt-[67px]  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex">
              <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                game development services
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
            </div>
            <div className="w-[631.03px] text-black text-[49.20px] font-normal font-['Graphik'] leading-[59.04px]">
              Unreal Game Development
            </div>
          </div>
          <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
            Unreal Engine game production combines advanced graphics, intuitive
            design tools, and powerful performance, crafting immersive and
            unforgettable gaming experiences.
          </div>
        </div>

        <div className="ml-[80px] mt-[50.20px]  justify-start items-start gap-[21px] inline-flex">
          <div className="pl-[25.86px] pr-11 pt-[38.18px] pb-[40.20px] bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] flex-col justify-center items-start gap-[41.38px] inline-flex">
            <img
              className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex"
              src={eye}
              alt=""
            />
            <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[159.68px] text-black text-xl font-normal font-['Graphik'] leading-[120%]">
                Breath-taking visuals
              </div>
              <div className="w-[235.01px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Deliver breathtaking visuals, pushing the boundaries of realism
                and immersive gaming experiences.
              </div>
            </div>
          </div>
          <div className="pl-[25.95px] pr-11 pt-[38.21px] pb-[40.20px] bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] flex-col justify-center items-start gap-[41.35px] inline-flex">
            <div className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex">
              <img
                className="w-[42.94px] h-[47.29px] relative"
                src={game}
                alt={eye}
              />
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[159.68px] text-black text-xl font-normal font-['Graphik'] leading-[120%]">
                Real time rendering
              </div>
              <div className="w-[235.01px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Achieve stunning real-time rendering, bringing visuals to life
                instantly for unparalleled gaming experiences.
              </div>
            </div>
          </div>
          <div className="pl-[25.95px] pr-11 pt-[38.18px] pb-[40.20px] bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] flex-col justify-center items-start gap-[41.38px] inline-flex">
            <img
              className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex"
              src={watch}
              alt="kj"
            />
            <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[159.68px] text-black text-xl font-normal font-['Graphik'] leading-[120%]">
                Quick prototyping
              </div>
              <div className="w-[235.01px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Prototype swiftly, expediting the creation and testing of game
                concepts easily and efficiently.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unreal;
