import React from "react";
import img2 from "../../gameassets/Frame 1000003062.png";
import app from "../../gameassets/app-store.svg";
import ggl from "../../gameassets/google-play.svg";
import bomb from "../../gameassets/Frame 1000003063.png";
import colorDodge from "../../gameassets/Frame 1000003064.png";

const Mobilegame = () => {
  return (
    <>
      <div className="game-devs max-md:overflow-hidden">
        <div className="w-full relative bg-white max-sm:overflow-hidden">

          <div className="max-sm:w-full">
            <div className="ml-[80px] z-[2] mt-[67px]  flex-col justify-start items-start gap-[22px] inline-flex max-lg:ml-[40px] max-sm:ml-[20px] max-sm:w-full">
              <div className="flex-col justify-start items-start gap-[30px] flex">
                <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[90%]">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    game development services
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <div className="w-[631.03px] letter-spacing-2 z-[2] text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] z-[2] max-sm:text-[36px] max-[720px]:w-[90%]">
                  Mobile Game Development
                </div>
              </div>
              <div className="w-[536.02px] z-[2] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%] max-sm:h-full">
                Revolutionize mobile gaming with our expert mobile game
                development. From captivating designs to innovative gameplay, we
                create unforgettable gaming experiences.
              </div>
            </div>
          </div>

          <div className="flex gap-[21px]  max-sm:px-[20px] ml-[80px] mt-[42px] max-lg:ml-[40px] max-sm:ml-[0px] max-sm:justify-center  max-[720px]:flex-wrap">
            <div className="pl-[25.95px] pr-11 max-sm:pr-[12px]  z-[2] pt-[37.80px] pb-[40.20px]  top-[350.20px] back-drop  flex-col justify-center items-start gap-[41.75px] inline-flex">
              <img
                className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex"
                src={ggl}
                alt=""
              />
              <div className="self-stretch flex-col z-[2] justify-start items-start gap-2.5 inline-flex">
                <div className="w-[159.68px] max-sm:w-full text-black text-[20px] letter-spacing-2 font-normal font-['Graphik'] leading-[120%]">
                  Android Game Development
                </div>
                <div className="w-[235.01px]  max-sm:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Craft exceptional Android games with our expertise, combining
                  creativity and technology for immersive and engaging user
                  experiences.
                </div>
              </div>
            </div>
            <div className="pl-[25.95px] pr-11 max-sm:pr-[12px] pt-[37.79px]  z-[2] pb-[40.20px] left-[406px] top-[350.20px]  back-drop flex-col justify-center items-start gap-[41.76px] inline-flex">
              {/* <div className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex" /> */}

              <img
                className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex"
                src={app}
                alt=""
              />

              <div className="self-stretch flex-col justify-start  z-[2] items-start gap-2.5 inline-flex">
                <div className="w-[159.68px] max-sm:w-full text-black text-xl font-normal font-['Graphik'] letter-spacing-4 leading-[120%]">
                  iOS Game Development
                </div>
                <div className="w-[235.01px] max-sm:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Elevate entertainment with our iOS game development, crafting
                  visually stunning and engaging experiences for Apple users
                  worldwide.
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-end mt-[67px] max-xl:pr-[80px] max-lg:pr-[0px] letter-spacing-6  text-black text-[36px] font-normal font-['Graphik'] leading-[120%] z-[2] max-xl:left-[400px] max-lg:left-[40px] max-sm:pl-[20px] max-sm:w-[90%] max-sm:text-[24px]">
            <p className="w-[588.86px] max-sm:w-[100%]">
              Mobile game development offers global accessibility, diverse
              revenue streams, real-time player engagement, and immersive
              experiences, tapping into widespread smartphone usage.
            </p>
          </div>
          <div className="w-[289.91px] h-[289.91px]  left-[588.90px] top-[316px] absolute origin-top-left justify-end items-center inline-flex max-lg:relative max-lg:w-[320px] max-lg:h-full max-lg:left-[200px] max-lg:top-[0px] max-sm:hidden">
            <img className="rotate-[-68.314px]" src={img2} alt="placeholder" />
          </div>
          <div className="w-[184.91px] h-[187.91px]  right-[288.90px] top-[86px] absolute justify-end items-center inline-flex  max-lg:relative max-lg:left-[180px] max-lg:top-[-100px] max-sm:hidden">
            <img className="rotate-[19.314px]" src={bomb} alt="placeholder" />
          </div>
          <div className="w-[202.91px] h-[247.91px]  left-[128.90px] top-[541px] absolute origin-top-left justify-end items-center inline-flex max-lg:relative max-lg:left-[-500px] max-lg:top-[0px] max-sm:hidden">
            <img className="" src={colorDodge} alt="placeholder" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobilegame;
