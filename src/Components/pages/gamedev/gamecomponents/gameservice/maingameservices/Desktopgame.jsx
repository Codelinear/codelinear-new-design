import React from "react";
import img from "../../gameassets/image 163.svg";
import img2 from "../../gameassets/cryengine-logo-vertical-black 1.svg";
import img3 from "../../gameassets/image 167.png";
import img4 from "../../gameassets/image 166.png";
import img5 from "../../gameassets/image 165.png";
import img6 from "../../gameassets/image 162.png";
const Desktopgame = () => {
  return (
    <>
      <div className="w-full h-[589px] relative bg-white">
        <div className="flex flex-col">
          <div className="ml-[80px] mt-[67px]  flex-col justify-start items-start gap-[22px] inline-flex ">
            <div className="flex-col justify-start items-start gap-[30px] flex">
              <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex">
                <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                  game development services
                </div>
                <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
              </div>
              <div className="w-[631.03px] text-black text-[49.20px] font-normal font-['Graphik'] leading-[59.04px]">
                Desktop Game Development
              </div>
            </div>

            <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
              Desktop game development provides expansive graphics, processing
              power, and immersive gameplay, catering to a dedicated gaming
              audience seeking high-quality experiences.
            </div>
          </div>
          <div className="ml-[80px] top-[345px]  flex-col justify-start items-start gap-[35px] inline-flex">
            <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
              Technologies we use
            </div>
            <div className="w-[103px]  justify-start items-start gap-[47px] inline-flex">
              <div className="w-[103px] flex-col justify-start items-center gap-4 inline-flex">
                <div className="w-[64.14px] h-[64.14px] bg-black rounded-full justify-center items-center inline-flex">
                  <img className="w-[64.14px] h-[64.14px]" src={img} alt="" />
                </div>
                <div className="text-black text-base font-normal font-['Graphik'] leading-tight">
                  Unreal Engine
                </div>
              </div>
              <div className="w-[103px] flex-col justify-start items-center gap-4 inline-flex">
                <div className="w-[64.14px] h-[64.14px] justify-center items-center inline-flex">
                  <img className="w-[64.14px] h-[64.14px]" src={img5} alt="" />
                </div>
                <div className="text-black text-base font-normal font-['Graphik'] leading-tight">
                  Unity
                </div>
              </div>
              <div className="w-[103px] h-[99px] pt-2.5 flex-col justify-between items-center inline-flex">
                <img
                  className="w-[103px] h-[48.48px] relative"
                  src={img2}
                  alt=""
                />

                <div className="text-black text-base font-normal font-['Graphik'] leading-tight">
                  CryEngine
                </div>
              </div>
              <div className="w-[103px] flex-col justify-start items-center gap-4 inline-flex">
                <div className="w-[64.14px] pt-[0.38px] pb-1 justify-center items-center inline-flex">
                  <img className="w-[65.83px] h-[59.80px]" src={img4} alt="" />
                </div>
                <div className="text-black text-base font-normal font-['Graphik'] leading-tight">
                  Open3D
                </div>
              </div>
              <div className="w-[103px] flex-col justify-start items-center gap-4 inline-flex">
                <div className="w-[64.14px] h-[64.14px] py-[10.40px] justify-center items-center inline-flex">
                  <img
                    className="w-[64.50px] h-[43.33px]"
                    src={img3}
                    alt={img5}
                  />
                </div>
                <div className="w-[103px] text-center text-black text-base font-normal font-['Graphik'] leading-tight">
                  Amazon Lumberyard
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="w-full h-[755px] pl-20 pr-[45px] pt-[27.20px] pb-[105.80px] bg-white justify-start items-start gap-[141.63px] inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-[54px] inline-flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                High-End Graphics Rendering{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Elevate visual experiences with cutting-edge graphics,
                delivering lifelike environments and immersive gameplay for
                unparalleled desktop gaming adventures.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                Advanced Processing Power{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Harness the full potential of desktop hardware, ensuring
                seamless and complex game mechanics, enabling a truly dynamic
                and responsive gaming experience.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                Expansive Gameplay Possibilities
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Unleash creativity with vast, intricate game worlds,
                sophisticated AI, and diverse gameplay mechanics, offering
                players limitless engagement and exploration.
              </div>
            </div>
          </div>
          <div className="w-[522px] self-stretch flex-col justify-start items-center inline-flex">
            <img className="w-[522px] h-[833.20px]" src={img6} alt="h" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktopgame;
