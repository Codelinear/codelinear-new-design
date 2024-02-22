import React, { useEffect, Suspense, useRef, useState } from "react";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Homeanimatemobile from "./Heroanimate";
import "./homehero.scss";
const Homeanimate = React.lazy(() => import("./Heroanimate"));

const Homehero = () => {
  let [widthscreen, setWidth] = useState(window.innerWidth);
  let [heightscreen, setHeight] = useState(window.innerHeight);
  const section = useRef(null);
  const section2 = useRef(null);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    window.addEventListener("resizeh", () => setHeight(window.innerHeight));
    if (heightscreen <= 690 && widthscreen >= 1525) {
      gsap.to(section.current, 0, { height: "800px" });
      gsap.to(section2.current, 0, { height: "800px" });
    } else if (
      heightscreen <= 650 &&
      widthscreen >= 1416 &&
      widthscreen <= 1524
    ) {
      gsap.to(section.current, 0, { height: "800px" });
      gsap.to(section2.current, 0, { height: "800px" });
    } else if (
      heightscreen <= 750 &&
      widthscreen >= 1025 &&
      widthscreen <= 1415
    ) {
      gsap.to(section.current, 0, { height: "780px" });
      gsap.to(section2.current, 0, { height: "780px" });
    }
  });
  const width = window.innerWidth;
  return width >= 1024 ? (
    <>
      <div
        ref={section}
        className="hero-height relative max-lg:h-full max-sm:ml-[0px]"
      >
        <div
          ref={section2}
          className="w-full bg-white  h-[600px] z-0 max-lg:h-full "
        >
          <div className="w-[730px] ml-[80px] mt-[115px] text-black text-[66px] font-normal font-['Graphik'] leading-[108.195%] letter-spacing-1 max-lg:mb-[36px] max-lg:w-[80%] max-lg:ml-[40px] max-sm:text-[50px] max-sm:ml-[20px]  max-sm:mt-[50px]  max-sm:leading-[54px]">
            Transforming businesses through design-led product engineering.
          </div>
          <Suspense>
            <div className="hero-animate absolute w-[630px] right-[80px] bottom-[131px] max-lg:relative max-lg:right-0 max-lg:bottom-0 flex max-lg:justify-center max-lg:w-[100%]  max-sm:mt-[0px]  max-sm:w-[100%] max-sm:justify-center max-lg:mt-20 ">
              <Homeanimate />
            </div>
          </Suspense>
        </div>
      </div>
    </>
  ) : (
    <>
      <>
        <div
          ref={section}
          className="hero-height relative max-lg:h-full max-sm:ml-[0px]"
        >
          <div
            ref={section2}
            className="w-full bg-white  h-[600px] z-0 max-lg:h-full "
          >
            <div className="w-[730px] ml-[80px] mt-[115px] text-black text-[66px] font-normal font-['Graphik'] leading-[108.195%] letter-spacing-1 max-lg:mb-[36px] max-lg:w-[80%] max-lg:ml-[40px] max-sm:text-[50px] max-sm:ml-[20px]  max-sm:mt-[50px]  max-sm:leading-[54px]">
              Transforming businesses through design-led product engineering.
            </div>
            <div className="hero-animate absolute w-[630px] right-[80px] bottom-[131px] max-lg:relative max-lg:right-0 max-lg:bottom-0 flex max-lg:justify-center max-lg:w-[100%]  max-sm:mt-[0px]  max-sm:w-[100%] max-sm:justify-center max-lg:mt-20 ">
              <Homeanimatemobile />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Homehero;
