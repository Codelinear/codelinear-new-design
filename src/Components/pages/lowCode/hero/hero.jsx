import { Link } from "react-router-dom";
import image from "../assets/Low code no code.jpg";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <section id="prod-hero">
        <h1 className="prod-hero-h1 letter-spacing-1">
          Eliminate the need for intricate coding while ensuring a polished end
          product.{" "}
        </h1>
        <div>
          <img src={image} alt="" />
        </div>
        <p>
          Our Low Code No Code development empowers you to bring your visions to
          life without the need for intricate coding expertise.{" "}
        </p>
        <Link onClick={scrollToTop} to={"/contactus"}>
          <button>Talk to our experts</button>
        </Link>
      </section>
    </>
  );
};
export default Hero;
