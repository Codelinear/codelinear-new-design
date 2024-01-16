import React, { useEffect, useLayoutEffect, useRef } from "react";
// import "./homeblog.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img from "../../../../../assets/homeassets/Frame 51.png";
import img2 from "../../../../../assets/homeassets/Frame 566.png";
import img3 from "../../../../../assets/homeassets/Frame 569.png";
import img4 from "../../../../../assets/homeassets/unsplash_2cFZ_FB08UM.png";

const Otherservice = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      let pauseRatio = 0.1;
      let snapPauseRatio = pauseRatio / (pauseRatio * 2 + 1);
      let snapPanelRatio = 1 / (panels.length - 1) / (pauseRatio * 2 + 1);
      let snapValues = panels.map(
        (panel, i) => snapPauseRatio + i * snapPanelRatio
      );
      snapValues.unshift(0);
      snapValues.push(1);
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          //   snap: snapValues,
          end: () => "+=" + slider.current.offsetWidth,
          markers: false,
        },
      });
      tl.to(
        panels,
        {
          xPercent: -600,
          duration: 1,
          ease: "none",
        },
        pauseRatio
      );
      //   tl.to({}, { duration: pauseRatio });

      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          containerAnimation: tl,
          start: "left center",
          end: "right center",
          onToggle: (self) => {
            if (self.isActive) {
              console.log("enter panel index:", i);
            }
          },
        });
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <>
      <div className="otherservice">
        <div
          className="App relative bg-white  overflow-x-hidden overflow-y-hidden"
          ref={component}
        >
          <div ref={slider} className="container">
            <div className="flex justify-between mt-[100px] w-full px-[80px]">
              <div>
                <div className="w-[631.03px] text-black text-[49.20px] font-normal font-['Graphik'] leading-[59.04px]">
                  Explore our other services
                </div>
              </div>
            </div>
            <div className="flex pt-[60px] pl-[60px]">
              {/* <div className="description panel blue  "></div> */}

              <div className="panel red">
                <div className="w-[298.63px] h-[412.96px] flex-col justify-start items-start gap-[29.95px] inline-flex">
                  <div className="w-[298.63px] h-[361.02px] bg-zinc-100 flex-col justify-center items-center flex">
                    <img
                      className="w-[299.46px] h-[361.02px]"
                      src="https://via.placeholder.com/299x361"
                    />
                  </div>
                  <div className="w-[298.63px] text-black text-xl font-normal font-['Graphik'] capitalize">
                    Product Design and Innovation
                  </div>
                </div>
              </div>
              <div className="panel orange">
                <div className="w-[298.63px] h-[412.96px] flex-col justify-start items-start gap-[29.95px] inline-flex">
                  <div className="w-[298.63px] h-[361.02px] bg-zinc-100 flex-col justify-center items-center flex">
                    <img
                      className="w-[299.46px] h-[361.02px]"
                      src="https://via.placeholder.com/299x361"
                    />
                  </div>
                  <div className="w-[298.63px] text-black text-xl font-normal font-['Graphik'] capitalize">
                    App Development and Modernization
                  </div>
                </div>
              </div>
              <div className="panel purple">
                <div className="w-[298.63px] h-[412.96px] flex-col justify-start items-start gap-[29.95px] inline-flex">
                  <div className="w-[298.63px] h-[361.02px] bg-zinc-100 flex-col justify-center items-center flex">
                    <img
                      className="w-[299.46px] h-[361.02px]"
                      src="https://via.placeholder.com/299x361"
                    />
                  </div>
                  <div className="w-[298.63px] text-black text-xl font-normal font-['Graphik'] capitalize">
                    Technology Consulting
                  </div>
                </div>
              </div>
              <div className="panel purple">
                <div className="w-[298.63px] h-[412.96px] flex-col justify-start items-start gap-[29.95px] inline-flex">
                  <div className="w-[298.63px] h-[361.02px] bg-zinc-100 flex-col justify-center items-center flex">
                    <img
                      className="w-[299.46px] h-[361.02px]"
                      src="https://via.placeholder.com/299x361"
                    />
                  </div>
                  <div className="w-[298.63px] text-black text-xl font-normal font-['Graphik'] capitalize">
                    Ecommerce Marketplace Development
                  </div>
                </div>
              </div>
              <div className="panel purple">
                <div className="w-[298.63px] h-[412.96px] flex-col justify-start items-start gap-[29.95px] inline-flex">
                  <div className="w-[298.63px] h-[361.02px] bg-zinc-100 flex-col justify-center items-center flex">
                    <img
                      className="w-[299.46px] h-[361.02px]"
                      src="https://via.placeholder.com/299x361"
                    />
                  </div>
                  <div className="w-[298.63px] text-black text-xl font-normal font-['Graphik'] capitalize">
                    Product Design and Innovation
                  </div>
                </div>
              </div>
              <div className="panel purple">
                <div className="w-[298.63px] h-[412.96px] flex-col justify-start items-start gap-[29.95px] inline-flex">
                  <div className="w-[298.63px] h-[361.02px] bg-zinc-100 flex-col justify-center items-center flex">
                    <img
                      className="w-[299.46px] h-[361.02px]"
                      src="https://via.placeholder.com/299x361"
                    />
                  </div>
                  <div className="w-[298.63px] text-black text-xl font-normal font-['Graphik'] capitalize">
                    Cloud Engineering
                  </div>
                </div>
              </div>
              <div className="panel purple">
                <div className="w-[298.63px] h-[412.96px] flex-col justify-start items-start gap-[29.95px] inline-flex">
                  <div className="w-[298.63px] h-[361.02px] bg-zinc-100 flex-col justify-center items-center flex">
                    <img
                      className="w-[299.46px] h-[361.02px]"
                      src="https://via.placeholder.com/299x361"
                    />
                  </div>
                  <div className="w-[298.63px] text-black text-xl font-normal font-['Graphik'] capitalize">
                    AR/VR Services
                  </div>
                </div>
              </div>
              <div className="panel purple">
                <div className="w-[298.63px] h-[412.96px] flex-col justify-start items-start gap-[29.95px] inline-flex">
                  <div className="w-[298.63px] h-[361.02px] bg-zinc-100 flex-col justify-center items-center flex">
                    <img
                      className="w-[299.46px] h-[361.02px]"
                      src="https://via.placeholder.com/299x361"
                    />
                  </div>
                  <div className="w-[298.63px] text-black text-xl font-normal font-['Graphik'] capitalize">
                    Quality Assurance
                  </div>
                </div>
              </div>

              <div className="panel purple">
                <div className="w-[298.63px] h-[412.96px] flex-col justify-start items-start gap-[29.95px] inline-flex">
                  <div className="w-[298.63px] h-[361.02px] bg-zinc-100 flex-col justify-center items-center flex">
                    <img
                      className="w-[299.46px] h-[361.02px]"
                      src="https://via.placeholder.com/299x361"
                    />
                  </div>
                  <div className="w-[298.63px] text-black text-xl font-normal font-['Graphik'] capitalize">
                    Low-code and No-code
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="lastContainer">Last Container</div> */}
        </div>
      </div>
    </>
  );
};

export default Otherservice;
