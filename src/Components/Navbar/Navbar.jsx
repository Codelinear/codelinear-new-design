import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import img from "./ham.svg";
import arrow from "../pages/home/homecomponents/homeanimate/arrow.svg";
import navBar from "./nav bar.json";
import Lottie from "lottie-react";
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  let [width, setWidth] = useState(window.innerWidth);
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    window.scrollTo(0, 0);
  };
  const toggleService = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const toggleother = () => {
    setDropdownOpen(false);
    window.scrollTo(0, 0);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  let [active, setactive] = useState(false);
  const hamburger = () => {
    setactive(!active);
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      {width <= 900 ? (
        <>
          <div className="w-full z-[99999990999999] h-[91px] px-20 bg-white bg-opacity-70 backdrop-blur-[110.60px] flex-col justify-end items-center gap-2.5 inline-flex sticky top-0 max-sm:px-[20px]">
            <div className="self-stretch pt-[30px] pb-2.5 justify-between items-center inline-flex sticky top-10 ">
              <div className="w-[123px] h-[51px] pr-[6.40px] pt-[16.37px] flex-col justify-center items-start gap-[14.69px] inline-flex">
                <div className="origin-top-left text-black text-xl font-normal font-['Graphik']">
                  <Link to="/" onClick={scrollToTop}>
                    <Lottie
                      animationData={navBar} // Your animation JSON
                      loop={true} // Set to true if you want the animation to loop
                      autoplay={true} // Set to true to automatically play the animation
                    />{" "}
                  </Link>
                </div>
              </div>

              <div className="flex" onClick={hamburger}>
                <img src={img} alt="" />
              </div>

              {/* <div className="justify-center items-center gap-[45px] flex max-lg:hidden">
                <div className="justify-start items-start gap-7 flex">
                  <div className="text-black text-base font-normal font-['Graphik']">
                    <Link onClick={toggleDropdown}>Services</Link>
                    {isDropdownOpen && (
                      <>
                        <div className="service-nav fixed top-20 left-0 z-[9999999999999] w-full">
                          <div className="w-full h-[531px] pl-20 pr-[10px] pt-[62px] pb-[68px] bg-white bg-opacity-1 backdrop-blur-[210.60px] justify-start items-start gap-[66.08px] inline-flex">
                            <div className="self-stretch flex-col justify-start items-start gap-12 inline-flex ">
                              <div className="flex-col justify-start items-start gap-[26px] flex">
                                <div className="self-stretch justify-start items-center gap-[26px] inline-flex">
                                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                                    Our services
                                  </div>
                                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                                </div>
                                <div className="flex-col justify-start items-start gap-[17px] flex">
                                  <div className="w-[366.92px] text-black text-[32px] font-normal font-['Graphik'] leading-[38.40px]">
                                    Iaculis amet consequat consequat viverra
                                    diam.
                                  </div>
                                </div>
                              </div>
                              <Link
                                onClick={toggleDropdown}
                                to="/service"
                                className="px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                              >
                                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                                  Explore all services
                                </div>
                              </Link>
                            </div>
                            <div className="self-stretch justify-start items-start gap-3.5 inline-flex flex-wrap">
                              <div className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex">
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  Product Design and Innovation
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left rotate-45 w-[21.83px] h-[21.83px] relative"></div>
                                  </div>
                                </div>
                              </div>
                              <Link
                                to="/appdev"
                                onClick={toggleDropdown}
                                className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex"
                              >
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  App Development and Modernization
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left rotate-45 w-[21.83px] h-[21.83px] relative"></div>
                                  </div>
                                </div>
                              </Link>
                              <div className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex">
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  Technology Consulting
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left rotate-45 w-[21.83px] h-[21.83px] relative"></div>
                                  </div>
                                </div>
                              </div>
                              <div className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex">
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  Ecommerce Marketplace Development
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left rotate-45 w-[21.83px] h-[21.83px] relative"></div>
                                  </div>
                                </div>
                              </div>
                              <div className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex">
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  Cloud Engineering
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left rotate-45 w-[21.83px] h-[21.83px] relative"></div>
                                  </div>
                                </div>
                              </div>
                              <Link
                                to="/gamedev"
                                onClick={toggleDropdown}
                                className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex"
                              >
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  Game Development
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left rotate-45 w-[21.83px] h-[21.83px] relative"></div>
                                  </div>
                                </div>
                              </Link>
                              <div className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex">
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  AR/VR Services
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left rotate-45 w-[21.83px] h-[21.83px] relative"></div>
                                  </div>
                                </div>
                              </div>
                              <div className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex">
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  Low-code and No-code
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left rotate-45 w-[21.83px] h-[21.83px] relative"></div>
                                  </div>
                                </div>
                              </div>
                              <div className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex">
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  Quality Assurance
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left rotate-45 w-[21.83px] h-[21.83px] relative"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="text-black text-base font-normal font-['Graphik']">
                    <Link to={"/about"}>About us</Link>
                  </div>
                  <div className="text-black text-base font-normal font-['Graphik']">
                    <Link to={"/casestudy"}>Case studies</Link>
                  </div>
                  <div className="text-black text-base font-normal font-['Graphik']">
                    <Link to={"/insights"}>Insights</Link>
                  </div>
                </div>
                <Link
                  to={"/contactus"}
                  className="talk-btn px-4 py-2 bg-neutral-100 rounded-[30px] justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all"
                >
                  <div className="text-black text-base font-normal font-['Graphik']">
                    Let’s Talk
                  </div>
                </Link>
              </div> */}
            </div>
          </div>

          <div
            class={`lists flex items-center justify-between flex-col ${
              active ? "active " : ""
            }`}
          >
            <div className="w-[100%] h-[100vh] relative bg-white ">
              <div className="w-[100%] px-5 pt-3 left-0 top-0 absolute justify-between items-center inline-flex">
                <div className="w-[101.29px] h-[42px] pr-[5.27px] pt-[13.48px] flex-col justify-end items-start gap-[12.10px] inline-flex">
                  <div className="w-24 h-4 relative flex-col justify-start items-start flex">
                    <div className="h-4 relative"></div>
                    <div className="w-[22.06px] h-4 relative"></div>
                    <div className="w-[0.18px] h-[1.79px] bg-black bg-opacity-0" />
                  </div>
                  <div className="origin-top-left rotate-[6.29deg] text-black text-opacity-0 text-base font-normal font-['Graphik']">
                    Codelinear
                  </div>
                </div>
                <div className="w-[65px] h-[42px] relative">
                  <div
                    className="w-[23.83px] h-[23.83px] right-[5px] top-[9.08px] absolute "
                    onClick={hamburger}
                  >
                    <div className="w-[33.70px] h-[0px] left-0 top-0 absolute origin-top-left rotate-45 border border-black"></div>
                    <div className="w-[33.70px] h-[0px] left-[23.83px] top-0 absolute origin-top-left rotate-[134.99deg] border border-black"></div>
                  </div>
                </div>
              </div>
              <div className="left-[20.04px] top-[39px] absolute flex-col justify-start items-start gap-3 inline-flex">
                <Link
                  t0="/"
                  onClick={hamburger}
                  className="w-80 text-black text-4xl font-normal font-['Graphik'] underlin leading-[43.20px]"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={hamburger}
                  className="w-80 text-black text-4xl font-normal font-['Graphik'] leading-[43.20px]"
                >
                  About Us
                </Link>
                <Link
                  to="/service"
                  onClick={hamburger}
                  className="w-80 text-black text-4xl font-normal font-['Graphik'] leading-[43.20px]"
                >
                  Services
                </Link>
                <Link
                  to="/casestudy"
                  onClick={hamburger}
                  className="w-80 text-black text-4xl font-normal font-['Graphik'] leading-[43.20px]"
                >
                  Case Studies
                </Link>
                <Link
                  to="insights"
                  onClick={hamburger}
                  className="w-80 text-black text-4xl font-normal font-['Graphik'] leading-[43.20px]"
                >
                  Insights
                </Link>
                <Link
                  to="/industry"
                  onClick={hamburger}
                  className="w-80 text-black text-4xl font-normal font-['Graphik'] leading-[43.20px]"
                >
                  Industries
                </Link>
                <Link
                  to="/contactus"
                  onClick={hamburger}
                  className="justify-start items-start gap-2 inline-flex"
                >
                  <div className="w-[166.88px] text-black text-4xl font-normal font-['Graphik'] leading-[43.20px]">
                    Let’s Talk
                  </div>
                  <div className="w-[43.87px] h-[43.87px] relative justify-center items-center inline-flex">
                    <div className="w-[43.87px] h-[43.87px] left-0 top-0 absolute bg-yellow-400 rounded-full" />
                    <div className="">
                      <div className=" relative flex-col justify-start items-start flex">
                        <div className="origin-top-left rotate[-135deg] w-[15.09px] relative">
                          <img src={arrow} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="left-[20.04px] top-[485px] absolute flex-col justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="opacity-60 text-black text-base font-normal font-['Graphik'] underline leading-normal">
                    info@codelinear.com
                  </div>
                  <div className="opacity-60 text-black text-base font-normal font-['Graphik'] leading-normal">
                    +1 415 523 5957
                  </div>
                </div>
                <div className="justify-start items-center gap-[19.84px] inline-flex">
                  <div className="w-6 h-6 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M19.041 3.00049C19.5714 3.00049 20.0801 3.21119 20.4552 3.58625C20.8302 3.9613 21.0409 4.46998 21.0409 5.00039V18.9997C21.0409 19.5301 20.8302 20.0388 20.4552 20.4139C20.0801 20.7889 19.5714 20.9996 19.041 20.9996H5.04171C4.51131 20.9996 4.00262 20.7889 3.62757 20.4139C3.25251 20.0388 3.04181 19.5301 3.04181 18.9997V5.00039C3.04181 4.46998 3.25251 3.9613 3.62757 3.58625C4.00262 3.21119 4.51131 3.00049 5.04171 3.00049H19.041ZM18.5411 18.4997V13.2C18.5411 12.3354 18.1976 11.5063 17.5863 10.8949C16.9749 10.2836 16.1458 9.94016 15.2812 9.94016C14.4313 9.94016 13.4413 10.4601 12.9613 11.2401V10.1301H10.1715V18.4997H12.9613V13.57C12.9613 12.8 13.5813 12.17 14.3513 12.17C14.7226 12.17 15.0786 12.3175 15.3412 12.5801C15.6037 12.8426 15.7512 13.1987 15.7512 13.57V18.4997H18.5411ZM6.92162 8.56022C7.36717 8.56022 7.79446 8.38323 8.10951 8.06818C8.42455 7.75314 8.60154 7.32584 8.60154 6.8803C8.60154 5.95035 7.85158 5.19038 6.92162 5.19038C6.47343 5.19038 6.04359 5.36843 5.72667 5.68535C5.40975 6.00227 5.2317 6.43211 5.2317 6.8803C5.2317 7.81026 5.99167 8.56022 6.92162 8.56022ZM8.31156 18.4997V10.1301H5.54169V18.4997H8.31156Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="w-6 h-6 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M22.8855 12.0005C22.8855 6.48049 18.4055 2.00049 12.8855 2.00049C7.3655 2.00049 2.8855 6.48049 2.8855 12.0005C2.8855 16.8405 6.3255 20.8705 10.8855 21.8005V15.0005H8.8855V12.0005H10.8855V9.50049C10.8855 7.57049 12.4555 6.00049 14.3855 6.00049H16.8855V9.00049H14.8855C14.3355 9.00049 13.8855 9.45049 13.8855 10.0005V12.0005H16.8855V15.0005H13.8855V21.9505C18.9355 21.4505 22.8855 17.1905 22.8855 12.0005Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="w-6 h-6 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M8.53041 2.00049H16.9304C20.1304 2.00049 22.7304 4.60049 22.7304 7.80049V16.2005C22.7304 17.7387 22.1193 19.214 21.0316 20.3017C19.9439 21.3894 18.4687 22.0005 16.9304 22.0005H8.53041C5.33041 22.0005 2.73041 19.4005 2.73041 16.2005V7.80049C2.73041 6.26223 3.34148 4.78698 4.42919 3.69927C5.5169 2.61156 6.99215 2.00049 8.53041 2.00049ZM8.33041 4.00049C7.37563 4.00049 6.45995 4.37977 5.78482 5.0549C5.10969 5.73003 4.73041 6.64571 4.73041 7.60049V16.4005C4.73041 18.3905 6.34041 20.0005 8.33041 20.0005H17.1304C18.0852 20.0005 19.0009 19.6212 19.676 18.9461C20.3511 18.2709 20.7304 17.3553 20.7304 16.4005V7.60049C20.7304 5.61049 19.1204 4.00049 17.1304 4.00049H8.33041ZM17.9804 5.50049C18.3119 5.50049 18.6299 5.63218 18.8643 5.8666C19.0987 6.10102 19.2304 6.41897 19.2304 6.75049C19.2304 7.08201 19.0987 7.39995 18.8643 7.63437C18.6299 7.86879 18.3119 8.00049 17.9804 8.00049C17.6489 8.00049 17.3309 7.86879 17.0965 7.63437C16.8621 7.39995 16.7304 7.08201 16.7304 6.75049C16.7304 6.41897 16.8621 6.10102 17.0965 5.8666C17.3309 5.63218 17.6489 5.50049 17.9804 5.50049ZM12.7304 7.00049C14.0565 7.00049 15.3283 7.52727 16.2659 8.46495C17.2036 9.40264 17.7304 10.6744 17.7304 12.0005C17.7304 13.3266 17.2036 14.5983 16.2659 15.536C15.3283 16.4737 14.0565 17.0005 12.7304 17.0005C11.4043 17.0005 10.1326 16.4737 9.19487 15.536C8.25719 14.5983 7.73041 13.3266 7.73041 12.0005C7.73041 10.6744 8.25719 9.40264 9.19487 8.46495C10.1326 7.52727 11.4043 7.00049 12.7304 7.00049ZM12.7304 9.00049C11.9348 9.00049 11.1717 9.31656 10.6091 9.87917C10.0465 10.4418 9.73041 11.2048 9.73041 12.0005C9.73041 12.7961 10.0465 13.5592 10.6091 14.1218C11.1717 14.6844 11.9348 15.0005 12.7304 15.0005C13.5261 15.0005 14.2891 14.6844 14.8517 14.1218C15.4143 13.5592 15.7304 12.7961 15.7304 12.0005C15.7304 11.2048 15.4143 10.4418 14.8517 9.87917C14.2891 9.31656 13.5261 9.00049 12.7304 9.00049Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="w-6 h-6 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1663_7264)">
                        <path
                          d="M14.1126 11.9999C14.1126 15.7274 11.0826 18.7499 7.34314 18.7499C6.45554 18.7511 5.5764 18.5774 4.75592 18.2388C3.93543 17.9003 3.18967 17.4034 2.56121 16.7766C1.93274 16.1498 1.43389 15.4054 1.09313 14.5858C0.752371 13.7662 0.576376 12.8875 0.575195 11.9999C0.575195 8.27098 3.60517 5.25001 7.34314 5.25001C8.23086 5.24863 9.11016 5.42214 9.93082 5.76063C10.7515 6.09911 11.4974 6.59595 12.126 7.22276C12.7547 7.84957 13.2536 8.59407 13.5945 9.41375C13.9354 10.2334 14.1114 11.1122 14.1126 11.9999ZM21.5375 11.9999C21.5375 15.5099 20.0225 18.3539 18.1535 18.3539C16.2846 18.3539 14.7696 15.5084 14.7696 11.9999C14.7696 8.48998 16.2846 5.646 18.1535 5.646C20.0225 5.646 21.5375 8.49148 21.5375 11.9999ZM24.575 11.9999C24.575 15.1439 24.0425 17.6924 23.384 17.6924C22.727 17.6924 22.1945 15.1424 22.1945 11.9999C22.1945 8.85598 22.727 6.3075 23.3855 6.3075C24.0425 6.3075 24.575 8.85598 24.575 11.9999Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1663_7264">
                          <rect
                            width="23.9998"
                            height="23.9998"
                            fill="white"
                            transform="translate(0.575195)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="w-6 h-6 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M10.4198 15L15.6098 12L10.4198 9V15ZM21.9798 7.17C22.1098 7.64 22.1998 8.27 22.2598 9.07C22.3298 9.87 22.3598 10.56 22.3598 11.16L22.4198 12C22.4198 14.19 22.2598 15.8 21.9798 16.83C21.7298 17.73 21.1498 18.31 20.2498 18.56C19.7798 18.69 18.9198 18.78 17.5998 18.84C16.2998 18.91 15.1098 18.94 14.0098 18.94L12.4198 19C8.2298 19 5.6198 18.84 4.5898 18.56C3.6898 18.31 3.1098 17.73 2.8598 16.83C2.7298 16.36 2.6398 15.73 2.5798 14.93C2.5098 14.13 2.4798 13.44 2.4798 12.84L2.4198 12C2.4198 9.81 2.5798 8.2 2.8598 7.17C3.1098 6.27 3.6898 5.69 4.5898 5.44C5.0598 5.31 5.9198 5.22 7.2398 5.16C8.5398 5.09 9.7298 5.06 10.8298 5.06L12.4198 5C16.6098 5 19.2198 5.16 20.2498 5.44C21.1498 5.69 21.7298 6.27 21.9798 7.17Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full z-[99999990999999] h-[91px] px-20 bg-white bg-opacity-70 backdrop-blur-[110.60px] flex-col justify-end items-center gap-2.5 inline-flex sticky top-0">
            <div className="self-stretch pt-[30px] pb-2.5 justify-between items-center inline-flex sticky top-10 ">
              <div className="w-[123px] h-[51px] pr-[6.40px] pt-[16.37px] flex-col justify-center items-start gap-[14.69px] inline-flex">
                {/* <div className="w-[116.54px] h-[19.37px] relative flex-col justify-start items-start flex">
              <div className="h-[19.37px] relative"></div>
              <div className="w-[26.79px] h-[19.37px] relative"></div>
              <div className="w-[0.21px] h-[2.18px] bg-black" />
            </div> */}
                <div className="origin-top-left text-black text-xl font-normal font-['Graphik']">
                  <Link to="/" onClick={toggleother}>
                    <Lottie
                      loop={true}
                      animationData={navBar}
                      isStopped={!isHovered}
                      isPaused={!isHovered}
                      autoplay={false}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHover}
                    />{" "}
                  </Link>
                </div>
              </div>
              <div className="w-[620px] justify-center items-center gap-[45px] flex max-lghidden">
                <div className="w-[476px] justify-start items-start gap-[28px] flex">
                  <div className="text-black text-base font-normal font-['Graphik']">
                    <Link onClick={toggleService}>Services</Link>
                    {isDropdownOpen && (
                      <>
                        <div className="service-nav fixed top-20 left-0 z-[9999999999999] w-full">
                          <div className="w-full h-[531px] pl-20 pr-[10px] pt-[62px] pb-[68px] justify-start items-start gap-[66.08px] inline-flex">
                            <div className="self-stretch flex-col justify-start items-start gap-12 inline-flex ">
                              <div className="flex-col justify-start items-start gap-[26px] flex">
                                <div className="self-stretch justify-start items-center gap-[26px] inline-flex">
                                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                                    Our services
                                  </div>
                                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                                </div>
                                <div className="flex-col justify-start items-start gap-[17px] flex">
                                  <div className="w-[366.92px] text-black text-[32px] font-normal font-['Graphik'] leading-[38.40px]">
                                    Iaculis amet consequat consequat viverra
                                    diam.
                                  </div>
                                </div>
                              </div>
                              <Link
                                onClick={toggleDropdown}
                                to="/service"
                                className="px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                              >
                                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                                  Explore all services
                                </div>
                              </Link>
                            </div>
                            <div className="self-stretch justify-start items-start gap-3.5 inline-flex flex-wrap">
                              <div className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex">
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  Product Design and Innovation
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left w-[30px] rotate-180 flex justify-center align-center w-[21.83px] h-[21.83px] relative">
                                      <img src={arrow} alt="" />
                                    </div>{" "}
                                  </div>
                                </div>
                              </div>
                              <Link
                                to="/appdev"
                                onClick={toggleDropdown}
                                className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex"
                              >
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  App Development and Modernization
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left w-[30px] rotate-180 flex justify-center align-center w-[21.83px] h-[21.83px] relative">
                                      <img src={arrow} alt="" />
                                    </div>{" "}
                                  </div>
                                </div>
                              </Link>
                              <div className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex">
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  Technology Consulting
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left w-[30px] rotate-180 flex justify-center align-center w-[21.83px] h-[21.83px] relative">
                                      <img src={arrow} alt="" />
                                    </div>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex">
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  Ecommerce Marketplace Development
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left w-[30px] rotate-180 flex justify-center align-center w-[21.83px] h-[21.83px] relative">
                                      <img src={arrow} alt="" />
                                    </div>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex">
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  Cloud Engineering
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left w-[30px] rotate-180 flex justify-center align-center w-[21.83px] h-[21.83px] relative">
                                      <img src={arrow} alt="" />
                                    </div>{" "}
                                  </div>
                                </div>
                              </div>
                              <Link
                                to="/gamedev"
                                onClick={toggleDropdown}
                                className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex"
                              >
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  Game Development
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left w-[30px] rotate-180 flex justify-center align-center w-[21.83px] h-[21.83px] relative">
                                      <img src={arrow} alt="" />
                                    </div>{" "}
                                  </div>
                                </div>
                              </Link>
                              <div className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex">
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  AR/VR Services
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left w-[30px] rotate-180 flex justify-center align-center w-[21.83px] h-[21.83px] relative">
                                      <img src={arrow} alt="" />
                                    </div>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex">
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  Low-code and No-code
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left w-[30px] rotate-180 flex justify-center align-center w-[21.83px] h-[21.83px] relative">
                                      <img src={arrow} alt="" />
                                    </div>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className=" nav-card h-[119px] p-4 rounded flex-col justify-between items-start inline-flex">
                                <div className="w-[234px] text-black text-xl font-normal font-['Graphik'] leading-normal">
                                  Quality Assurance
                                </div>
                                <div className="service-arrow w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black border-opacity0 justify-center items-center inline-flex">
                                  <div className="w-[31px] h-[21px] relative origin-top-left -rotate-180 flex-col justify-start items-start flex">
                                    <div className="origin-top-left w-[30px] rotate-180 flex justify-center align-center w-[21.83px] h-[21.83px] relative">
                                      <img src={arrow} alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="text-black text-base font-normal font-['Graphik']">
                    <Link to={"/about"} onClick={toggleother}>
                      About us
                    </Link>
                  </div>
                  <div className="text-black text-base font-normal font-['Graphik']">
                    <Link to={"/casestudy"} onClick={toggleother}>
                      Case studies
                    </Link>
                  </div>
                  <div className="text-black text-base font-normal font-['Graphik']">
                    <Link to={"/insights"} onClick={toggleother}>
                      Insights
                    </Link>
                  </div>
                  <div className="text-black text-base font-normal font-['Graphik']">
                    <Link to={"/industry"} onClick={toggleother}>
                      Industries
                    </Link>
                  </div>
                </div>
                <Link
                  to={"/contactus"}
                  onClick={toggleother}
                  className="w-[99px] talk-btn px-[16px] py-[8px] bg-neutral-100 rounded-[30px] justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all"
                >
                  <div className="text-black text-base font-normal font-['Graphik']">
                    Let’s Talk
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
