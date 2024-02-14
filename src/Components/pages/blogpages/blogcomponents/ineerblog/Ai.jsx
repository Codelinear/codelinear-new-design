import React from "react";
import img from "../../blogassets/Frame 1000001793.png";
import arrow from "../../blogassets/arrow.svg";
import { Link } from "react-router-dom";
import img2 from "../../blogassets/Blogs Animation Thumbnail03.jpg";
import img3 from "../../blogassets/Blogs Animation Thumbnail06.jpg";
import Explore from '../../../production/Explore'

const Ai = () => {
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
            AI-Powered Design Tools
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
                      <p className="w-[214px]">AI Powered Design</p>
                    </marquee>
                  </div>
                </div>
              </div>
              <Link
                onClick={scrollToTop}
                to="/gestalt-psychology"
                className="w-[232px] h-[65px] left-[81px] top-[393px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img2} alt="" />
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
              <Link
                onClick={scrollToTop}
                to="/the-changing-nature-of-seo"
                className="w-[232px] h-[65px] left-[81px] top-[471px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <img className="w-[68px] h-[65px]" src={img3} alt="" />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px]   text-black text-base font-normal font-['Graphik'] leading-normal">
                    <marquee>
                      {" "}
                      <p className="w-[214px]">The Changing Nature of SEO</p>
                    </marquee>
                  </div>
                </div>
              </Link>
            </div>

            <div className="left-[405px] h-[full] mt-[81.39px]  flex-col justify-start items-start gap-14 inline-flex max-md:px-10 max-sm:px-[20px] max-sm:mt-[80px]">
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                So, AI finally became a thing. It is wildly different from its
                dystopian counterpart in sci-fi movies. It was supposed to
                control and destroy humanity. Surprisingly, it is creating
                things, which was thought to be not possible just a few years
                ago..
                <br />
                <br />
                Actually, no. The previous statement is flawed. AI by itself
                cannot create anything. It still needs humans to give prompts,
                to guide it. AI at this stage is just a mere tool. Something
                that aids us with the completion of a task. There are
                speculations that AI one day might take over people’s jobs. Well
                if it does, who cares? A global poll conducted by Gallup says
                that 85% of the world's one billion full-time workers are
                unhappy at their jobs.
                <br />
                <br />
                Some might say the chaos AI is causing in many disciplines is
                similar to what mathematicians felt when the digital calculator
                was introduced (yes, a very bad analogy. But it gets the point
                through). Can it be of any use without the person using it? No.
                Did it replace mathematicians? Absolutely not. Did it help them
                solve complex problems? Yes.
                <br />
                <br />
                Well, that went on a tangent. Instead of worrying about who
                loses their job and who doesn’t, here are a few AI tools
                hand-picked by yours truly to help you stay ahead of the
                competition and keep your job.
                <br />
                <br />
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] letter-spacing-3 font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Khroma
                </div>

                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  This is an AI color pair generation tool. You have to select
                  50 (yes 50) colors from pre-existing colors while getting
                  started. This trains the AI model and after a few minutes, you
                  will have infinite color pairs available for you to choose
                  from. Khroma also has a “bias” system where you get to control
                  the percentage of color pairs that are the ones you picked vs
                  color pairs that are added by the AI model. What makes this
                  tool stand out is- you can choose to generate color palettes
                  and gradients from the chosen and suggested colors. And you
                  can always go back and change the 50 colors.
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-[28px] letter-spacing-3 font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Fontjoy
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  The story is told of a local cafe in London that was Fontjoy
                  is pretty straightforward. No signing up, no getting started
                  just straight to generating fresh and interesting font pairs.
                  You get a slider to select the amount of contrast between the
                  fonts. On top of this, if you already have some fonts in mind
                  and want to see how they pair up, you can select them
                  manually. Here’s where its drawback comes to light.
                  Unfortunately, you can only select fonts from Google Fonts.
                  But look at the bright side, while Google Fonts can be
                  limiting, it has a collection of over 1,400 fonts so I’m sure
                  you will come across something interesting.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-[28px] letter-spacing-3 font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Autodraw
                </div>

                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                  Autodraw is more like MS Paint with AI. It is very easy to use
                  and is quick at predicting what you are trying to draw. You
                  can create vector-like artwork quickly, but that's the only
                  thing you can create. The artwork from the database will
                  pretty much remain the same and won’t change based on the look
                  you are going for. For example, no matter how stylistic you
                  want to show a smiley, the AI will recognize it as a smiley
                  and give you 3 smiley faces to pick from. These 3 will remain
                  the same for the smiley section. So, it can get repetitive.
                  But for someone who is looking to create some nice vector line
                  art quickly, this might just be a goldmine.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-[28px] letter-spacing-3 font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Art Breeder
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Art Breeder is a powerhouse when it comes to artwork
                  generation, manipulation. It uses GANs (Generative Adversarial
                  Networks) to generate artwork. There are many features to
                  explore. What stood out the most is a feature called
                  “Director”. You get an AI assistant that writes prompts for
                  you and generates the artwork and all of this is free of
                  credits.
                  <br />
                  <br />
                  The Mixer feature is also very powerful. It uses already
                  existing images (from your device or its ever-growing
                  community) as a “visual” version of a prompt to generate
                  artwork out of the elements present in the images. This can be
                  a major help for those struggling with prompts and cannot
                  generate the artwork which they have in mind.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-[28px] letter-spacing-3 font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Framer
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Using Framer you can build a homepage in less than 2 minutes.
                  It also allows you to change the color palette and the font
                  post-generation. You can also edit individual sections
                  manually. Though the art direction cannot be interpreted
                  exactly and you might get results different than the one you
                  had in mind, it's a great starting point. You can also choose
                  from their extensive templates if AI doesn’t work out for you.
                  Overall, Framer is a great tool to build and publish websites
                  quickly (especially if it's a single page).
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                  Final Thoughts
                </div>

                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                  Alright, so let's wrap this up! AI design tools are basically
                  like the creative Swiss Army knives of the digital world.
                  These tools aim to streamline and enhance the design workflow
                  by automating tasks, generating design elements, and providing
                  suggestions based on algorithms and data analysis. By doing
                  so, AI design tools can potentially increase efficiency and
                  free up designers to focus on higher-level creative decisions.
                  <br />
                  <br />
                  The impact of AI on design is an ongoing topic of discussion,
                  with both potential benefits and ethical considerations being
                  debated within the design community and beyond.
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

export default Ai;
