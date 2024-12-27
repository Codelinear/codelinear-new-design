import React from "react";
import Techservice from "./techComponent/technologyservice";
import Explore from "../production/Explore";
import TechHero from "./techComponent/techHero";
import { Helmet } from "react-helmet";
import Footer from "../../Footer/Footer";

const Techconsulting = () => {
  return (
    <>
      <Helmet>
        <title>Services - Technology Consulting</title>
        <meta
          name="description"
          content="Explore Codelinear's technology consulting services, offering expertise in helping businesses leverage technology to achieve their strategic objectives. Learn how we provide tailored consulting solutions to address your unique challenges and drive innovation."
        />
        <meta
          name="keywords"
          content="technology consulting, strategic objectives, tailored solutions, innovation, business challenges, consulting services, technology expertise"
        />
        <link
          rel="canonical"
          href="https://codelinear.com/services/technology-consulting"
        />
      </Helmet>
      <TechHero />
      <Techservice />
      <Explore />
      <Footer />
    </>
  );
};

export default Techconsulting;
