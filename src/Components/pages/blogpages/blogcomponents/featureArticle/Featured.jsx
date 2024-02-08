import React from "react";
import img from "../../blogassets/Blog Page Featured Image.jpg";
import { Link } from "react-router-dom";

const Featured = () => {
  const scrollToTop = () =>{
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }
  return (
    <>
      <div className="featured-article mt-[38px]">
        <div className="w-full h-[529px] relative bg-white px-[80px] max-lg:px[40px] max-sm:pl-[20px]  max-lg:h-full">
          <div className="flex gap-[54px] justify-between  max-lg:flex-wrap  max-lg:justify-center">
            {/* <div  /> */}
            <div>
              <img
                className="w-[739px] h-full ml-[0px]  bg-black bg-opacity-20 max-xl:ml-10  max-lg:ml-0 max-md:w-full"
                src={img}
                alt=""
              />
            </div>

            <div className="flex flex-col justify-between max-lg:p-5 max-sm:gap-10">
              <div className="flex flex-col gap-[24px] max-lg:p-5 max-sm:p-0">
                <div className="  flex-col justify-start items-start gap-9 inline-flex">
                  <div className="w-[482px] justify-start items-center gap-[13.42px] inline-flex max-lg:w-full">
                    <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                      Featured article
                    </div>
                    <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                  </div>
                  <div className="w-[482px] letter-spacing-6 text-black text-4xl font-normal font-['Graphik'] leading-[120%] max-md:w-full">
                    No-Code Revolution: 5 Platforms To Keep An Eye...
                  </div>
                </div>
                <div className="w-[483px] left-[877px] top-[205.81px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-lg:w-full">
                  The No-code revolution is indicative that modern businessmen
                  and women want to keep creative control in their own hands
                  when it comes to developing websites or mobile applications.
                  <br />
                  <br />
                  No-code is really for the businesses who wish to personalize
                  their product or service branding, and it does not mean that
                  no-code platforms can only produce simple apps.
                </div>
              </div>
              <Link
                to="/no-code-revolution"
                onClick={scrollToTop}
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
