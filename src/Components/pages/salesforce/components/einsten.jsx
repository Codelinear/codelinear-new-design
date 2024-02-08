import React from "react";
import { Link } from "react-router-dom";
import img from "../../cloud/assets/material-symbols-light_warning-outline.svg";
import img2 from "../../cloud/assets/material-symbols-light_security (2).svg";
import img3 from "../../cloud/assets/material-symbols-light_detection-and-zone.svg";

const Einsten = () => {
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
                  Salesforce Services
                </div>
                <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
              </div>
              <div className="w-[562.77px]  letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-full max-sm:text-[36px]">
                Salesforce Einstein Analytics{" "}
              </div>
            </div>
            <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full max-sm:h-full">
              Leverage Salesforce Einstein Analytics for advanced insights,
              actionable intelligence, and data-driven decision-making,
              optimizing performance, efficiency, and strategic planning within
              your organization.
            </div>
          </div>

          <div className="left-[80px] top-[401px] mt-[42px] flex-col justify-start items-start gap-[85px] inline-flex">
            <div className="justify-start items-start gap-[52px] inline-flex max-lg:flex-wrap">
              <div className="flex-col justify-start items-start gap-5 inline-flex">
                <img src={img} alt="" className="w-[57px] h-[57px]" />
                <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  Custom Dashboard Development{" "}
                </div>
                <div className="w-[273.16px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Craft personalized Einstein Analytics dashboards, visualizing
                  key insights for data-driven decision-making and actionable
                  business intelligence.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 inline-flex">
                <img src={img2} alt="" className="w-[57px] h-[57px]" />
                <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  Predictive Analytics Implementation{" "}
                </div>
                <div className="w-[273.16px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Integrate Einstein Analytics for predictive modeling,
                  uncovering patterns and trends for enhanced forecasting,
                  planning, and strategy.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 inline-flex">
                <img src={img3} alt="" className="w-[57px] h-[57px]" />
                <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  Performance Optimization Solutions{" "}
                </div>
                <div className="w-[273.16px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Enhance platform efficiency with Salesforce Einstein
                  Analytics, optimizing data processing, visualization, and
                  insights delivery for peak performance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Einsten;
