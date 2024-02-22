import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import img2 from "../../casestudy/assets/case study page22.jpg";
import img7 from "../../casestudy/assets/case study page25.jpg";
import img8 from "../../casestudy/assets/case study page24.jpg";
import img9 from "../../casestudy/assets/case study page23.jpg";
import img10 from "../../casestudy/assets/case study page21.jpg";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  Mousewheel,
} from "swiper/modules";
const CasestudyCarousal = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <div className="py-[70px] max-md:py-[0]">
      <h1 className="text-[48px] max-md:mb-[32px] max-md:text-[24px] leading-[120%] letter-spacing-2 mb-[57px]">
        Read the next case study{" "}
      </h1>
      <div className="container-casestudy">
        <Swiper
          navigation={true}
          allowTouchMove={false}
          loop={true}
          effect={"fade"}
          modules={[Autoplay, Mousewheel, Navigation, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full max-2md:flex-col flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[20px]">
              <img
                src={img2}
                alt=""
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-2md:w-full">
                <div className="mb-[8px] w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    cowboy
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Helping the world switch to sustainable energy- seamlessly
                </h1>
                <p className="text-base opacity-80 w-[477px] mt-[22px] max-xl:w-[90%]">
                  Donec vel habitant sapien sit. Ornare quam diam felis ligula
                  id id lectus. Ut ac dolor elit mi maecenas amet pellentesque.
                </p>
                <div className="px-8 py-4 max-md:mt-[80px] mt-[42px] max-2lg:mt-[30px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    View Case study
                  </div>
                </div>
                <p className="absolute bottom-0 h-[27px] right-[192px] max-md:bottom-[80px] max-sm:left-0">
                  01/05
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full max-2md:flex-col flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[20px]">
              <img
                src={img7}
                alt=""
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-2md:w-full">
                <div className="mb-[8px] w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    cowboy
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Helping the world switch to sustainable energy- seamlessly
                </h1>
                <p className="text-base opacity-80 w-[477px] mt-[22px] max-xl:w-[90%]">
                  Donec vel habitant sapien sit. Ornare quam diam felis ligula
                  id id lectus. Ut ac dolor elit mi maecenas amet pellentesque.
                </p>
                <div className="px-8 py-4 max-md:mt-[80px] mt-[42px] max-2lg:mt-[30px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    View Case study
                  </div>
                </div>
                <p className="absolute bottom-0 h-[27px] right-[192px] max-md:bottom-[80px] max-sm:left-0">
                  02/05
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full max-2md:flex-col flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[20px]">
              <img
                src={img8}
                alt=""
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-2md:w-full">
                <div className="mb-[8px] w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    cowboy
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Helping the world switch to sustainable energy- seamlessly
                </h1>
                <p className="text-base opacity-80 w-[477px] mt-[22px] max-xl:w-[90%]">
                  Donec vel habitant sapien sit. Ornare quam diam felis ligula
                  id id lectus. Ut ac dolor elit mi maecenas amet pellentesque.
                </p>
                <div className="px-8 py-4 max-md:mt-[80px] mt-[42px] max-2lg:mt-[30px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    View Case study
                  </div>
                </div>
                <p className="absolute bottom-0 h-[27px] right-[192px] max-md:bottom-[80px] max-sm:left-0">
                  03/05
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full max-2md:flex-col flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[20px]">
              <img
                src={img9}
                alt=""
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-2md:w-full">
                <div className="mb-[8px] w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    cowboy
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Helping the world switch to sustainable energy- seamlessly
                </h1>
                <p className="text-base opacity-80 w-[477px] mt-[22px] max-xl:w-[90%]">
                  Donec vel habitant sapien sit. Ornare quam diam felis ligula
                  id id lectus. Ut ac dolor elit mi maecenas amet pellentesque.
                </p>
                <div className="px-8 py-4 max-md:mt-[80px] mt-[42px] max-2lg:mt-[30px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    View Case study
                  </div>
                </div>
                <p className="absolute bottom-0 h-[27px] right-[192px] max-md:bottom-[80px] max-sm:left-0">
                  04/05
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full max-2md:flex-col flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[20px]">
              <img
                src={img10}
                alt=""
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-2md:w-full">
                <div className="mb-[8px] w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    cowboy
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Helping the world switch to sustainable energy- seamlessly
                </h1>
                <p className="text-base opacity-80 w-[477px] mt-[22px] max-xl:w-[90%]">
                  Donec vel habitant sapien sit. Ornare quam diam felis ligula
                  id id lectus. Ut ac dolor elit mi maecenas amet pellentesque.
                </p>
                <div className="px-8 py-4 max-md:mt-[80px] mt-[42px] max-2lg:mt-[30px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    View Case study
                  </div>
                </div>
                <p className="absolute bottom-0 h-[27px] right-[192px] max-md:bottom-[80px] max-sm:left-0">
                  05/05
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default CasestudyCarousal;
