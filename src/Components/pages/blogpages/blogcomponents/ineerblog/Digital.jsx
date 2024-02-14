import React from "react";
import img from "../../blogassets/Blog Inner page Banner10.jpg";
import arrow from "../../blogassets/arrow.svg";
import { Link } from "react-router-dom";
import img1 from "../../blogassets/Blogs Animation Thumbnail10.jpg";
import img2 from "../../blogassets/Blogs Animation Thumbnail09.jpg";
import img3 from "../../blogassets/Blogs Animation Thumbnail02.jpg";
import Explore from '../../../production/Explore'

const Digital = () => {
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
            Digital Marketing
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
                <div className="w-[68px] h-[65px] left-0 top-[-1px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img1} alt="" />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px]   text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee>
                      {" "}
                      <p className="w-[214px]"> Digital Marketing</p>
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
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                An interesting study published by Think With Google described
                how Domino's and Diageo tackled ‘unintended bias’ in 2022. A
                significant observation that the study made was about how brands
                miss out on potential audiences on YouTube, and other channels
                by over-excluding certain keywords.
                <br />
                <br />
                For instance, some brands stay away from words that the LGBTQ
                community relates to in order to avoid hate speech online.
                However, since YouTube has been actively taking steps against
                any kind of specific audience, such exclusions block such brands
                from reaching out to many potential buyers.
                <br />
                <br />
                The study then elaborated on how Domino’s and Diageo partnered
                with YouTube to actively fight against such bias, and engage as
                diverse an audience as possible.
                <br />
                <br />
                While YouTube is notorious for constantly changing algorithms,
                digital marketing in general has also continually evolved.
                Businesses often find themselves on edge, catching up to what’s
                changed and what remains in online marketing.
                <br />
                <br />
                We have compiled a list of digital marketing trends that may
                assist you in staying on top of your marketing game.
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Customer Experience Over Keywords
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
                  <br />
                  As a business, focus on optimizing the experience of your
                  online visitors. Some things you can do -
                  <br />
                  - easily-navigable website/mobile application
                  <br />
                  - ease of inquiries, order placement
                  <br />
                  - personalizing every touch point of purchase journey
                  <br />
                  - informing customers through content bites
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Short Videos
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Videos are not just about vertical or horizontal formats
                  anymore. They are about getting more information in less time.
                  Instagram Reels is just one of the many channels where your
                  relevant customers are. Reels say a lot about your customers.
                  Let’s see -
                  <br />
                  <br />
                  - your customers want information or entertainment, but they
                  don’t have a lot of time
                  <br />
                  - they are most likely to watch your content while waiting for
                  something or someone, or while traveling
                  <br />
                  - they are more likely to watch your content on a mobile
                  device
                  <br />
                  Make 2023 the year you start producing short-form video
                  content. Begin with personalized content such as your team
                  activities, your inner workings, and your business routine,
                  and eventually switch to your value propositions.
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  The Metaverse
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Since some of the biggest brands, such as Starbucks and Nike,
                  have jumped on the bandwagon of the metaverse, this may become
                  a huge trend in 2023. Metaverse is like a parallel virtual
                  world where people and brands interact with each other, albeit
                  more immersively. It is slowly becoming a place where a lot of
                  customers want to be. However, most businesses do not have a
                  practical use case. Just as it happened with augmented reality
                  and virtual reality applications back in 2018, the metaverse
                  may or may not find relevance in all business sectors.
                  <br />
                  <br />
                  A wise step would be to study the metaverse as a user in 2023,
                  interact with other users, and find out relevant areas for
                  your business. It is okay if you don’t use the metaverse at
                  all for digital marketing in 2023. However, this should be the
                  year of collecting as many use cases for your business as
                  possible.
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Information As Bites
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  If short-videos are any indication, the attention span of your
                  customers is getting worse by the day. Users today consume
                  information like snacks - it needs to provide instant
                  gratification and satisfy their hunger for knowledge or
                  information. While long-form content will never lose its
                  significance, you must experiment with bite-sized and easily
                  digestible content in 2023, especially to lure your online
                  customers.
                  <br />
                  <br />
                  As a leading UI/UX Design Agency, Codelinear delivers
                  well-crafted design services that can bring your ideas to life
                  and make your web/app stand out. If you are looking for
                  empathetic UX/UI design, do call us.
                  <br />
                  <br />
                  Some things to consider -
                  <br />
                  - repurpose existing content into bite-sized information
                  <br />
                  - simplify difficult concepts of your business/product or
                  service
                  <br />
                  - leverage social media channels to relay this information
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Influencers Aren’t Going Anywhere
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  This trend of businesses leveraging expert individuals to
                  create brand advocacy has been going on for nearly five
                  years.2023 is not going to be an exception. In fact,
                  influencer marketing will continue to trend widely, with some
                  of the world’s biggest brands, and movie makers using
                  influencers to sell products, and entertainment.
                  <br />
                  <br />
                  Here’s what you can do -
                  <br />
                  <br />
                  - research opportunities to reach out to your audience first
                  <br />
                  - short-list influencers who share the same values
                  <br />
                  - start with a barter relationship with influencers instead of
                  spending money upfront
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Linked-In Is A Thought Influencer In B2B
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify  ">
                  There’s no better advocacy for B2B companies than to reach out
                  and influence relevant audiences on Linked-in. And 2023 will
                  be the same. There’s a certain credibility attached to the
                  thought leadership opportunities that Linked-in offers that
                  B2B audiences are looking for. In fact, a study has stated
                  that Linked-in may capture nearly 25% of US B2B advertising
                  spending by 2024. Even as the platform evolves, businesses
                  should leverage the time to build relevant followers who will
                  eventually become their brand advocates.
                  <br />
                  <br />
                  Some things to do in 2023 -
                  <br />
                  - use Linkedin’s new features for thought leadership
                  <br />
                  - create credible Linked-in profiles for your founders.
                  <br />
                  - post useful content about your industry
                  <br />
                  - build relationships with competitors
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Not Every Trend Is For Your Business
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  Just like we mentioned about metaverse, not every digital
                  marketing trend is for you. While it is crucial to know
                  beforehand what’s going on in the market, it is all the more
                  significant to contextualize trends for your business. Let
                  your customers be your guiding light about which trends to
                  follow, and you will eventually find the right mix.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Keep Focusing On Your Foundation
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify ">
                  A trend that would never go out of fashion is to focus on your
                  foundations, such as -
                  <br />
                  <br />
                  - a good and easy-to-navigate website
                  <br />
                  - a scalable mobile application
                  <br />
                  - decent presence on social media
                  <br />
                  - a clear brand voices - clarity of communication
                  <br />
                  - consistency in messaging
                  <br />
                  - SEO best practises
                  <br />
                  <br />
                  Codelinear believes that it is the foundations that will
                  propel your company forward.We have helped many businesses get
                  the right brand voice through a robust and easily navigable
                  website and/or mobile application, design voice, and digital
                  marketing. If you are looking for something that lasts, we
                  should talk.
                  <br />
                  Wanna Know A Secret?
                  <br />
                  Let's Talk
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

export default Digital;
