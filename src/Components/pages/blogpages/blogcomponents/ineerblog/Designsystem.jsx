import React from "react";
import img from "../../blogassets/Blog Inner page Banner12.jpg";
import arrow from "../../blogassets/arrow.svg";
import { Link } from "react-router-dom";
import img1 from "../../blogassets/Blogs Animation Thumbnail06.jpg";
import img2 from "../../blogassets/Blogs Animation Thumbnail03.jpg";
import img3 from '../../blogassets/Blogs Animation Thumbnail04.jpg'
import Explore from '../../../production/Explore'

const Designsystem = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="innerhero">
      <Link
          to="/insights"
          onClick={scrollToTop}
          className="px-4 py-2 hidden max-sm:flex left-[80px] top-[90px] absolute rounded-[54px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-lg:left-[20px]"
        >
          <Link
            to="/insights"
            onClick={scrollToTop}
            className="w-[31px] h-[21px] relative "
          >
            <img
              className="origin-top-left rotate45 w-[21.83px] h-[21.83px] left-[1.58px] top-5.20px] absolute"
              src={arrow}
              alt=""
            />
          </Link>
          <div className="opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
            Go Back
          </div>
        </Link>
        <div className="w-full h-full pl-20 pr-[407px] pt-[233.78px] pb-[65.22px] bg-white justify-start items-center inline-flex max-lg:p-10 max-sm:p-0 max-sm:px-[20px] max-sm:mt-[90px]">
        <div className="w-[953px] letter-spacing-2 text-black text-[66px] font-normal font-['Graphik'] leading-[108%] max-lg:w-full max-sm:text-[50px]">
            How To Build A Design System That Will Last Beyond 2023?
          </div>
        </div>

        <div className="hero-img">
          <div className="w-full h-full px-20 py-[36.50px] bg-white justify-center items-center inline-flex max-md:px-0">
            <img
              className="w-full h-full relative bg-black bg-opacity-20 flex-col justify-start items-start flex"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="blog-content">
        <div className="w-full h-full relative bg-white max-xl:h-full">
          <div className="flex gap-40 max-xl:gap-10 max-xl:flex-wrap max-lg:justify-center">
            <div className="h-[600px] max-sm:hidden sticky top-10 w-[300px] max-lg:relative max-lg:w-full max-sm:absolute max-sm:top-0 max-lg:h-full">
              <Link
                to="/insights"
                onClick={scrollToTop}
                className="px-4 py-2 left-[80px] top-[90px] absolute rounded-[54px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-lg:top-[0px] max-lg:left-[20px]"
              >
                <Link to="/insights"
                onClick={scrollToTop}
                className="w-[31px] h-[21px] relative ">
                  <img
                    className="origin-top-left rotate45 w-[21.83px] h-[21.83px] left-[1.58px] top-5.20px] absolute"
                    src={arrow}
                    alt=""
                  />
                </Link>
                <div className="opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Go Back
                </div>
              </Link>

              <div className="left-[80px] top-[201.39px] absolute text-black text-2xl font-normal font-['Graphik'] capitalize max-lg:hidden">
                Now Reading
              </div>
              <div className="left-[80px] top-[352.39px] absolute text-black text-2xl font-normal font-['Graphik'] capitalize max-lg:hidden">
                Also Read
              </div>
              <div className="w-[232px] h-[65px] left-[81px] top-[242px] absolute border border-black border-opacity-10 max-lg:hidden">
                <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img1} alt="" />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px]   text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee>
                      {" "}
                      <p className="w-[214px]">Design System</p>
                    </marquee>
                  </div>
                </div>
              </div>
              <Link
                onClick={scrollToTop}
                to="/gestalt-psychology"
                className="w-[232px] h-[65px] left-[81px] top-[393px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img2} alt="" />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px]   text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee>
                      {" "}
                      <p className="w-[214px]"> Gestalt Psychology</p>
                    </marquee>
                  </div>
                </div>
              </Link>
              <Link
                onClick={scrollToTop}
                to="/listing-to-your-customer"
                className="w-[232px] h-[65px] left-[81px] top-[471px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img3} alt="" />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px]   text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee>
                      {" "}
                      <p className="w-[214px]">Listening To Your Customer</p>
                    </marquee>
                  </div>
                </div>
              </Link>
            </div>

            <div className="left-[405px] h-[full] mt-[81.39px]  flex-col justify-start items-start gap-14 inline-flex max-md:px-10 max-sm:px-[20px] max-sm:mt-[80px]">
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                Late Steve Jobs loved his childhood home for its simple design.
                He lived in working-class subdivision homes between San
                Francisco and San Jose. These were the postwar suburban homes
                with floor-to-ceiling glass walls, exposed post-and-beam
                construction with concrete slab floors and lots of sliding glass
                doors. These urban homes were developed by Joseph Eichler and
                his imitators in the 1950s.
                <br />
                <br />
                In Jobs’ words, “His (Eichler’s) houses were smart and cheap and
                good. They brought clean design and simple taste to lower-income
                people.” It was this simplicity that formed the basis of Jobs’
                passion for making sharply designed products for the mass
                market. “It was the original vision for Apple. That’s what we
                tried to do with the first Mac. That’s what we did with the
                iPod,” Jobs stated later.
                <br />
                <br />
                Jobs’ vision for Apple did not just reflect in its products, but
                also in its design philosophy and eventually in its design
                system. The legacy of Steve Jobs would have never carried
                forward if it were not translated in an organized design system.
                <br />
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  What Is A Design System?
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  A design system is a guide or a standard structure with
                  parameters for design and code along with design components
                  that will unify both. For instance, Apple built Human
                  Interface Guidelines - a design system - that has pattern
                  libraries, downloadable templates, the iOS UI Kit, style
                  guides, and visual guidelines. The system has been built using
                  Steve Jobs' design principles. Its system lists important
                  factors such as -
                </div>

                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  - Visual design
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  - Visual index
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  - App architecture
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  - System capabilities
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  - Themes, menus, buttons
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  - Icons and images
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  - Fields and labels
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  - App architecture- Window and view{" "}
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  - Indicators
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  - Selectors and extensions
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  What To Include In A Design System?
                </div>
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  1. Design Principles
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  The rules and values that drive your design team are your
                  design principles. Just as we saw in the example of Quartz,
                  you can create some non-negotiable ground rules that the team
                  needs to keep in mind while designing any element of your
                  product or service.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  2. A design pattern library
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Patterns are standard structures of repeated design elements
                  that are used repeatedly in specific work situations. Your
                  design system needs a design pattern library as a central
                  repository of commonly used patterns.
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  3. A UI kit
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  A UI kit is a component library with a collection of
                  UI-focused elements such as widgets, buttons, etc. This kit
                  helps your teams create UI-friendly designs consistently, and
                  quickly.
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  4. Process guidelines
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  These guidelines are interpretations of design principles.
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  A Step-By-Step Process To Build A Design System
                </div>
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  1. Audit the existing product/offering
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  What does your product or service stand for? How does it help
                  people? List down the features of your product, service, or
                  application and build a catalog of UI components, visual
                  elements, and visual language. This will become the foundation
                  of your design system.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  2. Create and define your design language
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  How will you bring your design principles to life? What do you
                  want your customers to feel? Excited? Curious? How does this
                  feeling align with your branding language? Do you want your
                  brand to come across as premium, friendly, a problem-solver,
                  or a go-getter? Create guidelines about the way you want your
                  customers to feel. Now spell out this feeling in words, and
                  this will be your design language. Based on this language, you
                  can create guides for color palettes, iconography, imagery,
                  and typography.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  3. Apply your design pattern library
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Create clear processes to execute the design pattern library
                  that you have created. Remember that there are two main types
                  of patterns - functional and perceptual. Functional patterns
                  will define the day-to-day usage of your product or app, while
                  perceptual patterns will create a visual imprint through
                  colors, typography, spacing, etc.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  4. Document your design system
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  You need to draw out a clear plan about when and how to use
                  the design principles and patterns for the teams to follow in
                  future. Document shared practices, use cases and case studies
                  to serve as guidelines and references. This could include
                  things like:
                  <br />
                  - Ways of contributing to the system
                  <br />
                  - Reporting an issue
                  <br />- Maintenance challenges <br />- Efficiency parameters
                </div>
              </div>

              <br />
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    Get Inspired
                  </div>

                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                    Check out design systems of some of these noted companies
                    across industry verticals. You may get some real-life
                    examples of the elements that would be needed for your
                    design system.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Explore />
        </div>
      </div>
    </>
  );
};

export default Designsystem;
