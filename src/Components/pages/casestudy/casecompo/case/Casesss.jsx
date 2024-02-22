import React from "react";
import img from "../../assets/case study page21.jpg";
import img2 from "../../assets/case study page22.jpg";
import img3 from "../../assets/case study page23.jpg";
import img4 from "../../assets/case study page24.jpg";
import img5 from "../../assets/case study page25.jpg";
import { Link } from "react-router-dom";

const Cases = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="cases">
        <div className="w-full h-[742px] max-lg:p-10 max-sm:p-5 pl-20 max-xl:px-[80px] max-lg:px-[40px] pr-[117.55px] pt-[67.83px] pb-[128.12px] bg-white justify-center max-lg:justify-start items-start gap-[61px] max-3lg:gap-[30px] max-sm:gap-[36px] inline-flex max-lg:h-full max-sm:p-5 max-sm:pt-[36px]   max-lg:flex-wrap">
          <div className="w-[630px] bg-neutral-100 justify-end items-center inline-flex max-lg:w-full">
            <img
              className="w-[649.91px] h-full max-lg:w-full"
              src={img}
              alt=""
            />
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-[30px] inline-flex max-lg:flex-wrap">
            <div className="opacity-60 w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
              <div className="text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                ikea
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
            </div>
            <div className="flex-col justify-start items-start gap-[42px] flex">
              <div className="flex-col justify-start items-start gap-[22px] flex">
                <div className="w-[551.45px] letter-spacing-2 max-lg:w-full text-black text-[48px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px]">
                  Changing the way people shop.{" "}
                </div>
                <div className="w-[477.61px]  max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Founded in 1943 in Sweden, IKEA has evolved into a global
                  household name, synonymous with stylish, functional, and
                  affordable furniture and home accessories.
                </div>
              </div>
              <div className="px-8 py-4 hover:bg-yellow-400 transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]">
                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                  Coming Soon
                </div>
              </div>
              <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] mt-16 max-lg:hidden text-sm font-normal font-['Archivo'] uppercase leading-normal">
                Retail
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cases">
        <div className=" max-3lg:gap-[30px] max-xl:px-[80px] max-lg:px-[40px] w-full h-[742px] max-lg:p-10 max-sm:p-5 pl-20 pr-[117.55px] pt-[67.83px] pb-[128.12px] bg-white justify-center max-lg:justify-start items-start gap-[61px] max-sm:gap-[36px] inline-flex max-lg:h-full max-sm:p-5 max-sm:pt-[36px]   max-lg:flex-wrap-reverse">
          <div className="self-stretch flex-col justify-start items-start gap-[30px] inline-flex max-lg:flex-wrap">
            <div className="opacity-60 w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
              <div className="text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                cowboy
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
            </div>
            <div className="flex-col justify-start items-start gap-[42px] flex">
              <div className="flex-col justify-start items-start gap-[22px] flex">
                <div className="w-[551.45px] letter-spacing-2 max-lg:w-full text-black text-[48px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px]">
                  Helping the world switch to sustainable energy- seamlessly{" "}
                </div>
                <div className="w-[477.61px]  max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Cowboy aims to offer a seamless and enjoyable riding
                  experience, combining technology, design, and functionality to
                  meet the needs of urban commuters.
                </div>
              </div>
              <div className="px-8 py-4 hover:bg-yellow-400 transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]">
                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                  Coming Soon
                </div>
              </div>
              <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] mt-16 max-lg:hidden text-sm font-normal font-['Archivo'] uppercase leading-normal">
                Electric Bikes
              </div>
            </div>
          </div>
          <div className="w-[630px] bg-neutral-100 justify-end items-center inline-flex max-lg:h-full max-lg:w-full">
            <img
              className="w-[649.91px] h-full max-lg:w-full"
              src={img2}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="cases">
        <div className=" max-3lg:gap-[30px] max-xl:px-[80px] max-lg:px-[40px]  w-full h-[742px] max-lg:p-10 max-sm:p-5 pl-20 pr-[117.55px] pt-[67.83px] pb-[128.12px] bg-white justify-center max-lg:justify-start items-start gap-[61px] max-sm:gap-[36px] inline-flex max-lg:h-full max-sm:p-5 max-sm:pt-[36px]   max-lg:flex-wrap">
          <div className="w-[630px] bg-neutral-100 justify-end items-center inline-flex max-lg:w-full">
            <img
              className="w-[649.91px] h-full max-lg:w-full"
              src={img3}
              alt=""
            />
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-[30px] inline-flex max-lg:flex-wrap">
            <div className="opacity-60 w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
              <div className="text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                sea
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
            </div>
            <div className="flex-col justify-start items-start gap-[42px] flex">
              <div className="flex-col justify-start items-start gap-[22px] flex">
                <div className="w-[551.45px] letter-spacing-2 max-lg:w-full text-black text-[48px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px]">
                  A Disruptive marketing solution
                </div>
                <div className="w-[477.61px]  max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  SEA, an emerging and cutting-edge SEO tool designed to
                  redefine the way businesses approach search engine
                  optimization.
                </div>
              </div>
              <Link
                to={"/search-engine-amplify"}
                onClick={scrollToTop}
                className="px-8 py-4 hover:bg-yellow-400 transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
              >
                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                  View case study
                </div>
              </Link>
              <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] mt-16 max-lg:hidden text-sm font-normal font-['Archivo'] uppercase leading-normal">
                Marketing/Services{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cases">
        <div className=" max-3lg:gap-[30px] max-xl:px-[80px] max-lg:px-[40px] w-full h-[742px] max-lg:p-10 max-sm:p-5 pl-20 pr-[117.55px] pt-[67.83px] pb-[128.12px] bg-white justify-center max-lg:justify-start items-start gap-[61px] max-sm:gap-[36px] inline-flex max-lg:h-full max-sm:p-5 max-sm:pt-[36px]   max-lg:flex-wrap-reverse">
          <div className="self-stretch flex-col justify-start items-start gap-[30px] inline-flex max-lg:flex-wrap">
            <div className="opacity-60 w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-lg:w-full">
              <div className="text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                mango
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
            </div>
            <div className="flex-col justify-start items-start gap-[42px] flex">
              <div className="flex-col justify-start items-start gap-[22px] flex">
                <div className="w-[551.45px] letter-spacing-2 max-lg:w-full text-black text-[48px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px]">
                  Expanding the global reach of a clothing giant.{" "}
                </div>
                <div className="w-[477.61px]  max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Mango is recognized for its on-trend and fashion-forward
                  designs. The brand embraces a modern and sophisticated
                  aesthetic across its clothing and accessory collections.
                </div>
              </div>
              <div className="px-8 py-4 hover:bg-yellow-400 transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]">
                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                  Coming Soon
                </div>
              </div>
              <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] mt-16 max-lg:hidden text-sm font-normal font-['Archivo'] uppercase leading-normal">
                Retail
              </div>
            </div>
          </div>
          <div className="w-[630px] bg-neutral-100 justify-end items-center inline-flex max-lg:w-full">
            <img
              className="w-[649.91px] h-full max-lg:w-full"
              src={img4}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="cases">
        <div className="  max-3lg:gap-[30px] max-xl:px-[80px] max-lg:px-[40px] max- w-full h-[742px] max-lg:p-10 max-sm:p-5 pl-20 pr-[117.55px] pt-[67.83px] pb-[128.12px] bg-white justify-center max-lg:justify-start items-start gap-[61px] max-sm:gap-[36px] inline-flex max-lg:h-full max-sm:p-5 max-sm:pt-[36px]   max-lg:flex-wrap">
          <div className="w-[630px] bg-neutral-100 justify-end items-center inline-flex max-lg:w-full">
            <img
              className="w-[649.91px] h-full max-lg:w-full"
              src={img5}
              alt=""
            />
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-[30px] inline-flex max-lg:flex-wrap">
            <div className="opacity-60 w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-md:w-full">
              <div className="text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                Deel{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
            </div>
            <div className="flex-col justify-start items-start gap-[42px] flex">
              <div className="flex-col justify-start items-start gap-[22px] flex">
                <div className="w-[551.45px] letter-spacing-2 max-lg:w-full text-black text-[48px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px]">
                  Making recruiting accessible worldwide{" "}
                </div>
                <div className="w-[477.61px]  max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Deel is a global payroll and compliance platform designed to
                  simplify and streamline the process of hiring and paying
                  remote team members or international contractors
                </div>
              </div>
              <div className="px-8 py-4 hover:bg-yellow-400 transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]">
                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                  Coming Soon
                </div>
              </div>
              <div className="bg-[#F7F7F7] text-[#000000] p-[8px] rounded-[8px] mt-16 max-lg:hidden text-sm font-normal font-['Archivo'] uppercase leading-normal">
                Technology{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cases;
