import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/system-uicons_scale (2).svg";
import img3 from "../assets/system-uicons_scale (4).svg";
import img2 from "../assets/system-uicons_scale (5).svg";

const GTM = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <>
        <div className="w-full h-[847x] pb-20 relative bg-white max-lg:h-full">
          <div className="left-[80px] mt-[168px]  flex-col justify-start items-start gap-[22px] inline-flex">
            <div className="flex-col justify-start items-start gap-[30px] flex">
              <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
                <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                  Technology Consulting{" "}
                </div>
                <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
              </div>
              <div className="w-[562.77px]  letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-full max-sm:text-[36px]">
                GTM Strategy Consulting{" "}
              </div>
            </div>
            <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full max-sm:h-full">
              Drive market entry and expansion with our GTM Strategy Consulting,
              integrating market insights, brand positioning, and tactical
              planning for business success.
            </div>
          </div>

          <div className="left-[80px] top-[401px] mt-[42px] flex-col justify-start items-start gap-[85px] inline-flex">
            <div className="justify-start items-start gap-[52px] inline-flex max-lg:flex-wrap">
              <div className="flex-col justify-start items-start gap-5 inline-flex">
                <img src={img} alt="" className="w-[57px] h-[57px]" />
                <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  Market Analysis and Segmentation{" "}
                </div>
                <div className="w-[273.16px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Conduct in-depth market analysis and segmentation to identify
                  target audiences and market opportunities.
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-5 inline-flex">
                <img src={img3} alt="" className="w-[57px] h-[57px]" />
                <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  Channel Optimization
                </div>
                <div className="w-[273.16px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Develop strategies for optimal utilization of marketing
                  channels, ensuring effective reach and engagement.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 inline-flex">
                <img src={img2} alt="" className="w-[57px] h-[57px]" />
                <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  Integrated Campaign Planning{" "}
                </div>
                <div className="w-[273.16px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Plan and implement integrated marketing campaigns that align
                  with business goals and reach the target audience across
                  multiple channels.
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-[58px] inline-flex max-sm:flex-wrap">
              <div className="w-[267.25px]  letter-spacing-4 text-black text-xl font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Need help in making the next big thing?
              </div>
              <Link
                to={"/contact-us"}
                onClick={scrollToTop}
                className="px-8 py-4 rounded-full border border-black justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:full"
              >
                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                  Talk to our experts
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default GTM;
