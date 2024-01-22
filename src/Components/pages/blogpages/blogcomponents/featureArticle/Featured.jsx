import React from "react";
import img from "../../blogassets/Frame 569.png";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <>
      <div className="featured-article">
        <div className="w-full h-[529px] relative bg-white  max-lg:h-full">
          <div className="flex gap-20  max-lg:flex-wrap  max-lg:justify-center">
            {/* <div  /> */}
            <div>
              <img
                className="w-[739px] h-full ml-[80px] mt-[38px]  bg-black bg-opacity-20 max-xl:ml-10  max-lg:ml-0 max-md:w-full"
                src={img}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-8 max-lg:p-5">
              <div className=" mt-[38px]  flex-col justify-start items-start gap-9 inline-flex">
                <div className="w-[482px] justify-start items-center gap-[13.42px] inline-flex max-lg:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    Featured article
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-[482px] text-black text-4xl font-normal font-['Graphik'] leading-[120%] max-md:w-full">
                  No-Code Revolution: 5 Platforms To Keep An Eye...
                </div>
              </div>
              <div className="w-[483px] left-[877px] top-[205.81px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-lg:w-full">
                The No-code revolution is indicative that modern businessmen and
                women want to keep creative control in their own hands when it
                comes to developing websites or mobile applications.
                <br />
                <br />
                No-code is really for the businesses who wish to personalize
                their product or service branding, and it does not mean that
                no-code platforms can only produce simple apps.
              </div>
              <Link
                to="/nocode"
                className="w-[35%] max-md:w-full px-8 py-4 left-[877px] top-[416px]  rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 "
              >
                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                  Read more
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
