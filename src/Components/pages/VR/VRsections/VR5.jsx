import React from "react";
import img6 from "../assets/image 179.svg";
const VR5 = () => {
  return (
    <>
      <div className="w-full h-[367px] relative bg-white">
        <div className="flex flex-col">
          <div className="ml-[80px] mt-[67px]  flex-col justify-start items-start gap-[22px] inline-flex ">
            <div className="flex-col justify-start items-start gap-[30px] flex">
              <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex">
                <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                  AR\VR services
                </div>
                <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
              </div>
              <div className="w-[631.03px] text-black text-[49.20px] font-normal font-['Graphik'] leading-[59.04px]">
                AR/VR App Development{" "}
              </div>
            </div>

            <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
              Craft immersive digital realms with our AR/VR app development,
              combining design finesse and advanced technology for unparalleled,
              interactive experiences.
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="w-full h-[755px] pl-20 pr-[45px] pt-[0px] pb-[145.80px] bg-white justify-start items-start gap-[141.63px] inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-[54px] inline-flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                Tailored Experiences{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Develop custom AR/VR applications tailored to the unique needs
                and goals of your audience or business, ensuring a personalized
                user experience.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                Cross-Platform Compatibility{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Optimize applications for various platforms, including VR
                headsets, AR glasses, and mobile devices, to reach a broad
                audience and provide a seamless experience across devices.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                Real-Time Interactivity{" "}
              </div>
              <div className="w-[299.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Implement real-time interactivity within the applications,
                enabling users to engage with the virtual or augmented
                environment dynamically and fostering a sense of active
                participation.
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

export default VR5;
