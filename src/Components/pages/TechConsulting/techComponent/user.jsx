import React from "react";
import img from "../assets/Technology consulting03.jpg";
const User = () => {
  return (
    <>
      <div className="w-full h-[992px] relative bg-white mt-20 max-sm:mt-0 max-lg:h-full">
        <div className="left-[80px] top-[88px]  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
              <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                Technology Consulting{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[709.77px] max-md:w-full letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-[100%] max-sm:text-[36px]">
              User Experience Consulting{" "}
            </div>
          </div>
          <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
            Craft exceptional user journeys with our User Experience Consulting,
            combining research, design, and strategy to optimize interfaces,
            elevate engagement, and foster lasting satisfaction.
          </div>
        </div>

        <div className="flex gap-20 max-sm:gap-[32px] mt-[54px] max-lg:flex-wrap">
          <div className="left-[80px] top-[376px]  flex-col justify-start items-start gap-[54px] inline-flex max-lg:flex-row max-lg:flex-wrap">
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                User-Centric Design{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Prioritize user needs and preferences to create intuitive and
                engaging digital experiences.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Usability Testing{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Conduct thorough usability testing to identify and address
                potential pain points in user interactions.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Continuous Improvement
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Establish processes for continuous feedback and improvement,
                ensuring a dynamic and evolving user experience strategy.
              </div>
            </div>
          </div>

          <div className="h-[568px] left-[516px] max-lg:w-full max-lg:justify-center top-[376px]  flex-col justify-start items-center inline-flex max-sm:w-full max-sm:h-full">
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

export default User;
