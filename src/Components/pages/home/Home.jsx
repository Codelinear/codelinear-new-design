import React from "react";
import Homehero from "../../homepageComp/homeHero/Homehero";
import Vision from "./homecomponents/vision/Vision";
import Productengineer from "./homecomponents/homeproductengineer/Productengineer";
import Homeabout from "./homecomponents/homeabout/Homeabout";
import Homeservice from "./homecomponents/service/Homeservice";
import Clients from "./homecomponents/Clients";
import Served from "./homecomponents/serverd/Served";
import Bloghome from "./homecomponents/homeblog/Bloghome";
import Adupt from "./homecomponents/Adupt";
import Homeanimate from "./homecomponents/homeanimate/Homeanimate";

const Home = () => {
  return (
    <>
      <Homehero />
      <Vision />
      <Productengineer />
      <Homeabout />
      <Homeservice />
      <Homeanimate />
      {/* <Served /> */}
      <Clients />
      <Adupt />
      <Bloghome />
    </>
  );
};

export default Home;
