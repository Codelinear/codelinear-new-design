import React from "react";
import img from "../../gameassets/Color Dodge.png";
import img2 from "../../gameassets/burger 1.png";
import app from "../../gameassets/app-store.svg";
import ggl from "../../gameassets/google-play.svg";
import bomb from "../../gameassets/bomb (dark).svg";
import colorDodge from "../../gameassets/color-dodge.svg";

const Mobilegame = () => {
  return (
    <>
      <div className="game-devs">
        <div className="w-full relative bg-white">
          <div className="w-[201.80px] h-[247.35px] left-[105.95px] top-[511px] absolute">
            <img
              className="w-[201.80px] h-[247.35px] left-0 top-0 absolute opacity-20 mix-blend-color-dodge"
              src={img}
              alt="placeholder"
            />
          </div>

          <div className="w-[289.91px] h-[289.91px]  left-[588.90px] top-[316px] absolute origin-top-left justify-end items-center inline-flex">
            <img className="rotate-[-68.314px]" src={img2} alt="placeholder" />
          </div>
          <div className="w-[184.91px] h-[187.91px]  right-[288.90px] top-[86px] absolute justify-end items-center inline-flex">
            <img className="rotate-[19.314px]" src={bomb} alt="placeholder" />
          </div>
          <div className="w-[202.91px] h-[247.91px]  left-[128.90px] top-[541px] absolute origin-top-left justify-end items-center inline-flex">
            <img className="" src={colorDodge} alt="placeholder" />
          </div>

          <div>
            <div className="ml-[80px] mt-[67px]  flex-col justify-start items-start gap-[22px] inline-flex">
              <div className="flex-col justify-start items-start gap-[30px] flex">
                <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    game development services
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-[631.03px] text-black text-[49.20px] font-normal font-['Graphik'] leading-[59.04px]">
                  Mobile Game Development
                </div>
              </div>
              <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Revolutionize mobile gaming with our expert mobile game
                development. From captivating designs to innovative gameplay, we
                create unforgettable gaming experiences.
              </div>
            </div>
          </div>

          <div className="flex gap-10 ml-[80px] mt-20">
            <div className="pl-[25.95px] pr-11 pt-[37.80px] pb-[40.20px]  top-[350.20px] back-drop  flex-col justify-center items-start gap-[41.75px] inline-flex">
              <img
                className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex"
                src={ggl}
                alt=""
              />
              <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-[159.68px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                  Android Game Development
                </div>
                <div className="w-[235.01px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Craft exceptional Android games with our expertise, combining
                  creativity and technology for immersive and engaging user
                  experiences.
                </div>
              </div>
            </div>
            <div className="pl-[25.95px] pr-11 pt-[37.79px] pb-[40.20px] left-[406px] top-[350.20px]  back-drop flex-col justify-center items-start gap-[41.76px] inline-flex">
              {/* <div className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex" /> */}

              <img
                className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex"
                src={app}
                alt=""
              />

              <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-[159.68px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                  iOS Game Development
                </div>
                <div className="w-[235.01px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Elevate entertainment with our iOS game development, crafting
                  visually stunning and engaging experiences for Apple users
                  worldwide.
                </div>
              </div>
            </div>
          </div>

          <div className=" left-[513px] relative mt-[67px]  text-black text-4xl font-normal font-['Graphik'] leading-[43.20px]">
            <p className="w-[588.86px]">
              Mobile game development offers global accessibility, diverse
              revenue streams, real-time player engagement, and immersive
              experiences, tapping into widespread smartphone usage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobilegame;
