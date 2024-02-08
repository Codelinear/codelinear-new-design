import React from "react";
import img from "../../blogassets/Frame 4.svg";
import arrow from "../../blogassets/arrow.svg";
import { Link } from "react-router-dom";

import img2 from "../../blogassets/Blogs Animation Thumbnail10.jpg";
import img3 from "../../blogassets/Blogs Animation Thumbnail14.jpg";

const Native = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="innerhero">
        <div className="w-full h-full pl-20 pr-[407px] pt-[233.78px] pb-[65.22px] bg-white justify-start items-center inline-flex max-lg:p-10 max-sm:p-0 max-sm:px-[20px] max-sm:mt-[90px]">
          <div className="w-[953px] text-black text-[66px] font-normal font-['Graphik'] leading-[120%] max-lg:w-full max-sm:text-[46px]">
            React Native V/S Flutter- What’s Better For You?
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
                  <img
                    className="w-[68px] h-[65px] object-cover"
                    src={img}
                    alt=""
                  />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px]   text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee>
                      {" "}
                      <p className="w-[214px]">React Native vs Flutter</p>
                    </marquee>
                  </div>
                </div>
              </div>
              <Link
                onClick={scrollToTop}
                to="/digital-marketing-trends-in-2023"
                className="w-[232px] h-[65px] left-[81px] top-[393px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] h-[65px] left-0 top-[-1px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img2} alt="" />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px]   text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee>
                      {" "}
                      <p className="w-[214px]"> Digital Marketing</p>
                    </marquee>
                  </div>
                </div>
              </Link>

              <Link
                onClick={scrollToTop}
                to="/gestalt-psychology"
                className="w-[232px] h-[65px] left-[81px] top-[471px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] h-[65px] left-0 top-[-1px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img3} alt="" />
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
            </div>
            <div className="left-[405px] h-[full] mt-[81.39px]  flex-col justify-start items-start gap-14 inline-flex max-md:px-10 max-sm:px-[20px] max-sm:mt-[80px]">
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                Only a decade ago, it was hard to imagine life without mobile
                apps. They now make our lives easier, with some even assisting
                us with our daily chores. Statista reports that mobile apps are
                expected to generate $935 billion in revenue globally in 2023.
                <br />
                <br />
                Businesses today need mobile apps faster, and they want apps
                that perform equally well across all the platforms. But do all
                businesses have the time and resources for the same?
                <br />
                <br />
                Enter React Native and Flutter - two of the most popular
                cross-platform mobile app development platforms.
                <br />
                <br />
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  How Did React And Flutter Enter The Mobile Universe?
                </div>

                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  Facebook launched its open-source framework, called React
                  Native back in 2015. It was the company’s attempt at equipping
                  developers with a JavaScript-based framework for the
                  development of cross-platform apps. React eliminates the need
                  for compiling other technology stacks for mobile app
                  development. Companies such as Uber Eats, Instagram, and Skype
                  have since used React Native for their mobile app development
                  needs.
                  <br />
                  <br />
                  In 2017, Google launched an open-source User Interface (UI)
                  framework that was targeted at aiding developers to design
                  cross-platform apps to run on mobile, Windows, macOS, and
                  Linux. Flutter’s framework is built upon Dart.
                  <br />
                  <br />
                  Soon after, many big companies such as Philips Hue, Hamilton,
                  Alibaba, etc began developing mobile apps using Flutter. Ever
                  since, Google has frequently provided updates for Flutter,
                  improving its performance with each update.
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Why Are React And Flutter So Popular?
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  While native apps work better on mobile phones, developing
                  native apps for each platform is quite a waste of time. As a
                  result, businesses are always looking for technologies that
                  would help them build cross-platform apps that would run as
                  well, if not better, than native apps. Both React and Flutter
                  offer open-source frameworks that solve this problem. Both the
                  frameworks offer many tools and features, such as code
                  reusability and Hot Reload with its ability to make changes on
                  the fly etc - a freedom that makes mobile app development
                  faster.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  React Native
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  Based on React.JS, React Native uses JavaScript to create
                  mobile applications for iOS and Android. It also allows
                  developers to develop apps using one codebase. React offers
                  fast mobile application development and allows access to some
                  third-party UI libraries with ready-to-use components. React
                  also enables the delivery of new functionalities to supported
                  platforms immediately.
                  <br />
                  <br />
                  Pros of React Native <br />
                  - One codebase to build apps for two or more platforms
                  <br />
                  - Uses JavaScript that makes mobile app development smoother
                  <br />
                  - Has a faster learning curve for developers
                  <br />
                  - It saves upto 50% time on the testing
                  <br />
                  - Growing and active community of developers
                  <br />
                  <br />
                  Cons of React Native
                  <br />
                  - Has limited components
                  <br />
                  - The user interface is easily broken
                  <br />
                  - Apps are larger than native ones
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Flutter
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  Flutter helps create cross-platform applications using a
                  single codebase. So you don’t have to develop separate apps
                  for mobile, web, and desktop. Being an open-source platform,
                  any business owner can download it and get started. Apps built
                  using Flutter are intuitive and easier to navigate.
                  <br />
                  <br />
                  A wise step would be to study the metaverse as a user in 2023,
                  interact with other users, and find out relevant areas for
                  your business. It is okay if you don’t use the metaverse at
                  all for digital marketing in 2023. However, this should be the
                  year of collecting as many use cases for your business as
                  possible.
                  <br />
                  <br />
                  Pros of Flutter - Offers a rich library of widgets
                  <br />
                  - Well-structured documentation
                  <br />
                  - Apps are fast and easy to navigate, and they require less
                  testing
                  <br />
                  - Flutter helps to create the same UI for older devices
                  <br />
                  - Flutter 2 helps in web app development
                  <br />
                  - Has rapidly growing community
                  <br />
                  - Offers Hot Reload feature
                  <br />
                  <br />
                  Cons of Flutter
                  <br />
                  - Apps built on it are larger than native apps
                  <br />
                  - Limited set of tools and libraries
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  How To Choose Between The Two?
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Performance : React uses JavaScript while Flutter uses the
                  Dart programming language, which has a higher compilation rate
                  than JS. As a result, Flutter’s apps deliver high performance
                  by default. So if performance is one of your chief goals, you
                  should choose Flutter.
                  <br />
                  <br />
                  Learning curve : According to Statista, only 6.54% of
                  developers use Dart that makes it harder to find Dart
                  developers or for developers to learn the language. React has
                  a shorter learning curve.
                  <br />
                  <br />
                  Testing : For testing a React Native app, you will need a
                  third-party testing framework such as Detox. If that’s a
                  challenge, then it is better to choose Flutter because it is
                  enriched with integrated testing features.
                  <br />
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                  Final Thoughts
                </div>

                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  Statista states that 38% of developers used React Native in
                  2021, whereas 42% used Flutter for development. However, you
                  should make a decision based on your overall goals in terms of
                  your cross-platform mobile app development needs. If you need
                  help or advice on what’s best for you, do give us a call.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Native;
