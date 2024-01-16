import React, { useRef } from "react";
import homeimg from "../../../assets/homeassets/roman-koester-v53RV9LL5y0-unsplash 1.png";
import img2 from "../../../assets/homeassets/oleg-laptev-QRKJwE6yfJo-unsplash 1.png";
import img3 from "../../../assets/homeassets/josh-nuttall-XVTWFHcNIko-unsplash 1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./homehero.scss";

const Homehero = () => {
  const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className="h-[600px] max-lg:h-full max-sm:m-5">
        <div className="w-full bg-white  h-[600px] z-0 max-lg:h-full ">
          <div className="w-[58%] ml-[80px] mt-[20px]  text-black text-[66px] font-normal font-['Graphik'] leading-[71.41px] max-lg:mb-[20px] max-lg:w-[80%] max-md:ml-2 max-[500px]:text-[50px] max-sm:leading-[54px]   max-sm:pt-20">
            Transforming businesses through design-led product engineering.
          </div>
          <div className="w-[100%] flex justify-end items-end  max-xl:justify-start ">
            <div className="flex justify-end w-[65%] items-end  max-xl:w-full ">
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
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper w-[64%] float-end  mr-0  z-[2] max-lg:w-[90%] max-lg:mt-20 max-md:w-full"
              >
                <SwiperSlide>
                  {" "}
                  <div className="w-[620px] h-[274px] left-[730px] top-[469px]  bg-blue-700 flex max-md:w-full max-sm:flex max-sm:flex-wrap max-sm:h-full ">
                    <div className="w-[316.12px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-md:w- max-sm:w-full">
                      <img
                        className="w-[316.46px] max-md:h-full max-sm:w-full"
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

                      <button className="px-4 py-2 left-[353px] top-[189.50px]  rounded-[30px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                        <div className="textyellow-400 text-base font-normal font-['Graphik']">
                          Read Case study
                        </div>
                      </button>
                    </div>
                    {/* <div className="w-[8.54px] h-[8.92px] left-[316.12px] top-[265.08px]  bg-indigo-400" /> */}
                  </div>
                </SwiperSlide>

                <div className="autoplay-progress max-sm:hidden" slot="container-end">
                  <svg className="max-sm:hidden" viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                  </svg>
                  {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <line x1="4" y1="24" x2="44" y2="24"></line>
                </svg> */}
                  <span></span>
                  {/* <span ref={progressContent}></span> */}
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
