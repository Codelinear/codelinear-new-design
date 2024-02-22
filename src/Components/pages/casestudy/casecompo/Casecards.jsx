import React from "react";

import img1 from "../assets/case study page01.jpg";
import img2 from "../assets/case study page02.jpg";
import img3 from "../assets/case study page03.jpg";
import img4 from "../assets/case study page04.jpg";
import img5 from "../assets/case study page05.jpg";
import img6 from "../assets/case study page06.jpg";
import img7 from "../assets/case study page07.jpg";
import img8 from "../assets/case study page08.jpg";
import img9 from "../assets/case study page09.jpg";
import img10 from "../assets/case study page10.jpg";
import img11 from "../assets/case study page11.jpg";
import img12 from "../assets/case study page12.jpg";
import img13 from "../assets/case study page13.jpg";
import img14 from "../assets/case study page14.jpg";
import img15 from "../assets/case study page15.jpg";
import img16 from "../assets/case study page16.jpg";
import img17 from "../assets/case study page17.jpg";
import img18 from "../assets/case study page18.jpg";
import img19 from "../assets/case study page19.jpg";
import img20 from "../assets/case study page20.jpg";
import img21 from "../assets/Desktop - 46.jpg";
import img22 from "../assets/Desktop - 46 (1).jpg";
import img23 from "../assets/Desktop - 46 (2).jpg";
import img24 from "../assets/Desktop - 46 (3).jpg";
import img25 from "../assets/Desktop - 46 (4).jpg";
import img26 from "../assets/Desktop - 46 (5).jpg";
import img27 from "../assets/Desktop - 46 (6).jpg";
import img28 from "../assets/Desktop - 46 (7).jpg";
import img29 from "../assets/kanbar.jpg";
import { Link } from "react-router-dom";

const Casecards = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="case-cards">
        <div className="w-full px-[80px] max-lg:px-[40px] max-sm:px-[20px] h-full justify-start items-start gap-[62px] max-2xl:gap-[54px] inline-flex flex-wrap max-sm:gap-[78px]   max-lg:p-5 max-1xl:justify-center max-1xl:items-center">
          <div className="flex-col w-[30%] max-1xl:w-[40%] h-full max-lg:w-[45%] max-sm:w-full justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] w justify-end items-center inline-flex w-full h-full">
              <img className="w-full h-full" loading="lazy" src={img1} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  william abraham{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    william abraham
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Elevating luxurious men’s socks digital platform{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Clothing
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img2} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  wear well{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    wear well{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Redefining the global presence of a leading garment exporter{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  to={"/wear-well"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Retail and apparel
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img3} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  soch{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    soch{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  uplifting pioneers in ethnic wear{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Retail and apparel
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img4} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  leaf & hive{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    leaf & hive{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Making an innovative beverage more accessible{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  to={"/leaf-&-hive"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  food & beverages
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img5} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  sodashi{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    sodashi{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  helping Vegan, hand-crafted skincare go worldwide{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Skincare
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full   justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img6} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  klub{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    klub{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Ensuring investments in startups are more secure{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Fintech
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img7} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  vuori{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    vuori{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  shifting the pace with Performance Apparel{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Retail and apparel
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img8} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  tradejini{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    tradejini{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Transforming the digital presence of a trading giant.{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  to={"/tradejini"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Fintech
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full   justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img9} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  lyra{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    lyra{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Driving business growth with revolutionary mental healthcare{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Healthcare
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full ]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img10} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  steelcase{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    steelcase{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Helping a thought leader in bettering workplaces{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Furnishing
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg-[510px]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img11} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  MoveWorks{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    MoveWorks{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Automating tasks so businesses can focus on what matters{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Technology
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg-[510px]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img12} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  SDU{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    SDU{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Revamping the digital presence of a firm of CAs{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  to={"/singhvi-dev-&-uni-llp-chartered-accountants"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Accounting and finance
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg[510px]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img13} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  Studio Neat{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    Studio Neat{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  empowering designers to make simple products that solve
                  problems{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Products
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510px]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img14} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  Middle{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    Middle{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  easing the conversation between clients and brokers{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  fintech
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lgh-[510px]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img15} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  Booking Factory
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    Booking Factory
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  bettering the experience of a hotel management system{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Technology
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-l:h-[510px]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img16} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  IMAPAC
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    IMAPAC
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Actionable insights to aid biopharma businesses in making big
                  decisions{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  biopharmaceutical
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img17} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  Klassen and Smith
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    Klassen and Smith
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  a modern solution to traditional craftsmanship{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
              <Link
                  to={"/klassen-&-smith"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Construction
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510px]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img18} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  VacayStay 406
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    VacayStay 406
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  enabling vacations in south Montana to the world{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
              <Link
                  to={"/vacaystay-406"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Hospitality
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img19} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  Contrasted Marketing
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    Contrasted Marketing
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  shifting the presence of an upcoming marketing giant{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
              <Link
                  to={"/contrasted-marketing"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Marketing
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " src={img20} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  Landmark
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    Landmark
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Refining the way surveys are done{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
              <Link
                  to={"/landmark"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  construction
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img22} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  convoy{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    convoy{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Supply Chain, logistics made seamless
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Supply chain, logistics
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img21} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  homes r us{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    homes r us{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  innovating a home-grown furnishing brand’s reach
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Retail
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img23} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  Course Hero
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    Course Hero
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  empowering students across the world through aI
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Ed-Tech
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img24} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  mica rino
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    mica rino
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  reimagining neighborhoods and residences
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  real estate
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img25} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  lit up visuals{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    lit up visuals{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Visualizing architecture made easy
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Visualization-real estate
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img26} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  kernel wealth{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    kernel wealth{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Redefining the way people manage finances
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  fintech
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img27} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  Wilderness Travel{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    Wilderness Travel{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  A Breath-taking digital presence for a Breath-taking tour
                  agency
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Travel
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img28} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  hinge health{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    hinge health{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Revolutionary healthcare now at your fingertips
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <div className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  healthcare
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <img className="w-full " loading="lazy" src={img29} alt="" />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex">
              <div className="flex-col justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize">
                  kanbar digital
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    kanbar digital
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize">
                  Digital marketing strategies made simple
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
              <Link
                  to={"/kanbar-digital"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] text-sm font-normal font-['Archivo'] uppercase leading-normal">
                  Marketing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Casecards;
