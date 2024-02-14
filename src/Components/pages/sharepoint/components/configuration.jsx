import React from "react";
import img1 from "../../cloud/assets/ph_clipboard-light (1).svg";
import img3 from "../../cloud/assets/system-uicons_scale (3).svg";
import img2 from "../../cloud/assets/system-uicons_scale (1).svg";

const Configuration = () => {
  return (
    <>
      <div className="w-full h- relative bg-white max-sm:pb-0 pb-[147px]">
        <div className="left-[80px] mt-[168px] max-sm:mt-[80px]  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
              <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                Microsoft Sharepoint services{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[562.77px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-full max-sm:text-[36px]">
              Implementation and Configuration{" "}
            </div>
          </div>
          <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full max-sm:h-full">
            Efficiently implement Microsoft solutions, configuring Microsoft 365
            settings, optimizing SharePoint sites, and setting up Microsoft
            Teams for enhanced collaboration and productivity across your
            organization.
          </div>
        </div>

        <div className="left-[80px] top-[401px] mt-[42px] flex-col justify-start items-start gap-[85px] inline-flex">
          <div className="justify-start items-start gap-[52px] inline-flex max-lg:flex-wrap max-lg:w-full">
            <div className="flex-col justify-start items-start gap-5 inline-flex">
              <img src={img1} alt="" className="w-[57px] h-[57px]" />
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                Microsoft 365 Implementation{" "}
              </div>
              <div className="w-[273.16px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Expertly implement Microsoft 365, tailoring settings,
                permissions, and collaboration tools to enhance productivity and
                communication.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 inline-flex">
              <img src={img2} alt="" className="w-[57px] h-[57px]" />
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                SharePoint Site Configuration{" "}
              </div>
              <div className="w-[273.16px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Configure SharePoint sites with precision, optimizing document
                libraries, lists, and metadata for seamless collaboration and
                efficient information management.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 inline-flex">
              <img src={img3} alt="" className="w-[57px] h-[57px]" />
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                Microsoft Teams Setup{" "}
              </div>
              <div className="w-[273.16px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Streamline communication and collaboration with meticulous
                Microsoft Teams setup, ensuring a unified and productive digital
                workspace for your team.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Configuration;
