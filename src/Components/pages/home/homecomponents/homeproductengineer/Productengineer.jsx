import React, { useEffect, useRef } from "react";
import img from "../../../../../assets/homeassets/stefan-stefancik-pzA7QWNCIYg-unsplash 1.png";
import img2 from "../../../../../assets/homeassets/image 178.png";
import img3 from "../../../../../assets/homeassets/8.svg";
import img4 from "../../../../../assets/homeassets/9.svg";
import img5 from "../../../../../assets/homeassets/10.svg";
import img6 from "../../../../../assets/homeassets/11.svg";
import img7 from "../../../../../assets/homeassets/12.svg";
import img8 from "../../../../../assets/homeassets/13.svg";
import img9 from "../../../../../assets/homeassets/14.svg";
import img10 from "../../../../../assets/homeassets/15.svg";
import img11 from "../../../../../assets/homeassets/16.svg";
import img12 from "../../../../../assets/homeassets/17.svg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Linear } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Productengineer = () => {
  const animateclient = useRef(null);
  const animateclient2 = useRef(null);
  useEffect(() => {
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        animateclient.current,
        { x: 50 },
        { ease: Linear.easeNone, x: -583, duration: 10 }
      );
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        animateclient2.current,
        { x: 50 },
        { ease: Linear.easeNone, x: -587, duration: 10 }
      );
  }, []);
  const sectionRef2 = useRef(null);

  useEffect(() => {
    const section = sectionRef2.current;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom center",
      onEnter: () => {
        section.style.background =
          "radial-gradient(157.06% 75.41% at 50% 50%, #001425 0%, #0E0E0E 100%)";
      },
      onLeaveBack: () => {
        section.style.background = "#151515";
      },
    });
  }, []);

  const sectionRef3 = useRef(null);

  useEffect(() => {
    const section2 = sectionRef3.current;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: section2,
      start: "top top",
      end: "bottom center",
      onEnter: () => {
        section2.style.background =
          "radial-gradient(80.26% 77.8% at 50% 50%, #180605 0%, #0E0E0E 100%)";
      },
      onLeaveBack: () => {
        section2.style.background = "#151515";
      },
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="home-product-engineer relative max-sm:overflow-x-hidden">
        <div className="mainproduct">
          <div
            ref={sectionRef2}
            className="w-full h-[811px] max-2md:justify-center max-2md:gap-[100px] py-[0px] pl-[80px] pr-[144px] max-xl:px-[80px] max-lg:px-[40px] bg-[#151515] justify-center items-center gap-[171px] max-xl:gap-[0] max-sm:gap-[40px] inline-flex box max-2md:flex-wrap-reverse max-md:h-full  max-[800px]:justify-center max-lg:px-[40px] max-sm:py-[56px] max-md:p-[40px] max-2md:flex-wrap max-flex-wrap max-xl:justify-between max-xl:items-start max-xl:h-full max-xl:py-20 max-lg:gap-[30px] max-sm:px-5 max-sm:gap-10"
          >
            <div className="w-[508px] max-md:w-full max-md:m-0 max-xl:w-[436px] max-3lg:w-[] max-xl:h-auto h-[611.01px] max-xl:items-start flex-col justify-center items-center inline-flex maxxl:w-[536px] max:md:w-full   max-md:h-full  max-md:mt-5">
              <img
                className="w-[513.40px] max-xl:w-[436px] max-md:w-full h-[770.23px] max-xl:h-auto"
              loading="lazy"
              src={img}
                alt=""
              />
            </div>
            <div className="self-stretch max-3lg:h-[600px] max-lg:h-auto h-[611px] max-xl:h-[523px] max-2md:h-auto flex-col items-start justify-between inline-flex mt-[99.99px] max-xl:mt-[0px] max-md:w-full max-lg:gap-[30px] max-sm:gap-[40px] max-lg:justify-start max-sm:h-full">
              <div className="flex-col justify-start items-start gap-[30px] flex max-sm:gap-[20px]">
                <div className="w-[521.42px] max-2md:w-full max-3lg:w-[400px] h-[21px] justify-start items-center gap-[13.42px] inline-flex max-lg:w-full">
                  <div className="text-[#FFCD05] whitespace-nowrap text-[14px] font-normal font-['Archivo'] uppercase leading-snug">
                    Technology consulting
                  </div>
                  <div className="w-[316px] max-2md:w-full max-3lg:w-[196px] h-[0px] opacity-60 border border-zinc-400 max-sm:w-[30%] "></div>
                </div>
                <div className="flex-col justify-start items-start gap-[42px] flex">
                  <div className="flex-col justify-start items-start gap-[22px] flex">
                    <div className="text2 max-2md:w-full letter-spacing-2 max-3lg:w-[400px] w-[536.68px] text-[#B7B7B7] text-[48px] font-normal font-['Graphik'] leading-[120%]  max-md:w-full  max-[350px]:text-[25px] max-sm:text-[32px]">
                      Helping businesses get ready for the future.{" "}
                    </div>
                    <div className=" text3 max-2md:w-[700px] text-[#B7B7B7] max-3lg:w-[390px] leading-[150%] w-[513.61px] opacity-80 text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                      Our seasoned consultants bring a universal perspective to
                      your unique challenges, offering insights that redefine
                      possibilities.
                    </div>
                  </div>
                  <Link to={"/services"} onClick={scrollToTop}>
                    <div className="hover:bg-yellow-400 transition-all  text-white hover:text-black px-8 py-4 rounded-[31px] border border-white justify-center items-center gap-2 inline-flex  hover:border-yellow-400 max-sm:w-full">
                      <div className="text-base font-normal font-['Graphik'] capitalize leading-normal ">
                        Learn more
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-[38px] flex max-2md:w-[100%]">
                <div className="w-[521.42px]  max-2md:w-full max-3lg:w-[400px] h-[0px] opacity-60 border border-white max-sm:w-full max-sm:opacity-0"></div>
                <div className="flex-col justify-start items-start gap-[38px] flex max-2md:w-[100%]">
                  <div className="w-[521px] max-2md:w-full max-3lg:w-[400px] overflow-hidden max-[786px]:w-full">
                    <div
                      className="flex align-center opacity-60 gap-[48px] w-[600px] max-[768px]:w-full"
                      ref={animateclient}
                    >
                      <img src={img3} alt="" />
                      <img src={img4} alt="" />
                      <img src={img5} alt="" />
                      <img src={img6} alt="" />
                      <img src={img7} alt="" />
                      <img src={img3} alt="" />
                      <img src={img4} alt="" />
                      <img src={img5} alt="" />
                      <img src={img6} alt="" />
                      <img src={img7} alt="" />
                      <img src={img3} alt="" />
                      <img src={img4} alt="" />
                      <img src={img5} alt="" />
                      <img src={img6} alt="" />
                      <img src={img7} alt="" />
                      <img src={img3} alt="" />
                      <img src={img4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="technology-consulting  max-sm:overflow-x-hidden">
        <div
          ref={sectionRef3}
          className="w-full h-[811px] max-2md:w-full max-2md:justify-center max-2md:gap-[100px] py-[0px] pl-[80px] pr-[144px] max-xl:px-[80px] bg-[#151515] justify-center items-center gap-[171px] max-xl:gap-[0] max-sm:gap-[40px] inline-flex box max-2md:flex-wrap max-md:h-full  max-[800px]:justify-center max-lg:px-[40px] max-sm:py-[56px] max-md:p-[40px] max-2md:flex-wrap max-flex-wrap max-xl:justify-between max-xl:items-start max-xl:h-full max-xl:py-20 max-lg:gap-[30px] max-sm:px-5 max-sm:gap-10"
        >
          <div className="self-stretch max-2md:w-full h-[611px] max-xl:h-[523px] max-2md:h-auto flex-col items-start justify-between inline-flex mt-[99.99px] max-xl:mt-[0px] max-md:w-full max-lg:gap-[30px] max-sm:gap-[40px] max-lg:justify-start max-sm:h-full">
            <div className="flex-col max-2md:w-full justify-start items-start gap-[30px] flex max-sm:gap-[20px]">
              <div className="w-[521.42px] max-2md:w-full max-3lg:w-[400px] h-[21px] justify-start items-center gap-[13.42px] inline-flex max-lg:w-full">
                <div className="text-[#FFCD05] whitespace-nowrap text-[14px] font-normal font-['Archivo'] uppercase leading-snug">
                  Product Engineering
                </div>
                <div className="w-[316px] max-2md:w-full max-3lg:w-[196px] h-[0px] opacity-60 border border-zinc-400 max-sm:w-[30%] "></div>
              </div>
              <div className="flex-col justify-start items-start gap-[42px] flex">
                <div className="flex-col justify-start items-start gap-[22px] flex">
                  <div className="text2 max-2md:w-full letter-spacing-2 max-3lg:w-[400px] w-[536.68px] text-[#B7B7B7] text-[48px] font-normal font-['Graphik'] leading-[120%]  max-md:w-full  max-[350px]:text-[25px] max-sm:text-[32px]">
                    Building experiences that drive growth.
                  </div>
                  <div className=" text3 max-2md:w-[700px] text-[#B7B7B7] max-3lg:w-[390px] leading-[150%] w-[513.61px] opacity-80 text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                    Sculpt digital products that stand out from the crowd, spark
                    emotions, and redefine what's possible.
                  </div>
                </div>

                <Link to={"/services"} onClick={scrollToTop}>
                  <div className="hover:bg-yellow-400 transition-all  text-white hover:text-black px-8 py-4 rounded-[31px] border border-white justify-center items-center gap-2 inline-flex  hover:border-yellow-400 max-sm:w-full">
                    <div className="text-base font-normal font-['Graphik'] capitalize leading-normal ">
                      Learn more
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[38px] flex max-2md:w-[100%]">
              <div className="w-[521.42px]  max-2md:w-full max-3lg:w-[400px] h-[0px] opacity-60 border border-white max-sm:w-full max-sm:opacity-0"></div>
              <div className="w-[521px] max-2md:w-full max-3lg:w-[400px] overflow-hidden max-[786px]:w-full">
                <div
                  className="flex align-center opacity-60 gap-[48px] w-[600px] max-[768px]:w-full"
                  ref={animateclient2}
                >
                  <img src={img8} alt="" />
                  <img src={img9} alt="" />
                  <img src={img10} alt="" />
                  <img src={img11} alt="" />
                  <img src={img12} alt="" />
                  <img src={img8} alt="" />
                  <img src={img9} alt="" />
                  <img src={img10} alt="" />
                  <img src={img11} alt="" />
                  <img src={img12} alt="" />
                  <img src={img8} alt="" />
                  <img src={img9} alt="" />
                  <img src={img10} alt="" />
                  <img src={img11} alt="" />
                  <img src={img12} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[508px] max-md:w-full max-md:m-0 max-xl:w-[436px] max-3lg:w-[] max-xl:h-auto h-[611.01px] max-xl:items-start flex-col justify-center items-center inline-flex maxxl:w-[536px] max:md:w-full   max-md:h-full  max-md:mt-5">
              <img
                className="w-[513.40px] max-xl:w-[436px] max-md:w-full h-[770.23px] max-xl:h-auto"
              loading="lazy"
              src={img2}
                alt=""
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default Productengineer;
