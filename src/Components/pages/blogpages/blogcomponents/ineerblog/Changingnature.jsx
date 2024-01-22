import React from "react";
import img from "../../blogassets/Frame 64.png";
import arrow from "../../blogassets/arrow.svg";
import { Link } from "react-router-dom";

import img2 from "../../blogassets/Frame 569.png";
import img3 from "../../blogassets/Frame 60.png";

const Changingnature = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="innerhero">
      <div className="w-full h-full pl-20 pr-[407px] pt-[233.78px] pb-[65.22px] bg-white justify-start items-center inline-flex max-lg:p-10 max-sm:p-0 max-sm:ml-[20px] max-sm:mt-[90px]">
          <div className="w-[953px] text-black text-[66px] font-normal font-['Graphik'] leading-[120%] max-lg:w-full max-sm:text-[46px]">
             The Changing Nature Of SEO
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
                </div>{" "}
                <div className="left-[77.31px] top-[11.09px] absolute justify-center items-center inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] leading-normal">

                  <h3><marquee> The Changing Nature Of SEO</marquee></h3>
                  {/* The Changing Nature Of SEO */}
                  </div>
                </div>
              </div>
              <Link
                onClick={scrollToTop}
                to="/nocode"
                className="w-[232px] h-[65px] left-[81px] top-[393px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] left-0 top-[-1.39px] absolute bg-neutral-200 justify-center items-center inline-flex">
                  <img className="w-[68.11px] h-[69.01px]" src={img2} alt="" />
                </div>
                <div className="left-[77.31px] top-[11.09px] absolute justify-center items-center inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] leading-normal">
                  <h3><marquee>No-Code Revolution</marquee></h3>

                  
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
                  <h3><marquee>Storytelling In Marketing</marquee></h3>

          
                  </div>
                </div>
              </Link>
            </div>

            <div className="left-[405px] h-[full] mt-[81.39px]  flex-col justify-start items-start gap-14 inline-flex max-md:px-10 max-sm:px-[20px] max-sm:mt-[80px]">
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                Gadget Flow is a well-known product discovery platform that
                helps readers find latest tech and gear apart from information
                on unique crowdfunding campaigns.
                <br />
                <br />
                When Gadget Flow was founded back in 2012, the company had
                little competition in the product discovery domain. But as the
                internet grew with more information, the company felt an acute
                need to increase organic traffic. The company thought of an SEO
                strategy to boost its visibility on search engines.
                <br />
                <br />
                As the team researched, they realized that they needed to center
                their attention on content relevancy, a factor that was turning
                their readers/visitors away. Using some SEO tools, the company
                created a comprehensive plan for a site-wide content model, thus
                adding structured data such as reviews, blog posts, products,
                and videos.
                <br />
                <br />
                The result? Gadget Flow claims that they were able to grow
                organic traffic by 185% for clicks on video content; and by 198%
                for news articles (within three months). Moreover, their review
                traffic increased, getting them 100% clicks. Whoa! That’s quite
                a success story now.
                <br />
                <br />
                What’s the bottom line? The internet is evolving quite fast, and
                so is SEO. You need to constantly stay on top of your online
                content, and the needs of your target audience.
                <br />
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  SEO - How Did It All Begin?
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Search engine optimization (SEO) has been around for over two
                  decades, and it has undergone significant changes in that
                  time. SEO is the practice of optimizing a website's content to
                  rank higher in search engine results pages (SERPs) for
                  specific keywords. With the rise of search engines like Google
                  or Bing, SEO became an essential aspect of digital marketing.
                  In the past, SEO primarily focused on technical aspects like
                  keyword density and meta tags. Today, SEO is more holistic,
                  focusing on providing value to users and creating high-quality
                  content. In this blog post, we'll take a look at the changing
                  nature of SEO.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  Early SEO era
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  In the early days of SEO, it was all about finding ways to
                  manipulate search engines into ranking a website higher. This
                  often involved keyword stuffing, buying links, and other black
                  hat tactics that violated search engine guidelines. However,
                  as search engines became more sophisticated, they began to
                  penalize websites that engaged in these practices. Today, SEO
                  best practices are focused on providing value to users and
                  creating high-quality content.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  Emphasis on UX design
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  One of the biggest changes in SEO is the emphasis on user
                  experience. In the past, SEO was focused on technical factors
                  like keyword density, meta tags, and backlinks. Today,
                  Google's algorithms are designed to reward websites that
                  provide value to users. This means that websites with
                  high-quality content, a great user experience, and relevant
                  information will rank higher in search results.
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  Local heroes
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Another change in SEO is the importance of local search. With
                  the rise of mobile devices, people are increasingly using
                  search engines to find businesses near them. This has led to
                  the rise of local SEO, which focuses on optimizing a website's
                  content to rank higher for local search queries. This includes
                  optimizing a website's content for local keywords, creating
                  local business listings, and ensuring that the website is
                  mobile-friendly.
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  Social media effect
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Social media has also had a significant impact on SEO. In the
                  past, social media was seen as a separate marketing channel,
                  but today, it is an essential part of any SEO strategy. Social
                  media can help drive traffic to a website, increase brand
                  awareness, and improve search rankings. By creating
                  high-quality content that is shareable on social media,
                  businesses can improve their SEO rankings and reach a wider
                  audience.
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  Voice search
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Voice search is also changing the nature of SEO. With the rise
                  of voice assistants like Alexa and Siri, people are
                  increasingly using voice search to find information online.
                  This has led to the rise of conversational search, which
                  focuses on optimizing a website's content for natural language
                  queries. This means using long-tail keywords and answering
                  questions directly in the content.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  Artificial intelligence
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Finally, the rise of artificial intelligence (AI) is also
                  changing the nature of SEO. Google's algorithms are becoming
                  increasingly sophisticated, using machine learning to
                  understand the intent behind search queries. This means that
                  SEO is becoming more about creating high-quality content that
                  answers users' questions and provides value. AI is also being
                  used to personalize search results, which means that SEO
                  strategies will need to focus on creating personalized
                  experiences for users.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  Social media effect
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Social media has also had a significant impact on SEO. In the
                  past, social media was seen as a separate marketing channel,
                  but today, it is an essential part of any SEO strategy. Social
                  media can help drive traffic to a website, increase brand
                  awareness, and improve search rankings. By creating
                  high-quality content that is shareable on social media,
                  businesses can improve their SEO rankings and reach a wider
                  audience.
                </div>
              </div>

              <br />
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  How Can Businesses Make The Best Of SEO?
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    1. Create high-quality content
                  </div>

                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                    Google's algorithm prioritizes content that is informative,
                    engaging, and relevant to the user. Businesses must create
                    content -
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                    - that provides value to their audience
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                    - answers their questions
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                    - solves their problems.
                  </div>

                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                    This means researching keywords, understanding user intent,
                    and creating content that meets the needs of the target
                    audience.
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    2. Focus on user experience
                  </div>

                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                    A website that is difficult to navigate or slow to load will
                    have a negative impact on search rankings. Businesses must
                    focus on creating a website that is easy to use, responsive,
                    and fast. This is how-
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                    - optimize images
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                    - reduce page load times
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                    - make sure the website is mobile-friendly.
                  </div>

                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify ">
                    Gadget Flow paid attention to its UX development by
                    improving their search tool and managed to attract qualified
                    leads and rank higher on search engine result pages (SERPs).
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    3. Embrace local SEO
                  </div>

                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                    Local SEO is becoming increasingly important as more people
                    use their mobile devices to search for local businesses.
                    <br />
                    Businesses must -
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                    - optimize their website for local search queries, including
                    keywords that are relevant to the local area.
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                    - create local business listings
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                    - optimize search and content for Google My Business,
                  </div>
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                    - use location-based keywords in content.
                  </div>
                </div>

                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    4. Use social media
                  </div>

                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                    Social media is a great catalyzer of SEO. By creating
                    high-quality content that is shareable on social media,
                    businesses can drive traffic to their website and improve
                    their search rankings. Social media can also help increase
                    brand awareness and build relationships with customers.
                    Businesses should focus on creating a social media strategy
                    that aligns with their SEO goals.
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    5. Keep up with the latest trends
                  </div>

                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                    SEO is a rapidly changing field, and businesses must stay up
                    to date with the latest trends to survive. This means
                    keeping up with Google's algorithm updates, understanding
                    new technologies like voice search and AI, and staying on
                    top of industry news. By staying informed and adapting to
                    new trends, businesses can stay ahead of the competition and
                    maintain their search rankings.
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    Final Thoughts
                  </div>

                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                    It's important to remember that SEO is an ongoing process,
                    and businesses must be willing to adapt and evolve to stay
                    relevant in today's digital landscape.
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

export default Changingnature;
