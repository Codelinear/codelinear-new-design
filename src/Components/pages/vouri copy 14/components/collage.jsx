import { useEffect, useState } from "react";
import axios from "axios";
import image1 from "../assets/Frame 1000003237 (3) (1).png";
import image2 from "../assets/Frame 1000003236 (1) (1).png";
import image3 from "../assets/Frame 1000003238 (2) (1).png";

const Collage = () => {
  return (
    <>
      <div className="mt-[54.5px] max-lg:px-[16.5px] max-sm:px-0 max-lg:mt-0 max-lg:flex-col mb-[53.5px] gap-[16px] flex flex-col w-[100%]">
        <div className="flex max-lg:flex-col gap-[20px] w-[100%]">
            <img
              className="w-[50%] max-lg:w-full"
              src={image1}
              alt=""
            />
            <img
              className="w-[50%] max-lg:w-full"
              src={image2}
              alt=""
            />
        </div>
          <img
            className="w-[100%]"
            src={image3}
            alt=""
          />
      </div>
    </>
  );
};
export default Collage;
