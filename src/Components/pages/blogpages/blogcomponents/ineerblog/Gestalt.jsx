import React from "react";
import img from "../../blogassets/Gestalt 1.png";
import arrow from "../../blogassets/arrow.svg";
import { Link } from "react-router-dom";


import img2 from "../../blogassets/Frame 1000001793.png";
import img3 from "../../blogassets/Frame 4.svg";

const Gestalt = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="innerhero">
        <div className="w-full h-full pl-20 pr-[407px] pt-[233.78px] pb-[65.22px] bg-white justify-start items-center inline-flex max-lg:p-10">
          <div className="w-[953px] text-black text-[66px] font-normal font-['Graphik'] leading-[71.28px] max-lg:w-full max-sm:text-[46px]">
            How Can Gestalt Psychology Change Your UX Design Game?
          </div>
        </div>

        <div className="hero-img">
          <div className="w-full h-[808px] px-20 py-[36.50px] bg-white justify-center items-center inline-flex max-md:px-0">
            <img
              className="w-full h-[735px] relative bg-black bg-opacity-20 flex-col justify-start items-start flex"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="blog-content">
        <div className="w-full h-[3704px] relative bg-white max-xl:h-full">
          <div className="flex gap-40 max-xl:gap-10 max-xl:flex-wrap-reverse max-lg:justify-center">
          <div className="h-[600px] sticky top-10 w-[300px] max-lg:relative max-lg:w-full">
              <Link
                to="/insights"
                className="px-4 py-2 left-[80px] top-[90px] absolute rounded-[54px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
              >
                <Link to="/insights" className="w-[31px] h-[21px] relative ">
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

              <div className="left-[80px] top-[201.39px] absolute text-black text-2xl font-normal font-['Graphik'] capitalize">
                Now Reading
              </div>
              <div className="left-[80px] top-[352.39px] absolute text-black text-2xl font-normal font-['Graphik'] capitalize">
                Also Read
              </div>
              <div className="w-[232px] h-[65px] left-[81px] top-[242px] absolute border border-black border-opacity-10">
                <div className="w-[68px] h-[67px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img} alt="" />
                </div>
                <div className="left-[77.31px] top-[11.09px] absolute justify-center items-center inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] leading-normal">
                  <marquee>   Gestalt Psychology</marquee>

               
                  </div>
                </div>
              </div>
              <Link
                onClick={scrollToTop}
                to="/ReactVsflutter"
                className="w-[232px] h-[65px] left-[81px] top-[393px] absolute border border-black border-opacity-10"
              >
                <div className="w-[68px] left-0 top-[-1.39px] absolute bg-neutral-200 justify-center items-center inline-flex">
                  <img className="w-[68.11px] h-[69.01px]" src={img3} alt="" />
                </div>

                <div className="left-[77.31px] top-[11.09px] absolute justify-center items-center inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] leading-normal">
                  <marquee>    React Native V/S Flutter</marquee>

                 
                  </div>
                </div>
              </Link>

              <Link
                onClick={scrollToTop}
                to="/ai"
                className="w-[232px] h-[65px] left-[81px] top-[471px] absolute border border-black border-opacity-10"
              >
                <div className="w-[68px] h-[67px] left-0 top-[-1.39px] absolute bg-neutral-200 justify-center items-center inline-flex">
                  <img
                    className="w-[68px] h-[68.87px]"
                    src={img2}
                    alt="placeholder"
                  />
                </div>

                <div className="left-[77.31px] top-[11.09px] absolute justify-end items-center inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] leading-normal">
                  <marquee>     AI-Powered Design Tools</marquee>

             
                  </div>
                </div>
              </Link>
            </div>


            <div className="left-[405px] h-[full] mt-[81.39px]  flex-col justify-start items-start gap-14 inline-flex max-md:px-10">
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                The website redesign of the restaurant chain, Chili's, is a
                great case study in UX design using Gestalt Psychology. The
                company wanted to create a more modern and user-friendly website
                that would make it easier for customers to find information
                about their menu, locations, and promotions.
                <br />
                <br />
                The redesign incorporated several Gestalt psychology principles,
                including proximity, similarity, and closure. The menu items
                were grouped together based on their category, such as
                appetizers, entrees, and desserts, using the principle of
                proximity. The use of consistent fonts, colors, and layouts
                throughout the website provided a sense of similarity, making it
                easier for users to recognize and remember important
                information. The use of visual cues, such as icons and images,
                helped to provide closure and guide users through their journey
                on the website.
                <br />
                <br />
                In addition, the website's homepage featured a large image of
                Chili's famous Baby Back Ribs, which utilized the principle of
                figure-ground relationship by making the main content stand out
                against the background. The design also incorporated the
                principle of continuity by using a horizontal scroll to display
                featured promotions, allowing users to easily navigate through
                the content.
                <br />
                <br />
                The result of the website redesign and development was a more
                visually appealing and user-friendly website that made it easier
                for customers to find information and navigate through the site.
                With the incorporation of Gestalt psychology in website
                redesign, Chili’s experienced an increase in online orders from
                25% to 55%, apart from an increase in customer engagement. wood.
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  What Is Gestalt Psychology?
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  As UX designers at Codelinear, our primary goal is to create a
                  user-friendly and intuitive experience for the users of our
                  clients. One way to achieve this goal is by using Gestalt
                  psychology principles in UX design.
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  1. Figure-Ground Relationship The Gestalt principle of
                  figure-ground relationship explains how our brain separates
                  the visual elements in a design into foreground and
                  background. This principle in UX design helps the user to
                  identify and differentiate between the main content and the
                  surrounding elements. As a UX designer, you can use this
                  principle to create a clear visual hierarchy on your webpage
                  or application, making it easier for users to navigate and
                  find the information they need.
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  2. Proximity : Proximity explains visual elements that are
                  close to each other as related. In UX design, this principle
                  can help you to group related elements together, making it
                  easier for users to understand their relationship. For
                  instance, you can group related options or actions together,
                  such as placing all the editing tools close to each other in a
                  photo editing app. In the case of Chilis, the menu items were
                  regrouped based on category.{" "}
                </div>{" "}
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  3. Similarity : The principle of similarity, as the name
                  suggests, is about perceiving elements that share similar
                  attributes, such as color, shape, or size, as related. As a UX
                  designer, you can use this principle to create consistency in
                  your design by using similar colors, shapes, or sizes for
                  related elements. For instance, you can use the same color for
                  all the buttons that have the same function, such as the "Add
                  to Cart" buttons in an e-commerce app.
                </div>{" "}
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  4. Closure: The closure principle explains how we see visual
                  elements that are incomplete as complete. This principle helps
                  you to simplify complex information by using visual cues that
                  suggest completion. For instance, you can use a progress bar
                  to show the user how much of a task is completed, giving them
                  a sense of closure and a clear indication of how much work is
                  left.
                </div>{" "}
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  5. Continuity The continuity principle describes how users
                  perceive factors that are arranged in a continuous line or
                  curve as related. This principle is helpful in creating a
                  smooth and effortless user experience by using visual cues
                  that guide the user's eye from one element to another. For
                  instance, Chili’s used a horizontal line to separate different
                  sections of a webpage or an application, making it easier for
                  users to navigate.
                </div>{" "}
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  6. Symmetry The symmetry principle is about how we perceive
                  symmetrical elements as related. This principle helps
                  designers to create a sense of balance and harmony in the
                  design by using symmetrical shapes and layouts. For instance,
                  you can use a symmetrical layout for your website or
                  application, creating a sense of order and simplicity that is
                  pleasing to the eye.
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    The Take-Away
                  </div>

                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                    Gestalt psychology principles can inform your UX design
                    choices by providing you with a deeper understanding of how
                    users perceive visual elements as a whole. By using these
                    principles in your design choices, you can create a
                    user-friendly and intuitive experience for your users,
                    making it easier for them to navigate and find the
                    information they need. As a UX designer, it is important to
                    keep these principles in mind when creating your designs, as
                    they can have a significant impact on the user experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gestalt;
