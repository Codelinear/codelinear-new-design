import React from "react";
import AboutHero from "./aboutcompo/Abouthero/AboutHero";
import Office from "./aboutcompo/office/Office";
import Founder from "./aboutcompo/founder/Founder";
import Ideal from "./aboutcompo/ideal/Ideal";
import Aboutvision from "./aboutcompo/aboutvision/Aboutvision";
import Animatecircle from "./aboutcompo/circle/Animatecircle";
import Guide from "./aboutcompo/guiding/Guide";
import Commitment from "./aboutcompo/commitment/Commitment";

const About = () => {
  return (
    <>
      <AboutHero />
      <Aboutvision />
      <Office />
      <Animatecircle />
      <Guide />
      <Commitment /> 
      {/* <Founder /> */}
      {/* <Ideal /> */}
    </>
  );
};

export default About;
