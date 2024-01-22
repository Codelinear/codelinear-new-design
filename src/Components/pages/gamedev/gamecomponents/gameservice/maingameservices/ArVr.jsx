import React from "react";
import img from "../../gameassets/image 168.png";
const ArVr = () => {
  return (
    <>
      <div className="ArVr">
        <div className="w-full h-[1071px] relative bg-white">
          <div className="h-[622px] left-[513px] top-[353px] absolute flex-col justify-start items-center inline-flex">
            <img className="w-[522.44px] h-[645.42px]" src={img} alt="" />
          </div>
          <div className="flex flex-col gap-10">
            <div className="ml-[80px]  mt-[67px]  flex-col justify-start items-start gap-[22px] inline-flex">
              <div className="flex-col justify-start items-start gap-[30px] flex">
                <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    game development services
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-[631.03px] text-black text-[49.20px] font-normal font-['Graphik'] leading-[59.04px]">
                  AR/VR Game Development
                </div>
              </div>
              <div className="w-[536.02px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Craft immersive worlds and redefine reality with our AR/VR game
                development, merging cutting-edge technology for unparalleled
                and captivating gaming experiences.
              </div>
            </div>

            <div className="ml-[80px] top-[353px]  flex-col justify-start items-start gap-[54px] inline-flex">
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  Immersive
                </div>
                <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Deliver profound immersion, transport users into interactive
                  realities, heightened senses, and reshape experiences with
                  unparalleled technological engagement.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  Life-like experience
                </div>
                <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Create lifelike experiences, seamlessly blending virtual and
                  real worlds, immersing users in interactive environments.
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                  Enhanced Co-op interaction
                </div>
                <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Enrich cooperative interaction, fostering shared experiences
                  with immersive technologies, revolutionizing how users engage
                  and collaborate in digital realms.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArVr;
