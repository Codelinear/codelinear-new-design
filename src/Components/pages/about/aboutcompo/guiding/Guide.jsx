import React from "react";

const Guide = () => {
  return (
    <>
      <div className="guide max-lg:p-10  max-lg:pl-10 max-sm:px-5">
        <div className="w-full h-[809px] mb-[76px] relative bg-white max-lg:h-full">
          <div className="flex ju gap-40 max-lg:flex-wrap max-lg:gap-10 max-sm:gap-[60px] max-[1200px]:gap-[90px]">
            <div className="sticky top-10 h-[360px] max-lg:h-full max-lg:relative">
              <div className="ml-[80px] mt-[73px]  flex-col justify-start items-start gap-9 inline-flex max-lg:m-0">
                <div className="opacity-60 w-[413px] max-md:w-full justify-start items-center gap-[13.42px] inline-flex">
                  <div className=" text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    What we believe in
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="text-black text-[48px] font-normal font-['Graphik'] letter-spacing-2 leading-[120%] max-sm:text-[36px]">
                    Guiding principles
                  </div>
                  <div className="w-[413px] max-lg:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:text-justify">
                    Crafting ideal, innovative and impactful digital products
                    are the three core pillars around which each of our projects
                    is centred.Despite capital mindset overtaking business
                    practices, our guiding principles enable us to adhere to our
                    core and deliver exceptional projects.
                  </div>
                </div>
              </div>
            </div>

            <div className="left-[622px] mt-[136px]  flex-col justify-start items-start gap-[68px] inline-flex max-sm:mt-[32px] max-sm:gap-[32px]">
              <div className="flex-col justify-start items-start gap-6 flex max-sm:gap-[16px]">
                <div className="text-black text-4xl font-normal font-['Graphik'] letter-spacing-2 leading-[120%] max-sm:text-[24px]">
                  Ideal
                </div>
                <div className="w-[536.02px] max-lg:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:text-justify max-[1200px]:w-[400px]">
                  We understand the varying needs of our clients, and therefore
                  custom-tailor every product ideally suited to their
                  requirements. Our diverse team of designers, developers,
                  marketers, and strategists works in collaboration to deliver
                  competitive advantages and unparalleled solutions tailored to
                  your needs.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-6 flex max-sm:gap-[16px]">
                <div className="text-black text-4xl font-normal font-['Graphik'] letter-spacing-2 leading-[120%] max-sm:text-[24px]">
                  Innovation
                </div>
                <div className="w-[536.02px] max-lg:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:text-justify max-[1200px]:w-[400px]">
                  We envision ourselves to be the trendsetters and strive to
                  make our clients one too. When organisations across the world
                  are on the verge of transformation or running the risk of
                  irrelevance, we turn to innovation to stay ahead. We,
                  therefore, go beyond strategising and implement innovation
                  into our projects.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-6 flex max-sm:gap-[16px]">
                <div className="text-black text-4xl font-normal font-['Graphik'] letter-spacing-2 leading-[120%] max-sm:text-[24px]">
                  Impact
                </div>
                <div className="w-[536.02px] max-lg:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:text-justify max-[1200px]:w-[400px]">
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
