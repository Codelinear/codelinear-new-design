import { Link } from "react-router-dom";
const Blursection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <div className="flex justify-center pt-[35px] pb-[91px]  items-center">
      <div className="blur-background py-[75px]  w-[1064px] flex flex-col gap-[220px]">
        <h1 className="ml-[80px] w-[551px] text-[48px] leading-[120%] letter-spacing-2 text-[white]">
          Looking to make a breakthrough in Fintech?
        </h1>
        <div>
          <p className="text-base text-[white] ml-[80px]">
            We’ll make sure you do it with a bang
          </p>
          <Link
            to="/contact-us"
            onClick={scrollToTop}
            className="hover:text-black text-[white] px-8 py-4 ml-[80px] mt-[24px]  rounded-[31px] border border-white justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-[100%]"
          >
            <div className="text-base font-normal font-['Graphik'] capitalize leading-normal">
              Talk to our experts
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Blursection;
