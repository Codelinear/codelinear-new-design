import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./homeanimate.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import img from "../../../../../assets/aboutassets/spacejoy-IH7wPsjwomc-unsplash 1.png";
import img2 from "../../../../../assets/homeassets/josh-nuttall-XVTWFHcNIko-unsplash 1.png";
import img3 from "../../../../../assets/homeassets/oleg-laptev-QRKJwE6yfJo-unsplash 1.png";

const Homeanimate = () => {
  let [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  return (
    <>
      {width <= 1023 ? (
        <div className="home-container">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            // onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper w-[90%] float-start  mr-0  z-[2] max-lgw-[90%] max-lg:mt-20 max-md:w- -5"
          >
            <SwiperSlide>
              {" "}
              <div className="w-[620px] h-[274px] left-[730px] top-[469px]  bg-blue-700 flex max-md:w-full max-sm:flex max-sm:flex-wrap max-sm:h-full ">
                <div className="w-[316.12px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-md:w- max-sm:w-full">
                  <img
                    className="w-[316.46px] max-md:h-full max-sm:w-full"
                    src={img}
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

                  <button className="px-4 py-2 left-[353px] top-[189.50px]  rounded-[30px] border border-yellow-400 text-black  bg-white justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  textyellow-400 hover:text-black">
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
              <div className="w-[620px] h-[274px] left-[730px] top-[469px]  bg-[#F4ECDE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-full">
                <div className="w-[316.12px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full">
                  <img
                    className="w-[316.46px]  max-md:h-full max-sm:w-full"
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
              <div className="w-[620px] h-[274px] left-[730px] top-[469px]  bg-[#D1EBFE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-full">
                <div className="w-[316.12px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full">
                  <img
                    className="w-[316.46px]  max-md:h-full  max-sm:w-full"
                    src={img2}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-10 p-10">
                  <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] inline-flex">
                    <div className="text-[#EF5019] text-base font-normal font-['Graphik']">
                      SEA
                    </div>
                    <div className="w-[205.63px] text-[#EF5019] text-xl font-normal font-['Graphik'] leading-normal">
                      A Disruptive marketing solution
                    </div>
                  </div>

                  <button className="px-4 py-2 left-[353px] top-[189.50px]  rounded-[30px] border border-black bg-white text-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                    <div className="textyellow-400 text-base font-normal font-['Graphik']">
                      Read Case study
                    </div>
                  </button>
                </div>
                {/* <div className="w-[8.54px] h-[8.92px] left-[316.12px] top-[265.08px]  bg-indigo-400" /> */}
              </div>
            </SwiperSlide>

            <div
              className="autoplay-progress max-sm:hidden"
              slot="container-end"
            ></div>
          </Swiper>
        </div>
      ) : (
        <div className="home-container">
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full h-[709px] pr-20 bg-blue-700 justify-start items-center gap-[80.78px] inline-flex">
                <div className="w-[818px] bg-neutral-100 justify-end items-center inline-flex">
                  <img className="w-[843.85px] h-[710.57px]" src={img} alt="" />
                </div>
                <div className="h-[515.38px] flex-col justify-between items-start inline-flex">
                  <div className="w-[414px] flex-col justify-between items-start gap-9 flex">
                    <div className="flex-col justify-start items-start gap-8 flex">
                      <div className="opacity-80 text-yellow-400 text-xl font-normal font-['Graphik']">
                        IKEA
                      </div>
                      <div className="w-[414px] text-yellow-400 text-[32px] font-normal font-['Graphik'] leading-[38.40px]">
                        Changing the way people shop.
                      </div>
                    </div>
                    <div className="px-8 hover:bg-yellow-400 transition-all  hover:border-yellow-400 py-4 bg-white rounded-[31px] justify-center items-center gap-2 inline-flex">
                      <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                        View Case study
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[38px] flex">
                    <div className="w-[460px] justify-between items-center inline-flex">
                      <div className="text-yellow-400 text-base font-normal font-['Graphik']">
                        01 / 03
                      </div>
                      <div className="justify-start items-start gap-[15px] flex"></div>
                    </div>
                    <div className="w-[461.22px] h-[10.38px] relative">
                      {/* <div className="w-[461.22px] h-[10.38px] left-0 top-0 absolute bg-neutral-100 rounded-[9px]" />
                    <div className="w-[140px] h-[10.38px] left-0 top-0 absolute bg-yellow-400 rounded-[9px]" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[709px] pr-20 bg-[#DFC18B] justify-start items-center gap-[80.78px] inline-flex">
                <div className="w-[818px] bg-neutral-100 justify-end items-center inline-flex">
                  <img
                    className="w-[843.85px] h-[710.57px]"
                    src={img2}
                    alt=""
                  />
                </div>
                <div className="h-[515.38px] flex-col justify-between items-start inline-flex">
                  <div className="w-[414px] flex-col justify-between  gap-9 items-start flex">
                    <div className="flex-col justify-start items-start gap-8 flex">
                      <div className="opacity-80 text-black text-xl font-normal font-['Graphik']">
                        IKEA
                      </div>
                      <div className="w-[414px] text-black text-[32px] font-normal font-['Graphik'] leading-[38.40px]">
                        Changing the way people shop.
                      </div>
                    </div>
                    <div className="px-8 hover:bg-yellow-400 transition-all  hover:border-yellow-400 py-4 bg-white rounded-[31px] justify-center items-center gap-2 inline-flex">
                      <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                        View Case study
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[38px] flex">
                    <div className="w-[460px] justify-between items-center inline-flex">
                      <div className="text-yellow-400 text-base font-normal font-['Graphik']">
                        01 / 03
                      </div>
                      <div className="justify-start items-start gap-[15px] flex"></div>
                    </div>
                    <div className="w-[461.22px] h-[10.38px] relative">
                      {/* <div className="w-[461.22px] h-[10.38px] left-0 top-0 absolute bg-neutral-100 rounded-[9px]" />
                    <div className="w-[140px] h-[10.38px] left-0 top-0 absolute bg-yellow-400 rounded-[9px]" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[709px] pr-20 bg-[#D1EBFE] justify-start items-center gap-[80.78px] inline-flex">
                <div className="w-[818px] bg-neutral-100 justify-end items-center inline-flex">
                  <img
                    className="w-[843.85px] h-[710.57px]"
                    src={img3}
                    alt=""
                  />
                </div>
                <div className="h-[515.38px] flex-col justify-between items-start inline-flex">
                  <div className="w-[414px] flex-col justify-between  gap-9 items-start flex">
                    <div className="flex-col justify-start items-start gap-8 flex">
                      <div className="opacity-80 text-[#EF5019] text-xl font-normal font-['Graphik']">
                        IKEA
                      </div>
                      <div className="w-[414px] text-[#EF5019] text-[32px] font-normal font-['Graphik'] leading-[38.40px]">
                        Changing the way people shop.
                      </div>
                    </div>
                    <div className="px-8 hover:bg-yellow-400 transition-all  hover:border-yellow-400 py-4 bg-white rounded-[31px] justify-center items-center gap-2 inline-flex">
                      <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                        View Case study
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[38px] flex">
                    <div className="w-[460px] justify-between items-center inline-flex">
                      <div className="text-yellow-400 text-base font-normal font-['Graphik']">
                        01 / 03
                      </div>
                      <div className="justify-start items-start gap-[15px] flex"></div>
                    </div>
                    <div className="w-[461.22px] h-[10.38px] relative">
                      {/* <div className="w-[461.22px] h-[10.38px] left-0 top-0 absolute bg-neutral-100 rounded-[9px]" />
                    <div className="w-[140px] h-[10.38px] left-0 top-0 absolute bg-yellow-400 rounded-[9px]" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Homeanimate;
