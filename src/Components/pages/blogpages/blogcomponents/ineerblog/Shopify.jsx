import React from "react";
import img from "../../blogassets/Blog Inner page Banner13.jpg";
import arrow from "../../blogassets/arrow.svg";
import { Link } from "react-router-dom";
import img1 from "../../blogassets/Blogs Animation Thumbnail13.jpg";
import img2 from "../../blogassets/Blogs Animation Thumbnail09.jpg";
import img3 from "../../blogassets/Blogs Animation Thumbnail02.jpg";
import Explore from '../../../production/Explore'
import { Helmet } from "react-helmet";

const Shopify = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
    <Helmet>
      <title>codelinear | Shopify Vs Magento</title>
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
            Shopify Vs Magento: What Is New?
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
                      <p className="w-[214px]">Shopify vs Magento</p>
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
                      <p className="w-[214px]">Story telling in Marketing</p>
                    </marquee>
                  </div>
                </div>
              </Link>
            </div>

            <div className="left-[405px] h-[full] mt-[81.39px]  flex-col justify-start items-start gap-14 inline-flex max-md:px-10 max-sm:px-[20px] max-sm:mt-[80px]">
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                If you're a business owner of any kind, you've probably heard of
                Shopify and Magento.Today, Shopify and Magento are two of the
                most popular ecommerce platforms for businesses and
                entrepreneurs.
                <br />
                <br />
                Shopify, with more than 4.1 million online stores, is a
                user-friendly content management system (CMS) to build and
                maintain online or e-commerce stores. Users need to pay a
                monthly fee, and businesses of any size can use the platform.
                <br />
                <br />
                Magento, which powers over 2.3% of e-commerce stores worldwide,
                is an open-source platform that is free to install on any
                computer. However, users have to pay for web hosting, security,
                and extensions (that work like different applications).
                <br />
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  What’s New In Shopify?
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  In June 2022, Shopify rolled out a set of new features. Among
                  them are:
                  <br />
                  <br />
                  <br />- Shopify Audiences - a new app that offers insights to
                  identify buyers searching for your products.
                  <br />- Shop Cash - a facility that provides buyers with Shop
                  Cash bonuses in millions of dollars as an incentive.
                  <br />- Twitter Shopping - Merchants can now sell products
                  directly from their Twitter profiles.
                  <br />- B2B on Shopify - Shopify Admin now has wholesale
                  capabilities built right in to allow sellers to run their
                  entire business on the platform.
                  <br />- Shopify Point of Sale (POS) - a POS software that
                  allows payments from an iPhone and sells anywhere there is
                  Shopify POS hardware.
                  <br />- Linkpop - is a free link-in bio tool designed for
                  commerce through social media and powered by a fast and secure
                  checkout. You can put this shoppable link on your blog, social
                  media handles, playlists, podcasts, etc.
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  What’s New In Magento?
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  A new version of Magento 2.4.5 was released in August 2022.
                  Some of its features are -
                  <br />
                  <br />
                  <br />- Access Control List (ACL)
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full"></div>
                </div>
              </div>
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                Platform enhancements - Composer 2.2 support has been added to
                Magento open-source.There are improvements in Magento B2B
                commerce catalogs while Duplicate SKU data from shared catalogs
                has been removed. Accessibility improvements - Keyword
                accessibility and keyboard contrast have been improved, while
                now screen readers will be informed of every new page load.
                Payment upgrades - Apple Pay and PayPal Later options have been
                added. GTag - Google Tags will now aid in smarter Search Engine
                Optimization (SEO).
              </div>

              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  Shopify Or Magento: Which Should You Choose?
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  First up, the decision to choose Shopify or Magento or to
                  switch from one to another should not be based purely on the
                  new or old features. The basis of your decision should be your
                  current business goals, the scalability of your business
                  operations, and your 2023 targets.
                  <br />
                  <br />
                  Although pricing will be an important factor, it is vital to
                  note that while Shopify’s monthly subscription costs less, its
                  add-on features will amount to the equivalent of the extra
                  costs of hosting and security features that Magento charges
                  for.
                  <br />
                  <br />
                  Here’s a comparison of the two platforms -
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  Shopify
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                    The big idea behind Shopify is to give business owners the
                    key features to set up an online store in exchange for a
                    monthly subscription. When you buy more Shopify apps, you
                    can go further in terms of customization.
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
                    <br />- Offers 11 free and 95 premium fully responsive
                    themes
                    <br />- Easy drag-and-drop editor to custom, switch, add,
                    remove, and resize elements
                    <br />- Multi-channel integration
                    <br />- 100+ payment gateways
                    <br />- 1200+ apps
                    <br />- No coding knowledge is required.
                    <br />- Round-the-clock customer support
                    <br />- Good for beginners as well as larger stores
                    <br />
                    <br />
                    Cons
                    <br />- The editing tool is not as intuitive, and takes some
                    learning curve
                    <br />- Overly reliant on paid apps
                    <br />- Except for Shopify payments, the transaction fee is
                    expensive
                    <br />- The use of apps may hike up monthly costing for
                    retailers
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px]">
                  Magento
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                    Being a free open-source platform, Magento allows for
                    changing of the code that allows for customization of
                    templates and functionality. Here are some pros and cons.
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
                    <br />- A wide range of features allow for multiple stores,
                    multiple locations, languages, pricing, and currencies.
                    <br />- Mobile-friendly, and allows for easy creation of a
                    mobile site
                    <br />- High scalability, it can support upto 500,000 users
                    and thousands of transactions per hour
                    <br />- Great security features
                    <br />
                    -Highly flexible
                    <br />
                    <br />
                    Cons
                    <br />- Can become time-consuming due to coding requirements
                    or customization
                    <br />- You need a dedicated server to host Magento.
                    <br />- Product support is expensive
                    <br />- May need coding
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                  Final Thoughts
                </div>

                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  While Shopify offers a no-coding and user-friendly platform
                  that can help you run an online shop in no time, Magento’s
                  flexibility may help you scale faster. We suggest you make a
                  decision based on the size of your business, and your future
                  goals. For more information on building an online store that
                  clicks with your customers, feel free to call us.
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

export default Shopify;
