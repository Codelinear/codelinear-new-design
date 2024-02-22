const TradejiniDetails = () => {
  return (
    <>
      <div className="flex max-md:pt-0 gap-[216px] max-sm:gap-[32px] max-lg:flex-col max-1xl:gap-[56px] max-lg:py-[45px] max-sm:py-[40px] py-[68.5px]">
        <div className="w-[542px] max-xl:w-[50%] max-lg:w-full max-lg:h-auto flex flex-col gap-[30px] max-sm:gap[20px]">
          <div className=" w-full justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
            <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
              what we did
            </div>
            <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
          </div>
          <h1 className="w-[542px] max-sm:text-[24px] max-xl:w-full text-[36px] leading-[120%] letter-spacing-3">
            Every aspect of their digital presence underwent a metamorphosis,
            from the logo that symbolized trust to a digital presence that
            became a portal to financial possibilities.
          </h1>
          <p className="mt-[2px] max-sm:w-full max-lg:w-[82%] text-base opacity-80 max-sm:mt-[4px]">
            We helped TradeJini transcend the boundaries of conventional stock
            broking. Together, we didn't just revamp a brand; we ignited a
            financial revolution, empowering 26,000 individuals to not only
            trade but to thrive in the intricate landscape of the stock market.
          </p>
        </div>
        <div className="max-xl:w-full flex flex-col max-sm:gap-[24px] max-sm:justify-start justify-center flex-wrap gap-[40px]">
          <div className="w-[294px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              40% Increase
            </h1>
            <p className="text-base opacity-80">
              in web platform user engagement
            </p>
          </div>
          <div className="w-[237px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              250,000+{" "}
            </h1>
            <p className="text-base opacity-80">experiences impacted</p>
          </div>
          <div className="w-[237px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              +02:45<span className="inline text-[20px] opacity-60 letter-spacing-4">mins</span>
            </h1>
            <p className="text-base opacity-80">
              average time spent on platform
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TradejiniDetails;
