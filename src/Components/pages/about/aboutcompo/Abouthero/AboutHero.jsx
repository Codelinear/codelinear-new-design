import React from "react";
import Lottie from "lottie-react";

import animationData from "./about page.json";

const AboutHero = () => {
  return (
    <>
      <div className="about-hero">
        <div className="w-full px-[161px] pt-[96.64px] pb-[103.51px] bg-white flex-col justify-end items-center gap-[78.74px] max-lg:px-[40px] max-md:mt-[200px] inline-flex max-md:p-5 max-md:h-full max-md:my-20 max-sm:m-0 max-sm:pt-[116px]">
          <Lottie
            className="mt5 w-[918px] h-[381px] max-lg:w-[663px] max-lg:h-[275px] max-sm:h-fill max-sm:w-[100%]"
            animationData={animationData} // Your animation JSON
            loop={false} // Set to true if you want the animation to loop
            autoplay={true} // Set to true to automatically play the animation
          />
          <div className="w-[536.02px] opacity-80 text-center text-black text-base font-normal font-['Graphik'] leading-normal max-md:p5 max-md:text-justify max-md:w-full">
            We integrate our tech expertise with a social conscience to build
            digital products that provide end-user with the finest experience.
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
