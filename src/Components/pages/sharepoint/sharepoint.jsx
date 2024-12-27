import React from "react";
import Service from "./components/service";
import Explore from "../production/Explore";
import Hero from "./components/hero";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Helmet } from "react-helmet";
import Footer from "../../Footer/Footer";

const Sharepoint = () => {
  return (
    <>
      <Helmet>
        <title>Services - Microsoft Sharepoint Services</title>
        <meta
          name="description"
          content="Discover Codelinear's Microsoft SharePoint services, offering expertise in SharePoint implementation, customization, integration, and support. Learn how we help businesses leverage SharePoint to improve collaboration, streamline processes, and enhance productivity."
        />
        <meta
          name="keywords"
          content="Microsoft SharePoint services, SharePoint implementation, SharePoint customization, SharePoint integration, SharePoint support, collaboration improvement, process streamlining, productivity enhancement"
        />
        <link
          rel="canonical"
          href="https://codelinear.com/services/microsoft-sharepoint-services"
        />
      </Helmet>
      <Hero />
      <Service />
      <Explore />
      <Footer />
    </>
  );
};

export default Sharepoint;
