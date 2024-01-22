import image from "../../servicepage/servicecompo/allservices/assets/Frame 1000002735.png";

const Hero = () => {
  return (
    <>
      <section id="prod-hero">
        <h1 className="text-[66px] ml-[80px] leading-[100%] mt-[142px] letter-spacing w-[1023px]">
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
        <button>Talk to our experts</button>
      </section>
    </>
  );
};
export default Hero;
