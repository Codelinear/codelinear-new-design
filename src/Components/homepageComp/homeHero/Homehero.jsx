import React, { useRef } from "react";
import homeimg from "../../../assets/homeassets/roman-koester-v53RV9LL5y0-unsplash 1.png";
import img2 from "../../../assets/homeassets/oleg-laptev-QRKJwE6yfJo-unsplash 1.png";
import img3 from "../../../assets/homeassets/josh-nuttall-XVTWFHcNIko-unsplash 1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./homehero.scss";

const Homehero = () => {
  const progressLine = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progress === 0) {
      progressLine.current.style.transition = "none";
      progressLine.current.style.width = "0%";
      progressLine.current.style.transition = "width 0s ease";
    } else {
      progressLine.current.style.width = `${100 - progress * 100}%`;
    }
  };

  return (
    <>
      <div className="h-[658px] max-lg:h-full max-sm:ml-[0px]">
        <div className="w-full bg-white  h-[600px] z-0 max-lg:h-full ">
          <div className="w-[55%] ml-[80px] mt-[115px]  text-black text-[66px] font-normal font-['Graphik'] leading-[71.41px] max-lg:mb-[20px] max-lg:w-[80%] max-md:ml-2 max-sm:text-[50px] max-sm:ml-[20px]  max-sm:mt-[50px]  max-sm:leading-[54px]   max-sm:pt-0">
            Transforming businesses through design-led product engineering.
          </div>
          <div className="w-[94%] mt-[50px] flex justify-end items-end max-lg:justify-center max-lg:w-[100%]  max-sm:mt-[0px]  max-sm:w-[100%] max-sm:justify-center max-lg:mt-20 ">
            <div className="flex justify-start w-[630px] items-end max-sm:w-[300px]">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect={"fade"}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper float-end  mr-0  z-[2] max-lg:w-[90%] max-lg:mt-20  max-sm:mt-[10px]  max-md:w-full"
              >
                <SwiperSlide>
                  {" "}
                  <div className="w-[620px] h-[274px] left-[730px] top-[469px]  bg-blue-700 flex max-md:w-full max-sm:flex max-sm:flex-wrap max-sm:h-[548px] ">
                    <div className="w-[316.12px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-md:w- max-sm:w-full">
                      <img
                        className="w-[316.46px] max-md:h-full max-sm:w-full max-sm:h-[274px]"
                        src={homeimg}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-10 p-10">
                      <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] inline-flex">
                        <div className="text-yellow-400 text-base font-normal font-['Graphik']">
                          IKEA
                        </div>
                        <div className="w-[205.63px] text-yellow-400 text-xl font-normal font-['Graphik'] leading-normal">
                          Changing the way people shop.
                        </div>
                      </div>

                      <button className="px-4 py-2 left-[353px] top-[189.50px]  rounded-[30px] border border-yellow-400 justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-yellow-400 hover:text-black">
                        <div className=" text-base font-normal font-['Graphik']">
                          Read Case study
                        </div>
                      </button>
                    </div>
                    {/* <div className="w-[8.54px] h-[8.92px] left-[316.12px] top-[265.08px]  bg-indigo-400" /> */}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="w-[620px] h-[274px] left-[730px] top-[469px]  bg-[#F4ECDE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-[548px]">
                    <div className="w-[316.12px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full">
                      <img
                        className="w-[316.46px]  max-md:h-full max-sm:w-full  max-sm:h-[274px] "
                        src={img3}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-10 p-10">
                      <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] inline-flex">
                        <div className="text-black text-base font-normal font-['Graphik']">
                          COWBOY
                        </div>
                        <div className="w-[205.63px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                          Helping the world switch to sustainable energy-
                          seamlessly.
                        </div>
                      </div>

                      <button className="px-4 py-2 left-[353px] top-[189.50px]  rounded-[30px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                        <div className="textyellow-400 text-base font-normal font-['Graphik']">
                          Read Case study
                        </div>
                      </button>
                    </div>
                    {/* <div className="w-[8.54px] h-[8.92px] left-[316.12px] top-[265.08px]  bg-indigo-400" /> */}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="w-[620px] h-[274px] left-[730px] top-[469px]  bg-[#D1EBFE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-[548px]">
                    <div className="w-[316.12px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full">
                      <img
                        className="w-[316.46px]  max-md:h-full  max-sm:w-full max-sm:h-[274px]"
                        src={img2}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-[62px] p-10">
                      <div>
                        <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] inline-flex">
                          <div className="text-[#EF5019] text-base font-normal font-['Graphik']">
                            SEA
                          </div>
                          <div className="w-[205.63px] text-[#EF5019] text-xl font-normal font-['Graphik'] leading-normal">
                            A Disruptive marketing solution
                          </div>
                        </div>
                      </div>
                      <button className="px-4 py-2 left-[353px] top-[189.50px]  rounded-[30px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                        <div className="textyellow-400 text-base font-normal font-['Graphik']">
                          Read Case study
                        </div>
                      </button>
                    </div>
                    {/* <div className="w-[8.54px] h-[8.92px] left-[316.12px] top-[265.08px]  bg-indigo-400" /> */}
                  </div>
                </SwiperSlide>
                <div className="autoplay-progress">
                  <div className="progress-bar" ref={progressLine}></div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homehero;
