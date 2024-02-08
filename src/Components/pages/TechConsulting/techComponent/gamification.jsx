import React from "react";
import img1 from "../assets/ph_note-pencil-light.svg";
import img3 from "../assets/ph_note-pencil-light (1).svg";
import img2 from "../../cloud/assets/ph_note-pencil-light.svg";

const Gamification = () => {
  return (
    <>
      <div className="w-full h- relative bg-white pb-[147px]">
        <div className="left-[80px] mt-[168px]  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
              <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                Technology Consulting{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[562.77px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-full max-sm:text-[36px]">
              Gamification as a Service{" "}
            </div>
          </div>
          <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full max-sm:h-full">
            Enhance engagement and user participation with our Gamification as a
            Service, crafting customized game elements to elevate experiences
            and interactions.
          </div>
        </div>

        <div className="left-[80px] top-[401px] mt-[42px] flex-col justify-start items-start gap-[85px] inline-flex">
          <div className="justify-start items-start gap-[52px] inline-flex max-lg:flex-wrap max-lg:w-full">
            <div className="flex-col justify-start items-start gap-5 inline-flex">
              <img src={img1} alt="" className="w-[57px] h-[57px]" />
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[28px] max-sm:h-full max-sm:w-full leading-[120%]">
                Engaging User Experiences{" "}
              </div>
              <div className="w-[273.16px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Implement gamification elements to enhance user engagement and
                motivation within digital platforms.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 inline-flex">
              <img src={img2} alt="" className="w-[57px] h-[57px]" />
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[28px] max-sm:h-full max-sm:w-full leading-[120%]">
                Behavioral Incentives{" "}
              </div>
              <div className="w-[273.16px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Design effective incentive structures and rewards to drive
                desired user behaviors and interactions.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 inline-flex">
              <img src={img3} alt="" className="w-[57px] h-[57px]" />
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[28px] max-sm:h-full max-sm:w-full leading-[120%]">
                Data-Driven Insights{" "}
              </div>
              <div className="w-[273.16px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Utilize analytics to gather insights into user behavior within
                gamified experiences, enabling continuous improvement and
                optimization.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gamification;
