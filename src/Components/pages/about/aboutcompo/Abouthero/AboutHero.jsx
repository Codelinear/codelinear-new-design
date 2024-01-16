import React from "react";
import Lottie from "lottie-react";

import animationData from "./about page.json";

const AboutHero = () => {
  return (
    <>
      <div className="about-hero">
        <div className="w-full h-[700px] px-[161px] pt-[20.64px] pb-[103.51px] bg-white flex-col justify-end items-center gap-[108.74px] inline-flex max-md:p-5 max-md:h-full max-md:my-20">
          {/* <img
            className="w-[918px] h-[381.10px]"
            src="https://via.placeholder.com/918x381"
            alt="placeholder"
          /> */}

          <Lottie
            className="mt5"
            animationData={animationData} // Your animation JSON
            loop={true} // Set to true if you want the animation to loop
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
