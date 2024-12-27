import CasestudyCarousal from "../casestudy carousel/casestudyCarousal";
import About from "./components/about";
import Desc from "./components/desc";
import Hero from "./components/hero";
import Details from "./components/details";
import Blog from "../home/homecomponents/homeblog/Bloghome";
import { Helmet } from "react-helmet";
import Quote from "./components/quote";
import Blursection from "./components/blursection";
import Footer from "../../Footer/Footer";
import Collage from "./components/collage";

const Vouri = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - WoolAid</title>
        <link
          rel="canonical"
          href="https://codelinear.com/case-studies/woolaid"
        />
      </Helmet>
      <main className="px-[80px] max-lg:px-[40px] max-sm:px-[20px] ">
        <Hero />
        <Desc />
        <About />
        <Details />
        <Collage />
        <Blursection />
        <CasestudyCarousal />
      </main>
      <Blog />
      <Footer />
    </>
  );
};
export default Vouri;
