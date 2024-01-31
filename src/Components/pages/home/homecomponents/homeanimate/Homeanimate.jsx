import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./homeanimate.scss";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import img from "../../../../../assets/homeassets/case study ikea.webp";
import img2 from "../../../../../assets/homeassets/case study cowboy.webp";
import img3 from "../../../../../assets/homeassets/case study sea.webp";
import img4 from "../../../../../assets/homeassets/case study mango.webp";
import img5 from "../../../../../assets/homeassets/case study deel.webp";

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
            pagination={{
              clickable: true,
            }}
            effect={"fade"}
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            className="mySwiper w-[90%] float-start  mr-0  z-[2] max-lgw-[90%] max-lg:mt-20 max-sm:w-[300px]"
          >
            <SwiperSlide>
              {" "}
              <div className="w-[100%] h-[400px] left-[730px] top-[469px]  bg-blue-700 flex max-md:w-full max-sm:flex max-sm:flex-wrap max-sm:h-[626px] ">
                <div className="w-[50%] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-md:w- max-sm:w-[300px]">
                  <img
                    className="w-[100%] h-[400px] max-md:h-full max-sm:w-full"
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
                  <Link to={"/casestudy"}>
                    <button className="px-4 py-2 left-[353px] top-[189.50px]  rounded-[30px] border border-yellow-400 text-black  bg-white justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  textyellow-400 hover:text-black">
                      <div className=" text-base font-normal font-['Graphik']">
                        Read Case study
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-[400px] left-[730px] top-[469px]  bg-[#F4ECDE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-[626px]">
                <div className="w-[50%] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full">
                  <img
                    className="w-[100%] h-[400px]  object-fill max-md:h-full max-sm:w-full"
                    src={img2}
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
                  <Link to={"/casestudy"}>
                    <button className="px-4 py-2 left-[353px] top-[189.50px]  rounded-[30px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                      <div className="textyellow-400 text-base font-normal font-['Graphik']">
                        Read Case study
                      </div>
                    </button>
                  </Link>
                </div>
                {/* <div className="w-[8.54px] h-[8.92px] left-[316.12px] top-[265.08px]  bg-indigo-400" /> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="w-[100%] h-[400px] left-[730px] top-[469px]  bg-[#D1EBFE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-[626px]">
                <div className="w-[50%] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full">
                  <img
                    className="w-[100%] h-[400px]  object-fill max-md:h-full  max-sm:w-full"
                    src={img3}
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
                  <Link to={"/casestudy"}>
                    <button className="px-4 py-2 left-[353px] top-[189.50px]  rounded-[30px] border border-black bg-white text-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                      <div className="textyellow-400 text-base font-normal font-['Graphik']">
                        Read Case study
                      </div>
                    </button>
                  </Link>
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
            navigation={true}
            loop={true}
            effect={"fade"}
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full h-[709px] pr-20 bg-[#0A41CF] justify-start items-center gap-[80.78px] inline-flex">
                <div className="w-[818px] bg-neutral-100 justify-end items-center inline-flex">
                  <img className="w-[843.85px] h-[710.57px]" src={img} alt="" />
                </div>
                <div className="h-[515.38px] flex-col justify-between items-start inline-flex">
                  <div className="w-[414px] flex-col justify-between items-start gap-9 flex">
                    <div className="flex-col justify-start items-start gap-8 flex">
                      <div className="opacity-80 text-[#FFCD05] text-xl font-normal font-['Graphik']">
                        IKEA
                      </div>
                      <div className="w-[414px] text-[#FFCD05] text-[32px] font-normal font-['Graphik'] leading-[38.40px]">
                        Changing the way people shop.
                      </div>
                    </div>
                    <Link to={"/casestudy"}>
                      <div className="px-8 absolute top-[326px] hover:bg-[#FFCD05] transition-all  hover:border-[#FFCD05] py-4 bg-white rounded-[31px] justify-center items-center gap-2 inline-flex">
                        <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                          View Case study
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex-col  justify-between items-start gap-[38px] flex">
                    <div className="w-[550px] justify-between items-center inline-flex">
                      <div className="text-[#FFCD05] text-base font-normal font-['Graphik']">
                        01 / 05
                      </div>
                      <div className="justify-start items-start gap-[15px] flex"></div>
                    </div>
                    <div className="w-full h-[10.38px] rounded-[9px] relative bg-[#F5F5F5]">
                      <div className="w-[20%] h-[10.38px] rounded-[9px] relative bg-[#FFCD05]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[709px] pr-20 bg-[#F4ECDE] justify-start items-center gap-[80.78px] inline-flex">
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
                        COWBOY{" "}
                      </div>
                      <div className="w-[414px] text-black text-[32px] font-normal font-['Graphik'] leading-[38.40px]">
                        Helping the world switch to sustainable energy-
                        seamlessly{" "}
                      </div>
                    </div>
                    <Link to={"/casestudy"}>
                      <div className="px-8 absolute top-[326px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 py-4 bg-white rounded-[31px] justify-center items-center gap-2 inline-flex">
                        <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                          View Case study
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex-col justify-between items-start gap-[38px] flex">
                    <div className="w-[550px] justify-between items-center inline-flex">
                      <div className="text-[#000] text-base font-normal font-['Graphik']">
                        02 / 05
                      </div>
                      <div className="justify-start items-start gap-[15px] flex"></div>
                    </div>
                    <div className="w-full h-[10.38px] rounded-[9px] relative bg-[#F5F5F5]">
                      <div className="w-[40%] h-[10.38px] rounded-[9px] relative bg-[#DFC18B]"></div>
                    </div>{" "}
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
                        SEA
                      </div>
                      <div className="w-[414px] text-[#EF5019] text-[32px] font-normal font-['Graphik'] leading-[38.40px]">
                        A Disruptive marketing solution{" "}
                      </div>
                    </div>
                    <Link to={"/casestudy"}>
                      <div className="px-8 absolute top-[326px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 py-4 bg-white rounded-[31px] justify-center items-center gap-2 inline-flex">
                        <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                          View Case study
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex-col justify-between items-start gap-[38px] flex">
                    <div className="w-[550px] justify-between items-center inline-flex">
                      <div className="text-[#EF5019] text-base font-normal font-['Graphik']">
                        03 / 05
                      </div>
                      <div className="justify-start items-start gap-[15px] flex"></div>
                    </div>
                    <div className="w-full h-[10.38px] rounded-[9px] relative bg-[#F5F5F5]">
                      <div className="w-[60%] h-[10.38px] rounded-[9px] relative bg-[#EF5019]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[709px] pr-20  bg-[#F1F1F1] justify-start items-center gap-[80.78px] inline-flex">
                <div className="w-[818px] bg-neutral-100 justify-end items-center inline-flex">
                  <img
                    className="w-[843.85px] h-[710.57px]"
                    src={img4}
                    alt=""
                  />
                </div>
                <div className="h-[515.38px] flex-col justify-between items-start inline-flex">
                  <div className="w-[414px] flex-col justify-between  gap-9 items-start flex">
                    <div className="flex-col justify-start items-start gap-8 flex">
                      <div className="opacity-80 text-[#06212B] text-xl font-normal font-['Graphik']">
                        MANGO
                      </div>
                      <div className="w-[414px] text-[#06212B] text-[32px] font-normal font-['Graphik'] leading-[38.40px]">
                        Expanding the global reach of a clothing giant.{" "}
                      </div>
                    </div>
                    <Link to={"/casestudy"}>
                      <div className="px-8 absolute top-[326px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 py-4 bg-white rounded-[31px] justify-center items-center gap-2 inline-flex">
                        <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                          View Case study
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex-col justify-between items-start gap-[38px] flex">
                    <div className="w-[550px] justify-between items-center inline-flex">
                      <div className="text-[#000000] text-base font-normal font-['Graphik']">
                        04 / 05
                      </div>
                      <div className="justify-start items-start gap-[15px] flex"></div>
                    </div>
                    <div className="w-full h-[10.38px] rounded-[9px] relative bg-[#F5F5F5]">
                      <div className="w-[80%] h-[10.38px] rounded-[9px] relative bg-[#06212B]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[709px] pr-20  bg-[#EBF5FE] justify-start items-center gap-[80.78px] inline-flex">
                <div className="w-[818px] bg-neutral-100 justify-end items-center inline-flex">
                  <img
                    className="w-[843.85px] h-[710.57px]"
                    src={img5}
                    alt=""
                  />
                </div>
                <div className="h-[515.38px] flex-col justify-between items-start inline-flex">
                  <div className="w-[414px] flex-col justify-between  gap-9 items-start flex">
                    <div className="flex-col justify-start items-start gap-8 flex">
                      <div className="opacity-80 text-[#15357A] text-xl font-normal font-['Graphik']">
                        DEEL
                      </div>
                      <div className="w-[414px] text-[#15357A] text-[32px] font-normal font-['Graphik'] leading-[38.40px]">
                        Making recruiting accessible worldwide{" "}
                      </div>
                    </div>
                    <Link to={"/casestudy"}>
                      <div className="px-8 absolute top-[326px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 py-4 bg-white rounded-[31px] justify-center items-center gap-2 inline-flex">
                        <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                          View Case study
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex-col justify-between items-start gap-[38px] flex">
                    <div className="w-[550px] justify-between items-center inline-flex">
                      <div className="text-[#15357A] text-base font-normal font-['Graphik']">
                        05 / 05
                      </div>
                      <div className="justify-start items-start gap-[15px] flex"></div>
                    </div>
                    <div className="w-full h-[10.38px] rounded-[9px] relative bg-[#F5F5F5]">
                      <div className="w-[100%] h-[10.38px] rounded-[9px] relative bg-[#15357A]"></div>
                    </div>{" "}
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
