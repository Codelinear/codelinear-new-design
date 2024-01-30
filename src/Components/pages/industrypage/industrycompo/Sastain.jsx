import React from "react";
import img from "../assets/Industries01.jpg"

const Sastain = () => {
  return (
    <>
      <div className="w-full h-[670px] pl-[47px] pr-[47px] pt-[74px] pb-[138px] bg-white justify-center items-start gap-[9%] inline-flex max-lg:h-full max-lg:p-5 max-lg:flex-wrap max-lg:justify-center max-lg:mt-20">
        <div className="self-stretch mb-{30px} w-[308px] flex-col justify-start items-start gap-8 inline-flex max-lg:justify-center max-lg:items-center">
          <div className="h-[353px] flex-col justify-end items-center flex ">
            <img
              className="w-[321.78px] h-[402.39px] max-lg:w-full"
              src={img}
              alt=""
            />
          </div>
          <div className="self-stretch h-[149px] flex-col justify-start items-start gap-6 flex ">
            <div className="self-stretch justify-start items-center gap-[13.42px] inline-flex  w-[83%]">
              <div className="w-8 h-8 relative">
                <div className="w-[19.51px] h-[25.36px] left-[6.25px] top-[3.32px] absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M11.1242 17.8264C10.1487 21.1186 9.17285 25.2649 9.17285 28.6794H22.8275C22.8275 25.3057 21.875 21.2177 20.9112 17.9449"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 13.074V3.32068H16.9753C19.13 3.32068 20.8767 5.06737 20.8767 7.22201V9.17268C20.8767 11.3273 19.13 13.074 16.9753 13.074H16Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.123 18.926V16.9753C11.123 14.8207 12.8697 13.074 15.0244 13.074H15.9997V22.8273H15.0244C12.8697 22.8273 11.123 21.0806 11.123 18.926Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M25.7533 13.074H16V14.0493C16 16.204 17.7467 17.9506 19.9013 17.9506H21.852C24.0067 17.9506 25.7533 16.204 25.7533 14.0493V13.074Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.9994 12.0987V13.0741H6.24609V12.0987C6.24609 9.94407 7.99278 8.19739 10.1474 8.19739H12.0981C14.2527 8.19739 15.9994 9.94407 15.9994 12.0987Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
            </div>
            <div className="self-stretch h-[93px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-black text-2xl font-normal font-['Graphik'] capitalize leading-[28.80px]">
                Sustainable energy
              </div>
              <div className="self-stretch opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                A design system is a guide or a standard structure with
                parameters for design{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[740px] self-stretch pl-20 pr-[163.58px] pt-[89.41px] pb-[84px] bg-neutral-50 flex-col justify-end items-start gap-[176.59px] inline-flex max-lg:w-full max-lg:p-5 max-lg:gap-5 ">
          <div className="w-[551.45px] text-black text-5xl font-normal font-['Graphik'] leading-[57.60px] max-lg:w-full">
            Need help in making the next big thing?
          </div>
          <button className="px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400">
            <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
              Talk to our experts
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sastain;
