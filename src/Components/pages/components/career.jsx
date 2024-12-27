import "./Hero/Hero.css";
import Imgsection from "./Imgsection/Imgsection";
import { useEffect, useRef, useState } from "react";
import Massa from "./Massa/Massa";
import Openposition from "./Openpositions/Openpositions";
import { Helmet } from "react-helmet";
import axios from "axios";
import Footer from "../../Footer/Footer";

function Career() {
  const position = useRef(null);

  const scrollTops = () => {
    if (position.current) {
      position.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Helmet>
        <title>Codelinear - Careers Page</title>
        <meta
          name="description"
          content="Explore career opportunities at Codelinear, a leading digital agency specializing in software development, UX/UI design, cloud engineering, and more. Join our team and be part of innovative projects that drive business success."
        />
        <link rel="canonical" href="https://codelinear.com/careers" />
        <meta
          name="keywords"
          content="careers, job opportunities, software development, UX/UI design, cloud engineering, digital agency"
        />
      </Helmet>
      <div className="careerHero">
        <h1>
          {" "}
          We're looking for talented individuals like you to join our team.{" "}
        </h1>
        <button className="heroBtn" onClick={scrollTops}>
          See open positions
        </button>
      </div>
      <Imgsection />
      <Massa />
      <div id="positon" ref={position}>
        <Openposition />
      </div>
      <Footer />
    </>
  );
}
export default Career;
