import React, { useEffect } from "react";
import "./home.scss";
import Homehero from "../../homepageComp/homeHero/Homehero";
import Vision from "./homecomponents/vision/Vision";
import Productengineer from "./homecomponents/homeproductengineer/Productengineer";
import Homeabout from "./homecomponents/homeabout/Homeabout";
import Homeservice from "./homecomponents/service/Homeservice";
import Clients from "./homecomponents/Clients";
import Bloghome from "./homecomponents/homeblog/Bloghome";
import Adupt from "./homecomponents/Adupt";
import Homeanimate from "./homecomponents/homeanimate/Homeanimate";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  });
  return (
    <div>
      <Homehero />
      <Vision />
      <Productengineer />
      <Homeabout />
      <Homeservice />
      <Homeanimate />
      <Clients />
      <Adupt />
      <Bloghome />
    </div>
  );
};

export default Home;
