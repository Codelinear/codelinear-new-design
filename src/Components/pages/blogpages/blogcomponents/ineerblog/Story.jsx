import React from "react";
import img from "../../blogassets/Blog Inner page Banner02.jpg";
import arrow from "../../blogassets/arrow.svg";
import { Link } from "react-router-dom";
import img1 from "../../blogassets/Blogs Animation Thumbnail02.jpg";
import img2 from "../../blogassets/Blogs Animation Thumbnail09.jpg";
import img3 from '../../blogassets/Blogs Animation Thumbnail04.jpg'
import Explore from '../../../production/Explore'

const Story = () => {
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
            Are You Telling Stories? A Vital X Factor In Your Marketing Efforts
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
                      <p className="w-[214px]">Story telling in Marketing</p>
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
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                A relatively new player pulled off a potentially risky
                storytelling marketing campaign in the late 2000s. Today, the
                campaign is a case study for marketing enthusiasts across all
                sectors because of its ‘X’ factor.
                <br />
                <br />
                In 2009, UK-based BGL Group’s insurance price comparison website
                - Compare The Market - began telling humorous stories from the
                perspective of an animated anthropomorphic Russian species
                meerkat. The meerkat was named Aleksandr Orlov as the
                sophisticated founder of the website comparethemeerkat.com. Many
                advertisements appeared on YouTube, television, and other video
                platforms about Orlov’s frustration over the confusion caused to
                his website by another website called comparethemarket.com.
                <br />
                <br />
                Each of those stories told in the adverts was funny, and managed
                to send across the message that "everybody was logging on to
                comparethemarket.com, but his website was comparethemeerkat.com
                - a dating, and socializing website for meerkats." Each story
                ended with Orlov explaining the difference, and ending his
                dialogue with "simples”.
                <br />
                <br />
                The company managed to generate a strong buzz about its brand
                through humorous storytelling, while creating the impression
                that they were already famous. As a result, the website became
                the fourth most visited insurance website in the UK in 2009,
                while their sales doubled at the end of the campaign.
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  How Does Storytelling In Marketing Work?
                </div>
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  1. Evokes the right feelings
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Customers don’t buy products or services, they buy the feeling
                  that the said product or service evokes within them. Harvard
                  Business School professor Gerald Zaltman, in his book, quotes
                  a study that claims 75% of purchase decisions are
                  subconscious, and therefore, customers are more likely to
                  convert through emotion-driven campaigns. The emotions that
                  the above company evoked were FOMO (fear of missing out), and
                  many people logged on to their website out of curiosity.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[34.16px]">
                  2. Shows the ‘how’
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  Of course, every marketing rep knows the importance of 'how'.
                  But when the ‘how’ is presented in the form of a story, it has
                  better retention, and can provoke action. In the case of
                  content marketing, it takes the customer closer to a purchase
                  decision.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    3. Does not feel like marketing
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                    You are now dealing with possibly the most aware set of
                    customers with dwindling attention spans. They are discrete
                    about the time and energy that they spend, and so
                    in-your-face marketing naturally repels them. The one factor
                    that still has the power to hold their attention is a good
                    brand story that does not feel like marketing.
                  </div>
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  How To Tell Great Brand Stories That Work?
                </div>
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  1. Reward the customer
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  As we discussed above, the ‘how’ factor is everything in
                  telling a brand story. But that ‘how’ needs to show what the
                  customer will receive. A principle that all great storytellers
                  follow is this - reward the reader/viewer/audience.
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  Your target customers should feel rewarded at the end of the
                  story in the form of -
                  <br />
                  - a satisfactory solution, or
                  <br />
                  - the value the product or service brings, or
                  <br />
                  - a discount code, or
                  <br />
                  - a loyalty program, or
                  <br />
                  - an exclusive access
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[34.16px]">
                  2. Pack an emotional punch
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  There’s no telling a story without emotion. Consciously list
                  down the feelings that you would want your customers to get
                  while watching the story.
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  Get ideas from some of these ‘high-impact’ emotional
                  motivators -
                  <br />
                  - compare before and after using the product or service
                  <br />
                  - evoke a sense of freedom
                  <br />
                  - create a sense of well-being
                  <br />
                  - tie the brand story to a social cause that affects your
                  target customers, such as climate change, cleanliness, the
                  environment, etc
                  <br />
                  - infuse the self-improvement factor into the story
                  <br />
                  - infuse the feeling of being special among customers, etc.
                  <br />
                  - create humour
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    3. The truth factor
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                    The story that you create may be fictional or a case study,
                    but it should still tell the truth in terms of its message.
                    Try not to not claim things your marketing team cannot pull
                    off later. Be truthful to your brand, and the value it
                    brings. Follow this principle in all your branding or
                    digital marketing campaigns.
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    4. Connect with the audience
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                    A Harvard Business Review study revealed that across a
                    sample of nine industry categories, fully connected
                    customers turned out to be 52% more valuable than those who
                    were just satisfied with the product.
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                    This is how you can do that -
                    <br />
                    - create the personas of your target customers
                    <br />
                    - create a detailed persona for the protagonist of your
                    brand story
                    <br />
                    - identify core values relevant to your customers. For
                    example, luxury brands target feelings of status,
                    confidence, first impressions, etc.
                    <br />
                    - speak their language, slang, or dialect
                    <br />
                    - call them to act (urgently, and now)
                    <br />
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    Final Thoughts
                  </div>

                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                    In his New York Times bestseller ‘The Confident Speaker,"
                    Harrison Monarth has stated: "A story can go where
                    quantitative analysis is denied admission: our hearts. Data
                    can persuade people, but it doesn’t inspire them to act; to
                    do that, you need to wrap your vision in a story that fires
                    the imagination and stirs the soul."
                    <br />
                    <br />
                    <br />
                    If you wish to infuse this ‘X’ factor into your digital
                    marketing campaigns, do talk to us.
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

export default Story;
