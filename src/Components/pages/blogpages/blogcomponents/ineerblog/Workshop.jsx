import React from "react";
import img from "../../blogassets/Blog Inner page Banner08.jpg";
import arrow from "../../blogassets/arrow.svg";
import { Link } from "react-router-dom";
import img1 from "../../blogassets//Blogs Animation Thumbnail08.jpg";
import img2 from "../../blogassets/Blogs Animation Thumbnail09.jpg";
import img3 from "../../blogassets/Blogs Animation Thumbnail02.jpg";
import Explore from '../../../production/Explore'
import { Helmet } from "react-helmet";

const Workshop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
    <Helmet>
      <title>codelinear | Discovery Workshop</title>
    </Helmet>
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
              Discovery Workshop: Why Do You Need One?
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
            <div className="h-[600px] sticky top-10 w-[300px] max-lg:relative max-lg:w-full max-sm:absolute max-sm:top-0 max-lg:h-full">
              <Link
                to="/insights"
                onClick={scrollToTop}
                className="px-4 py-2 max-sm:hidden left-[80px] top-[90px] absolute rounded-[54px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-lg:top-[0px] max-lg:left-[20px]"
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
                      <p className="w-[214px]">Discovery Workshop</p>
                    </marquee>
                  </div>
                </div>
              </div>
              <Link
                onClick={scrollToTop}
                to="/empthy-in-ux"
                className="w-[232px] h-[65px] left-[81px] top-[393px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img2} alt="" />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px]   text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee>
                      {" "}
                      <p className="w-[214px]">Empathy in UX</p>
                    </marquee>
                  </div>
                </div>
              </Link>

              <Link
                onClick={scrollToTop}
                to="/storytelling-in-marketing"
                className="w-[232px] h-[65px] left-[81px] top-[471px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
               <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img3} alt="" />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px]   text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee>
                      {" "}
                      <p className="w-[214px]">Storytelling in Marketing</p>
                    </marquee>
                  </div>
                </div>
              </Link>
            </div>

            <div className="left-[405px] h-[full] mt-[81.39px]  flex-col justify-start items-start gap-14 inline-flex max-md:px-10 max-sm:px-[20px] max-sm:mt-[80px]">
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                A noted health insurance company recognized the need to improve
                its member portal to provide a better user experience. To
                achieve this, the company engaged a web application development
                company to conduct a discovery workshop to understand the needs
                and preferences of its users.
                <br />
                <br />
                During the discovery workshop, the agency worked closely with
                insurance company’s stakeholders to define the project's
                objectives and identify key user groups. They also conducted
                research to understand the users' needs and preferences, which
                helped to inform the design and development of the new member
                portal.
                <br />
                <br />
                As a result, the company was able to launch a member portal that
                exceeded their users' expectations. The new portal provided a
                personalized experience for each user, with relevant information
                and services easily accessible. The portal also had improved
                navigation, making it more user-friendly and intuitive.
                <br />
                <br />
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  What Is A Discovery Workshop?
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  A discovery workshop is a crucial part of the website or
                  application development process. It is an opportunity for
                  stakeholders, including clients, developers, designers, and
                  project managers, to come together to establish the goals,
                  requirements, and scope of the project. Skipping this crucial
                  step can result in costly mistakes, missed opportunities, and
                  a suboptimal end product. In this article, we will examine the
                  benefits of conducting a discovery workshop and the risks of
                  skipping it, using a real-world case study to illustrate its
                  importance.
                  <br />
                  Benefits of conducting a discovery Workshop
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Clearer understanding of the project's goals and objectives
                </div>
                <div className="w-[630px] opacity-80 text-black text-[28px] font-normal font-['Graphik'] leading-normal max-md:w-full">
                  Better understanding of user needs and requirements
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  One of the primary benefits of a discovery workshop is that it
                  provides an opportunity for stakeholders to discuss and
                  analyze user needs and requirements. By understanding the
                  needs and requirements of the target audience, the project
                  team can design and develop a website or application that
                  meets the user's needs and expectations. This helps to ensure
                  that the end product is user-friendly and effective.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Improved communication and collaboration
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  A discovery workshop provides an opportunity for stakeholders
                  to come together to discuss the project's requirements, goals,
                  and objectives. This improves communication and collaboration
                  between stakeholders and helps to ensure that everyone
                  involved in the project is on the same page. Improved
                  communication and collaboration can result in a better end
                  product and a more efficient development process.
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Identification of potential challenges and risks
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  A discovery workshop provides an opportunity for stakeholders
                  to identify potential challenges and risks that may arise
                  during the development process. This allows the project team
                  to prepare for these challenges and develop strategies to
                  mitigate them. By identifying potential challenges and risks
                  early on, the project team can save time and money in the long
                  run.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Saves time and money
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Conducting a discovery workshop may seem like an additional
                  cost, but it can actually save time and money in the long run.
                  By identifying potential challenges and risks early on, the
                  project team can develop strategies to mitigate them. This can
                  save time and money that would otherwise be spent trying to
                  fix issues after the development process has begun.
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  Skipping a discovery workshop can lead to several risks,
                  including: 1. Lack of understanding : The primary purpose of a
                  discovery workshop is to gain a deep understanding of the
                  project's goals, requirements, and constraints. Skipping this
                  workshop may result in a lack of understanding of these
                  critical aspects, leading to misunderstandings and
                  miscommunication throughout the project.
                  <br />
                  <br />
                  2. Misaligned expectations :Without a discovery workshop,
                  there is a higher risk of misaligned expectations between the
                  project team and stakeholders. The stakeholders may have
                  different expectations, which may not align with the project
                  team's vision and goals, leading to conflicts.
                  <br />
                  <br />
                  3. Inefficient use of resources :Skipping a discovery workshop
                  can result in a project that does not align with the
                  organization's goals and requirements, leading to inefficient
                  use of resources, including time, money, and manpower.
                  <br />
                  <br />
                  4. Missed opportunities : A discovery workshop provides a
                  forum for stakeholders to share their ideas and concerns.
                  Skipping this workshop can result in missed opportunities for
                  innovation and creative problem-solving.
                  <br />
                  <br />
                  5. Poor project outcomes :Without a thorough understanding of
                  the project's goals, requirements, and constraints, there is a
                  higher risk of poor project outcomes, including missed
                  deadlines, poor quality deliverables, and cost overruns.
                  <br />
                  <br />
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                  Final Thoughts
                </div>

                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  Alright, so let's wrap this up! AI design tools are basically
                  like the creative Swiss Army knives of the digital world.
                  These tools aim to streamline and enhance the design workflow
                  by automating tasks, generating design elements, and providing
                  suggestions based on algorithms and data analysis. By doing
                  so, AI design tools can potentially increase efficiency and
                  free up designers to focus on higher-level creative decisions.
                  <br />
                  <br />
                  The impact of AI on design is an ongoing topic of discussion,
                  with both potential benefits and ethical considerations being
                  debated within the design community and beyond.
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

export default Workshop;
