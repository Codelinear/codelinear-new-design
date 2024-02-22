import React from "react";
import AboutHero from "./aboutcompo/Abouthero/AboutHero";
import Office from "./aboutcompo/office/Office";
import Aboutvision from "./aboutcompo/aboutvision/Aboutvision";
import Animatecircle from "./aboutcompo/circle/Animatecircle";
import Guide from "./aboutcompo/guiding/Guide";
import Commitment from "./aboutcompo/commitment/Commitment";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <>
      <Helmet>
        <title>codelinear | About us</title>
        <meta
          name="keywords"
          content="about us, mission, values, expertise, web development, mobile app development and modernization, software consulting, Codelinear
"
        />
        <meta
          name="description"
          content="Learn more about Codelinear - a team of passionate developers dedicated to delivering high-quality software solutions. Discover our mission, values, and expertise in application development and modernization, game development, software consulting, and AR/VR development."
        />
      </Helmet>
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
