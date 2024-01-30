import React from "react";
import img6 from "../assets/_7f1ed6ff-6878-4600-ae75-ccf221541fd4 1.svg";

const VR6 = () => {
  return (
    <>
      <div className="w-full h-[389px] relative bg-white">
        <div className="flex flex-col">
        <div className="ml-[80px] mt-[67px]  flex-col justify-start items-start gap-[22px] inline-flex max-lg:ml-[40px] max-sm:ml-[20px]">
            <div className="flex-col justify-start items-start gap-[30px] flex">
              <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
                <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                  AR/VR services
                </div>
                <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
              </div>
              <div className="w-[631.03px] text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px] max-lg:w-[90%]">
                AR for E-commerce{" "}
              </div>
            </div>

            <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%] max-sm:h-full">
              Transform shopping experiences with our AR for E-commerce,
              blending augmented reality to visualize products, enhancing
              customer engagement, and boosting conversion rates.
            </div>
          </div>
        </div>
      </div>

      <div className="features">
      <div className="w-full h-[755px] pl-20 pr-[45px] pt-[0px] pb-[145.80px] bg-white justify-start items-start gap-[141.63px] inline-flex max-lg:flex-wrap max-lg:h-full max-lg:gap-[0px] max-lg:pl-[40px] max-sm:pl-[20px] max-sm:gap-[50px]">
          <div className="self-stretch flex-col justify-start items-start gap-[54px] inline-flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                Virtual Product Try-On{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Implement AR to enable customers to virtually try products
                before purchase, enhancing the online shopping experience.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                Interactive Product Visualization{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Allow users to interactively visualize and explore products in
                their physical space, improving product understanding.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                Increased Confidence in Purchase{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Boost customer confidence by offering augmented reality
                features, reducing uncertainty and increasing satisfaction with
                online purchases.
              </div>
            </div>
          </div>
          <div className="w-[522px] self-stretch flex-col justify-start items-center inline-flex">
            <img className="w-[522px] h-[833.20px] max-sm:h-full" src={img6} alt="h"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default VR6;
