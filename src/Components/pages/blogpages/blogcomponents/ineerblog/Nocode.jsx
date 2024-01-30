import React from "react";
import img from "../../blogassets/Frame 569.png";
import arrow from "../../blogassets/arrow.svg";
import { Link } from "react-router-dom";

import img2 from "../../blogassets/Frame 44.png";
import img3 from "../../blogassets/unsplash_2cFZ_FB08UM.png";
// import img4 from "../../../production/images/alexander-shatov-DHl49oyrn7Y-unsplash 1.svg";

const Nocode = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="innerhero">
        <div className="w-full h-full pl-20 pr-[407px] pt-[233.78px] pb-[65.22px] bg-white justify-start items-center inline-flex max-lg:p-10 max-sm:p-0 max-sm:ml-[20px] max-sm:mt-[90px]">
          <div className="w-[953px] text-black text-[66px] font-normal font-['Graphik'] leading-[120%] max-lg:w-full max-sm:text-[46px]">
            No-Code Revolution: 5 Platforms To Keep An Eye On In 2023
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
                className="px-4 py-2 left-[80px] top-[90px] absolute rounded-[54px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-lg:top-[0px] max-lg:left-[20px]"
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

              <div className="left-[80px] top-[201.39px] absolute text-black text-2xl font-normal font-['Graphik'] capitalize max-lg:hidden">
                Now Reading
              </div>
              <div className="left-[80px] top-[352.39px] absolute text-black text-2xl font-normal font-['Graphik'] capitalize max-lg:hidden">
                Also Read
              </div>
              <div className="w-[232px] h-[65px] left-[81px] top-[242px] absolute border border-black border-opacity-10 max-lg:hidden">
                <div className="w-[68px] h-[67px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img} alt="" />
                </div>
                <div className="left-[77.31px] top-[11.09px] absolute justify-center items-center inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee> No-Code Revolution</marquee>
                  </div>
                </div>
              </div>
              <Link
                onClick={scrollToTop}
                to="/digital"
                className="w-[232px] h-[65px] left-[81px] top-[393px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] left-0 top-[-1.39px] absolute bg-neutral-200 justify-center items-center inline-flex">
                  <img className="w-[68.11px] h-[69.01px]" src={img2} alt="" />
                </div>

                <div className="left-[77.31px] top-[11.09px] absolute justify-center items-center inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee>Digital Marketing</marquee>
                  </div>
                </div>
              </Link>

              <Link
                onClick={scrollToTop}
                to="/Gestalt"
                className="w-[232px] h-[65px] left-[81px] top-[471px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] h-[67px] left-0 top-[-1.39px] absolute bg-neutral-200 justify-center items-center inline-flex">
                  <img
                    className="w-[68px] h-[68.87px]"
                    src={img3}
                    alt="placeholder"
                  />
                </div>

                <div className="left-[77.31px] top-[11.09px] absolute justify-end items-center inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee> Gestalt Psychology</marquee>
                  </div>
                </div>
              </Link>
            </div>
            <div className="left-[405px] h-[full] mt-[81.39px]  flex-col justify-start items-start gap-14 inline-flex max-md:px-10 max-sm:px-[20px] max-sm:mt-[80px]">
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                When Ole Kirk Christiansen went out of business back in the
                1930s, little did he know that the scraps from his furniture
                factory would help build a whole new business during the world
                recession. Ole along with his son Godtfred founded Lego (meaning
                ‘put together’ in Latin) - a company that sold toys made of fine
                wood.
                <br />
                <br />
                However, after a decade of selling those toys while braving the
                Great Depression and the Second World War, Godtfred felt this
                business model wasn’t quite right. Lego was not the only
                toy-producing company. Meanwhile his father Ole couldn’t get his
                mind off of a brick-like toy made of plastic, that he had seen
                many years ago in a business exhibition. Both the men put
                together the idea and created what Lego is today - a set of
                building blocks that allows children to put their imagination to
                work.
                <br />
                <br />
                The no-code creation in a website and application development is
                perhaps moving in the Lego direction. A kind of app development
                that allows creative freedom to build apps without much
                technical knowledge.
                <br />
                <br />
                The No-code revolution is indicative that modern businessmen and
                women want to keep creative control in their own hands when it
                comes to developing websites or mobile applications. No-code is
                really for the businesses who wish to personalize their product
                or service branding, and it does not mean that no-code platforms
                can only produce simple apps.
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  A No-Code Revolution Is Brewing
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Forbes reported in 2021 that “60% of all custom apps were
                  being developed outside of the IT department while 40% of
                  these users worked in a professional setting.” Many businesses
                  today are opting for no-code creation for several reasons, one
                  of them being faster time to market.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  What Are No-Code Platforms?
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  No-code tools or platforms are basically programming styles
                  and methodologies that do not require coding. Instead, these
                  platforms use GUI (Graphical User Interface) tools to create
                  websites or mobile applications. A user does not need to be
                  either a coder or a developer but someone who knows the basics
                  of using keyboard tools such as click, drag, drop, and scroll.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  Benefits Of No-Code
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    1. Better allocation of IT/engineer hours :
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                    -Since no-code platforms are more like drag-and-drop tools,
                    business users need not employ coders and engineers in the
                    website and application development. This technical
                    workforce then can be applied towards mission-critical work.
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    2. Faster time to market :
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                    When it comes to developing a business website or a mobile
                    application, a business needs to go through several rounds
                    of approvals and iterations. With no-code platforms, the
                    task can be allotted only to a few employees after approvals
                    from the upper management. This reduces the approval and
                    development time, and your product or service may come out
                    in the market in much less time.
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    3. Cost reduction :
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                    Through no-code environments, you can create more
                    applications in less time and resources, which leads to
                    lower costs. It also reduces the costs of hiring since
                    coders or developers are not needed for launching web or
                    mobile apps.
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="w-[627.31px] text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Some Of The Best No-Code Platforms To Watch Out In 2023
                </div>
                <div className="flex-col justify-start items-start gap-7 flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                      1. Appy Pie
                    </div>
                    <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                      This is a no-code mobile and software application
                      development platform that involves the creation of chat
                      boxes, websites, intelligent workflows, and automation. It
                      allows users to connect 300+ apps to simplify further
                      development work.
                      <br />
                      <br />
                      Pros
                      <br />- User friendly
                      <br />- Quick customer support
                      <br />- Automates tasks
                      <br />- Can build and launch chatbots
                      <br />- Custom mobile app development
                      <br />
                      <br />
                      Cons
                      <br />- No webview button on the main menu
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                      2. Webflow
                    </div>
                    <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                      The platform has been around for quite some time and has
                      evolved to be more than just a website builder. It allows
                      users to create responsive software and websites with
                      absolute web design freedom. Compared to traditional
                      website development platforms such as Wix or WordPress,
                      Webflow offers more customization options.
                      <br />
                      <br />
                      Pros
                      <br />- Allows building of custom databases for CMS and
                      e-commerce stores
                      <br />- Hassle-free hosting network
                      <br />- 999.9% uptime
                      <br />- Zero maintenance
                      <br />
                      <br />
                      Cons
                      <br />- Compared to other web builders, it is difficult to
                      use
                      <br />- Expensive for small businesses
                      <br />- No live chat or phone support
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                      3. Bubble.io
                    </div>
                    <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                      Bubble allows for easy custom web application development
                      offering a wide range of features including databases,
                      APIs, and e-commerce. Bubble is the most suitable web
                      application builder for SaaS entrepreneurs who are testing
                      a prototype or businesses intending to launch tools/apps
                      quickly.
                      <br />
                      <br />
                      Pros
                      <br />- User-friendly
                      <br />- Free version has enough features
                      <br />- Paid subscription gives access to a wide range of
                      features
                      <br />- Thriving user community of 300,000 people
                      <br />
                      <br />
                      Cons
                      <br />- Cannot test plugins before buying
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                      4. Bildr
                    </div>
                    <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                      Non-technical startup entrepreneurs use Bildr to create
                      functional and stunning websites for testing prototypes or
                      for reiteration of ideas. You can create web applications
                      or SaaS products using Bildr.
                      <br />
                      <br />
                      Pros
                      <br />- Precoded building blocks
                      <br />- Functional APIs to retrieve data
                      <br />- Real-time collaboration with integrated apps
                      <br />
                      <br />
                      Cons
                      <br />- May require some coding knowledge
                      <br />- Best only for simple Web3 decentralised
                      applications
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                      5. Thunkable
                    </div>
                    <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                      Thunkable is a drag-and-drop no-code application builder
                      that’s designed specifically for building native mobile
                      applications. It offers a wide variety of options for
                      customizing the look and feel of your iOS or Android app.
                      That’s because it provides a blank canvas to build the
                      applications from blocks, modules, and integrations with
                      other platforms. You can put together your user interface
                      (UI), and advanced logic modules, and handle the
                      functionality of your app.
                      <br />
                      <br />
                      Pros
                      <br />- Assistance with publishing your app on App Store
                      and Google Play
                      <br />- Perfect for native apps building
                      <br />- Advanced logic workflow builder
                      <br />
                      <br />
                      Cons
                      <br />- Advanced features building takes technical skills
                      <br />- Hard to detect bugs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="w-full h-[584px] max-lg:h-full px-[307.30px] pt-20 pb-[70px] bg-white justify-center items-center inline-flex">
        <div class="self-stretch justify-center items-center gap-[75px] inline-flex max-lg:flex-wrap">
          <div class="w-[359px] h-[434px] pt-[0.50px] bg-zinc-100 flex-col justify-center items-center inline-flex">
            <img
              class="w-[360px] h-[433.50px] max-lg:w-full"
              src={img4}
              alt=""
            />
          </div>
          <div class="flex-col justify-start items-start gap-12 inline-flex">
            <div class="w-[391.40px] text-black text-4xl font-normal font-['Graphik'] leading-[43.20px]">
              Explore our Low code No code services
            </div>
            <Link
              to="/service"
              onClick={scrollToTop}
              class="px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
            >
              <div class="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                Learn more
              </div>
            </Link>
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Nocode;
