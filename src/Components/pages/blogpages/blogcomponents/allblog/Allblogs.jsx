import React, { useRef, useState } from "react";
import img from "../../blogassets/Frame 566.png";
import img2 from "../../blogassets/Frame 568.png";
import img3 from "../../blogassets/Frame 569.png";
import img4 from "../../blogassets/Frame 57.png";
import img5 from "../../blogassets/Frame 60.png";
import img6 from "../../blogassets/Frame 61.png";
import img7 from "../../blogassets/Frame 64.png";
import img8 from "../../blogassets/Gestalt 1.png";
import img9 from "../../blogassets/unsplash_2cFZ_FB08UM.png";

import img10 from "../../blogassets/Frame 43.png";
import img11 from "../../blogassets/Frame 44.png";
import img12 from "../../blogassets/Frame 59.png";
import img13 from "../../blogassets/Frame 58.png";
import img14 from "../../blogassets/Frame 58.png";
import img15 from "../../blogassets/Frame 63.png";
import img16 from "../../blogassets/Frame 4.svg";
import img17 from "../../blogassets/Frame 1000001793.png";
import { Link } from "react-router-dom";
import gsap from "gsap";

import "./blog.scss";

const Allblogs = () => {
  const [isSortActive, setIsSortActive] = useState(true);
  // const [isSort1Active, setIsSort1Active] = useState(false);
  const [isSort2Active, setIsSort2Active] = useState(false);
  const [isSort3Active, setIsSort3Active] = useState(false);
  const [isSort4Active, setIsSort4Active] = useState(false);
  const [isSort5Active, setIsSort5Active] = useState(false);
  const [isSort6Active, setIsSort6Active] = useState(false);
  const [isSort7Active, setIsSort7Active] = useState(false);
  const [isSort8Active, setIsSort8Active] = useState(false);
  const [isSort9Active, setIsSort9Active] = useState(false);
  const [isSort10Active, setIsSort10Active] = useState(false);
  const [isSort11Active, setIsSort11Active] = useState(false);
  let empathy = useRef(null);
  let db = useRef(null);
  let digitalmarketing = useRef(null);
  let dw = useRef(null);
  let MVP = useRef(null);
  let design = useRef(null);
  let gp = useRef(null);
  let NCR = useRef(null);
  let SVM = useRef(null);
  let Bg = useRef(null);
  let NSEO = useRef(null);
  let Cust = useRef(null);
  let UXi = useRef(null);
  let STM = useRef(null);
  let RVF = useRef(null);
  let all = useRef(null);
  let aii = useRef(null);
  const onClickSort1 = () => {
    gsap.to(digitalmarketing, 0, { display: "flex" });
    gsap.to(dw, 0, { display: "flex" });
    gsap.to(db, 0, { display: "flex" });
    gsap.to(gp, 0, { display: "flex" });
    gsap.to(NCR, 0, { display: "flex" });
    gsap.to(NSEO, 0, { display: "flex" });
    gsap.to(Cust, 0, { display: "flex" });
    gsap.to(UXi, 0, { display: "flex" });
    gsap.to(STM, 0, { display: "flex" });
    gsap.to(empathy, 0, { display: "flex" });
    gsap.to(design, 0, { display: "flex" });
    gsap.to(MVP, 0, { display: "flex" });
    gsap.to(SVM, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "flex" });
    gsap.to(Bg, 0, { display: "flex" });
    gsap.to(aii, 0, { display: "flex" });
    setIsSortActive(true);
    setIsSort2Active(false);
    setIsSort4Active(false);
    setIsSort5Active(false);
    setIsSort6Active(false);
    setIsSort7Active(false);
    setIsSort8Active(false);
    setIsSort9Active(false);
  };
  const onClickSort2 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "flex" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(STM, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort2Active(true);
    setIsSort4Active(false);
    setIsSort5Active(false);
    setIsSort6Active(false);
    setIsSort7Active(false);
    setIsSort8Active(false);
    setIsSort9Active(false);
    setIsSortActive(false);
  };
  const onClickSort3 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "flex" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "flex" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "flex" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "flex" });
    gsap.to(design, 0, { display: "flex" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "flex" });
    setIsSort3Active(true);
    setIsSortActive(false);
    setIsSort2Active(false);
    setIsSort4Active(false);
    setIsSort5Active(false);
    setIsSort6Active(false);
    setIsSort7Active(false);
    setIsSort8Active(false);
    setIsSort9Active(false);
  };
  const onClickSort4 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "flex" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "flex" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort4Active(true);
    setIsSort3Active(false);
    setIsSortActive(false);
    setIsSort2Active(false);
    setIsSort5Active(false);
    setIsSort6Active(false);
    setIsSort7Active(false);
    setIsSort8Active(false);
    setIsSort9Active(false);
  };
  const onClickSort5 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "flex" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });

    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort5Active(true);

    setIsSort4Active(false);
    setIsSort3Active(false);
    setIsSortActive(false);
    setIsSort2Active(false);
    setIsSort6Active(false);
    setIsSort7Active(false);
    setIsSort8Active(false);
    setIsSort9Active(false);
  };
  const onClickSort6 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "flex" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "flex" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort6Active(true);
    setIsSort5Active(false);
    setIsSort4Active(false);
    setIsSort3Active(false);
    setIsSortActive(false);
    setIsSort2Active(false);
    setIsSort7Active(false);
    setIsSort8Active(false);
    setIsSort9Active(false);
  };
  const onClickSort8 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort8Active(true);

    setIsSort6Active(false);
    setIsSort5Active(false);
    setIsSort4Active(false);
    setIsSort3Active(false);
    setIsSortActive(false);
    setIsSort2Active(false);
    setIsSort7Active(false);

    setIsSort9Active(false);
  };
  const onClickSort7 = () => {
    gsap.to(digitalmarketing, 0, { display: "flex" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort7Active(true);
    setIsSort8Active(false);

    setIsSort6Active(false);
    setIsSort5Active(false);
    setIsSort4Active(false);
    setIsSort3Active(false);
    setIsSortActive(false);
    setIsSort2Active(false);
    setIsSort9Active(false);
  };
  const onClickSort9 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "flex" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort9Active(true);
    setIsSort8Active(false);
    setIsSort6Active(false);
    setIsSort5Active(false);
    setIsSort4Active(false);
    setIsSort3Active(false);
    setIsSortActive(false);
    setIsSort2Active(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="all-blogs">
        <div className="category-section">
          <div className="w-full h-[142px]  max-lg:h-full   pl-20 pr-[0px] pt-[67px] pb-[35px] bg-white justify-start items-center inline-flex max-lg:p-5  max-lg:mt-10">
            <div className="filtere self-stretch justify-start items-start gap-5 inline-flex max-lgflex-wrap max-sm:flex-nowrap max-sm:w-full max-lg:overflow-scroll">
              <button
                ref={(el) => (all = el)}
                onClick={onClickSort1}
                className={`p-2 bg-zinc900 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex max-lg:min-w-[100px] ${
                  isSortActive ? "active" : ""
                }`}
              >
                <div className="textwhite text-xl font-normal font-['Graphik'] leading-normal">
                  Show all
                </div>
              </button>
              <button
                onClick={onClickSort6}
                // className="p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex"

                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  max-lg:min-w-[250px] ${
                  isSort6Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  Product Development
                </div>
              </button>
              <button
                onClick={onClickSort3}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  max-lg:min-w-[150px] ${
                  isSort3Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  UI/UX Design
                </div>
              </button>
              <button
                onClick={onClickSort4}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  max-lg:min-w-[80px] ${
                  isSort4Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  SEO
                </div>
              </button>
              <button
                onClick={onClickSort2}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  max-lg:min-w-[80px]  ${
                  isSort2Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  Branding
                </div>
              </button>
              <button
                onClick={onClickSort5}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  max-lg:min-w-[200px] ${
                  isSort5Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  Social Media
                </div>
              </button>
              <button
                onClick={onClickSort7}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  max-lg:min-w-[200px] ${
                  isSort7Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  Digital Marketing
                </div>
              </button>
              <button
                onClick={onClickSort8}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  max-lg:min-w-[80px] ${
                  isSort8Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  eCommerce
                </div>
              </button>
              <button
                onClick={onClickSort9}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  max-lg:min-w-[150px] ${
                  isSort9Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  No Code
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="main-blog-section ml-[80px] mt-20 max-lg:m-5 max-md:px-4">
          <div className="w-full h-full justify-start items-start gap-x-[165px] gap-y-[75px] inline-flex flex-wrap  max-lg:gap-x-[50px] max-lg:justify-center max-lg:items-center ">
            <Link
              to={"/changingnature"}
              onClick={scrollToTop}
              ref={(el) => (NSEO = el)}
              className="flex-col justify-start items-start gap-9 inline-flex max-md:wfull"
            >
              <img className="w-[317px] h-[175.55px]" src={img7} alt="" />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize max-[400px]:w-full">
                    the changing nature of sEO
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    Gadget Flow is a well-known product discovery platform that
                    helps readers find latest....
                  </div>
                </div>
                <Link
                  onClick={scrollToTop}
                  to="/changingnature"
                  className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              to="/nocode"
              ref={(el) => (NCR = el)}
              onClick={scrollToTop}
              className="flex-col justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <img className="w-[317px] h-[175.55px]" src={img3} alt="" />
              <div className="w-[317px] flex-col justify-between items-start gap-3 flex">
                <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                  No-Code Revolution: 5 Platforms To Keep An....
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  The no-code creation in a website and application development is perhaps moving in the Lego direction.....
                  </div>
                  <Link
                    to="/nocode"
                    onClick={scrollToTop}
                    className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                  >
                    <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                      Read more
                    </div>
                  </Link>
                </div>
              </div>
            </Link>
            <Link
              to="/shopifyVsMagento"
              ref={(el) => (SVM = el)}
              onClick={scrollToTop}
              className="flex-col justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <img className="w-[317px] h-[175.55px]" src={img2} alt="" />

              <div className="flex-col justify-center items-start gap-9 flex">
                <div className="w-[317px] flex-col justify-between items-start gap-6   flex">
                  <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                    Shopify vs magento
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  If you're a business owner of any kind, you've probably heard of Shopify and Magento.....
                  </div>
                </div>
                <Link
                  to="/shopifyVsMagento"
                  onClick={scrollToTop}
                  className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              to="/design-system"
              ref={(el) => (design = el)}
              onClick={scrollToTop}
              className="flex-col justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <img className="w-[317px] h-[175.55px]" src={img} alt="" />

              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="flex-col justify-start items-start gap-[41px] flex">
                  <div className="text-black text-2xl font-normal font-['Graphik'] capitalize">
                    design system
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  A design system is a guide or a standard structure with parameters for design and code along with....
                  </div>
                </div>
                <Link
                  onClick={scrollToTop}
                  to="/design-system"
                  className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              to="/Gestalt"
              ref={(el) => (gp = el)}
              onClick={scrollToTop}
              className="flex-col justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <img className="w-[317px] h-[175.55px]" src={img8} alt="" />

              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="flex-col justify-start items-start gap-[41px] flex">
                  <div className="text-black text-2xl font-normal font-['Graphik'] capitalize">
                    Gestalt psychology
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  The website redesign of the restaurant chain, Chili's, is a great case study in UX design using Gestalt Psychology.....
                  </div>
                </div>
                <Link
                  to="/Gestalt"
                  onClick={scrollToTop}
                  className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              to="/story"
              onClick={scrollToTop}
              ref={(el) => (STM = el)}
              className="flex-col justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <img className="w-[317px] h-[175.55px]" src={img5} alt="" />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="w-[317px] flex-col justify-between items-start gap-9 flex">
                  <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                    Storytelling in marketing
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  A relatively new player pulled off a potentially risky storytelling marketing campaign in the late 2000....
                  </div>
                </div>
                <Link
                  to="/story"
                  onClick={scrollToTop}
                  className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              to="/mvp"
              onClick={scrollToTop}
              ref={(el) => (MVP = el)}
              className="flex-col justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <div className="flex-col justify-start items-start gap-9 flex">
                <img className="w-[317px] h-[175.55px]" src={img9} alt="" />
              </div>
              <div className="flex-col justify-start items-start gap-[41px] flex">
                <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                  Minimum viable product
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Testing a product is important. But should that product be complete or barely functional....
                  </div>
                  <Link
                    to="/mvp"
                    onClick={scrollToTop}
                    className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                  >
                    <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                      Read more
                    </div>
                  </Link>
                </div>
              </div>
            </Link>
            <Link
              to="/branding"
              onClick={scrollToTop}
              ref={(el) => (db = el)}
              className="flex-col justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <img className="w-[317px] h-[175.55px]" src={img6} alt="" />

              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                  The art of disruptive branding
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  One approach that has gained popularity in the field of marketing and digital marketing in recent....
                  </div>
                  <Link
                    to="/branding"
                    onClick={scrollToTop}
                    className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                  >
                    <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                      Read more
                    </div>
                  </Link>
                </div>
              </div>
            </Link>
            <Link
              to="/ux"
              ref={(el) => (UXi = el)}
              onClick={scrollToTop}
              className="flex-col justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <img className="w-[317px] h-[175.55px]" src={img4} alt="" />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="w-[317px] flex-col justify-between items-start gap-9 flex">
                  <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                    UX design Benefits SMEs!
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  This trend became a reality in 2022 when businesses saw Google’s AI search becoming more....
                  </div>
                </div>
                <Link
                  to="/ux"
                  onClick={scrollToTop}
                  className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              to="/Bingvsgoogle"
              ref={(el) => (Bg = el)}
              onClick={scrollToTop}
              className="flex-col justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <img className="w-[317px] h-[175.55px]" src={img12} alt="" />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="w-[317px] flex-col justify-between items-start flex gap-9">
                  <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                    Bing Vs Google
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  In addition to its integration with Microsoft's ecosystem, Bing has also introduced several unique....
                  </div>
                </div>
                <Link
                  ref={(el) => (Bg = el)}
                  to="/Bingvsgoogle"
                  onClick={scrollToTop}
                  className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              to="/customer"
              ref={(el) => (Cust = el)}
              onClick={scrollToTop}
              className="flex-col justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <img className="w-[317px] h-[175.55px]" src={img15} alt="" />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="w-[317px] flex-col justify-between items-start flex gap-9">
                  <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                    Listening To Your Customer
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  After gathering similar feedback from several places across the United States it was hard to imagin,....
                  </div>
                </div>
                <Link
                  to="/customer"
                  onClick={scrollToTop}
                  className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              onClick={scrollToTop}
              to="/ReactVsflutter"
              ref={(el) => (RVF = el)}
              className="flex-col justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <img className="w-[317px] h-[175.55px]" src={img16} alt="" />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="w-[317px] flex-col justify-between items-start flex gap-9">
                  <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                    React Native V/S Flutter
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Only a decade ago, it was hard to imagine life without mobile apps. They now make our lives easier, with   </div>
                </div>
                <Link
                  onClick={scrollToTop}
                  to="/ReactVsflutter"
                  className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              to="/empthy"
              ref={(el) => (empathy = el)}
              onClick={scrollToTop}
              className="flex-col justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <img className="w-[317px] h-[175.55px]" src={img10} alt="" />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="w-[317px] flex-col justify-between items-start flex gap-9">
                  <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                    Empathy In UX
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  The ability to get into your customers’ shoes results in user empathy. Intuit and Harley-Davidson are just two....
                  </div>
                </div>
                <Link
                  to="/empthy"
                  onClick={scrollToTop}
                  className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              ref={(el) => (aii = el)}
              to="/ai"
              onClick={scrollToTop}
              className="flex-col justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <img className="w-[317px] h-[175.55px]" src={img17} alt="" />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="w-[317px] flex-col justify-between items-start flex gap-9">
                  <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                    AI-Powered Design Tools
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  AI-powered search engines use machine learning and natural language processing to understand user....
                  </div>
                </div>
                <Link
                  to="/ai"
                  onClick={scrollToTop}
                  className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              to="/workshop"
              ref={(el) => (dw = el)}
              onClick={scrollToTop}
              className="flex-col justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <img className="w-[317px] h-[175.55px]" src={img13} alt="" />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="w-[317px] flex-col justify-between items-start flex gap-9">
                  <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                    Discovery Workshop
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  A discovery workshop is a crucial part of the website or application development process. It is an opportunity....
                  </div>
                </div>
                <Link
                  to="/workshop"
                  onClick={scrollToTop}
                  className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              to="/digital"
              ref={(el) => (digitalmarketing = el)}
              onClick={scrollToTop}
              className="flex-col justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <img className="w-[317px] h-[175.55px]" src={img11} alt="" />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="w-[317px] flex-col justify-between items-start flex gap-9">
                  <div className="w-[317px] text-black text-2xl font-normal font-['Graphik'] capitalize">
                    Digital Marketing Trends 2023
                  </div>
                  <div className="w-[317px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  The study then elaborated on how Domino’s and Diageo partnered with YouTube to actively fight against....
                  </div>
                </div>
                <Link
                  to="/digital"
                  onClick={scrollToTop}
                  className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allblogs;
