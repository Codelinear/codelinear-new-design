import React from "react";
import Cloudservice from "./cloudComponents/cloudServices";
import Explore from "../production/Explore";
import CloudHero from "./cloudComponents/cloudHero";
import { Helmet } from "react-helmet";
import Footer from "../../Footer/Footer";

const Cloud = () => {
  return (
    <>
      <Helmet>
        <title>Services - Cloud Engineering</title>
        <meta
          name="description"
          content="Discover Codelinear's cloud engineering services, including cloud architecture design, migration, optimization, and management. Learn how we leverage cloud technologies to drive innovation, scalability, and cost-efficiency for your business."
        />
        <link rel="canonical" href="https://codelinear.com/services/cloud-engineering" />
        <meta
          name="keywords"
          content="cloud engineering, cloud architecture, cloud migration, cloud optimization, cloud management, cloud technologies, innovation, scalability, cost-efficiency"
        />
      </Helmet>
      <CloudHero />
      <Cloudservice />
      <Explore />
      <Footer />
    </>
  );
};

export default Cloud;
