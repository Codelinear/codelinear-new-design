import React from "react";
import img from "../../blogassets/Blog Inner page Banner07.jpg";
import arrow from "../../blogassets/arrow.svg";
import { Link } from "react-router-dom";
import img1 from "../../blogassets/Blogs Animation Thumbnail07.jpg";
import img2 from "../../blogassets/Blogs Animation Thumbnail11.jpg";
import img3 from "../../blogassets/Blogs Animation Thumbnail01.jpg";
import Explore from "../../../production/Explore";
import { Helmet } from "react-helmet";

const Branding = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      {" "}
      <Helmet>
        <title>codelinear | The Art Of Disruptive Branding</title>
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
            Branded Environments: The Art Of Disruptive Branding
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
                      <p className="w-[194px]">Disruptive Branding</p>
                    </marquee>
                  </div>
                </div>
              </div>
              <Link
                onClick={scrollToTop}
                to="/minimum-viable-product"
                className="w-[232px] h-[65px] left-[81px] top-[393px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img2} alt="" />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px]   text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee>
                      {" "}
                      <p className="w-[194px]">Minimum Viable Product</p>
                    </marquee>
                  </div>
                </div>
              </Link>
              <Link
                onClick={scrollToTop}
                to="/ux-design-benefits-smes!"
                className="w-[232px] h-[65px] left-[81px] top-[471px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img3} alt="" />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px]   text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee>
                      {" "}
                      <p className="w-[194px]">UX Desing Benefits SMEs!</p>
                    </marquee>
                  </div>
                </div>
              </Link>
            </div>

            <div className="left-[405px] h-[full] mt-[81.39px]  flex-col justify-start items-start gap-14 inline-flex max-md:px-10 max-sm:px-[20px] max-sm:mt-[80px]">
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                Ever walked into Nike's flagship store in New York City? The
                store is designed to be a "shrine" to the brand's values and
                products, with interactive displays, cutting-edge technology,
                and immersive experiences. One of the store's most iconic
                features is the "Sneaker Bar," where customers can customize
                their shoes and see them come to life on a large video screen.
                The store's design and features create a powerful emotional
                connection with consumers, making them feel part of the Nike
                brand.
                <br />
                <br />
                If you are thinking, how's that walk-in store relevant in a
                post-pandemic world where virtual experiences are more
                conveniently available, then consider why a conglomerate like
                Apple takes the pains of opening Apple Stores around the world.
                Apple has revolutionized the retail experience by creating
                spaces that are minimalist, elegant, and focused on the user
                experience design. The stores feature interactive displays,
                knowledgeable staff, and an open layout that encourages
                customers to explore and engage with the brand's products. By
                creating a space that is both functional and emotionally
                engaging, Apple has disrupted the traditional retail model and
                established itself as a leader in the industry. This makes Apple
                all the more relevant as it has married the virtual and the real
                effortlessly in its experience stores, that are a form of what’s
                termed as ‘branded environments’, apart from replicating such
                environments on its website.
                <br />
                <br />
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] letter-spacing-3 font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  What Are Branded Environments?
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  Branded environments are physical spaces that are designed to
                  immerse consumers in a brand's story, values, and personality.
                  These spaces can range from retail stores and showrooms to
                  corporate offices, and event spaces. The goal is to create an
                  environment that reinforces a brand's identity and creates an
                  emotional connection with consumers. This may be created via
                  physical stores or online experiences such as a website or a
                  mobile application.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] letter-spacing-3 font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  The Art Of Disruptive Branding
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  Branded environments are not just for large corporations with
                  huge budgets. Any business can create a branded environment
                  that engages and captivates consumers. Here are a few key
                  takeaways for businesses looking to implement a branded
                  environment strategy:
                  <br />
                  <br />
                  1. Know your brand : Before you can create a branded
                  environment, you need to have a clear understanding of your
                  brand's values, personality, and identity. This will help you
                  design a space like the Nike flagship store that reinforces
                  your brand and creates an emotional connection with consumers.
                  <br />
                  <br />
                  2. Think outside the box : Branded environments should be
                  unexpected and memorable. Don't be afraid to push the
                  boundaries of traditional branding and create experiences that
                  are disruptive and emotionally impactful.
                  <br />
                  <br />
                  3. Engage all the senses : Branded environments should engage
                  all the senses, not just sight. Consider how sound, touch,
                  smell, and taste can be used to reinforce your brand's
                  identity and create a memorable experience.
                  <br />
                  <br />
                  4. Be authentic : Branded environments should be authentic and
                  true to your brand's values and personality. Don't create an
                  experience that is out of sync with your brand, as this can
                  create confusion and undermine the emotional connection with
                  consumers.Even virtually, Apple has managed to create an aura
                  that just by engaging with the brand online, its consumers
                  find the experience fulfilling.
                  <br />
                  <br />
                  5. Measure your success : Branded environments should be
                  designed with specific goals and metrics in mind. Be sure to
                  measure the success of your branded environment strategy and
                  make adjustments as needed.
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                  Final Thoughts
                </div>

                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  A branded environment is a powerful tool for disruptive
                  branding that can help companies stand out from the
                  competition and create emotional connections with consumers.
                  An integral part of creating such environments is through UX
                  design, both physically and virtually. If you are looking for
                  an agency that can create immersive branded environments apart
                  from website or mobile application development, do give us a
                  call.
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

export default Branding;
