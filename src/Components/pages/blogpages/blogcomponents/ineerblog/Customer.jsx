import React from "react";
import img from "../../blogassets/Blog Inner page Banner04.jpg";
import arrow from "../../blogassets/arrow.svg";
import { Link } from "react-router-dom";
import img1 from "../../blogassets/Blogs Animation Thumbnail04.jpg";
import img2 from "../../blogassets/Blogs Animation Thumbnail05.jpg";
import img3 from "../../blogassets//Blogs Animation Thumbnail08.jpg";
import Explore from '../../../production/Explore'

const Customer = () => {
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
            Listening To Your Customer
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
                      <p className="w-[204px]">Listening To Your Customer</p>
                    </marquee>
                  </div>
                </div>
              </div>
              <Link
                onClick={scrollToTop}
                to="/bing-vs-google"
                className="w-[232px] h-[65px] left-[81px] top-[393px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img2} alt="" />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px]   text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee>
                      {" "}
                      <p className="w-[204px]">Bing or Google?</p>
                    </marquee>
                  </div>
                </div>
              </Link>
              <Link
                onClick={scrollToTop}
                to="/discovery-workshop"
                className="w-[232px] h-[65px] left-[81px] top-[471px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img3} alt="" />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px]   text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee>
                      {" "}
                      <p className="w-[204px]">Discovery Workshop</p>
                    </marquee>
                  </div>
                </div>
              </Link>
            </div>

            <div className="left-[405px] h-[full] mt-[81.39px]  flex-col justify-start items-start gap-14 inline-flex max-md:px-10 max-sm:px-[20px] max-sm:mt-[80px]">
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                A few years ago, a Fortune 500 company called American Family
                Insurance (AFI) learned that more than half of Americans did not
                have the cash to cover a $400 emergency expense like a hospital
                trip, or a window repair. At first, the company thought
                Americans were in need of budgeting tools. However, when it
                actually sought customer feedback, they learned that most people
                were in need of keeping their savings aside to protect against
                the future.
                <br />
                <br />
                In one case, AFI reps and their design agency, IDEO sat with a
                working single mother of four in Tennessee and listened to her
                challenges about constrained budgets. To save money on
                childcare, and housekeeping, she had put her 11-year-old in
                charge of her younger siblings, partitioned snacks, and made
                chore charts for each child. AFI realized that she did not need
                another brand new financial management app or tool. She needed
                extra income cushions.
                <br />
                <br />
                After gathering similar feedback from several places across the
                United States, AFI launched Moonrise - a digital platform that
                allowed workers to sign up for shifts with partner organizations
                through a simple text message interface. Employers who signed up
                at Moonrise could list open shifts on the platform, and were
                liable to pay workers as soon as the shifts were done. Voila!
                <br />
                <br />
                Listening to customers led AFI to launch a whole new business.
                Within a few months of its launch in 2018, Moonrise had over
                7,000 people applying for shifts, more than 7,000 shifts were
                fulfilled, and over $500,000 was paid to workers.
                <br />
                <br />
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  When Should You Listen To Your Customers?
                </div>
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  When you want to establish expectations
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  A lot of businesses will wait until the product or service
                  launch, and then get the first feedback from their customers.
                  In order for your product or service to receive open arms from
                  the customers, the feedback process must begin during the
                  product design, and development process itself. Product
                  testing is a vital step towards ensuring that you are
                  launching your business to meet an actual need that exists in
                  the market.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  When you want to improve your product
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full   max-sm:text-justify">
                  Ongoing customer feedback is an integral part of business
                  growth. Listening to customers is a great way to get
                  real-time, actual feedback about how your product or service
                  is doing. This is why companies such as AirBnB, Uber, or
                  GrubHub, or e-commerce sites such as Amazon, ensure they have
                  customer feedback instantly from the time of check-out until
                  the product is delivered.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  When they are complaining
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  This should be a no-brainer, and yet many big and small
                  businesses make the mistake of ignoring begrudged customers.
                  Of course, not every complaint that you receive may be
                  genuine, but many people wish to benefit from your return,
                  exchange/service policies. However, it is always advisable to
                  look into a complaint closely to see if there’s anything you
                  are missing out on. Even when you receive too many false
                  complaints, it is an indicator that your system, or CMS, needs
                  improvement in filtering such complaints.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  When you are not growing
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  In every business’ life, there comes a time when it hits a
                  wall. When sales are steady, but not growing exponentially.
                  This is the time to reach out to your customers, and
                  re-establish their expectations. A great example is how car
                  sports brand Nascar hit a wall back in 2018. When Steve Phelps
                  came in as CEO, he helped create the Official Nascar Fan
                  Council, which is a customer intelligence platform capturing
                  fan insights from more than 12,000 viewers regularly. In
                  addition, Nascar also partnered with Hewlett-Packard for a
                  social media command center to get customer feedback in real
                  time.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  When you want to reinvent your business
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Until 2014, Swarovski had been known around the world (apart
                  from crystals) for producing iconic designs in their range of
                  chandeliers. With the rise of interface technology, the
                  company felt an acute need to catch up with the changing
                  tastes of its customers.
                  <br />
                  <br />
                  With the help of a noted design company, Swarovski acted upon
                  customer feedback. The company launched Infinite Aura, that
                  infused the Internet of Things (IoT) into their lighting
                  offerings with a mobile app that allowed customers to modify
                  light settings based on mood, time of day, occasion, etc.
                  Listening to customers often helps your business reinvent, and
                  diversify.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  When you should not listen to your customers
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  In 1909, Harry Gordon Selfridge said, "The customer is not
                  always right." Listening to customers is great for growth,
                  improvement, and reinvention, but it is often not advisable
                  for innovation since most people are resistant to change.
                  <br />
                  <br />
                  There may also be circumstances where the customers may not
                  know what they want, for example, in far-off, remote areas
                  where technology or modern means have not reached, you may
                  come across a business idea that is hard to test among people.
                  In short, cultivating a habit of listening well while
                  filtering out information that you don’t need is the way to
                  go.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  The Best Ways To Listen To Your Customers More Fruitfully -
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  #1: Go to where they are
                  <br />
                  Listen to your customers on their preferred channels, such as
                  social media, DMs, or emails.
                  <br />
                  # 2 Find out the ‘how’
                  <br />
                  Don’t just listen to your customers, find out how a specific
                  problem is affecting their lives.
                  <br />
                  # 3 Keep an open mind
                  <br />
                  You may have had lots of similar complaints or feedback
                  earlier, yet it is vital to keep an open mind each time you
                  are listening to a new set of customers.
                  <br />
                  # 4 Hire an agency
                  <br />
                  If you think your team is too busy, hire a product development
                  agency that would carry out surveys, research, and interviews
                  on your behalf.
                  <br />
                  Wanna Know A S
                  <br />
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                  Final Thoughts
                </div>

                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  The use of AI in search engines is not new. The more data is
                  processed each day, these engines evolve continually producing
                  more refined results in the process. One big way these engines
                  use AI is in ranking web pages, videos, or any other content
                  on the web. And this is why businesses need to focus on their
                  SEO strategy to stay on top of the search results. If you need
                  assistance in SEO, do give us a call.
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

export default Customer;
