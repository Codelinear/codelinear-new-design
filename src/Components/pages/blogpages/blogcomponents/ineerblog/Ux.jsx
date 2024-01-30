import React from "react";
import img from "../../blogassets/Frame 57.png";
import arrow from "../../blogassets/arrow.svg";
import { Link } from "react-router-dom";

import img2 from "../../blogassets/Frame 43.png";
import img3 from "../../blogassets/Frame 60.png";
// import img4 from "../../../servicepage/servicecompo/allservices/assets/diego-ph-fIq0tET6llw-unsplash 1.png";


const Ux = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="innerhero">
      <div className="w-full h-full pl-20 pr-[407px] pt-[233.78px] pb-[65.22px] bg-white justify-start items-center inline-flex max-lg:p-10 max-sm:p-0 max-sm:ml-[20px] max-sm:mt-[90px]">
          <div className="w-[953px] text-black text-[66px] font-normal font-['Graphik'] leading-[120%] max-lg:w-full max-sm:text-[46px]">
             How UX Design Can Add Value To The Growth Of SMEs?
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
                  UX
                  </div>
                </div>
              </div>
              <Link
                onClick={scrollToTop}
                to="/empathy"
                className="w-[232px] h-[65px] left-[81px] top-[393px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] left-0 top-[-1.39px] absolute bg-neutral-200 justify-center items-center inline-flex">
                  <img className="w-[68.11px] h-[69.01px]" src={img2} alt="" />
                </div>

                <div className="left-[77.31px] top-[11.09px] absolute justify-center items-center inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] leading-normal">
                  <marquee>  Empathy In UX</marquee>
                  </div>
                </div>
              </Link>
              <Link
                onClick={scrollToTop}
                to="/story"
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
                  <marquee> Storytelling In Marketing</marquee>                   
                  </div>
                </div>
              </Link>
            </div>
            <div className="left-[405px] h-[full] mt-[81.39px]  flex-col justify-start items-start gap-14 inline-flex max-md:px-10 max-sm:px-[20px] max-sm:mt-[80px]">
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                Once upon a 2008, when a 28-year-old Londoner named Richard
                Pierson quit his job, and felt burned out even as a freelancer,
                he turned to a Buddhist monk named Andy Puddicombe. While
                Puddicombe taught Pierson a 2,500-year-old meditation technique,
                the latter had a business idea. Both turned meditation into a
                successful local business in 2010.
                <br />
                <br />
                However, it was only when they converted this business into a
                meditation and wellness app that things really began to get
                global. Today, the app that the world knows as Headspace, has 11
                million downloads, and around 400,000 paying subscribers.
                <br />
                <br />
                Question - Did switching from offline to online do the trick for
                the two local businessmen? Not at all.
                <br />
                <br />
                Headspace has a smooth user experience that instantly instills
                confidence. Mental health and wellness are not things that
                people easily trust. Headspace constantly gamifies the steps of
                meditation, offers tips and tricks, and helps users follow
                through on their goals. As a result, most users find themselves
                practicing meditation every single day, inspiring them to become
                paid subscribers for deeper transformation.
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  What Is UX Design?
                </div>

                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  This trend became a reality in 2022 when businesses saw
                  Google’s AI search becoming more and more humane. As a result,
                  content that really helped users or searchers began trending
                  instead of keyword-heavy content. This will mature in 2023 as
                  search engines evolve, and become more customer/user-oriented.
                  It may be time you stop pleasing Google, and start pleasing
                  your customers online.
                  <br />
                  User Experience Design, or UX Design, is a term that is used
                  to define, and design how users will navigate an application,
                  product, or service. There was a time when UX design only
                  meant the technical experience of users on a mobile
                  application or a website. Today, UX design is carefully
                  crafted when designing even physical products, or service
                  experiences.We will keep our scope of discussion here for
                  mobile, and web applications. UX involves bringing together
                  the needs of the customers, and matching them with the
                  technical aspects of any application.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-[28px] font-['Graphik'] leading-[34.16px]">
                  How Does UX Design Impact The Growth Of SMEs?
                </div>

                <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                  1. UX design increases conversions
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  For SMEs, the initial buzz around their product, or service
                  helps them scale faster while also bringing them investment.
                  Today, most customers will visit a business’ website or a
                  service’s application to gain initial confidence. A good UX
                  design will make them comfortable, and they will be inclined
                  to buy that product or service. A significant challenge faced
                  by Headspace UX designers initially was in onboarding more
                  clients. They used relatable graphics that showed users doing
                  meditation in their own zones such as workplace, kitchen,
                  hobbies etc - a factor that significantly improved sales.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    2. UX design impacts brand loyalty
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                    User experience speaks to the emotions of the users. When a
                    business pays attention to the UX of their digital
                    applications, users feel connected. This impacts their
                    (users) subconscious minds and keeps them for a longer time.
                    Retained customers become an annuity to a small business,
                    and become its brand ambassadors.
                  </div>
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    3. Saves run-up development costs
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                    When SMEs focus on UX in the beginning of their product or
                    service launch, they can practically save redesign and
                    re-development costs considerably. Remember, it will cost
                    you less to create a great user experience from scratch than
                    it will to fix a poor UX. <br />
                    <br />
                    <br />
                    "For every dollar spent to resolve a problem during product
                    design. 10 dollars will be spent on the same problem during
                    development. and multiply it by 100 dollars or more if the
                    problem had to be solved after the product’s release."
                    Robert Pressmen("Software Engineering: A Practitioner’s
                    Approach")
                  </div>
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  4. UX design lowers support cost
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  The reason why good website or mobile application development
                  companies stress building a great UX design is because it
                  ultimately saves support costs in the long run. When users are
                  easily able to find what they are looking for, without getting
                  distracted or overwhelmed by the design of the web or mobile
                  application, they understand your product or service more
                  quickly. This decreases the number of support tickets or calls
                  that your executives will need to handle to answer users’
                  questions.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  5. Leads to right messaging, and Google ranking
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Very few SMEs realize the importance of their site or mobile
                  app's Google ranking, and the kind of messaging that their app
                  has. A smooth UX design helps put the most important messages
                  or goals of your product in the right place. This also paves
                  the way for best SEO practices that your website or mobile app
                  may need, resulting in a better reach for your business on
                  Google.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    6. Better understanding of your users
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                    Headspace designers consciously put in graphics, details,
                    interface, and content language during UX design that
                    normalized meditation for people. For instance, the team
                    experimented with making the sign-up process easier; instead
                    of a demo video, they simplified the usage of the app by
                    using Gifs showcasing steps to use the app; and even added
                    ‘Choose your own adventure’ option allowing users to choose
                    how they wished to sign up. These small experiments in UX
                    design at beta stage led to better understanding of users.
                    Since the discipline of UX design begins with creating user
                    profiles, and adding the right touch points for user
                    purchases, this sends so much user data onto your dashboard
                    to extract valuable insights for SMEs to benefit from.
                  </div>
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    You Need A Wise UX Design Strategy, And UX Design Partners
                  </div>

                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                    UX design does not happen by accident or by instinct. It is
                    a practice that needs thoughtfulness, a smart strategy, and
                    trusted design partners. If you are trying to figure out how
                    you can make your digital business experience memorable for
                    your customers, do talk to us.
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
              Explore our UX Design services
            </div>
            <Link to="/service" onClick={scrollToTop} class="px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400">
              <div class="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                Learn more
              </div>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Ux;
