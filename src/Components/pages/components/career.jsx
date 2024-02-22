import "./Hero/Hero.css";
import Imgsection from "./Imgsection/Imgsection";
import Massa from "./Massa/Massa";
import Openposition from "./Openpositions/Openpositions";
import { useRef } from "react";
import { Helmet } from "react-helmet";

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
      <title>codelinear | Career</title>
    </Helmet>
      <div className="careerHero">
        <h1>
        We're looking for talented individuals like you to join our team.        </h1>
        <button className="heroBtn" onClick={scrollTops}>
          See open positions
        </button>
      </div>
      <Imgsection />
      <Massa />
      <div id="positon" ref={position}>
        <Openposition />
      </div>
    </>
  );
}
export default Career;
