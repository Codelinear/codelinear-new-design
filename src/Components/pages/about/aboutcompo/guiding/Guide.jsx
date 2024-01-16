import React from "react";

const Guide = () => {
  return (
    <>
      <div className="guide max-md:p-5">
        <div className="w-full h-[885px] relative bg-white max-md:h-full">
          <div className="flex ju gap-40 max-md:flex-wrap max-md:gap-10">
            <div className="sticky top-10 h-[300px] max-md:h-full max-md:relative"  >
              <div className="ml-[80px] mt-[73px]  flex-col justify-start items-start gap-9 inline-flex max-md:m-0">
                <div className="w-[413px] max-md:w-full justify-start items-center gap-[13.42px] inline-flex">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    What we believe in
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="text-black text-[49.20px] font-normal font-['Graphik'] leading-[59.04px]">
                    Guiding principles
                  </div>
                  <div className="w-[413px] max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:text-justify">
                    Crafting ideal, innovative and impactful digital products
                    are the three core pillars around which each of our projects
                    is centred.Despite capital mindset overtaking business
                    practices, our guiding principles enable us to adhere to our
                    core and deliver exceptional projects.
                  </div>
                </div>
              </div>
            </div>


            
            <div className="left-[622px] mt-[136px]  flex-col justify-start items-start gap-[68px] inline-flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="text-black text-4xl font-normal font-['Graphik'] leading-[43.92px]">
                  Ideal
                </div>
                <div className="w-[536.02px] max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:text-justify">
                  We understand the varying needs of our clients, and therefore
                  custom-tailor every product ideally suited to their
                  requirements. Our diverse team of designers, developers,
                  marketers, and strategists works in collaboration to deliver
                  competitive advantages and unparalleled solutions tailored to
                  your needs.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="text-black text-4xl font-normal font-['Graphik'] leading-[43.92px]">
                  Innovation
                </div>
                <div className="w-[536.02px] max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:text-justify">
                  We envision ourselves to be the trendsetters and strive to
                  make our clients one too. When organisations across the world
                  are on the verge of transformation or running the risk of
                  irrelevance, we turn to innovation to stay ahead. We,
                  therefore, go beyond strategising and implement innovation
                  into our projects.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="text-black text-4xl font-normal font-['Graphik'] leading-[43.92px]">
                  Impact
                </div>
                <div className="w-[536.02px] max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:text-justify">
                  Driven by impact, our ultimate focus is to build digital
                  products that address real-world problems. Our team of
                  industry experts ascertains that in addition to crafting
                  epitomes of digital experiences, we create products that
                  enrich lives and create value.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guide;
