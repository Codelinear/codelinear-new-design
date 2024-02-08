// ScrollToTopButton.js
import React, { useState, useEffect } from "react";
// import "./ScrollToTopButton.css";

const Scrolltop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100); // Adjust the value as needed
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <div

    // >
    //   <span>&#9650;</span>
    // </div>

    <div
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <div class="bottonn w-[189.13px] max-sm:w-[168px] max-sm:h-full h-[29.13px] opacity-80 justify-start items-center gap-3 inline-flex">
        <div class="w-[29.13px] h-[29.13px] relative overflow-hidden">
          <div class="w-[29.13px] h-[29.13px] left-0 top-0 absolute rounded-full border border-black"></div>
          <div className="goup flex gap-4 flex-col">
            <div class="onearrow rotate[135deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M7.97119 12.729L7.97119 2.19873"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.71722 6.45291L7.97091 2.19922L12.2246 6.45291"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class=" twoarrow rotate[135deg] left-[5.95px] top-[25.40px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M7.97119 12.729L7.97119 2.19873"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.71722 6.45291L7.97091 2.19922L12.2246 6.45291"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {/* <div class="origin-top-left rotate-[135deg] w-[10.45px] h-[10.45px] left-[21.95px] top-[32px] absolute"></div> */}
          </div>
        </div>
        <h1 class="topto text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
          Scroll to the top
        </h1>
      </div>
    </div>
  );
};

export default Scrolltop;
