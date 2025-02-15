import { Link } from "react-router-dom";
const Blursection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <div className="flex justify-center max-lg:py-[45px] pt-[50px] max-sm:py-[24px] pb-[91px]  items-center">
      <div className="blur-background-vs py-[75px] max-sm:py-[41px]  h-[590px] max-sm:h-[556px]  w-[1064px] justify-between flex flex-col">
      <h1 className="w-[551px] max-md:w-full max-md:pr-[69px] max-md:ml-0 max-md:pl-[42px] ml-[80px] max-sm:ml-[0] max-sm:px-[25px] max-sm:w-full max-lg:ml-[42px] text-[48px] max-sm:text-[36px] leading-[120%] letter-spacing-2 text-[white]">
          Want to up your hospitality game?
        </h1>
        <div className="max-sm:w-full max-sm:px-[25px]">
          <p className="text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:py-[12px] widestscreen:py-[16px] max-sm:ml-[0] max-lg:ml-[42px] text-[white] ml-[80px]">
            We’ll make sure you do it with a bang
          </p>
          <Link
            to="/contact-us"
            onClick={scrollToTop}
            className="hover:text-black text-[white] widescreen:rounded-[50px] widestscreen:rounded-[80px] px-8 py-4 max-lg:ml-[42px] max-sm:ml-[0px] ml-[80px] mt-[24px]  rounded-[31px] border border-white justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-[100%]"
          >
            <div className="text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
              Talk to our experts
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Blursection;
