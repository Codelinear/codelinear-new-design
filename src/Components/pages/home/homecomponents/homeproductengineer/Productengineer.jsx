import React, { useEffect, useRef } from "react";
import img from "../../../../../assets/homeassets/stefan-stefancik-pzA7QWNCIYg-unsplash 1.png";
import img2 from "../../../../../assets/homeassets/image 178.png";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

// Make sure to register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);
const Productengineer = () => {
  const sectionRef2 = useRef(null);

  useEffect(() => {
    const section = sectionRef2.current;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: section,
      start: "top 400",
      end: "top center",
      // markers:true,
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
      start: "top 400",
      end: "top center",
      // markers:true,
      onEnter: () => {
        section2.style.background =
          "radial-gradient(80.26% 77.8% at 50% 50%, #180605 0%, #0E0E0E 100%)";
      },
      onLeaveBack: () => {
        section2.style.background = "#151515";
      },
    });
  }, []);
  return (
    <>
      <div className="home-product-engineer relative">
        <div className="mainproduct">
          <div
            ref={sectionRef2}
            className="w-full h-[811px] py-[0px] pl-[80px] pr-[144px] bg-[#151515] justify-start items-center gap-[171px] inline-flex box max-md:flex-wrap max-md:h-full  max-xl:justify-center max-[800px]:px-[40px]  max-md:p-5 max-xl:flex-wrap max-xl:h-full max-xl:py-20 max-sm:gap-10"
          >
            <div className="self-stretch flex-col justify-start items-start gap-[120px] inline-flex mt-28 max-md:w-full max-[800px]:mt-5">
              <div className="flex-col justify-start items-start gap-[30px] flex">
                <div className="w-[521.42px] h-[21px] justify-start items-center gap-[13.42px] inline-flex max-lg:w-full">
                  <div className="text-[#FFCD05] text-[14px] font-normal font-['Archivo'] uppercase leading-snug">
                    Digital transformation
                  </div>
                  <div className="w-[316px] h-[0px] opacity-60 border border-zinc-400 max-sm:w-[30%] "></div>
                </div>
                <div className="flex-col justify-start items-start gap-[42px] flex">
                  <div className="flex-col justify-start items-start gap-[22px] flex">
                    <div className="text2 w-[536.68px] text-[#B7B7B7] text-[48px] font-normal font-['Graphik'] leading-[120%]  max-md:w-full  max-[350px]:text-[25px] max-sm:text-[32px]">
                    Building experiences that drive growth.                    </div>
                    <div className=" text3 text-[#B7B7B7] w-[513.61px] opacity-80 text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                      Codelinear leverages human sentiments, company values to
                      help leaders acheive digital excellence.
                    </div>
                  </div>
                  <div className="hover:bg-yellow-400 transition-all  text-white hover:text-black px-8 py-4 rounded-[31px] border border-white justify-center items-center gap-2 inline-flex  hover:border-yellow-400 max-sm:w-full">
                    <div className="text-base font-normal font-['Graphik'] capitalize leading-normal ">
                      Learn more
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-[38px] flex max-sm:hidden">
                <div className="w-[521.42px] h-[0px] opacity-60 border border-white max-md:w-full"></div>
                <div className="justify-start items-start gap-[91px] inline-flex max-[350px]:gap-[40px]">
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-[#B7B7B7] text-[57.06px] font-normal font-['Graphik'] leading-[68.47px]">
                      40+
                    </div>
                    <div className="opacity-80 text-[#B7B7B7] text-base font-normal font-['Graphik'] leading-normal">
                      Codelinear leverages{" "}
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-[#B7B7B7] text-[57.06px] font-normal font-['Graphik'] leading-[68.47px]">
                      40+
                    </div>
                    <div className="opacity-80 text-[#B7B7B7] text-base font-normal font-['Graphik'] leading-normal">
                      Codelinear leverages{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[508px] h-[611.01px] flex-col justify-center items-center inline-flex max-md:w-full   max-md:h-full  max-md:mt-5">
              <img
                className="w-[513.40px] max-md:w-full h-[770.23px] max-md:h-full"
                src={img}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="technology-consulting">
        <div
          ref={sectionRef3}
          className="w-full h-[811px] py-[0px] pl-[80px] pr-[144px] bg-[#151515] justify-start items-center gap-[171px] inline-flex box max-md:flex-wrap max-md:h-full  max-xl:justify-center max-[800px]:px-[40px]  max-md:p-5 max-xl:flex-wrap max-xl:h-full max-xl:py-20 max-sm:gap-10"
        >
          <div className="self-stretch flex-col justify-start items-start gap-[120px] inline-flex mt-28 max-md:w-full max-[800px]:mt-5">
            <div className="flex-col justify-start items-start gap-[30px] flex">
              <div className="w-[521.42px] h-[21px] justify-start items-center gap-[13.42px] inline-flex max-lg:w-full">
                <div className="text-[#FFCD05] text-[14px] font-normal font-['Archivo'] uppercase leading-snug">
                  Digital transformation
                </div>
                <div className="w-[316px] h-[0px] opacity-60 border border-zinc-400 max-sm:w-[30%] "></div>
              </div>
              <div className="flex-col justify-start items-start gap-[42px] flex">
                <div className="flex-col justify-start items-start gap-[22px] flex">
                  <div className="text2 w-[536.68px] text-[#B7B7B7] text-[48px] font-normal font-['Graphik'] leading-[120%]  max-md:w-full  max-[350px]:text-[25px] max-sm:text-[32px]">
                    Transforming lives, one product at a time.
                  </div>
                  <div className=" text3 text-[#B7B7B7] w-[513.61px] opacity-80 text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                    Codelinear leverages human sentiments, company values to
                    help leaders acheive digital excellence.
                  </div>
                </div>
                <div className="hover:bg-yellow-400 transition-all  text-white hover:text-black px-8 py-4 rounded-[31px] border border-white justify-center items-center gap-2 inline-flex  hover:border-yellow-400 max-sm:w-full">
                  <div className="text-base font-normal font-['Graphik'] capitalize leading-normal ">
                    Learn more
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[38px] flex max-sm:hidden">
              <div className="w-[521.42px] h-[0px] opacity-60 border border-white max-md:w-full"></div>
              <div className="justify-start items-start gap-[91px] inline-flex max-[350px]:gap-[40px]">
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-[#B7B7B7] text-[57.06px] font-normal font-['Graphik'] leading-[68.47px]">
                    40+
                  </div>
                  <div className="opacity-80 text-[#B7B7B7] text-base font-normal font-['Graphik'] leading-normal">
                    Codelinear leverages{" "}
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-[#B7B7B7] text-[57.06px] font-normal font-['Graphik'] leading-[68.47px]">
                    40+
                  </div>
                  <div className="opacity-80 text-[#B7B7B7] text-base font-normal font-['Graphik'] leading-normal">
                    Codelinear leverages{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[508px] h-[611.01px] flex-col justify-center items-center inline-flex max-md:w-full   max-md:h-full  max-md:mt-5">
            <img
              className="w-[513.40px] max-md:w-full h-[770.23px] max-md:h-full"
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
