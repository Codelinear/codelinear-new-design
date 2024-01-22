import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./homeblog.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img from "../../../../../assets/homeassets/Frame 51.png";
import img2 from "../../../../../assets/homeassets/Frame 566.png";
import img3 from "../../../../../assets/homeassets/Frame 569.png";
import img4 from "../../../../../assets/homeassets/unsplash_2cFZ_FB08UM.png";
import img5 from "../../../../../assets/homeassets/Frame 64.png";
import img6 from "../../../../../assets/homeassets/Frame 61 (1).png";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Bloghome = () => {
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
          xPercent: -200,
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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="App relative bg-white overflow-x-hidden overflow-y-hidden  max-xl:hidden"
      ref={component}
    >
      <div ref={slider} className="container">
        <div className="flex justify-between mt-[100px] w-full px-[80px] mb-[60px]">
          <div>
            <div className="w-[443.95px] text-black text-[32px] font-normal font-['Graphik'] leading-[38.40px]">
              Stay in the know. Check our insights into big things happening
              now.
            </div>
          </div>
          <div>
            <Link
              onClick={scrollToTop}
              to={"insights"}
              className="w-[174px] h-14 px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
            >
              <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                View Insights
              </div>
            </Link>
          </div>
        </div>
        <div className="flex pt-[15px] pl-[60px]">
          {/* <div className="description panel blue  "></div> */}

          <div className="panel red">
            <Link
              to={"/changingnature"}
              onClick={scrollToTop}
              className="w-[317px] h-[548px] flex-col justify-start items-start gap-5 inline-flex"
            >
              <div className="flex-col justify-start items-start gap-9 flex">
                <div className="w-[317px] h-[175px] bg-white justify-center items-center inline-flex">
                  {/* <div  /> */}
                  <img
                    className="w-[318px]  object-cover h-[175px] relative flex-col justify-start items-start flex"
                    src={img5}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                    changing nature of seo
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                    Our commitment is not just to design; it's to create
                    experiences that resonate, innovate....
                  </div>
                </div>
                <div className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="panel orange">
            <Link
              to={"/design-system"}
              onClick={scrollToTop}
              className="w-[317px] h-[548px] flex-col justify-start items-start gap-5 inline-flex"
            >
              <div className="flex-col justify-start items-start gap-9 flex">
                <div className="w-[317px] h-[175px] bg-white justify-center items-center inline-flex">
                  <img
                    className="w-[318px] object-cover h-[175px] relative flex-col justify-start items-start flex"
                    src={img2}
                    alt=""
                  />
                  {/* <div className="w-[318px] h-[317px] relative flex-col justify-start items-start flex" /> */}
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div
                    onClick={scrollToTop}
                    className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize"
                  >
                    design system
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                    Our commitment is not just to design; it's to create
                    experiences that resonate, innovate....
                  </div>
                </div>
                <div className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="panel purple">
            <Link
              to={"/mvp"}
              onClick={scrollToTop}
              className="w-[317px] h-[548px] flex-col justify-start items-start gap-5 inline-flex"
            >
              <div className="flex-col justify-start items-start gap-9 flex">
                <div className="w-[317px] h-[175px] bg-white justify-center items-center inline-flex">
                  <img
                    className="w-[318px] object-cover h-[175px] relative flex-col justify-start items-start flex"
                    src={img3}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                    Minimum viable product
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                    Our commitment is not just to design; it's to create
                    experiences that resonate, innovate....
                  </div>
                </div>
                <div className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="panel purple">
            <Link
              to={"/Gestalt"}
              onClick={scrollToTop}
              className="w-[317px] h-[548px] flex-col justify-start items-start gap-5 inline-flex"
            >
              <div className="flex-col justify-start items-start gap-9 flex">
                <div className="w-[317px] h-[175px] bg-white justify-center items-center inline-flex">
                  <img
                    className="w-[318px] object-cover h-[175px] relative flex-col justify-start items-start flex"
                    src={img4}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                    Gestalt psychology
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                    Our commitment is not just to design; it's to create
                    experiences that resonate, innovate....
                  </div>
                </div>
                <div className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="panel purple">
            <Link
              to={"/branding"}
              onClick={scrollToTop}
              className="w-[317px] h-[548px] flex-col justify-start items-start gap-5 inline-flex"
            >
              <div className="flex-col justify-start items-start gap-9 flex">
                <div className="w-[317px] h-[175px] bg-white justify-center items-center inline-flex">
                  <img
                    className="w-[318px] object-cover h-[175px] relative flex-col justify-start items-start flex"
                    src={img6}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                    The art of disruptive branding
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                    Our commitment is not just to design; it's to create
                    experiences that resonate, innovate....
                  </div>
                </div>
                <div className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="lastContainer">Last Container</div> */}
    </div>
  );
};

export default Bloghome;
