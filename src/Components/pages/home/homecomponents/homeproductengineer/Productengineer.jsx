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
            className="w-full pl-[80px] h-[780px] relative bg-[#151515] flex gap-[180px] max-xl:flex-wrap-reverse max-sm:gap-10 max-xl:h-full max-md:p-5 max-md:pb-16 max-xl:py-20   "
          >
            <img
              className="w-[508px] mt-[80px] h-[611.01px] max-sm:h-[404px] "
              alt=""
              src={img}
            />
            <div className="left-[720px] mt-[96px]  flex-col justify-start items-start gap-[120px] inline-flex max-md:w-full">
              <div className="flex-col justify-start items-start gap-[30px] flex">
                <div className="justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
                  <div className="text-yellow-400 text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    Product Engineering
                  </div>
                  <div className="w-[333.10px] h-[0px] opacity-60 border border-white  max-sm:w-[30%]"></div>
                </div>
                <div className="flex-col justify-start items-start gap-[42px] flex">
                  <div className="flex-col justify-start items-start gap-[22px] flex">
                    <div className="w-[536.68px] text-white text-[49.20px] font-normal font-['Graphik'] leading-[59.04px] max-md:w-full max-[350px]:text-[25px] max-sm:text-[32px] max-sm:leading-[38px]">
                      Building experiences that drive growth.
                    </div>
                    <div className="w-[513.61px] opacity-80 text-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                      Codelinear leverages human sentiments, company values to
                      help leaders acheive digital excellence.
                    </div>
                  </div>
                  <button className=" text-white hover:text-black px-8 py-4 rounded-[31px] border border-white justify-center items-center gap-2 inline-flex  hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-full">
                    <div className="  text-base font-normal font-['Graphik'] capitalize leading-normal">
                      Learn more
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-[38px] flex max-sm:hidden">
                <div className="w-[521.42px] h-[0px] opacity-60 border border-white max-md:w-full"></div>
                <div className="justify-start items-start gap-[91px] inline-flex">
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-white text-[57.06px] font-normal font-['Graphik'] leading-[68.47px]">
                      40+
                    </div>
                    <div className="opacity-80 text-white text-base font-normal font-['Graphik'] leading-normal">
                      Codelinear leverages{" "}
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-white text-[57.06px] font-normal font-['Graphik'] leading-[68.47px]">
                      40+
                    </div>
                    <div className="opacity-80 text-white text-base font-normal font-['Graphik'] leading-normal">
                      Codelinear leverages{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="technology-consulting">
        <div
          ref={sectionRef3}
          className="w-full h-[780px] relative bg-[#151515] flex gap-[11.7rem] max-md:h-full  max-md:p-5 max-xl:flex-wrap max-xl:h-full max-xl:py-20 max-sm:gap-5"
        >
          <div className="ml-[80px] mt-[76px]  flex-col justify-start items-start gap-[120px] inline-flex max-md:flex-wrap max-md:ml-0  max-md:w-full max-md:py-20  ">
            <div className="flex-col justify-start items-start gap-[30px] flex">
              <div className="justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
                <div className="text-yellow-400 text-sm font-normal font-['Archivo'] uppercase leading-snug">
                  Technology consulting
                </div>
                <div className="w-[316px] h-[0px] opacity-60 border border-white max-sm:w-[30%]"></div>
              </div>
              <div className="flex-col justify-start items-start gap-[42px] flex">
                <div className="flex-col justify-start items-start gap-[22px] flex">
                  <div className="w-[536.68px] text-white text-[49.20px] font-normal font-['Graphik'] leading-[59.04px] max-md:w-full max-[350px]:text-[25px] max-sm:text-[32px] max-sm:leading-[38px]">
                    Helping businesses get ready for the future
                  </div>
                  <div className="w-[513.61px] opacity-80 text-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                    Codelinear leverages human sentiments, company values to
                    help leaders acheive digital excellence.
                  </div>
                </div>
                <button className=" px-8 py-4 rounded-[31px] border border-white justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400  text-white   hover:text-black  max-sm:w-full">
                  <div className=" text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Learn more
                  </div>
                </button>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[38px] flex max-sm:hidden">
              <div className="w-[521.42px] h-[0px] opacity-60 border border-white max-md:w-full"></div>
              <div className="justify-start items-start gap-[91px] inline-flex max-md:gap-[40px]">
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-white text-[57.06px] font-normal font-['Graphik'] leading-[68.47px]">
                    40+
                  </div>
                  <div className="opacity-80 text-white text-base font-normal font-['Graphik'] leading-normal">
                    Codelinear leverages{" "}
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-white text-[57.06px] font-normal font-['Graphik'] leading-[68.47px]">
                    40+
                  </div>
                  <div className="opacity-80 text-white text-base font-normal font-['Graphik'] leading-normal">
                    Codelinear leverages{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[508px] mt-[76px] max-md:h-[500px]  max-md:w-full h-[611.01px] pb-[0.01px] flex-col justify-center items-center inline-flex max-xl:ml-[80px] max-md:ml-0">
            <img
              className="w-[662.66px] h-[611px] max-md:w-full max-sm:h-[404px]"
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
