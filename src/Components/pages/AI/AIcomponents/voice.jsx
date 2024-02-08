import React from "react";
import img from "../assets/Frame 1000003064.jpg";
const Voice = () => {
  return (
    <>
      <div className="w-full h-[992px] relative bg-white mt-20 max-lg:h-full">
        <div className="left-[80px] top-[88px]  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
              <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                Artificial Intelligence (AI) services{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[562.77px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-[100%] max-sm:text-[36px]">
              Voice-enabled Technology{" "}
            </div>
          </div>
          <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
            Elevate interactions with our Voice-enabled Technology services,
            featuring accurate Speech-to-Text, seamless Voice Command
            Integration, and secure Voice Biometrics Authentication for enhanced
            user experiences and operational efficiency.
          </div>
        </div>

        <div className="flex gap-20 mt-[54px] max-lg:flex-wrap">
          <div className="left-[80px] top-[376px]  flex-col justify-start items-start gap-[54px] inline-flex max-lg:flex-row max-lg:flex-wrap">
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Speech-to-Text Solutions{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Implement accurate speech-to-text technology, enabling seamless
                conversion of spoken language into text for diverse applications
                and industries.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Voice Command Integration{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Integrate voice command capabilities into applications, devices,
                and systems, providing users with hands-free control and
                enhanced accessibility.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Voice Biometrics Authentication{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Implement secure voice biometrics for user authentication,
                enhancing identity verification with advanced voice recognition
                technology for increased security and efficiency.
              </div>
            </div>
          </div>

          <div className="h-[568px] left-[516px] top-[376px]  flex-col justify-start items-center inline-flex max-sm:w-full max-sm:h-full">
            <img
              className="w-[519.33px] h-[779.13px] max-sm:w-full max-sm:h-full"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Voice;
