import React, { useEffect, useRef } from "react";

import img from "../../../../../assets/homeassets/image 177.png";
import gsap from "gsap";
import { Linear } from "gsap";
import { Link } from "react-router-dom";
import VisionPara from "./visionPara";
import img2 from "../../../../../assets/homeassets/2.svg";
import img3 from "../../../../../assets/homeassets/3.svg";
import img4 from "../../../../../assets/homeassets/4.svg";
import img5 from "../../../../../assets/homeassets/5.svg";
import img6 from "../../../../../assets/homeassets/6.svg";
import img7 from "../../../../../assets/homeassets/7.svg";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  const animateclient = useRef(null);
  useEffect(() => {
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        animateclient.current,
        { x: 50 },
        { ease: Linear.easeNone, x: -733, duration: 10 }
      );
  }, []);
  useEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".box",
        start: "top top",
        end: "bottom center",
        markers: false,
        scrub: true,
      },
    });
    tl1.from(".text2", { y: 0 }).from(".text3", { y: 0 });
  }, []);

  const sectionReff = useRef(null);

  useEffect(() => {
    const sectionu = sectionReff.current;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: sectionu,
      start: "top top",
      end: "center bottom",
      onEnter: () => {
        sectionu.style.background =
          "radial-gradient(162.56% 87.06% at 50% 50%, #001500 0%, #0E0E0E 100%)";
      },
      onLeaveBack: () => {
        sectionu.style.background = "#151515";
      },
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <>
      <div className="vision z-[9999] relative  max-sm:overflow-x-hidden">
        <div className="main-vision">
          <VisionPara />
          <div
            ref={sectionReff}
            className="w-full h-[811px] max-2md:justify-center max-2md:gap-[100px] py-[0px] pl-[80px] pr-[144px] max-xl:px-[80px] bg-[#151515] justify-center items-center gap-[171px] max-xl:gap-[0] max-sm:gap-[40px] inline-flex box max-2md:flex-wrap max-md:h-full  max-[800px]:justify-center max-lg:px-[40px] max-sm:py-[56px] max-md:p-[40px] max-2md:flex-wrap max-flex-wrap max-xl:justify-between max-xl:items-start max-xl:h-full max-xl:p-20 max-lg:gap-[30px] max-sm:px-[20px] max-sm:gap-10"
          >
            <div className="self-stretch h-[611px] max-xl:h-[523px] max-2md:h-auto flex-col items-start justify-between inline-flex mt-[99.99px] max-xl:mt-[0px] max-md:w-full max-lg:gap-[30px] max-sm:gap-[40px] max-lg:justify-start max-sm:h-full">
              <div className="flex-col justify-start items-start gap-[30px] flex max-sm:gap-[20px]">
                <div className="w-[521.42px] max-2md:w-full max-3lg:w-[400px] h-[21px] justify-start items-center gap-[13.42px] inline-flex max-lg:w-full">
                  <div className="text-[#FFCD05] whitespace-nowrap text-[14px] font-normal font-['Archivo'] uppercase leading-snug">
                    Digital transformation
                  </div>
                  <div className="w-[316px] max-2md:w-full max-3lg:w-[196px] h-[0px] opacity-60 border border-zinc-400 max-sm:w-[30%] "></div>
                </div>
                <div className="flex-col justify-start items-start gap-[42px] flex">
                  <div className="flex-col justify-start items-start gap-[22px] flex">
                    <div className="text2 max-2md:w-full letter-spacing-2 max-3lg:w-[400px] w-[536.68px] text-[#B7B7B7] text-[48px] font-normal font-['Graphik'] leading-[120%]  max-md:w-full  max-[350px]:text-[25px] max-sm:text-[32px]">
                      Transforming lives, one product at a time.{" "}
                    </div>
                    <div className=" text3 max-2md:w-[700px] text-[#B7B7B7] max-3lg:w-[390px] leading-[150%] w-[513.61px] opacity-80 text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                      Translate your vision into seamless, intuitive experiences
                      that captivate your customers and empower your employees.
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
                    ref={animateclient}
                  >
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[508px] max-md:w-full max-md:m-0 max-xl:w-[436px] max-3lg:w-[] max-xl:h-auto h-[611.01px] max-xl:items-start flex-col justify-center items-center inline-flex maxxl:w-[536px] max:md:w-full   max-md:h-full  max-md:mt-5">
              <img
                loading="lazy"
                className="w-[513.40px] max-xl:w-[436px] max-md:w-full h-[770.23px] max-xl:h-auto"
                src={img}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
