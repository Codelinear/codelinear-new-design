import React from "react";

import img from "../../../../assets/homeassets/spacejoy-IH7wPsjwomc-unsplash 1.png";
import img2 from "../../../../assets/homeassets/josh-nuttall-XVTWFHcNIko-unsplash 1.png"
import img3 from "../../../../assets/homeassets/oleg-laptev-QRKJwE6yfJo-unsplash 1.png"

const Casecards = () => {
  return (
    <>

    
    <div className="case-cards">
      <div className="w-full pl-[80px] h-full justify-start items-start gap-[62px] inline-flex flex-wrap">
        
        <div className="flex-col justify-start items-start gap-[42px] inline-flex">
          <div className="h-[333.95px] bg-neutral-100 justify-end items-center inline-flex">
            <img
              className="w-[397.46px] h-[358.71px]"
              src={img}
              alt=""
            />
          </div>
          <div className="w-[384.24px] flex-col justify-between gap-9 items-start flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="w-[295.83px] opacity-60 text-black text-xl font-normal font-['Graphik'] capitalize">
                IKEA
              </div>
              <div className="w-[384.24px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                Changing the way people shop.
              </div>
            </div>
            <div className="px-4 py-2 rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
              <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                View case study
              </div>
            </div>
          </div>
        </div>
       
        <div className="flex-col justify-start items-start gap-[42px] inline-flex">
          <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex">
            <img
              className="w-[434.53px] h-[346px]"
              src={img2}
              alt=""
            />
          </div>
          <div className="flex-col justify-start items-start gap-9 flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="w-[295.83px] opacity-60 text-black text-xl font-normal font-['Graphik'] capitalize">
                cOWBOY
              </div>
              <div className="w-[384.24px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                Helping the world switch to sustainable energy- seamlessly
              </div>
            </div>
            <div className="px-4 py-2 rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
              <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                View case study
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-col justify-start items-end gap-[42px] inline-flex">
          <div className="w-[385.30px] h-[333.96px] bg-neutral-100 justify-center items-center inline-flex">
            <img
              className="w-[385.54px] h-[333.96px]"
              src={img3}
              alt=""
            />
          </div>
          <div className="w-[384.24px] flex-col justify-between gap-9 items-start flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="w-[295.83px] opacity-60 text-black text-xl font-normal font-['Graphik'] capitalize">
                SEA
              </div>
              <div className="w-[384.24px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                A Disruptive marketing solution
              </div>
            </div>
            <div className="px-4 py-2 rounded-[31px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex">
              <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                View case study
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
