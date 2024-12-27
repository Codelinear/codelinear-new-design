import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import gsap from "gsap";
import Service from "./components/service";
import Explore from "../production/Explore";
import Hero from "./components/hero";
import { Helmet } from "react-helmet";
import Footer from "../../Footer/Footer";

const Salesforce = () => {
  return (
    <>
      <Helmet>
        <title>Services - Salesforce Services</title>
        <meta
          name="description"
          content="Explore Codelinear's Salesforce services, offering expertise in Salesforce implementation, customization, integration, and support. Learn how we help businesses leverage Salesforce to optimize their sales processes, improve customer relationships, and drive growth."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/services/salesforce-services"
        />
        <meta
          name="keywords"
          content="Salesforce services, Salesforce implementation, Salesforce customization, Salesforce integration, Salesforce support, sales processes optimization, customer relationships improvement, business growth"
        />
      </Helmet>
      <Hero />
      <Service />
      <Explore />
      <Footer />
    </>
  );
};

export default Salesforce;
