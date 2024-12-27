import React from "react";
import Gamehero from "./gamecomponents/gamehero/Gamehero";
import Gameservices from "./gamecomponents/gameservice/Gameservices";
import Explore from "../production/Explore";
import { Helmet } from "react-helmet";
import Footer from "../../Footer/Footer";

const Gamedev = () => {
  return (
    <>
      <Helmet>
        <title>Services - Game Development</title>
        <meta
          name="description"
          content="Discover Codelinear's game development services, offering expertise in creating captivating and immersive gaming experiences across various platforms. Learn how we leverage cutting-edge technologies and creative design to bring your game ideas to life."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/services/game-development"
        />
        <meta
          name="keywords"
          content="game development, game design, gaming experiences, gaming platforms, game developers, game technologies, creative design, immersive games"
        />
      </Helmet>
      <Gamehero />
      <Gameservices />
      <Explore />
      <Footer />
    </>
  );
};

export default Gamedev;
