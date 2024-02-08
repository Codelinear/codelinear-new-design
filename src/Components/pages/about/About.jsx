import React from "react";
import AboutHero from "./aboutcompo/Abouthero/AboutHero";
import Office from "./aboutcompo/office/Office";
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
    </>
  );
};

export default About;
