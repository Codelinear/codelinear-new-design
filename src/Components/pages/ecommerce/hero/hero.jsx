import image from "../assets/Ecommerce.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <section id="prod-hero">
        <h1 className="text-[66px] ml-[80px] leading-[108%] mt-[142px] pb-[25px] letter-spacing-1 w-[1023px] max-sm:text-[50px] max-lg:w-full max-sm:px-[20px] max-lg:px-[40px] max-lg:ml-0">
          Elevate your brand with our bespoke E-commerce Marketplace Development
          solutions.
        </h1>
        <div>
          <img src={image} alt="" />
        </div>
        <p>
          Unleash the full potential of your business with our expertly crafted
          E-commerce Marketplace Development solutions.
        </p>
        <Link to={"/contact-us"}>
          <button onClick={scrollToTop}>Talk to our experts</button>
        </Link>
      </section>
    </>
  );
};
export default Hero;
