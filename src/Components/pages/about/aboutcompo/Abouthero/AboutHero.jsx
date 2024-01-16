import React from "react";

const AboutHero = () => {
  return (
    <>
      <div className="about-hero">
        <div className="w-full h-[829px] px-[261px] pt-[187.64px] pb-[103.51px] bg-white flex-col justify-end items-center gap-[108.74px] inline-flex max-md:p-5 max-md:h-full max-md:my-20">
          <img
            className="w-[918px] h-[381.10px]"
            src="https://via.placeholder.com/918x381"
            alt="placeholder"
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
