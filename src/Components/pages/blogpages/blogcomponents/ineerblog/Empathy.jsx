import React from "react";
import img from "../../blogassets/Frame 43.png";
import arrow from "../../blogassets/arrow.svg";
import { Link } from "react-router-dom";

import img2 from "../../blogassets/unsplash_2cFZ_FB08UM.png";
import img3 from "../../blogassets/Frame 61.png";

const Empathy = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="innerhero">
        <div className="w-full h-full pl-20 pr-[407px] pt-[233.78px] pb-[65.22px] bg-white justify-start items-center inline-flex max-lg:p-10">
          <div className="w-[953px] text-black text-[66px] font-normal font-['Graphik'] leading-[71.28px] max-lg:w-full max-sm:text-[46px]">
            Empathy In UX
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
                    Empathy In UX
                  </div>
                </div>
              </div>
              <Link
                onClick={scrollToTop}
                to="/mvp"
                className="w-[232px] h-[65px] left-[81px] top-[393px] absolute border border-black border-opacity-10"
              >
                <div className="w-[68px] left-0 top-[-1.39px] absolute bg-neutral-200 justify-center items-center inline-flex">
                  <img className="w-[68.11px] h-[69.01px]" src={img2} alt="" />
                </div>

                <div className="left-[77.31px] top-[11.09px] absolute justify-center items-center inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] leading-normal">
                  Minimum Viable Product
                  </div>
                </div>
              </Link>

              <Link
                onClick={scrollToTop}
                to="/branding"
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
                   Disruptive Branding
                  </div>
                </div>
              </Link>
            </div>

            <div className="left-[405px] h-[full] mt-[81.39px]  flex-col justify-start items-start gap-14 inline-flex max-md:px-10">
              <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                Since 1989, Intuit (maker of Quickbooks, Mint, and TurboTax) has
                run a “Follow me Home ” program that involves questionnaires,
                observations, interviews, etc. with the actual users at
                workplaces where Intuit’s products are being used. The goal of
                the program is to find out how customers use the product, what
                they like and don’t, and what challenges they may have.
                <br />
                <br />
                And what does Intuit do with all these insights? They change,
                modify, or tweak their products. Not kidding. For instance, the
                2006 version of one of their products, Quicken, had 121
                customer-recommended improvements. [Source]
                <br />
                <br />
                Harley-Davidson has carefully adjusted the voices of its motors
                to please its customers’ ears. In fact, they have sued
                competitors who have imitated their motor voices.
                <br />
                <br />
                The ability to get into your customers’ shoes results in user
                empathy. Intuit and Harley-Davidson are just two of the many
                companies worldwide that have mastered the art of empathy in
                User Experience (UX) design.
                <br />
                <br />
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  What Is Empathy?
                </div>

                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  Empathy is a foundational principle in the concept of design
                  thinking – a user-based approach to problem-solving that
                  combines hands-on testing of a product or service with the
                  actual users.
                  <br />
                  <br />
                  Empathy is thus a crucial factor in UX design because it
                  involves the usability and function of products, and services
                  in the environment of the users. Empathy allows product design
                  teams to identify which ideas need more testing before they
                  commit to a development or re-design project.
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Why Is Empathy So Important In UX?
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  The story is told of a local cafe in London that was
                  particularly concerned about the complaints the staff was
                  getting about ‘really bad tea. The first and most obvious
                  conclusion that the cafe owner made was that the chef was only
                  three months old. But he couldn’t afford to fire the new chef.
                  So the owner introduced the concept of MYOT (make your own
                  tea) and put it on the menu. Those who opted for MYOT were
                  given hot water in a teapot, a side of milk, sugar, and three
                  kinds of tea leaves. The customers were also asked to set
                  aside a tiny cup of the tea they made for the staff to taste
                  later.
                  <br />
                  <br />
                  After many MYOTs, the owner instructed the chef to brew two
                  types of tea leaves, one stronger and one lighter.
                  Interestingly, those who preferred a stronger tea had an Irish
                  background, while those who preferred their tea lighter were
                  mostly London natives.
                  <br />
                  <br />
                  In case we haven’t made it obvious already, empathy is crucial
                  in UX. However, it does not appear to come naturally to
                  designers in general, and especially to UX designers. In fact,
                  2009 research stated that professionals working in the
                  technology field have lower empathy. When there’s a disconnect
                  between a designer and the end user, the product or
                  application may fail.
                  <br />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  Here's Why Empathy Is Essential In UX Design-
                </div>
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  1. User Interactions
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  When Nielsen Norman Group’s co-founder Don Norman coined the
                  term ‘user experience’ in the 1990s, empathy was at the heart
                  of his definition. Norman said, "User experience encompasses
                  all aspects of the end-user’s interaction with the company,
                  its services, and its products." By interaction Norman meant
                  how a user fits your product into his environment or
                  circumstances, and makes use of it. Empathizing with users
                  involves studying their environment, living conditions, and
                  preferences, among other things. These factors help UX
                  designers get the users’ perspective during application
                  development
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  2. Enhancing UX
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  UX is really about what users think, and feel. Human beings,
                  by nature, are both emotional and rational. How a user
                  perceives a product is never purely based on its features but
                  also how he or she feels while using it. Empathy enables
                  designers to infuse users’ emotions while enhancing the user
                  experience. Take for instance, the UX of Amazon’s smart
                  devices, which is enhanced by the AI assistant Alexa because
                  of its ability to interact in the users’ language, and gauge
                  emotions. Amazon developers chose the name Alexa because it
                  has a hard consonant with the ‘x’ , a factor that helps people
                  of any language or ethnicity recognize the name with greater
                  precision.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  3. Recognizing the context
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  You can never understand people’s circumstances unless you
                  have been in similar situations yourself. Empathy pushes
                  designers to go out of their way to understand the context as
                  well as the relevance of the product within a user’s
                  environment.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  4. Changing preferences
                </div>
                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  Ongoing empathy towards users also leads to a deeper
                  connection with users, where UX may be made intuitive based on
                  the changing preferences of users. Just like how we saw it in
                  Intuit’s feedback exercise, regular and active observations
                  about customers' expectations have helped the company
                  anticipate user needs and tweak products.
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                  Final Thoughts
                </div>

                <div className="w-[630px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full">
                  Users are indeed changing every day. They are evolving with
                  each new product, each new application, and each new feature.
                  Millions of use cases are created unintentionally by users
                  before companies. In this context, it is hard to imagine the
                  user experience without user empathy. Creating user profiles,
                  observing, prototyping, and testing are essential parts of
                  empathetic design. Unless we learn to think and act like
                  users, we cannot build lasting products that will always stay
                  relevant. There’s no UX without empathy.
                  <br />
                  <br />
                  As a leading UI/UX Design Agency, Codelinear delivers
                  well-crafted design services that can bring your ideas to life
                  and make your web/app stand out. If you are looking for
                  empathetic UX/UI design, do call us.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Empathy;
