import React from "react";
import img from "../../blogassets/unsplash_2cFZ_FB08UM.png";
import arrow from "../../blogassets/arrow.svg";
import { Link } from "react-router-dom";

import img2 from "../../blogassets/Frame 61.png";
import img3 from "../../blogassets/Frame 60.png";

const Mvp = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="innerhero">
        <div className="w-full h-full pl-20 pr-[407px] pt-[233.78px] pb-[65.22px] bg-white justify-start items-center inline-flex max-lg:p-10">
          <div className="w-[953px] text-black text-[66px] font-normal font-['Graphik'] leading-[71.28px] max-lg:w-full max-sm:text-[46px]">
            An MVP Is As Good As It Sells
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
        <div className="w-full h-full relative bg-white max-xl:h-full">
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
                    An MVP
                  </div>
                </div>
              </div>
              <Link
                onClick={scrollToTop}
                to="/branding"
                className="w-[232px] h-[65px] left-[81px] top-[393px] absolute border border-black border-opacity-10"
              >
                <div className="w-[68px] left-0 top-[-1.39px] absolute bg-neutral-200 justify-center items-center inline-flex">
                  <img className="w-[68.11px] h-[69.01px]" src={img2} alt="" />
                </div>

                <div className="left-[77.31px] top-[11.09px] absolute justify-center items-center inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] leading-normal">
                   Disruptive Branding
                  </div>
                </div>
              </Link>

              <Link
                onClick={scrollToTop}
                to="/story"
                className="w-[232px] h-[65px] left-[81px] top-[471px] absolute border border-black border-opacity-10"
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
                    Storytelling In Marketing
                  </div>
                </div>
              </Link>
            </div>

            <div className="left-[405px] h-[full] mt-[81.39px]  flex-col justify-start items-start gap-14 inline-flex max-md:px-10">
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                Only a few months ago, would you have ever imagined that Twitter
                would be bought by SpaceX and Tesla founder Elon Musk? But the
                real story is not written by Musk but was written by a group of
                people back in 2006. Former Google employees Evan Williams and
                Biz Stones alongwith mastermind Noah Williams began a podcasting
                platform called Odeo, but then Apple launched its podcasting
                platform (through iTunes) before they did.
                <br />
                <br />
                So along with another team member Jack Dorsey, the three friends
                decided to launch Twitter - an SMS service platform. But the
                investors did not like their MVP, and the team had to test the
                prototype among a small group of users to finally launch it at
                the right time. If Musk's recent poll (Should he continue as the
                Twitter CEO?) is any indication, Twitter has continued the
                culture of testing a new idea, or a feature among the users
                first before the launch.
                <br />
                <br />
                What's the morale of the story? Testing a product is important.
                But should that product be complete or barely functional? Here's
                where your MVP (minimum viable product) becomes crucial. That is
                easier said than done. Building an MVP that attracts investors
                enough to fund it is indeed a magic potion that is not complete
                without the right spells.
                <br />
                There are three important principles of MVP building -
                <br />
                1. Viability Testing
                <br />
                2. Quick Development
                <br />
                3. Cost Efficienc
                <br />
                <br />
                The bigger idea behind building an MVP is to test your
                assumptions. That takes us to the next important segment - how
                to build an MVP that raises money?
                <br />
                <br />
                Once you have identified the problem, done your research, you
                need to get into the business of building an MVP.
                <br />
                <br />
                Here are some important considerations while building an MVP
                that makes money -
                <br />
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  1. Create user profiles
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  While building an MVP, it is crucial to create user profiles
                  based on which your product may be tested among the actual set
                  of users.
                  <br />
                  <br />
                  Here are some things you may need to create these profiles -
                  <br />
                  - Who is my user? Male, female, binary?
                  <br />
                  - What are his/her/their likes and dislikes?
                  <br />
                  - What do my target users do professionally?
                  <br />
                  - What do they do in their free time?
                  <br />
                  - Their income, their spending ability
                  <br />
                  - Their culture, language, age group
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  2. Make a list of key features
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  Based on the user’s persona, market research, and the problem
                  to be solved, you will now have enough data to list key
                  features of your product, service, or mobile application.
                  Focus on the most essential features of your product. Think of
                  it as a segregation of necessities, comforts, and luxuries.
                  The most important features are those that will solve the most
                  pressing part of the problem.
                  <br />
                  <br />
                  For instance, for a taxi aggregator app, the most important
                  features would be locating destinations, calling service, and
                  listing registered drivers to drive taxis. The least important
                  features would be add-ons such as a parcel delivery service or
                  a profile photo of the users, etc.
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  3. Create your MVP
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  Instead of hiring expensive talent, teams, or resources, build
                  a strong framework for your product or service first. And then
                  train your existing team to build upon that framework. Once
                  your team knows your vision, the target audience, and the
                  solution, they will follow the process of MVP development in a
                  more organized way. Create an agile development process based
                  on constant user feedback, and learn as you go. Pay a lot of
                  attention to the ease of use - be it an offline service or
                  product, an app-based service or product - user experience and
                  interface are the most crucial factors.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  4. Create a marketing strategy
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                    Identifying and building an important solution is one thing,
                    marketing the same is quite another.
                    <br />
                    For instance, the whole concept of carpooling has existed in
                    the United States for a long time. But when Lyft was
                    launched, it did not sell its service based on things like
                    cost-saving, or time-saving features but on the concept of
                    ‘ride sharing’. Even though the company was solving those
                    problems, it marketed itself in a way to make carpooling an
                    exciting experience to lure customers.
                    <br />
                    <br />
                    Here are some things you can do -
                    <br />
                    - list features with the most humane appeal
                    <br />
                    - create a content strategy around those features
                    <br />
                    - identify the best platforms to create a buzz around the
                    product
                    <br />
                    - identify product advocates who will testify
                    <br />
                    - inquire with friends/employees about what they like best
                    about the product.
                    <br />
                    - create clear messaging around the above feedback
                    <br />
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  5. Launch the product
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                    First, focus on delighting your customers instead of sales.
                    It is important that a positive buzz be created around your
                    product or service. Create a feedback loop to help you get
                    consistent feedback on the product.Encourage your early
                    users to rate your service or product or provide feedback
                    for improvement. Actively seek suggestions, and analyze the
                    feedback. The whole point of building an MVP is to learn and
                    improve as you go. This initial feedback will help you
                    course-correct sooner, so your MVP will be ready to show to
                    the investors.
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                  Final Thoughts
                </div>

                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  Remember that a product that’s well thought-out, has a solid
                  framework in terms of business and usage, and solves a
                  real-world problem will always find buyers.
                  <br />
                  If you need help building a bestselling MVP, talk to us.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mvp;
