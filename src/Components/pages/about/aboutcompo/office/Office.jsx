import React from "react";
import img from "../../../../../assets/aboutassets/image 20.png"

const Office = () => {
  return (
    <>
      <div className="office max-md:p-5">
        <div className="w-full h-[773px] relative bg-white max-md:flex max-md:justify-center max-md:flex-wrap max-md:h-full max-md:gap-40">
          <div className="w-[588.86px] left-[80px] top-[80px] absolute text-black text-4xl font-normal font-['Graphik'] leading-[43.20px] max-md:w-full max-md:left-0 max-md:h-full max-md:relative">
            Ultrices cum duis maecenas ac condimentum amet. Nibh integer platea
            non lorem malesuada sed. Potenti pretium ultrices auctor risus orci.
            Quis lorem in dolor tristique.
          </div>
          <img
            className="w-[738px] h-[340.82px] left-[622px] top-[363.07px] absolute max-md:relative max-md:w-full max-md:left-0 max-md:top-0"
            src={img}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Office;
