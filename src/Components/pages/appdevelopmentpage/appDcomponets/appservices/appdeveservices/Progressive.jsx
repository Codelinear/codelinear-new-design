import React from "react";

const Progressive = () => {
  return (
    <>
      <div className="w-full h-[992px] relative bg-white mt-20">
        <div className="left-[80px] top-[88px]  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex">
              <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                App Development and Modernization
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
            </div>
            <div className="w-[562.77px] text-black text-[49.20px] font-normal font-['Graphik'] leading-[59.04px]">
              Progressive Web App
            </div>
          </div>
          <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
            Revolutionize user engagement with our Progressive Web Applications,
            combining the web's reach with app-like experiences, enhancing
            accessibility, and functionality.
          </div>
        </div>

        <div className="flex gap-20 mt-20">
          <div className="left-[80px] top-[376px]  flex-col justify-start items-start gap-[54px] inline-flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                Offline Functionality{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui
                in tortor ultrices bibendum. Sodales lorem non magna praesent
                elementum{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                Secure
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui
                in tortor ultrices bibendum. Sodales lorem non magna praesent
                elementum{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                Better performance
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui
                in tortor ultrices bibendum. Sodales lorem non magna praesent
                elementum{" "}
              </div>
            </div>
          </div>

          <div className="h-[568px] left-[516px] top-[376px]  flex-col justify-start items-center inline-flex">
            <img
              className="w-[519.33px] h-[779.13px]"
              src="https://via.placeholder.com/519x779"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Progressive;
