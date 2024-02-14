import React from "react";
import img from './assets/App development02.jpg'
const Progressive = () => {
  return (
    <>
      <div className="w-full h-[992px] relative bg-white mt-20 max-sm:mt-0 max-lg:h-full">
        <div className="left-[80px] top-[88px]  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col max-sm:w-full justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
              <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                App Development and Modernization
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[562.77px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-[100%] max-sm:text-[36px]">
              Progressive Web App
            </div>
          </div>
          <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
            Revolutionize user engagement with our Progressive Web Applications,
            combining the web's reach with app-like experiences, enhancing
            accessibility, and functionality.
          </div>
        </div>

        <div className="flex gap-20 max-sm:gap-[32px] mt-[54px] max-lg:flex-wrap">
          <div className="left-[80px] top-[376px]  flex-col justify-start items-start gap-[54px] inline-flex max-lg:flex-row max-lg:flex-wrap">
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Offline Functionality
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Experience seamless interactions even without internet, ensuring
                users can engage with content anytime, anywhere effortlessly.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Fast Loading Speed{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Deliver instant experiences with swift loading times, optimizing
                user engagement and satisfaction through rapid performance.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Responsive Design{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Adapt to diverse devices and screen sizes, offering a
                consistent, user-friendly experience, enhancing accessibility
                and usability comprehensively.
              </div>
            </div>
          </div>

          <div className="h-[568px] left-[516px] top-[376px]  flex-col justify-start items-center inline-flex max-lg:justify-center max-lg:w-full max-sm:h-full">
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

export default Progressive;
