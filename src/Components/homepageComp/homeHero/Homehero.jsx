import React, { useRef } from "react";
import homeimg from "../../../assets/homeassets/case study ikea.webp";
import img2 from "../../../assets/homeassets/oleg-laptev-QRKJwE6yfJo-unsplash 1.png";
import img3 from "../../../assets/homeassets/josh-nuttall-XVTWFHcNIko-unsplash 1.png";
import img4 from "../../../assets/homeassets/hero section mango.webp";
import img5 from "../../../assets/homeassets/hero section deel.webp";
import { Link } from "react-router-dom";
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
  const progressLine1 = useRef(null);
  const progressLine2 = useRef(null);
  const progressLine3 = useRef(null);
  const progressLine4 = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progress === 0) {
      progressLine.current.style.transition = "none";
      progressLine1.current.style.transition = "none";
      progressLine2.current.style.transition = "none";
      progressLine3.current.style.transition = "none";
      progressLine4.current.style.transition = "none";
      progressLine.current.style.width = "0%";
      progressLine1.current.style.width = "0%";
      progressLine2.current.style.width = "0%";
      progressLine3.current.style.width = "0%";
      progressLine4.current.style.width = "0%";
      progressLine.current.style.transition = "width 0s ease";
      progressLine1.current.style.transition = "width 0s ease";
      progressLine2.current.style.transition = "width 0s ease";
      progressLine3.current.style.transition = "width 0s ease";
      progressLine4.current.style.transition = "width 0s ease";
    } else {
      progressLine.current.style.width = `${100 - progress * 100}%`;
      progressLine1.current.style.width = `${100 - progress * 100}%`;
      progressLine2.current.style.width = `${100 - progress * 100}%`;
      progressLine3.current.style.width = `${100 - progress * 100}%`;
      progressLine4.current.style.width = `${100 - progress * 100}%`;
    }
  };

  return (
    <>
      <div className="h-[100vh] max-lg:h-full max-sm:ml-[0px]">
        <div className="w-full bg-white  h-[600px] z-0 max-lg:h-full ">
          <div className="w-[55%] ml-[80px] pt-[115px]  text-black text-[66px] font-normal font-['Graphik'] leading-[108.195%] letter-spacing-1 max-lg:pb-[20px] max-lg:w-[80%] max-md:ml-2 max-sm:text-[50px] max-sm:ml-[20px]  max-sm:pt-[50px]  max-sm:leading-[54px]">
            Transforming businesses through design-led product engineering.
          </div>
          <div className="hero-animate absolute right-[80px] bottom-[40px] flex max-lg:justify-center max-lg:w-[100%]  max-sm:mt-[0px]  max-sm:w-[100%] max-sm:justify-center max-lg:mt-20 ">
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
                  <div className="w-[630px] h-[274px] left-[730px] top-[469px]  bg-blue-700 flex max-md:w-full max-sm:flex max-sm:flex-wrap max-sm:h-[548px] ">
                    <div className="w-[316.12px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-md:w- max-sm:w-full">
                      <img
                        className="w-[316.46px] max-md:h-full max-sm:w-full max-sm:h-[274px]"
                        src={homeimg}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col  justify-between p-[37.5px]">
                      <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] inline-flex">
                        <div className="text-[#FFCD05] text-base opacity-80 font-normal font-['Graphik']">
                          IKEA
                        </div>
                        <div className="w-[205.63px] text-[#FFCD05] text-[20px] leading-[120%] font-normal font-['Graphik']">
                          Changing the way people shop.
                        </div>
                      </div>
                      <Link to={"/casestudy"}>
                        <button className="px-[16px] py-[8px] left-[353px] top-[189.50px]  rounded-[30px] border border-yellow-400 justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-yellow-400 hover:text-black">
                          <div className=" text-base font-normal font-['Graphik']">
                            Read Case study
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="autoplay-progress">
                    <div className="progress-bar" ref={progressLine}></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[630px] h-[274px] left-[730px] top-[469px]  bg-[#F4ECDE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-[548px]">
                    <div className="w-[316.12px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full">
                      <img
                        className="w-[316.46px]  max-md:h-full max-sm:w-full  max-sm:h-[274px] "
                        src={img3}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col  justify-between  p-[37.5px]">
                      <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] inline-flex">
                        <div className="text-black text-base font-normal opacity-80 font-['Graphik']">
                          COWBOY
                        </div>
                        <div className="w-[205.63px] text-black  text-[20px] leading-[120%] font-normal font-['Graphik']">
                          Helping the world switch to sustainable energy-
                          seamlessly.
                        </div>
                      </div>
                      <Link to={"/casestudy"}>
                        <button className="px-[16px] py-[8px] left-[353px] top-[189.50px]  rounded-[30px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                          <div className="text- text-base font-normal font-['Graphik']">
                            Read Case study
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="autoplay-progress1">
                    <div className="progress-bar1" ref={progressLine1}></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[6230px] h-[274px] left-[730px] top-[469px]  bg-[#D1EBFE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-[548px]">
                    <div className="w-[316.12px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full">
                      <img
                        className="w-[316.46px]  max-md:h-full  max-sm:w-full max-sm:h-[274px]"
                        src={img2}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col  justify-between  p-[37.5px]">
                      <div>
                        <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] inline-flex">
                          <div className="text-[#EF5019] text-base opacity-80 font-normal font-['Graphik']">
                            SEA
                          </div>
                          <div className="w-[205.63px] text-[#EF5019]  text-[20px] leading-[120%] font-normal font-['Graphik']">
                            A Disruptive marketing solution
                          </div>
                        </div>
                      </div>
                      <Link to={"/casestudy"}>
                        <button className="px-[16px] py-[8px] left-[353px] top-[189.50px]  rounded-[30px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                          <div className="textyellow-400 text-base font-normal font-['Graphik']">
                            Read Case study
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="autoplay-progress2">
                    <div className="progress-bar2" ref={progressLine2}></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[630px] h-[274px] left-[730px] top-[469px]  bg-[#F1F1F1] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-[548px]">
                    <div className="w-[316.12px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full">
                      <img
                        className="w-[316.46px]  max-md:h-full  max-sm:w-full max-sm:h-[274px]"
                        src={img4}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col  justify-between  p-[37.5px]">
                      <div>
                        <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] inline-flex">
                          <div className="text-[#06212B] text-base opacity-80 font-normal font-['Graphik']">
                            MANGO
                          </div>
                          <div className="w-[205.63px] text-[#06212B]  text-[20px] leading-[120%] font-normal font-['Graphik']">
                            Expanding the global reach of a clothing giant.{" "}
                          </div>
                        </div>
                      </div>
                      <Link to={"/casestudy"}>
                        <button className="px-[16px] py-[8px] left-[353px] top-[189.50px]  rounded-[30px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                          <div className="textyellow-400 text-base font-normal font-['Graphik']">
                            View Case study
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="autoplay-progress3">
                    <div className="progress-bar3" ref={progressLine3}></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[630px] h-[274px] left-[730px] top-[469px]  bg-[#EBF5FE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-[548px]">
                    <div className="w-[316.12px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full">
                      <img
                        className="w-[316.46px]  max-md:h-full  max-sm:w-full max-sm:h-[274px]"
                        src={img5}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col  justify-between p-[37.5px]">
                      <div>
                        <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] inline-flex">
                          <div className="text-[#15357A] text-base opacity-80 font-normal font-['Graphik']">
                            DEEL
                          </div>
                          <div className="w-[205.63px] text-[#15357A]  text-[20px] leading-[120%] font-normal font-['Graphik']">
                            Making recruiting accessible worldwide{" "}
                          </div>
                        </div>
                      </div>
                      <Link to={"/casestudy"}>
                        <button className="px-[16px] py-[8px] left-[353px] top-[189.50px]  rounded-[30px] border border-[#15357A] justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                          <div className="text-[#15357A] text-base font-normal font-['Graphik']">
                            View Case study
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="autoplay-progress4">
                    <div className="progress-bar4" ref={progressLine4}></div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homehero;
